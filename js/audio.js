// js/audio.js

const AudioScape = {
  ctx: null,
  enabled: false,

  init() {
    // AudioContext must be resumed after user gesture
    document.addEventListener('click', () => {
      if (!this.ctx) {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        this.enabled = true;
      }
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }, { once: true });
  },

  playTone(freq, type, duration, vol = 0.1) {
    if (!this.enabled || !this.ctx) return;
    
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
    
    gain.gain.setValueAtTime(vol, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + duration);
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  },

  chime() {
    // Soft crystalline chime (sine + sine)
    this.playTone(880, 'sine', 1.5, 0.05); // A5
    this.playTone(1760, 'sine', 1.0, 0.03); // A6
  },

  thud() {
    // Deep muffled thud (triangle, low freq)
    this.playTone(150, 'triangle', 0.4, 0.2);
    setTimeout(() => this.playTone(100, 'triangle', 0.5, 0.1), 50);
  },
  
  pop() {
    this.playTone(600, 'sine', 0.2, 0.08);
  },

  ambientWind(durationSecs = 5) {
    if (!this.enabled || !this.ctx) return;
    
    // Simple white noise generator for wind/pixie dust
    const bufferSize = this.ctx.sampleRate * durationSecs;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    
    const noiseSource = this.ctx.createBufferSource();
    noiseSource.buffer = buffer;
    
    // Filter to make it sound soft like wind/dust
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 400; // Low frequency for softness
    
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.03, this.ctx.currentTime + 1); // Fade in
    gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + durationSecs - 1); // Fade out
    
    noiseSource.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);
    
    noiseSource.start();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  AudioScape.init();
  window.AudioScape = AudioScape;
});
