import type { APIRoute } from 'astro';
import { env as workerEnv } from 'cloudflare:workers';

export const prerender = false;

interface MinimalKVNamespace {
  get(key: string): Promise<string | null>;
  list(options?: { cursor?: string }): Promise<{ keys: { name: string }[]; list_complete: boolean; cursor?: string }>;
}

// A minimal aggregate viewer for gurdwara staff: pass ?since=YYYY-MM-DD and
// ?key=<ANALYTICS_ADMIN_KEY> to see per-kiosk, per-view counts. This is
// intentionally simple (no dashboard, no auth system) — it exists so the
// numbers already being collected are actually reachable without needing
// direct KV access via wrangler.
export const GET: APIRoute = async ({ request }) => {
  const env = workerEnv as { ANALYTICS_KV?: MinimalKVNamespace; ANALYTICS_ADMIN_KEY?: string };
  const kv = env.ANALYTICS_KV;
  if (!kv) {
    return new Response(JSON.stringify({ error: 'Analytics KV is not provisioned for this deployment yet.' }), {
      status: 503,
      headers: { 'content-type': 'application/json' },
    });
  }

  const url = new URL(request.url);
  const providedKey = url.searchParams.get('key');
  if (env.ANALYTICS_ADMIN_KEY && providedKey !== env.ANALYTICS_ADMIN_KEY) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'content-type': 'application/json' },
    });
  }

  const since = url.searchParams.get('since') ?? new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);

  const results: { key: string; count: number }[] = [];
  let cursor: string | undefined;
  do {
    const page = await kv.list({ cursor });
    for (const entry of page.keys) {
      const [day] = entry.name.split(':');
      if (day && day >= since) {
        const value = await kv.get(entry.name);
        results.push({ key: entry.name, count: Number(value ?? '0') });
      }
    }
    cursor = page.list_complete ? undefined : page.cursor;
  } while (cursor);

  const byKiosk: Record<string, Record<string, number>> = {};
  for (const { key, count } of results) {
    const [, kioskId, view, event] = key.split(':');
    if (!kioskId || !view || event !== 'view') continue;
    byKiosk[kioskId] ??= {};
    byKiosk[kioskId][view] = (byKiosk[kioskId][view] ?? 0) + count;
  }

  return new Response(JSON.stringify({ since, kiosks: byKiosk }, null, 2), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  });
};
