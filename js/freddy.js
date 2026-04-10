// js/freddy.js

class FreddyCursor {
  constructor() {
    this.initElements();
    this.state = 'sitting'; // sitting, lounging, running, rizz
    
    // Physics variables for Freddy (spring/lag)
    this.mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    this.freddyPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    this.freddyVel = { x: 0, y: 0 };
    
    this.spring = 0.15;
    this.friction = 0.75;
    
    // Timers
    this.idleTimer = null;
    this.longIdleTimer = null;
    this.lastMouseMoveTime = Date.now();
    this.lastMouse = { x: this.mouse.x, y: this.mouse.y };
    
    this.runningThreshold = 50; // speed required to trigger running state
    
    this.bindEvents();
    this.animate();
  }

  initElements() {
    // Inject CSS if not present
    if (!document.getElementById('freddy-css')) {
      const link = document.createElement('link');
      link.id = 'freddy-css';
      link.rel = 'stylesheet';
      // Resolve path
      const depth = window.location.pathname.split('/').length - 2;
      const prefix = depth > 0 ? '../'.repeat(depth) : '';
      link.href = prefix + 'css/freddy.css';
      document.head.appendChild(link);
    }

    // Create cursor ring
    this.ring = document.createElement('div');
    this.ring.id = 'freddy-cursor-ring';
    document.body.appendChild(this.ring);

    // Create Freddy
    this.freddy = document.createElement('div');
    this.freddy.id = 'freddy-cat';
    this.freddy.classList.add('state-sitting');
    document.body.appendChild(this.freddy);

    // Make body hide default cursor
    document.body.classList.add('custom-cursor-active');
  }

  setState(newState) {
    if (this.state !== newState) {
      this.freddy.classList.remove(`state-${this.state}`);
      this.state = newState;
      this.freddy.classList.add(`state-${this.state}`);
    }
  }

  bindEvents() {
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
      
      // Update ring instantly (0 lag)
      // Actually we do it in animate loop to sync with RAF, but we can set position here too.
      
      // Reset idle timers
      this.lastMouseMoveTime = Date.now();
      
      if (this.state === 'lounging' || this.state === 'rizz') {
        this.setState('sitting');
      }
    }, { passive: true });
    
    // Handle clicking
    window.addEventListener('mousedown', () => {
      this.ring.style.transform = `translate(-50%, -50%) scale(0.8)`;
    });
    window.addEventListener('mouseup', () => {
      this.ring.style.transform = ``; // Let animation take over
    });
  }

  animate() {
    const now = Date.now();
    const timeSinceLastMove = now - this.lastMouseMoveTime;
    
    // Update Ring (0 lag)
    this.ring.style.left = `${this.mouse.x}px`;
    this.ring.style.top = `${this.mouse.y}px`;
    
    // Calculate mouse speed for running state
    const dxMouse = this.mouse.x - this.lastMouse.x;
    const dyMouse = this.mouse.y - this.lastMouse.y;
    const mouseSpeed = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
    this.lastMouse.x = this.mouse.x;
    this.lastMouse.y = this.mouse.y;
    
    // Spring physics for Freddy
    // Target position is offset from cursor: bottom right
    const targetX = this.mouse.x + 30;
    const targetY = this.mouse.y + 30;
    
    const ax = (targetX - this.freddyPos.x) * this.spring;
    const ay = (targetY - this.freddyPos.y) * this.spring;
    
    this.freddyVel.x += ax;
    this.freddyVel.y += ay;
    
    this.freddyVel.x *= this.friction;
    this.freddyVel.y *= this.friction;
    
    this.freddyPos.x += this.freddyVel.x;
    this.freddyPos.y += this.freddyVel.y;
    
    // Calculate Freddy's physical speed
    const freddySpeed = Math.sqrt(this.freddyVel.x ** 2 + this.freddyVel.y ** 2);
    
    // State management based on speed and idle time
    if (freddySpeed > 15 || mouseSpeed > this.runningThreshold) {
      this.setState('running');
      
      // Flip direction based on horizontal velocity
      if (this.freddyVel.x < -2) {
        this.freddy.style.transform = `translate(${this.freddyPos.x}px, ${this.freddyPos.y}px) scaleX(-1)`;
      } else if (this.freddyVel.x > 2) {
        this.freddy.style.transform = `translate(${this.freddyPos.x}px, ${this.freddyPos.y}px) scaleX(1)`;
      } else {
        this.freddy.style.transform = `translate(${this.freddyPos.x}px, ${this.freddyPos.y}px)`;
      }
      
    } else {
      if (this.state === 'running') {
        this.setState('sitting');
      }
      
      this.freddy.style.transform = `translate(${this.freddyPos.x}px, ${this.freddyPos.y}px)`;
      
      if (timeSinceLastMove > 300000) { // 5 mins (300,000 ms)
        // 10% chance to show rizz face after 5 mins, checked roughly every frame once passed, 
        // but let's just trigger it once if lounging and enough time passed.
        if (this.state !== 'rizz') {
          if (Math.random() < 0.01) {
            this.setState('rizz');
          } else {
             // Default to lounging if not rizz
             this.setState('lounging');
          }
        }
      } else if (timeSinceLastMove > 10000) { // 10 secs
        if (this.state !== 'rizz') {
          this.setState('lounging');
        }
      }
    }
    
    requestAnimationFrame(() => this.animate());
  }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  // Only init on non-touch devices ideally, but spec says "every device" for Phase 6 we'll handle device diffs.
  // For now, init everywhere.
  window.freddyCursor = new FreddyCursor();
});
