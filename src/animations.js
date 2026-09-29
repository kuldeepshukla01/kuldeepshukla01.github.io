import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { sound } from './sound.js';

gsap.registerPlugin(ScrollTrigger);

export class PortfolioAnimations {
  constructor(threeScene) {
    this.threeScene = threeScene;
    this.cursorDot = document.getElementById('cursor-dot');
    this.cursorRing = document.getElementById('cursor-ring');
    this.mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    this.cursorPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    this.initCursor();
    this.initPreloader();
    this.initMenuModal();
    this.initLongPressCharge();
    this.initPhaseTracking();
    this.initCard3DTilt();
    this.initCounters();
  }

  // Preloader (Hatom exact loading sequence)
  initPreloader() {
    const preloader = document.getElementById('preloader');
    const percentEl = document.getElementById('loader-percent');
    const ringEl = document.getElementById('loader-egg-ring');
    const enterBtn = document.getElementById('loader-enter-btn');

    if (!preloader || !percentEl || !ringEl) return;

    const counter = { val: 0 };

    gsap.to(counter, {
      val: 100,
      duration: 1.8,
      ease: 'power2.inOut',
      onUpdate: () => {
        const p = Math.floor(counter.val);
        percentEl.textContent = `${p < 10 ? '0' + p : p}%`;
        const offset = 251 - (251 * (p / 100));
        ringEl.style.strokeDashoffset = offset;
      },
      onComplete: () => {
        if (enterBtn) {
          enterBtn.classList.add('ready');
          enterBtn.addEventListener('click', () => {
            sound.playClick();
            sound.startAmbient();
            preloader.classList.add('loaded');
            this.initHeroEntrance();
          });
        } else {
          setTimeout(() => {
            preloader.classList.add('loaded');
            this.initHeroEntrance();
          }, 400);
        }
      }
    });
  }

  // Minimalist Velocity Cursor
  initCursor() {
    if (!this.cursorDot || !this.cursorRing) return;

    if (window.matchMedia('(pointer: coarse)').matches) {
      this.cursorDot.style.display = 'none';
      this.cursorRing.style.display = 'none';
      return;
    }

    let lastX = 0, lastY = 0;

    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;

      const deltaX = e.clientX - lastX;
      const deltaY = e.clientY - lastY;
      const speed = Math.min(1.4, Math.hypot(deltaX, deltaY) * 0.035);
      lastX = e.clientX;
      lastY = e.clientY;

      gsap.to(this.cursorDot, {
        x: this.mouse.x,
        y: this.mouse.y,
        duration: 0.04,
        ease: 'power2.out'
      });

      gsap.to(this.cursorRing, {
        scaleX: 1 + speed * 0.25,
        scaleY: 1 - speed * 0.12,
        duration: 0.2
      });
    });

    gsap.ticker.add(() => {
      this.cursorPos.x += (this.mouse.x - this.cursorPos.x) * 0.16;
      this.cursorPos.y += (this.mouse.y - this.cursorPos.y) * 0.16;

      gsap.set(this.cursorRing, {
        x: this.cursorPos.x,
        y: this.cursorPos.y
      });
    });

    // Hover interactions
    const targets = document.querySelectorAll('a, button, .project-card, .tool-pill, .tab-btn, .hold-btn');
    targets.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        sound.playHover();
        gsap.to(this.cursorRing, {
          scale: 1.8,
          borderColor: '#ffffff',
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          duration: 0.25
        });
        gsap.to(this.cursorDot, { scale: 0, duration: 0.15 });
      });

      el.addEventListener('mouseleave', () => {
        gsap.to(this.cursorRing, {
          scale: 1,
          borderColor: 'rgba(255, 255, 255, 0.45)',
          backgroundColor: 'transparent',
          duration: 0.25
        });
        gsap.to(this.cursorDot, { scale: 1, duration: 0.15 });
      });

      el.addEventListener('click', () => {
        sound.playClick();
        gsap.timeline()
          .to(this.cursorRing, { scale: 0.7, duration: 0.08 })
          .to(this.cursorRing, { scale: 1.4, duration: 0.18 })
          .to(this.cursorRing, { scale: 1, duration: 0.15 });
      });
    });
  }

  // Fullscreen Menu Modal Toggle (Hatom exact)
  initMenuModal() {
    const menuBtn = document.getElementById('menu-toggle');
    const menuCloseBtn = document.getElementById('menu-close-btn');
    const fullscreenMenu = document.getElementById('fullscreen-menu');
    const menuLinks = document.querySelectorAll('.menu-nav-link');

    if (!menuBtn || !fullscreenMenu) return;

    const openMenu = () => {
      sound.playClick();
      fullscreenMenu.classList.add('open');
      gsap.fromTo('.menu-nav-link',
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, stagger: 0.08, duration: 0.6, ease: 'power3.out', delay: 0.1 }
      );
    };

    const closeMenu = () => {
      sound.playClick();
      fullscreenMenu.classList.remove('open');
    };

    menuBtn.addEventListener('click', openMenu);
    if (menuCloseBtn) menuCloseBtn.addEventListener('click', closeMenu);

    menuLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }

  // Hatom Long-Press / Hold Mechanic ("HOLD TO EXPLORE")
  initLongPressCharge() {
    const holdBtn = document.getElementById('hold-interact-btn');
    const circle = document.getElementById('hold-circle-svg');
    const label = document.getElementById('hold-status-label');

    if (!holdBtn) return;

    let isCharging = false;
    let chargeStartTime = 0;
    let animFrame = null;
    const duration = 1200;

    const startCharge = (e) => {
      e.preventDefault();
      if (isCharging) return;
      isCharging = true;
      chargeStartTime = Date.now();
      sound.startCharge();

      if (label) label.textContent = 'CHARGING CORE...';

      const loop = () => {
        if (!isCharging) return;
        const elapsed = Date.now() - chargeStartTime;
        const progress = Math.min(1, elapsed / duration);

        if (this.threeScene) {
          this.threeScene.setChargeProgress(progress);
        }

        if (circle) {
          circle.style.strokeDashoffset = 126 - (126 * progress);
        }

        if (progress >= 1) {
          endCharge();
          if (this.threeScene) {
            this.threeScene.triggerDetonate();
          }
          if (label) {
            label.textContent = 'EXPLODED ✓';
            setTimeout(() => {
              if (label) label.textContent = 'HOLD TO EXPLORE';
            }, 2500);
          }
          return;
        }

        animFrame = requestAnimationFrame(loop);
      };

      animFrame = requestAnimationFrame(loop);
    };

    const endCharge = () => {
      if (!isCharging) return;
      isCharging = false;
      cancelAnimationFrame(animFrame);
      sound.stopCharge();

      if (this.threeScene) {
        this.threeScene.setChargeProgress(0);
      }
      if (circle) {
        circle.style.strokeDashoffset = 126;
      }
      if (label && label.textContent !== 'EXPLODED ✓') {
        label.textContent = 'HOLD TO EXPLORE';
      }
    };

    holdBtn.addEventListener('mousedown', startCharge);
    window.addEventListener('mouseup', endCharge);

    holdBtn.addEventListener('touchstart', startCharge, { passive: false });
    window.addEventListener('touchend', endCharge);
  }

  // Hero Entrance Sequence
  initHeroEntrance() {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.phase-number', {
      opacity: 0,
      y: -20,
      duration: 0.8
    })
    .from('.hero-title-line', {
      opacity: 0,
      y: 60,
      stagger: 0.18,
      duration: 1.1
    }, '-=0.5')
    .from('.hero-lead-text', {
      opacity: 0,
      y: 25,
      duration: 0.9
    }, '-=0.6')
    .from('.hero-cta-group', {
      opacity: 0,
      y: 20,
      duration: 0.8
    }, '-=0.5')
    .from('.proof-banner', {
      opacity: 0,
      y: 30,
      duration: 0.8
    }, '-=0.5');
  }

  // Phase Tracking (01 to 05 on Bottom Left HUD)
  initPhaseTracking() {
    const phases = [
      { id: 'hero', num: '01' },
      { id: 'about', num: '02' },
      { id: 'work', num: '03' },
      { id: 'lab', num: '04' },
      { id: 'contact', num: '05' }
    ];

    const phaseLegend = document.getElementById('phase-legend-text');

    phases.forEach(p => {
      const el = document.getElementById(p.id);
      if (!el) return;

      ScrollTrigger.create({
        trigger: el,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => {
          if (phaseLegend) phaseLegend.textContent = `PHASE ${p.num} // 05`;
        },
        onEnterBack: () => {
          if (phaseLegend) phaseLegend.textContent = `PHASE ${p.num} // 05`;
        }
      });
    });
  }

  // 3D Card Tilt with Radial Specular Reflection
  initCard3DTilt() {
    const cards = document.querySelectorAll('.project-card');

    cards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotX = ((y - centerY) / centerY) * -8;
        const rotY = ((x - centerX) / centerX) * 8;

        gsap.to(card, {
          transformPerspective: 1000,
          rotateX: rotX,
          rotateY: rotY,
          duration: 0.35,
          ease: 'power2.out'
        });

        const shine = card.querySelector('.card-shine');
        if (shine) {
          const moveX = (x / rect.width) * 100;
          const moveY = (y / rect.height) * 100;
          shine.style.background = `radial-gradient(circle at ${moveX}% ${moveY}%, rgba(255, 255, 255, 0.12) 0%, transparent 65%)`;
        }
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.7,
          ease: 'elastic.out(1, 0.4)'
        });
      });
    });
  }

  // Animated Numbers Counter
  initCounters() {
    const counters = document.querySelectorAll('.counter-val');

    counters.forEach((el) => {
      const targetVal = parseFloat(el.getAttribute('data-target') || '0');
      const prefix = el.getAttribute('data-prefix') || '';
      const suffix = el.getAttribute('data-suffix') || '';

      const counterObj = { val: 0 };

      gsap.to(counterObj, {
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          once: true
        },
        val: targetVal,
        duration: 1.8,
        ease: 'power2.out',
        onUpdate: () => {
          el.textContent = `${prefix}${Math.floor(counterObj.val)}${suffix}`;
        }
      });
    });
  }
}
