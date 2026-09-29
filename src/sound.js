// Hatom-inspired Procedural Audio Synthesizer (Web Audio API)
// Provides generative ambient soundscapes, tactile UI clicks, warp sweeps, and long-press charge sounds

class HatomSoundEngine {
  constructor() {
    this.ctx = null;
    this.muted = localStorage.getItem('sound_muted') === 'true';
    this.ambientPlaying = false;
    this.ambientGain = null;
    this.osc1 = null;
    this.osc2 = null;
    this.filter = null;
    this.chargeOsc = null;
    this.chargeGain = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    localStorage.setItem('sound_muted', this.muted);
    if (this.muted && this.ambientPlaying) {
      this.stopAmbient();
    }
    return !this.muted;
  }

  isMuted() {
    return this.muted;
  }

  // Soft tactile UI tick (Hatom-style luxury haptic)
  playHover() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(1200, now);
      osc.frequency.exponentialRampToValueAtTime(700, now + 0.04);

      gain.gain.setValueAtTime(0.025, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.045);
    } catch {}
  }

  // Clean tactile click
  playClick() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(110, now + 0.07);

      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.08);
    } catch {}
  }

  // Smooth cinematic chapter warp sweep on scroll
  playWarp() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const bq = this.ctx.createBiquadFilter();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(120, now);
      osc.frequency.exponentialRampToValueAtTime(480, now + 0.35);

      bq.type = 'lowpass';
      bq.frequency.setValueAtTime(600, now);

      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.38);

      osc.connect(bq);
      bq.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.4);
    } catch {}
  }

  // Long-press charge-up sound (rising frequency drone)
  startCharge() {
    if (this.muted) return;
    this.init();
    if (!this.ctx || this.chargeOsc) return;

    try {
      const now = this.ctx.currentTime;
      this.chargeOsc = this.ctx.createOscillator();
      this.chargeGain = this.ctx.createGain();

      this.chargeOsc.type = 'sawtooth';
      this.chargeOsc.frequency.setValueAtTime(180, now);
      this.chargeOsc.frequency.exponentialRampToValueAtTime(880, now + 1.2);

      this.chargeGain.gain.setValueAtTime(0.01, now);
      this.chargeGain.gain.linearRampToValueAtTime(0.06, now + 1.0);

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(400, now);
      filter.frequency.linearRampToValueAtTime(1800, now + 1.2);

      this.chargeOsc.connect(filter);
      filter.connect(this.chargeGain);
      this.chargeGain.connect(this.ctx.destination);

      this.chargeOsc.start(now);
    } catch {}
  }

  stopCharge() {
    if (!this.chargeOsc || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      if (this.chargeGain) {
        this.chargeGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.15);
      }
      setTimeout(() => {
        if (this.chargeOsc) {
          this.chargeOsc.stop();
          this.chargeOsc.disconnect();
          this.chargeOsc = null;
        }
      }, 160);
    } catch {
      this.chargeOsc = null;
    }
  }

  // Long-press release detonation chord
  playDetonate() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const notes = [220, 440, 659.25, 880, 1318.5]; // A minor chord
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.03);
        gain.gain.setValueAtTime(0.05, now + idx * 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.03);
        osc.stop(now + 0.5);
      });
    } catch {}
  }

  // Generative Deep Ambient Soundscape
  startAmbient() {
    if (this.muted || this.ambientPlaying) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      this.ambientGain = this.ctx.createGain();
      this.ambientGain.gain.setValueAtTime(0.001, now);
      this.ambientGain.gain.linearRampToValueAtTime(0.015, now + 2.5);

      this.filter = this.ctx.createBiquadFilter();
      this.filter.type = 'lowpass';
      this.filter.frequency.setValueAtTime(160, now);

      this.osc1 = this.ctx.createOscillator();
      this.osc1.type = 'sine';
      this.osc1.frequency.setValueAtTime(55, now); // A1 note

      this.osc2 = this.ctx.createOscillator();
      this.osc2.type = 'sine';
      this.osc2.frequency.setValueAtTime(55.6, now); // Beating shimmer

      this.osc1.connect(this.filter);
      this.osc2.connect(this.filter);
      this.filter.connect(this.ambientGain);
      this.ambientGain.connect(this.ctx.destination);

      this.osc1.start();
      this.osc2.start();
      this.ambientPlaying = true;
    } catch {
      this.ambientPlaying = false;
    }
  }

  stopAmbient() {
    if (!this.ambientPlaying || !this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      if (this.ambientGain) {
        this.ambientGain.gain.linearRampToValueAtTime(0.0001, now + 1);
        setTimeout(() => {
          if (this.osc1) { this.osc1.stop(); this.osc1.disconnect(); }
          if (this.osc2) { this.osc2.stop(); this.osc2.disconnect(); }
          this.ambientPlaying = false;
        }, 1100);
      }
    } catch {
      this.ambientPlaying = false;
    }
  }
}

export const sound = new HatomSoundEngine();
