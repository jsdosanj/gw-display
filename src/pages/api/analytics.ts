import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

export const prerender = false;

interface AnalyticsPing {
  kioskId?: string;
  view?: string;
  event?: string;
}

// A minimal structural type for the one KV namespace this route touches —
// defined locally rather than imported from @cloudflare/workers-types so
// this compiles whether or not that package is resolvable, and independent
// of whether the ANALYTICS_KV binding has actually been provisioned yet.
interface MinimalKVNamespace {
  get(key: string): Promise<string | null>;
  put(key: string, value: string, options?: { expirationTtl?: number }): Promise<void>;
}

const ALLOWED_EVENTS = new Set(['view', 'heartbeat']);

// Aggregate-only, no-PII kiosk analytics. Each ping increments a day+view
// counter in KV; the kioskId is a random token generated client-side on
// first load (see getKioskAnalyticsId in kiosk.ts) purely to let a gurdwara
// distinguish "kiosk A vs kiosk B" traffic — it never touches anything that
// could identify a visitor.
export const POST: APIRoute = async ({ request }) => {
  const kv = (env as { ANALYTICS_KV?: MinimalKVNamespace }).ANALYTICS_KV;
  if (!kv) {
    // No KV binding provisioned yet — fail soft so the beacon never breaks
    // the visitor experience over a feature that hasn't been wired up.
    return new Response(null, { status: 204 });
  }

  let body: AnalyticsPing;
  try {
    body = await request.json();
  } catch {
    return new Response(null, { status: 400 });
  }

  const event = body.event && ALLOWED_EVENTS.has(body.event) ? body.event : 'view';
  const view = typeof body.view === 'string' ? body.view.slice(0, 40) : 'unknown';
  const kioskId = typeof body.kioskId === 'string' ? body.kioskId.slice(0, 40) : 'unknown';
  const day = new Date().toISOString().slice(0, 10);

  const key = `${day}:${kioskId}:${view}:${event}`;
  const current = Number((await kv.get(key)) ?? '0');
  await kv.put(key, String(current + 1), { expirationTtl: 60 * 60 * 24 * 400 });

  return new Response(null, { status: 204 });
};
