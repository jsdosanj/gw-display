document.addEventListener("DOMContentLoaded", () => {
    const attractScreen = document.getElementById("attract-screen");
    const mainContent = document.getElementById("main-content");
    let inactivityTimer;

    // Reset Kiosk to Attract Screen after inactivity
    function resetInactivityTimer() {
        clearTimeout(inactivityTimer);
        inactivityTimer = setTimeout(() => {
            attractScreen.classList.remove("hidden");
            mainContent.classList.add("hidden");
            // Reset to home page here if desired
        }, kioskData.settings.timeoutSeconds * 1000);
    }

    // Wake up kiosk on touch
    document.addEventListener("touchstart", () => {
        if (!attractScreen.classList.contains("hidden")) {
            attractScreen.classList.add("hidden");
            mainContent.classList.remove("hidden");
        }
        resetInactivityTimer();
    });
    
    // Mouse clicks for testing on desktop
    document.addEventListener("click", () => {
        if (!attractScreen.classList.contains("hidden")) {
            attractScreen.classList.add("hidden");
            mainContent.classList.remove("hidden");
        }
        resetInactivityTimer();
    });

    // Navigation Logic
    const navButtons = document.querySelectorAll(".nav-btn");
    navButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            // Remove active class from all
            navButtons.forEach(b => b.classList.remove("active"));
            // Add to clicked
            e.target.classList.add("active");
            
            // Logic to load specific content from data.js goes here based on e.target.dataset.target
            document.getElementById("page-title").innerText = e.target.dataset.target.toUpperCase();
        });
    });

    // Initialize
    resetInactivityTimer();
});
