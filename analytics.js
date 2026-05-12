/**
 * GlobalJobHub Analytics
 * Real-time visitor tracking simulation and total hits
 */

class Analytics {
    constructor() {
        this.namespace = 'globaljobhub.netlify.app'; // Change to your domain if different
        this.visitKey = 'total_visits';
        this.storageKey = 'gjh_last_visit';
        this.init();
    }

    async init() {
        this.updateTotalVisits();
        this.updateLiveCount();
        this.trackUserSession();
        
        // Refresh live count every 30 seconds
        setInterval(() => this.updateLiveCount(), 30000);
    }

    async updateTotalVisits() {
        const statVisits = document.getElementById('statVisits');
        if (!statVisits) return;

        try {
            // Using CountAPI (free hit counter)
            // Note: In production, you might want to use a more robust backend
            const response = await fetch(`https://api.countapi.xyz/hit/${this.namespace}/${this.visitKey}`);
            const data = await response.json();
            
            this.animateValue(statVisits, 0, data.value, 1500);
        } catch (error) {
            console.warn('Analytics: Could not fetch total visits, using fallback.', error);
            // Fallback for demo purposes if API is down
            statVisits.innerText = '1.2k+';
        }
    }

    updateLiveCount() {
        const liveStatus = document.getElementById('liveStatus');
        if (!liveStatus) return;

        // Simulate a realistic live count based on time of day
        // For a real production app, use WebSockets or Firebase Presence
        const hour = new Date().getHours();
        let base = 2;
        if (hour >= 9 && hour <= 18) base = 5; // Peak hours
        
        const randomLive = Math.floor(Math.random() * 4) + base;
        
        // Update the UI
        liveStatus.innerHTML = `<span class="live-pulse"></span> ${randomLive} people exploring now`;
    }

    trackUserSession() {
        const lastVisitContainer = document.getElementById('lastVisitInfo');
        if (!lastVisitContainer) return;

        const now = Date.now();
        const lastVisit = localStorage.getItem(this.storageKey);
        
        if (lastVisit) {
            const diff = now - parseInt(lastVisit);
            const minutes = Math.floor(diff / 60000);
            const hours = Math.floor(minutes / 60);
            const days = Math.floor(hours / 24);

            let timeStr = '';
            if (days > 0) timeStr = `${days} day${days > 1 ? 's' : ''}`;
            else if (hours > 0) timeStr = `${hours} hour${hours > 1 ? 's' : ''}`;
            else if (minutes > 0) timeStr = `${minutes} minute${minutes > 1 ? 's' : ''}`;
            else timeStr = 'just now';

            lastVisitContainer.innerText = `Welcome back! You last visited ${timeStr} ago.`;
        } else {
            lastVisitContainer.innerText = `First time here? Welcome to the hub!`;
        }

        // Update last visit timestamp
        localStorage.setItem(this.storageKey, now.toString());
    }

    animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start).toLocaleString();
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
}

// Initialize analytics when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.gjhAnalytics = new Analytics();
});
