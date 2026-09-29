import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Portfolio3DScene } from './threeScene.js';
import { PortfolioAnimations } from './animations.js';
import { sound } from './sound.js';
import { CyberLab } from './lab.js';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Pure Monochrome 3D Scene
  const threeScene = new Portfolio3DScene('webgl-container');

  // 2. Initialize Hatom-style Kinetic Animations & Preloader
  const animations = new PortfolioAnimations(threeScene);

  // 3. Connect 3D Scene to GSAP ScrollTrigger
  threeScene.setupScrollAnimations(gsap, ScrollTrigger);

  // 4. Initialize Interactive Cyber Security Live Lab
  const lab = new CyberLab();

  // 5. Hatom Sound Button Controller
  const soundBtn = document.getElementById('sound-toggle');
  const soundText = document.getElementById('sound-btn-text');

  const updateSoundVisuals = () => {
    if (!soundBtn) return;
    const isMuted = sound.isMuted();
    if (isMuted) {
      soundBtn.classList.remove('active');
      if (soundText) soundText.textContent = 'SOUND OFF';
    } else {
      soundBtn.classList.add('active');
      if (soundText) soundText.textContent = 'SOUND ON';
    }
  };

  if (soundBtn) {
    updateSoundVisuals();
    soundBtn.addEventListener('click', () => {
      const active = sound.toggleMute();
      if (active) {
        sound.startAmbient();
        sound.playClick();
      }
      updateSoundVisuals();
    });
  }

  // Keyboard shortcut M for sound
  window.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;
    if (e.key.toLowerCase() === 'm' && soundBtn) {
      soundBtn.click();
    }
  });

  // 6. Contact Form Submission
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const submitBtn = document.getElementById('submit-btn');

  if (contactForm && formStatus && submitBtn) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');

      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>ENCRYPTING & TRANSMITTING...</span>`;

      sound.playClick();

      setTimeout(() => {
        sound.playDetonate();

        formStatus.className = 'form-status success';
        formStatus.innerHTML = `
          <strong>[DISPATCH CONFIRMED &bull; TRANSMISSION SECURE]</strong><br>
          Thank you, ${nameInput.value}! Your message has been received. I will respond to ${emailInput.value} promptly.
        `;

        if (threeScene.sculptureGroup) {
          gsap.fromTo(threeScene.sculptureGroup.scale,
            { x: 1.8, y: 1.8, z: 1.8 },
            { x: 1.35, y: 1.35, z: 1.35, duration: 1.2, ease: 'elastic.out(1, 0.3)' }
          );
        }

        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;

        setTimeout(() => {
          formStatus.className = 'form-status';
        }, 8000);
      }, 900);
    });
  }
});
