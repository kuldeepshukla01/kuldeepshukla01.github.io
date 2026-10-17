/**
 * Cinematic 3D WebGL Particle Image Preloader
 * Features:
 * - Bouncing light particle & kinetic character typing for "KULDEEP SHUKLA"
 * - High-tech cyber glitch morph into "PORTFOLIO"
 * - Dramatic split into "PORT" and "FOLIO"
 * - 3D WebGL2 Particle Point Cloud Portrait of Kuldeep Shukla with interactive mouse repulsion
 * - Side credentials card & instant "Enter Portfolio" dismiss
 */

(function () {
  "use strict";

  const preloader = document.getElementById("particlePreloader");
  if (!preloader) return;

  const canvas = document.getElementById("gl-canvas");
  const portraitAnchor = document.getElementById("portrait-anchor");
  const titleWrapper = document.getElementById("titleWrapper");
  const partLeft = document.getElementById("partLeft");
  const partRight = document.getElementById("partRight");
  const mainHeroText = document.getElementById("mainHeroText");
  const initialLettersBox = document.getElementById("initialLettersBox");
  const bouncingBall = document.getElementById("bouncingBall");
  const ballWave = document.getElementById("ballWave");
  const nameDisplayBox = document.getElementById("nameDisplayBox");
  const sidePanel = document.getElementById("sidePanel");
  const topNav = document.getElementById("topNav");
  const replayBtn = document.getElementById("replayBtn");
  const enterPortfolioBtn = document.getElementById("enterPortfolioBtn");
  const sideEnterBtn = document.getElementById("sideEnterBtn");
  const preloaderSkipHint = document.getElementById("preloaderSkipHint");

  const FULL_NAME = "KULDEEP SHUKLA";
  const TARGET_WORD = "PORTFOLIO";

  // WebGL Shaders
  const VS_SOURCE = `#version 300 es
  precision highp float;

  in vec2 aHome;   // 0..1 inside the anchor rect
  in vec3 aAir;    // x,y 0..1 over the canvas, z = depth (0 near, 1 far)
  in vec4 aInfo;   // brightness, delay, duration, phase
  in vec3 aCell;   // atlas window origin (uv), kind (0 tile, 1 dust)

  uniform vec2 uRes;       // canvas, CSS px
  uniform vec4 uRect;      // anchor x, y, w, h in canvas CSS px
  uniform float uCell;     // tile pitch, CSS px
  uniform float uDpr;
  uniform float uTime;     // seconds, always running
  uniform float uReveal;   // seconds since play
  uniform float uScatter;  // 0 = face, 1 = blown back into the air
  uniform vec2 uMouse;     // CSS px, far away when absent

  out vec2 vCell;
  out float vBright;
  out float vLand;
  out float vAlpha;
  out float vPhase;

  float inOut(float t) { return t < 0.5 ? 4.0*t*t*t : 1.0 - pow(-2.0*t + 2.0, 3.0) / 2.0; }

  void main() {
    float bright = aInfo.x;
    float delay  = aInfo.y;
    float dur    = aInfo.z;
    float phase  = aInfo.w;
    float depth  = aAir.z;
    bool dust    = aCell.z > 0.5;

    // Air position: slow organic drift in deep space
    vec2 drift = vec2(sin(uTime*0.31 + phase*6.283), cos(uTime*0.23 + phase*9.1))
               * (6.0 + 22.0*(1.0 - depth));
    vec2 air  = aAir.xy * uRes + drift;
    vec2 home = uRect.xy + aHome * uRect.zw;

    // Reveal: snappy arrival
    float appear = smoothstep(0.0, 0.45, uReveal - delay*0.22);
    float fly    = dust ? 0.0 : clamp((uReveal - delay*0.65) / (dur * 0.75), 0.0, 1.0);
    float e      = inOut(fly);

    // Scatter
    float q = clamp(uScatter*1.7 - phase*0.7, 0.0, 1.0);
    q = q*q;

    float k = e * (1.0 - q);              // 1 = sitting in the face
    vec2 pos = mix(air, home, k);

    // Curved gathering arc
    vec2 d = home - air;
    pos += vec2(-d.y, d.x) * 0.18 * sin(3.14159*k) * (phase - 0.5);

    // Pointer repulsion
    vec2 m = pos - uMouse;
    float ml = length(m);
    pos += (ml > 0.001 ? m/ml : vec2(0.0)) * smoothstep(120.0, 0.0, ml) * 18.0 * k;

    float land  = smoothstep(0.55, 1.0, k);
    float speck = mix(2.2, 0.9, depth);
    float tile  = uCell * (0.25 + 0.7*bright);
    float size  = mix(speck, tile, land);

    float dustA = dust ? mix(0.55, 0.22, smoothstep(1.5, 3.0, uReveal)) : 1.0;
    vAlpha  = appear * mix(0.25 + 0.55*(1.0 - depth), 1.0, land) * dustA;
    vBright = bright;
    vLand   = land;
    vCell   = aCell.xy;
    vPhase  = phase;

    vec2 clip = pos / uRes * 2.0 - 1.0;
    gl_Position  = vec4(clip.x, -clip.y, 0.0, 1.0);
    gl_PointSize = max(size * uDpr, 1.0);
  }
  `;

  const FS_SOURCE = `#version 300 es
  precision highp float;

  uniform sampler2D uAtlas;
  uniform vec2 uWin;     // window size in atlas uv
  uniform float uTime;

  in vec2 vCell;
  in float vBright;
  in float vLand;
  in float vAlpha;
  in float vPhase;
  out vec4 outColor;

  void main() {
    vec3 c = texture(uAtlas, vCell + gl_PointCoord * uWin).rgb;
    float peak = max(max(c.r, c.g), max(c.b, 0.06));
    vec3 hue = c / peak;
    vec3 tile = mix(hue, min(c * 1.8, 1.0), 0.35);
    tile = mix(tile, vec3(1.0), 0.15);
    float twinkle = 0.9 + 0.1*sin(uTime*1.6 + vPhase*47.0);
    tile *= (0.1 + 0.95*vBright) * twinkle;

    vec3 speck = vec3(0.9, 0.92, 1.0);
    vec3 rgb = mix(speck, tile, vLand);
    outColor = vec4(rgb * vAlpha, vAlpha);
  }
  `;

  // Atlas & Particle Constants
  const ATLAS_W = 1024;
  const ATLAS_H = 640;
  const CELL_PX = 56;
  const DUST_RATIO = 0.07;
  const getPitch = w => Math.min(4.5, Math.max(3.0, w / 220));

  let gl = null;
  let program = null;
  let vao = null;
  let buffers = [];
  let uLocs = {};
  let portraitImg = null;
  let atlasTexture = null;
  let particleCount = 0;
  let cellPitch = 3.5;
  let animStartTime = null;
  let revealTime = null;
  let cachedAnchorWidth = -1;
  let mouse = { x: -9999, y: -9999, tx: -9999, ty: -9999 };
  let isLoopRunning = true;
  let isDismissed = false;

  function smoothstep(minVal, maxVal, value) {
    let x = Math.max(0, Math.min(1, (value - minVal) / (maxVal - minVal)));
    return x * x * (3 - 2 * x);
  }

  // Build Particle Data Buffers from portrait
  function buildParticleData(img, targetWidth) {
    const pitch = getPitch(targetWidth);
    const cols = Math.max(20, Math.round(targetWidth / pitch));
    const rows = Math.round(cols * img.naturalHeight / img.naturalWidth);

    const c = document.createElement("canvas");
    c.width = cols;
    c.height = rows;
    const ctx = c.getContext("2d", { willReadFrequently: true });
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(img, 0, 0, cols, rows);
    const data = ctx.getImageData(0, 0, cols, rows).data;

    const home = [];
    const air = [];
    const info = [];
    const cellAttr = [];
    const winU = CELL_PX / ATLAS_W;
    const winV = CELL_PX / ATLAS_H;
    let maxSettle = 0;

    const addParticle = (hx, hy, bright, isDust) => {
      home.push(hx, hy);
      air.push(Math.random() * 1.2 - 0.1, Math.random() * 1.2 - 0.1, Math.random());
      const delay = 0.2 + Math.random() * 0.6 + hy * 0.3;
      const dur = 0.95 + Math.random() * 0.45;
      if (!isDust) maxSettle = Math.max(maxSettle, delay + dur);
      info.push(bright, delay, dur, Math.random());
      cellAttr.push(Math.random() * (1 - winU), Math.random() * (1 - winV), isDust ? 1.0 : 0.0);
    };

    const lumArray = new Float32Array(cols * rows);
    for (let i = 0; i < cols * rows; i++) {
      const idx = i * 4;
      lumArray[i] = (0.2126 * data[idx] + 0.7152 * data[idx+1] + 0.0722 * data[idx+2]) / 255 * (data[idx+3] / 255);
    }

    const validLums = Array.from(lumArray).filter(v => v >= 0.035).sort((a, b) => a - b);
    const low = validLums[Math.floor(validLums.length * 0.02)] || 0;
    const high = validLums[Math.floor(validLums.length * 0.97)] || 1;

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const l = lumArray[y * cols + x];
        if (l < 0.035 || (l < 0.08 && Math.random() < 0.45)) continue;

        const u = (x + 0.5) / cols;
        const v = (y + 0.5) / rows;

        // Soft edge feathering so particles dissolve into starry space instead of forming a hard A4 rectangle
        let edgeFade = 1.0;
        if (u < 0.18) {
          edgeFade *= smoothstep(0.01, 0.18, u);
        } else if (u > 0.82) {
          edgeFade *= smoothstep(0.01, 0.18, 1.0 - u);
        }
        if (v > 0.75) {
          edgeFade *= smoothstep(0.02, 0.25, 1.0 - v);
        }

        // Randomly thin out particles near boundaries to create soft organic constellation edges
        if (Math.random() > edgeFade) continue;

        const norm = Math.min(1, Math.max(0, (l - low) / (high - low)));
        const bright = (0.2 * norm + 0.8 * smoothstep(0.1, 0.55, norm)) * Math.max(0.35, edgeFade);
        addParticle(u, v, bright, false);
      }
    }

    const subCount = home.length / 2;
    for (let i = 0; i < Math.round(subCount * DUST_RATIO); i++) {
      addParticle(0.5, 0.5, 0.3, true);
    }

    return {
      count: home.length / 2,
      cellPitch: pitch,
      settle: maxSettle,
      home: new Float32Array(home),
      air: new Float32Array(air),
      info: new Float32Array(info),
      cellAttr: new Float32Array(cellAttr)
    };
  }

  // Initialize WebGL2
  function initWebGL() {
    if (!canvas) return false;
    gl = canvas.getContext("webgl2", { alpha: true, premultipliedAlpha: true, antialias: false });
    if (!gl) {
      if (portraitAnchor) portraitAnchor.style.visibility = "visible";
      return false;
    }

    const compile = (src, type) => {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.error("Shader error:", gl.getShaderInfoLog(s));
      }
      return s;
    };

    const vs = compile(VS_SOURCE, gl.VERTEX_SHADER);
    const fs = compile(FS_SOURCE, gl.FRAGMENT_SHADER);
    program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    uLocs = {
      res: gl.getUniformLocation(program, "uRes"),
      rect: gl.getUniformLocation(program, "uRect"),
      cell: gl.getUniformLocation(program, "uCell"),
      dpr: gl.getUniformLocation(program, "uDpr"),
      time: gl.getUniformLocation(program, "uTime"),
      reveal: gl.getUniformLocation(program, "uReveal"),
      scatter: gl.getUniformLocation(program, "uScatter"),
      mouse: gl.getUniformLocation(program, "uMouse"),
      atlas: gl.getUniformLocation(program, "uAtlas"),
      win: gl.getUniformLocation(program, "uWin")
    };

    vao = gl.createVertexArray();
    gl.bindVertexArray(vao);

    const aHome = gl.getAttribLocation(program, "aHome");
    const aAir = gl.getAttribLocation(program, "aAir");
    const aInfo = gl.getAttribLocation(program, "aInfo");
    const aCell = gl.getAttribLocation(program, "aCell");

    const mkBuf = (loc, size) => {
      const b = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, b);
      gl.enableVertexAttribArray(loc);
      gl.vertexAttribPointer(loc, size, gl.FLOAT, false, 0, 0);
      buffers.push(b);
      return b;
    };

    mkBuf(aHome, 2);
    mkBuf(aAir, 3);
    mkBuf(aInfo, 4);
    mkBuf(aCell, 3);

    gl.bindVertexArray(null);

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    return true;
  }

  function updateParticleBuffers() {
    if (!gl || !portraitImg) return;
    const b = portraitAnchor.getBoundingClientRect();
    const targetW = Math.round(b.width);
    if (targetW === cachedAnchorWidth && particleCount > 0) return;
    cachedAnchorWidth = targetW;

    const data = buildParticleData(portraitImg, targetW);
    particleCount = data.count;
    cellPitch = data.cellPitch;

    gl.bindVertexArray(vao);
    const setBuf = (idx, arr) => {
      gl.bindBuffer(gl.ARRAY_BUFFER, buffers[idx]);
      gl.bufferData(gl.ARRAY_BUFFER, arr, gl.STATIC_DRAW);
    };
    setBuf(0, data.home);
    setBuf(1, data.air);
    setBuf(2, data.info);
    setBuf(3, data.cellAttr);
    gl.bindVertexArray(null);
  }

  function resizeCanvas() {
    if (!gl) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2.5);
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
    }
  }

  function renderFrame(now) {
    if (!isLoopRunning) return;

    if (!animStartTime) animStartTime = now;
    const elapsed = (now - animStartTime) / 1000;
    const reveal = revealTime !== null ? Math.max(0, (now / 1000) - revealTime) : 0.0;

    // Smooth cursor interpolation
    mouse.x += (mouse.tx - mouse.x) * 0.12;
    mouse.y += (mouse.ty - mouse.y) * 0.12;

    if (gl && atlasTexture && particleCount > 0) {
      resizeCanvas();
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.useProgram(program);
      gl.bindVertexArray(vao);

      const dpr = Math.min(window.devicePixelRatio || 1, 2.5);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const ab = portraitAnchor.getBoundingClientRect();

      gl.uniform2f(uLocs.res, w, h);
      gl.uniform4f(uLocs.rect, ab.left, ab.top, ab.width, ab.height);
      gl.uniform1f(uLocs.cell, cellPitch);
      gl.uniform1f(uLocs.dpr, dpr);
      gl.uniform1f(uLocs.time, elapsed);
      gl.uniform1f(uLocs.reveal, reveal);
      gl.uniform1f(uLocs.scatter, 0.0);
      gl.uniform2f(uLocs.mouse, mouse.x, mouse.y);
      gl.uniform2f(uLocs.win, CELL_PX / ATLAS_W, CELL_PX / ATLAS_H);

      gl.drawArrays(gl.POINTS, 0, particleCount);
      gl.bindVertexArray(null);
    }

    requestAnimationFrame(renderFrame);
  }

  // Pointer Interaction
  window.addEventListener("pointermove", (e) => {
    mouse.tx = e.clientX;
    mouse.ty = e.clientY;
  }, { passive: true });

  window.addEventListener("pointerleave", () => {
    mouse.tx = -9999;
    mouse.ty = -9999;
  });

  window.addEventListener("resize", () => {
    if (portraitImg) {
      setTimeout(updateParticleBuffers, 80);
    }
  });

  function loadAssets() {
    return new Promise(resolve => {
      const loadImg = (url, fallbackUrl) => new Promise(res => {
        const i = new Image();
        i.decoding = "async";
        i.onload = () => res(i);
        i.onerror = () => {
          if (fallbackUrl && i.src !== fallbackUrl) {
            i.src = fallbackUrl;
          } else {
            res(i);
          }
        };
        i.src = url;
      });

      Promise.all([
        loadImg("assets/kuldeep_portrait.png", window.PORTRAIT_DATA_URL),
        loadImg("assets/cyber_assets/mosaic_atlas.jpg", window.ATLAS_DATA_URL)
      ]).then(([pImg, aImg]) => {
        portraitImg = pImg;
        if (gl) {
          atlasTexture = gl.createTexture();
          gl.activeTexture(gl.TEXTURE0);
          gl.bindTexture(gl.TEXTURE_2D, atlasTexture);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, aImg);
          gl.generateMipmap(gl.TEXTURE_2D);
          gl.uniform1i(uLocs.atlas, 0);
          updateParticleBuffers();
        }
        resolve();
      });
    });
  }

  // SNAPPY BOUNCE & IMMEDIATE NAME WRITING
  function playBounceAndWriteName(onComplete) {
    if (!nameDisplayBox) return;
    nameDisplayBox.innerHTML = "";
    const chars = Array.from(FULL_NAME);
    const charSpans = chars.map(ch => {
      const span = document.createElement("span");
      span.className = "name-char";
      span.innerHTML = ch === " " ? "&nbsp;" : ch;
      nameDisplayBox.appendChild(span);
      return span;
    });

    const ball = bouncingBall;
    const wave = ballWave;

    gsap.set(charSpans, { opacity: 0, y: 16, scale: 0.9 });
    gsap.set(ball, { opacity: 1, y: -190, scaleX: 1, scaleY: 1 });
    gsap.set(wave, { opacity: 0, scale: 0.2 });

    const tl = gsap.timeline();

    // 1. Snappy Ball fall (0.32s)
    tl.to(ball, {
      y: 0,
      duration: 0.32,
      ease: "power2.in"
    })
    // Impact squash
    .to(ball, {
      scaleX: 1.55,
      scaleY: 0.45,
      duration: 0.04,
      ease: "none"
    })
    // Rebound jump
    .to(ball, {
      y: -28,
      scaleX: 0.88,
      scaleY: 1.15,
      duration: 0.14,
      ease: "power1.out"
    })
    // Quick landing
    .to(ball, {
      y: 0,
      scaleX: 1.3,
      scaleY: 0.65,
      duration: 0.1,
      ease: "power2.in"
    })
    // Impact wave ripple
    .to(wave, {
      opacity: 0.95,
      scale: 1.6,
      duration: 0.2,
      ease: "power1.out"
    }, "<")
    .to(wave, {
      opacity: 0,
      scale: 2.5,
      duration: 0.22,
      ease: "power2.out"
    }, "-=0.08")
    // Ball fades into flare
    .to(ball, {
      scale: 2.2,
      opacity: 0,
      duration: 0.16,
      ease: "power2.out"
    }, "<");

    // 2. Fast energetic write out of KULDEEP SHUKLA (0.28s)
    tl.to(charSpans, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.26,
      stagger: 0.022,
      ease: "back.out(1.4)"
    }, "-=0.12");

    // Brief crisp hold (0.28s)
    tl.to({}, { duration: 0.28 });

    tl.call(() => {
      if (onComplete) onComplete();
    });

    return tl;
  }

  // HIGH-TECH MORPH INTO PORTFOLIO (0.55s)
  function playMorphAnimation(onComplete) {
    const duration = 0.55;
    const startTime = performance.now();
    const glyphs = "01#_X$*!~<>/";

    if (mainHeroText) mainHeroText.style.opacity = "1";
    if (initialLettersBox) initialLettersBox.style.opacity = "0";

    const getMorphed = (progress) => {
      const lockedCount = Math.round(progress * TARGET_WORD.length);
      return TARGET_WORD.split("").map((targetChar, idx) => {
        if (idx < lockedCount) {
          return targetChar;
        } else if (idx < FULL_NAME.length) {
          if (progress > 0.1 && Math.random() < 0.3) {
            return glyphs[Math.floor(Math.random() * glyphs.length)];
          }
          return FULL_NAME[idx] === " " ? "_" : FULL_NAME[idx];
        } else {
          return Math.random() < 0.3 ? glyphs[Math.floor(Math.random() * glyphs.length)] : "";
        }
      }).join("");
    };

    const frame = now => {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const text = getMorphed(progress);

      if (partLeft) partLeft.textContent = text.slice(0, 4);
      if (partRight) partRight.textContent = text.slice(4);

      if (progress < 1) {
        requestAnimationFrame(frame);
      } else {
        if (partLeft) partLeft.textContent = "PORT";
        if (partRight) partRight.textContent = "FOLIO";
        if (onComplete) onComplete();
      }
    };

    requestAnimationFrame(frame);
  }

  // Grand Split & Immediate Particle Gathering
  function playSplitAndReveal() {
    const isMobile = window.innerWidth < 768;
    const liftY = isMobile ? -window.innerHeight * 0.16 : -window.innerHeight * 0.22;
    const gapX = isMobile ? window.innerWidth * 0.45 : window.innerWidth * 0.38;

    // Immediately trigger WebGL particle assembly
    revealTime = performance.now() / 1000;

    const tl = gsap.timeline();

    // 1. Lift and Split "PORT" and "FOLIO" wide to outer flanks
    tl.to(titleWrapper, {
      y: liftY,
      duration: 1.35,
      ease: "power3.inOut"
    }, "+=0.05");

    tl.to(partLeft, {
      x: -gapX,
      duration: 1.35,
      ease: "power3.out"
    }, "<");

    tl.to(partRight, {
      x: gapX,
      duration: 1.35,
      ease: "power3.out"
    }, "<");

    // As portrait particles assemble, smoothly fade out split word so NO broken letters remain stuck on Firefox
    tl.to(mainHeroText, {
      opacity: 0,
      duration: 0.9,
      ease: "power2.out"
    }, "-=0.35");

    // 2. Side Panel fades in
    if (sidePanel) {
      tl.to(sidePanel, {
        y: 0,
        opacity: 1,
        duration: 0.85,
        ease: "power3.out"
      }, "-=0.6");
    }

    // 3. Top Navigation fades in
    if (topNav) {
      tl.to(topNav, {
        opacity: 1,
        duration: 0.75,
        ease: "power2.out"
      }, "-=0.5");
    }
  }

  // Orchestration Sequence
  function startSequence() {
    gsap.set(titleWrapper, { y: 0 });
    gsap.set(partLeft, { x: 0 });
    gsap.set(partRight, { x: 0 });
    gsap.set(mainHeroText, { opacity: 0 });
    gsap.set(initialLettersBox, { opacity: 1 });
    if (sidePanel) gsap.set(sidePanel, { opacity: 0, y: 20 });
    if (topNav) gsap.set(topNav, { opacity: 0 });

    revealTime = null;

    playBounceAndWriteName(() => {
      setTimeout(() => {
        playMorphAnimation(() => {
          setTimeout(playSplitAndReveal, 60);
        });
      }, 100);
    });
  }

  // Dismiss Preloader and Enter Full Portfolio (via Stage 2 Signature Preloader)
  function dismissParticlePreloader(showSignature = true) {
    if (isDismissed) return;
    isDismissed = true;

    preloader.classList.add("dismissed");

    const sigPreloader = document.getElementById("preloader");

    if (showSignature && sigPreloader) {
      // Hide 3D particle preloader overlay
      setTimeout(() => {
        preloader.style.display = "none";
        isLoopRunning = false;
      }, 500);

      // Trigger Stage 2 Calligraphy Signature Name Animation
      sigPreloader.classList.remove("waiting");
      sigPreloader.classList.add("active");

      // Robust cross-browser animation for Safari/WebKit/Firefox
      const cr1 = document.getElementById("clipRectFirst");
      const cr2 = document.getElementById("clipRectLast");
      const ul = document.getElementById("underline");
      if (cr1 && cr2) {
        gsap.fromTo(cr1, { attr: { width: 0 } }, { attr: { width: 385 }, duration: 0.90, delay: 0.15, ease: "power2.out" });
        gsap.fromTo(cr2, { attr: { width: 0 } }, { attr: { width: 440 }, duration: 0.85, delay: 1.10, ease: "power2.out" });
      }
      if (ul) {
        gsap.fromTo(ul, { strokeDashoffset: 780, opacity: 0 }, { strokeDashoffset: 0, opacity: 1, duration: 0.48, delay: 2.05, ease: "power2.out" });
      }

      let sigDismissed = false;
      const dismissSignature = () => {
        if (sigDismissed) return;
        sigDismissed = true;
        sigPreloader.classList.add("fade-out");
        document.body.classList.remove("preloader-active");
        setTimeout(() => {
          sigPreloader.style.display = "none";
        }, 700);
      };

      // Auto dismiss after signature animation finishes (~2.75s)
      setTimeout(dismissSignature, 2750);

      // Tap anywhere or press any key to skip signature immediately
      sigPreloader.addEventListener("click", dismissSignature);
      window.addEventListener("keydown", (e) => {
        if (sigPreloader.style.display !== "none") dismissSignature();
      }, { once: true });

    } else {
      // Direct dismiss to portfolio (e.g. from bottom skip hint)
      document.body.classList.remove("preloader-active");
      setTimeout(() => {
        preloader.style.display = "none";
        isLoopRunning = false;
      }, 850);
    }
  }


  // Event Listeners: Tap ANYWHERE on the screen / overlay to enter portfolio
  if (preloader) {
    preloader.addEventListener("click", (e) => {
      // Do not dismiss if user specifically clicked the Replay button
      if (replayBtn && (e.target === replayBtn || replayBtn.contains(e.target))) {
        return;
      }
      dismissParticlePreloader(true);
    });
  }

  if (sideEnterBtn) {
    sideEnterBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      dismissParticlePreloader(true);
    });
  }

  if (replayBtn) {
    replayBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      startSequence();
    });
  }

  // Dismiss on key press (Escape, Space, Enter)
  window.addEventListener("keydown", (e) => {
    if (!isDismissed && (e.key === "Escape" || e.key === " " || e.key === "Enter")) {
      dismissParticlePreloader(true);
    }
  });

  // Activate preloader scroll lock
  document.body.classList.add("preloader-active");

  // Boot WebGL & GSAP
  if (initWebGL()) {
    requestAnimationFrame(renderFrame);
    loadAssets().then(() => {
      setTimeout(startSequence, 120);
    });
  } else {
    // WebGL fallback: direct dismiss
    document.body.classList.remove("preloader-active");
  }

})();
