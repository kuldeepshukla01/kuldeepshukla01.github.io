import * as THREE from 'three';
import { sound } from './sound.js';

export class Portfolio3DScene {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.clock = new THREE.Clock();

    // 3D Sculpture (Pure Monochrome Black & White Glass / Metal)
    this.sculptureGroup = new THREE.Group();
    this.innerCrystalMesh = null;
    this.outerFacetMesh = null;
    this.corePoints = null;
    this.orbitalRings = [];
    this.innerMaterial = null;
    this.outerMaterial = null;

    // Swirling Volumetric Monochrome Particle Vortex (2,500 particles)
    this.particleSystem = null;
    this.particleCount = 2500;
    this.baseParticleSpeed = 0.035;
    this.currentParticleSpeed = 0.035;

    // Interactive Threat Constellation (Phase 04)
    this.networkGroup = new THREE.Group();
    this.nodes = [];
    this.linesMesh = null;

    // Lighting (Pure White & Grayscale Speculars)
    this.keyLight = null;
    this.fillLight = null;
    this.mouseLight = null;

    // Interaction & State
    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    this.mouseNormalized = new THREE.Vector2();
    this.raycaster = new THREE.Raycaster();
    this.activePhase = 1;
    this.hoveredNode = null;
    this.chargeFactor = 0;

    // Kuldeep's stack in pure monochrome silver
    this.skillsData = [
      { name: '1DayCrew AI / ML NIDS', tag: 'XGBoost & SHAP (>97%)' },
      { name: 'Android Security', tag: 'EC-Council Bug Bounty' },
      { name: 'Kali Linux', tag: 'Penetration Testing OS' },
      { name: 'NFStream Flow Telemetry', tag: 'Feature Pipeline' },
      { name: 'Burp Suite Pro', tag: 'Web App Pentesting' },
      { name: 'Nmap & Recon', tag: 'Port Auditing' },
      { name: 'Wireshark & PCAP', tag: 'Packet Analysis' },
      { name: 'Metasploit', tag: 'Exploit Dev' },
      { name: 'Python Automation', tag: 'Security Tooling' },
      { name: 'Web Cryptography', tag: 'SHA-256 & PKI' },
      { name: 'OWASP MASVS', tag: 'Mobile Defense' },
      { name: 'Ghidra / RE', tag: 'Reverse Engineering' }
    ];

    this.init();
  }

  init() {
    // 1. Deep Obsidian Cosmic Void Fog
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x06080e, 0.038);

    // 2. Camera
    const aspect = window.innerWidth / window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(46, aspect, 0.1, 100);
    this.camera.position.set(0, 0, 8.5);

    // 3. High-Performance WebGL Renderer
    this.renderer = new THREE.WebGLRenderer({
      powerPreference: 'high-performance',
      antialias: true,
      alpha: true
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.4;
    this.container.appendChild(this.renderer.domElement);

    // 4. Build Prismatic Entities
    this.buildPrismaticLighting();
    this.buildRefractiveSculpture();
    this.buildPrismaticParticleVortex();
    this.buildConstellation();

    // 5. Events & Animation
    this.bindEvents();
    this.animate();
  }

  buildPrismaticLighting() {
    // Ambient obsidian cosmic fill
    const ambient = new THREE.AmbientLight(0x0a101d, 2.2);
    this.scene.add(ambient);

    // Crisp diamond white key light
    this.keyLight = new THREE.PointLight(0xffffff, 4.5, 35);
    this.keyLight.position.set(5, 6, 6);
    this.scene.add(this.keyLight);

    // Spectral Cyan-Azure prismatic rim light (Hatom caustics)
    this.rimLightCyan = new THREE.PointLight(0x00f2ff, 5.5, 30);
    this.rimLightCyan.position.set(7, 8, -6);
    this.scene.add(this.rimLightCyan);

    // Spectral Ultraviolet-Violet prismatic rim light
    this.rimLightViolet = new THREE.PointLight(0xb43bf5, 4.8, 30);
    this.rimLightViolet.position.set(-7, -6, -5);
    this.scene.add(this.rimLightViolet);

    // Internal Chromatic Core Light (shines outward through glass facets)
    this.coreLight = new THREE.PointLight(0x38bdf8, 3.2, 12);
    this.coreLight.position.set(0, 0, 0);
    this.scene.add(this.coreLight);

    // Dynamic mouse-following specular light
    this.mouseLight = new THREE.PointLight(0xffffff, 3.8, 20);
    this.mouseLight.position.set(0, 0, 5);
    this.scene.add(this.mouseLight);
  }

  // Refractive Glass & Prismatic Sculpture
  buildRefractiveSculpture() {
    // 1. Inner Refractive Crystal Dodecahedron (High-grade optical dispersion)
    const innerGeo = new THREE.DodecahedronGeometry(1.25, 0);
    this.innerMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x0c111e,
      emissive: 0x060e1d,
      emissiveIntensity: 0.5,
      roughness: 0.04,
      metalness: 0.06,
      transmission: 0.96,
      ior: 1.62,
      thickness: 2.2,
      clearcoat: 1.0,
      clearcoatRoughness: 0.02,
      specularIntensity: 1.5,
      specularColor: new THREE.Color(0xffffff),
      attenuationColor: new THREE.Color(0x38bdf8),
      attenuationDistance: 3.5
    });

    // Check if dispersion is supported in Three.js
    if ('dispersion' in this.innerMaterial) {
      this.innerMaterial.dispersion = 0.16;
    }

    this.innerCrystalMesh = new THREE.Mesh(innerGeo, this.innerMaterial);
    this.sculptureGroup.add(this.innerCrystalMesh);

    // 2. Outer Faceted Wireframe Cage (Icosahedron)
    const cageGeo = new THREE.IcosahedronGeometry(2.05, 1);
    this.outerMaterial = new THREE.MeshStandardMaterial({
      color: 0xe2e8f0,
      emissive: 0x1e293b,
      emissiveIntensity: 0.35,
      wireframe: true,
      transparent: true,
      opacity: 0.55,
      roughness: 0.1,
      metalness: 0.95
    });
    this.outerFacetMesh = new THREE.Mesh(cageGeo, this.outerMaterial);
    this.sculptureGroup.add(this.outerFacetMesh);

    // 3. Floating Micro-Vertex Satellites
    const vertPositions = cageGeo.attributes.position.array;
    const vertGeo = new THREE.BufferGeometry();
    const pts = [];
    for (let i = 0; i < vertPositions.length; i += 6) {
      pts.push(vertPositions[i], vertPositions[i+1], vertPositions[i+2]);
    }
    vertGeo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
    const ptsMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.08,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });
    this.corePoints = new THREE.Points(vertGeo, ptsMat);
    this.sculptureGroup.add(this.corePoints);

    // 4. Concentric Orbital Silver & Titanium Rings
    const ringConfigs = [
      { r: 2.7, tube: 0.012, rotX: Math.PI / 3, rotY: 0 },
      { r: 3.3, tube: 0.010, rotX: -Math.PI / 4, rotY: Math.PI / 6 },
      { r: 3.9, tube: 0.015, rotX: Math.PI / 6, rotY: -Math.PI / 4 }
    ];

    ringConfigs.forEach((cfg) => {
      const ringGeo = new THREE.TorusGeometry(cfg.r, cfg.tube, 16, 120);
      const ringMat = new THREE.MeshStandardMaterial({
        color: 0xf8fafc,
        emissive: 0x1e293b,
        emissiveIntensity: 0.4,
        roughness: 0.1,
        metalness: 0.95
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.set(cfg.rotX, cfg.rotY, 0);
      this.sculptureGroup.add(ring);
      this.orbitalRings.push({ mesh: ring, speedX: 0.003 + Math.random() * 0.003, speedY: 0.004 });
    });

    this.scene.add(this.sculptureGroup);
  }

  // Prismatic Swirl Vortex (Diamond Silver, Ethereal Cyan, Ultraviolet Stardust)
  buildPrismaticParticleVortex() {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.3, 'rgba(240, 248, 255, 0.9)');
    grad.addColorStop(0.65, 'rgba(180, 220, 255, 0.4)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);

    const texture = new THREE.CanvasTexture(canvas);

    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(this.particleCount * 3);
    const col = new Float32Array(this.particleCount * 3);

    for (let i = 0; i < this.particleCount; i++) {
      const radius = 2.2 + Math.random() * 15;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI * 0.8;

      pos[i * 3] = radius * Math.cos(theta) * Math.cos(phi);
      pos[i * 3 + 1] = radius * Math.sin(phi) + (Math.random() - 0.5) * 3;
      pos[i * 3 + 2] = radius * Math.sin(theta) * Math.cos(phi);

      // Prismatic spectrum distribution:
      // 65% diamond silver-white, 20% spectral cyan/sky, 15% spectral violet/pink
      const randType = Math.random();
      if (randType < 0.65) {
        // Diamond White / Platinum
        const b = 0.75 + Math.random() * 0.25;
        col[i * 3] = b;
        col[i * 3 + 1] = b;
        col[i * 3 + 2] = b;
      } else if (randType < 0.85) {
        // Prismatic Cyan / Ice Blue
        col[i * 3] = 0.05;
        col[i * 3 + 1] = 0.85 + Math.random() * 0.15;
        col[i * 3 + 2] = 1.0;
      } else {
        // Prismatic Violet / Ultraviolet
        col[i * 3] = 0.78 + Math.random() * 0.2;
        col[i * 3 + 1] = 0.42;
        col[i * 3 + 2] = 1.0;
      }
    }

    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.12,
      map: texture,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.particleSystem = new THREE.Points(geo, mat);
    this.scene.add(this.particleSystem);
  }

  // Prismatic Constellation (Phase 04)
  buildConstellation() {
    const count = this.skillsData.length;
    const radius = 4.2;
    const lines = [];

    this.nodes = [];

    this.skillsData.forEach((skill, index) => {
      const phi = Math.acos(1 - (2 * (index + 0.5)) / count);
      const theta = Math.PI * (1 + Math.sqrt(5)) * (index + 0.5);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      const geo = new THREE.OctahedronGeometry(0.24, 0);
      const mat = new THREE.MeshPhysicalMaterial({
        color: 0x0f172a,
        emissive: 0x00f0ff,
        emissiveIntensity: 0.6,
        roughness: 0.08,
        metalness: 0.3,
        transmission: 0.8,
        ior: 1.55
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(x, y, z);
      mesh.userData = { skill, originalScale: 1.0 };

      // Halo ring around node
      const haloGeo = new THREE.RingGeometry(0.34, 0.38, 16);
      const haloMat = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.55,
        wireframe: true,
        side: THREE.DoubleSide
      });
      const halo = new THREE.Mesh(haloGeo, haloMat);
      halo.rotation.x = Math.PI / 2;
      mesh.add(halo);

      this.networkGroup.add(mesh);
      this.nodes.push(mesh);

      if (index > 0) {
        const prev = this.nodes[index - 1].position;
        lines.push(x, y, z, prev.x, prev.y, prev.z);
      }
    });

    if (this.nodes.length > 2) {
      const first = this.nodes[0].position;
      const last = this.nodes[this.nodes.length - 1].position;
      lines.push(first.x, first.y, first.z, last.x, last.y, last.z);
    }

    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(lines, 3));
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending
    });
    this.linesMesh = new THREE.LineSegments(lineGeo, lineMat);
    this.networkGroup.add(this.linesMesh);

    this.networkGroup.scale.set(0.001, 0.001, 0.001);
    this.scene.add(this.networkGroup);
  }

  // Hatom Long-Press Charge Logic
  setChargeProgress(progress) {
    this.chargeFactor = Math.min(1, Math.max(0, progress));
    this.currentParticleSpeed = this.baseParticleSpeed + this.chargeFactor * 0.28;

    if (this.innerMaterial) {
      this.innerMaterial.emissiveIntensity = 0.5 + this.chargeFactor * 2.0;
    }
    if (this.sculptureGroup) {
      this.sculptureGroup.scale.setScalar(1.0 + this.chargeFactor * 0.38);
    }
  }

  triggerDetonate() {
    sound.playDetonate();
    this.currentParticleSpeed = 0.55;

    if (this.sculptureGroup) {
      this.sculptureGroup.scale.set(1.65, 1.65, 1.65);
      setTimeout(() => {
        this.sculptureGroup.scale.set(1.0, 1.0, 1.0);
        this.currentParticleSpeed = this.baseParticleSpeed;
      }, 500);
    }
  }

  bindEvents() {
    window.addEventListener('mousemove', (e) => {
      this.mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      this.mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
      this.mouseNormalized.x = this.mouse.targetX;
      this.mouseNormalized.y = this.mouse.targetY;
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        this.mouse.targetX = (touch.clientX / window.innerWidth) * 2 - 1;
        this.mouse.targetY = -(touch.clientY / window.innerHeight) * 2 + 1;
        this.mouseNormalized.x = this.mouse.targetX;
        this.mouseNormalized.y = this.mouse.targetY;
      }
    }, { passive: true });

    window.addEventListener('click', () => {
      if (this.hoveredNode) {
        sound.playClick();
        const orig = this.hoveredNode.scale.x;
        this.hoveredNode.scale.set(orig * 1.6, orig * 1.6, orig * 1.6);
        setTimeout(() => this.hoveredNode.scale.set(orig, orig, orig), 250);
      }
    });

    window.addEventListener('resize', () => {
      if (!this.camera || !this.renderer) return;
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });
  }

  checkRaycaster() {
    if (this.networkGroup.scale.x < 0.2) return;

    this.raycaster.setFromCamera(this.mouseNormalized, this.camera);
    const hits = this.raycaster.intersectObjects(this.nodes);

    if (hits.length > 0) {
      const top = hits[0].object;
      if (this.hoveredNode !== top) {
        if (this.hoveredNode) this.hoveredNode.scale.set(1, 1, 1);
        this.hoveredNode = top;
        this.hoveredNode.scale.set(1.5, 1.5, 1.5);
        sound.playHover();

        document.body.style.cursor = 'pointer';
        const tooltip = document.getElementById('skill-tooltip');
        if (tooltip) {
          const s = top.userData.skill;
          tooltip.innerHTML = `<strong>${s.name.toUpperCase()}</strong> &bull; ${s.tag}`;
          tooltip.style.opacity = '1';
        }
      }
    } else {
      if (this.hoveredNode) {
        this.hoveredNode.scale.set(1, 1, 1);
        this.hoveredNode = null;
        document.body.style.cursor = 'default';
        const tooltip = document.getElementById('skill-tooltip');
        if (tooltip) tooltip.style.opacity = '0';
      }
    }
  }

  // 5-Phase Narrative Choreography (Matching Hatom film-reel structure)
  setupScrollAnimations(gsap, ScrollTrigger) {
    if (!gsap || !ScrollTrigger) return;

    // Phase 01 (Genesis) -> Phase 02 (Architecture)
    gsap.timeline({
      scrollTrigger: {
        trigger: '#about',
        start: 'top bottom',
        end: 'top center',
        scrub: 1.2,
        onEnter: () => { sound.playWarp(); this.activePhase = 2; },
        onLeaveBack: () => { this.activePhase = 1; }
      }
    })
    .to(this.camera.position, { x: -1.8, y: 0.3, z: 7.2, ease: 'power2.inOut' }, 0)
    .to(this.sculptureGroup.position, { x: 2.4, y: 0.2, z: 0.2, ease: 'power2.inOut' }, 0)
    .to(this.sculptureGroup.rotation, { y: Math.PI * 0.85, x: 0.35, ease: 'none' }, 0);

    // Phase 02 -> Phase 03 (Arsenal)
    gsap.timeline({
      scrollTrigger: {
        trigger: '#work',
        start: 'top bottom',
        end: 'top center',
        scrub: 1.2,
        onEnter: () => { sound.playWarp(); this.activePhase = 3; },
        onLeaveBack: () => { this.activePhase = 2; }
      }
    })
    .to(this.camera.position, { x: 1.9, y: -0.3, z: 6.8, ease: 'power2.inOut' }, 0)
    .to(this.sculptureGroup.position, { x: -2.3, y: -0.2, z: -0.5, ease: 'power2.inOut' }, 0)
    .to(this.sculptureGroup.scale, { x: 1.25, y: 1.25, z: 1.25, ease: 'power2.inOut' }, 0);

    // Phase 03 -> Phase 04 (Live Lab)
    gsap.timeline({
      scrollTrigger: {
        trigger: '#lab',
        start: 'top bottom',
        end: 'top center',
        scrub: 1.4,
        onEnter: () => { sound.playWarp(); this.activePhase = 4; },
        onLeaveBack: () => { this.activePhase = 3; }
      }
    })
    .to(this.camera.position, { x: 0, y: 0, z: 8.0, ease: 'power2.inOut' }, 0)
    .to(this.sculptureGroup.position, { x: 0, y: 0, z: -2.2, ease: 'power2.inOut' }, 0)
    .to(this.sculptureGroup.scale, { x: 0.5, y: 0.5, z: 0.5, ease: 'power2.inOut' }, 0)
    .to(this.networkGroup.scale, { x: 1, y: 1, z: 1, ease: 'back.out(1.4)' }, 0);

    // Phase 04 -> Phase 05 (The Nexus / Contact)
    gsap.timeline({
      scrollTrigger: {
        trigger: '#contact',
        start: 'top bottom',
        end: 'top center',
        scrub: 1.2,
        onEnter: () => { sound.playWarp(); this.activePhase = 5; },
        onLeaveBack: () => { this.activePhase = 4; }
      }
    })
    .to(this.networkGroup.scale, { x: 0.001, y: 0.001, z: 0.001, ease: 'power2.in' }, 0)
    .to(this.camera.position, { x: 0, y: -0.2, z: 6.9, ease: 'power2.inOut' }, 0)
    .to(this.sculptureGroup.position, { x: 0, y: 0.4, z: -0.2, ease: 'power2.inOut' }, 0)
    .to(this.sculptureGroup.scale, { x: 1.35, y: 1.35, z: 1.35, ease: 'power2.out' }, 0);
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    const elapsedTime = this.clock.getElapsedTime();

    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.06;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.06;

    if (this.camera) {
      this.camera.position.x += (this.mouse.x * 0.45 - (this.camera.position.x - (this.activePhase === 2 ? -1.8 : this.activePhase === 3 ? 1.9 : 0))) * 0.03;
      this.camera.position.y += (this.mouse.y * 0.45 - (this.camera.position.y - (this.activePhase === 2 ? 0.3 : this.activePhase === 3 ? -0.3 : 0))) * 0.03;
      this.camera.lookAt(0, 0, 0);
    }

    if (this.mouseLight) {
      this.mouseLight.position.x = this.mouse.x * 5.5;
      this.mouseLight.position.y = this.mouse.y * 5.5;
    }

    if (this.coreLight) {
      this.coreLight.intensity = 3.0 + Math.sin(elapsedTime * 2.8) * 1.2 + this.chargeFactor * 6.0;
    }

    if (this.sculptureGroup) {
      const rotMultiplier = 1.0 + this.chargeFactor * 4.0;
      this.innerCrystalMesh.rotation.x = elapsedTime * 0.28 * rotMultiplier;
      this.innerCrystalMesh.rotation.y = elapsedTime * 0.38 * rotMultiplier;

      this.outerFacetMesh.rotation.x = -elapsedTime * 0.16 * rotMultiplier;
      this.outerFacetMesh.rotation.y = elapsedTime * 0.22 * rotMultiplier;

      this.orbitalRings.forEach((r) => {
        r.mesh.rotation.z += r.speedX * rotMultiplier;
        r.mesh.rotation.y += r.speedY * rotMultiplier;
      });
    }

    if (this.particleSystem) {
      this.particleSystem.rotation.y = elapsedTime * this.currentParticleSpeed;
      this.particleSystem.rotation.x = Math.sin(elapsedTime * 0.05) * 0.08;
    }

    if (this.networkGroup && this.networkGroup.scale.x > 0.1) {
      this.networkGroup.rotation.y = elapsedTime * 0.15 + this.mouse.x * 0.3;
      this.networkGroup.rotation.x = Math.sin(elapsedTime * 0.1) * 0.12 - this.mouse.y * 0.2;

      this.nodes.forEach((node) => {
        if (node.children[0]) {
          node.children[0].rotation.z += 0.025;
        }
      });

      this.checkRaycaster();
    }

    this.renderer.render(this.scene, this.camera);
  }
}
