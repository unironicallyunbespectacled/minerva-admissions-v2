// js/haptics.js
// Phase 5: Escalating Haptics by page depth

const Haptics = {
  depth: 0,
  enabled: true,

  init() {
    // Determine depth based on URL path
    const path = window.location.pathname;
    if (path.includes('/vibe-check')) {
      this.depth = 3;
    } else if (path.includes('/my-stars')) {
      this.depth = 2;
    } else if (path.includes('/apply')) {
      this.depth = 1;
    } else {
      this.depth = 0;
    }

    // Bind to all buttons and links globally for base haptics
    document.addEventListener('click', (e) => {
      const target = e.target.closest('button, a, .competition-card, .flag-emoji');
      if (target) {
        this.playDefault();
      }
    });
  },

  vibrate(pattern) {
    if (!this.enabled || !navigator.vibrate) return;
    
    try {
      navigator.vibrate(pattern);
    } catch (e) {
      console.warn("Haptics not supported or blocked");
    }
  },

  playDefault() {
    switch (this.depth) {
      case 0:
        // No haptics on home by default, or very light
        break;
      case 1:
        this.light();
        break;
      case 2:
        this.medium();
        break;
      case 3:
        this.heavy();
        break;
    }
  },

  light() {
    this.vibrate(10);
  },

  medium() {
    this.vibrate([20, 10, 20]);
  },

  heavy() {
    this.vibrate([40, 20, 40, 20, 40]);
  },

  success() {
    this.vibrate([50, 30, 50]);
  }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  Haptics.init();
});
