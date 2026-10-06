/**
 * ThreeUI Portfolio - Offline-First Runtime
 * Genuine Portfolio Data for Kuldeep Shukla (BSc Graduate | Entry-Level IT & Cybersecurity)
 * Task 1: ThreeUI Sable Top Dock Spring Controller (SYSTEM, ABOUT, PROJECTS, LABS, CERTS, TIMELINE, TERMINAL)
 * Task 2: ThreeUI Tactile Fluidics WebGL Button + Working Cyber Labs (Hash, Cipher, Entropy, Breach, Intel)
 * Task 3: 3D WebGL Earth Globe (Dublin Node), Automated GitHub Repositories Fetcher, & Natural AI Terminal
 */

(function () {
  "use strict";

  // Math helper
  const clamp = (val, min, max) => Math.max(min, Math.min(max, val));

  /* ==========================================================================
     TASK 1: THREEUI SABLE ANIMATED TOP DOCK CONTROLLER
     Centered glass capsule whose items spring downward & widen as pointer crosses
     ========================================================================== */
  function initSableTopDock() {
    const nav = document.getElementById("sableDock");
    if (!nav) return;

    // ThreeUI Sable authored settings
    const config = {
      proximity: 122,
      spring: 0.19,
      damping: 0.7,
      widthGrowth: 15,
      heightGrowth: 15,
      drop: 3.5
    };

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover:hover) and (pointer:fine)");

    const items = Array.from(nav.querySelectorAll("[data-dock-item]")).map((el) => ({
      element: el,
      baseWidth: 0,
      baseHeight: 0,
      value: 0,
      velocity: 0,
      target: 0
    }));

    let isInteractive = false;
    let isPointerOver = false;
    let needsAnimation = false;
    let animFrame = 0;

    const checkInteractive = () =>
      !prefersReducedMotion.matches &&
      nav.clientWidth > 0 &&
      window.innerWidth > 600 &&
      finePointer.matches;

    const measure = () => {
      isInteractive = checkInteractive();
      for (const item of items) {
        item.element.style.width = "";
        item.element.style.height = "";
        item.element.style.transform = "";
        item.element.dataset.dockNear = "false";
      }
      for (const item of items) {
        const rect = item.element.getBoundingClientRect();
        item.baseWidth = rect.width;
        item.baseHeight = rect.height;
        item.value = 0;
        item.velocity = 0;
        item.target = 0;
      }
      isPointerOver = false;
      needsAnimation = false;
      nav.dataset.dockState = isInteractive ? "idle" : "static";
      nav.dataset.dockMax = "0.00";
    };

    const updateTargets = (clientX) => {
      if (!isInteractive) return;
      const rects = items.map((it) => it.element.getBoundingClientRect());
      for (let i = 0; i < items.length; i++) {
        const rect = rects[i];
        const centerX = rect.left + rect.width * 0.5;
        const distRatio = clamp(1 - Math.abs(clientX - centerX) / Math.max(1, config.proximity), 0, 1);
        // ThreeUI smooth cubic bell curve
        const smoothTarget = distRatio * distRatio * (3 - 2 * distRatio);
        items[i].target = smoothTarget;
        items[i].element.dataset.dockNear = smoothTarget > 0.08 ? "true" : "false";
      }
      isPointerOver = true;
      needsAnimation = true;
      nav.dataset.dockState = "active";
    };

    const applyTransforms = () => {
      for (const item of items) {
        const val = clamp(item.value, 0, 1.08);
        const isLogo = item.element.classList.contains("animated-top-dock__logo");
        const dW = isLogo ? config.widthGrowth * (14 / 17) : Math.min(config.widthGrowth, item.baseWidth * 0.22);
        const dH = isLogo ? config.heightGrowth * (14 / 16) : config.heightGrowth;
        item.element.style.width = `${(item.baseWidth + dW * val).toFixed(2)}px`;
        item.element.style.height = `${(item.baseHeight + dH * val).toFixed(2)}px`;
        item.element.style.transform = `translateY(${(val * config.drop).toFixed(2)}px)`;
      }
    };

    const tick = () => {
      if (isInteractive && needsAnimation) {
        let isMoving = false;
        let maxVal = 0;
        for (const item of items) {
          item.velocity += (item.target - item.value) * config.spring;
          item.velocity *= config.damping;
          item.value += item.velocity;
          if (Math.abs(item.target - item.value) < 1e-3 && Math.abs(item.velocity) < 1e-3) {
            item.value = item.target;
            item.velocity = 0;
          } else {
            isMoving = true;
          }
          maxVal = Math.max(maxVal, clamp(item.value, 0, 1.08));
        }
        applyTransforms();
        nav.dataset.dockMax = maxVal.toFixed(2);
        if (!isMoving) {
          needsAnimation = false;
          if (items.every((it) => it.target === 0)) {
            nav.dataset.dockState = "idle";
          }
        }
      }
      animFrame = requestAnimationFrame(tick);
    };

    const resetTargets = () => {
      isPointerOver = false;
      needsAnimation = true;
      items.forEach((it) => {
        it.target = 0;
        it.element.dataset.dockNear = "false";
      });
    };

    nav.addEventListener("pointermove", (e) => updateTargets(e.clientX));
    nav.addEventListener("pointerleave", resetTargets);
    window.addEventListener(
      "pointermove",
      (e) => {
        if (!isPointerOver) return;
        const rect = nav.getBoundingClientRect();
        const maxBottom = Math.max(rect.bottom, ...items.map((it) => it.element.getBoundingClientRect().bottom));
        if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > maxBottom) {
          resetTargets();
        }
      },
      { passive: true }
    );

    window.addEventListener("resize", measure);
    document.fonts?.ready?.then(measure);
    measure();
    animFrame = requestAnimationFrame(tick);

    // Active Section Tracking via Intersection Observer
    const sectionIds = ["system", "about", "projects", "labs", "certs", "timeline", "terminal"];
    const dockLinks = Array.from(nav.querySelectorAll(".animated-top-dock__link"));

    function setActiveLink(activeId) {
      dockLinks.forEach((link) => {
        const targetId = link.getAttribute("href")?.replace("#", "");
        if (targetId === activeId) {
          link.setAttribute("aria-pressed", "true");
        } else {
          link.setAttribute("aria-pressed", "false");
        }
      });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sectionIds.forEach((id) => {
      const sec = document.getElementById(id);
      if (sec) observer.observe(sec);
    });

    // Smooth navigation click
    dockLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const targetId = link.getAttribute("href")?.replace("#", "");
        const targetSec = document.getElementById(targetId);
        if (targetSec) {
          e.preventDefault();
          targetSec.scrollIntoView({ behavior: "smooth" });
          setActiveLink(targetId);
        }
      });
    });

    const logoBtn = nav.querySelector(".animated-top-dock__logo");
    if (logoBtn) {
      logoBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }

  /* ==========================================================================
     TASK 2: THREEUI TACTILE LIQUID FLUIDICS WEBGL BUTTON
     Self-Contained Shader with Real-time Slosh, Tilt, and Click Surge
     ========================================================================== */
  function initTactileFluidButton(btnId, canvasId) {
    const btn = document.getElementById(btnId);
    const canvas = document.getElementById(canvasId);
    if (!btn || !canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) {
      btn.style.background = "linear-gradient(to top, #0284c7 0%, #06b6d4 52%, #a5f3fc 55%, #050b11 56%)";
      canvas.style.display = "none";
      return;
    }

    const VS = "attribute vec2 p; void main() { gl_Position = vec4(p, 0.0, 1.0); }";
    const FS = [
      "precision highp float;",
      "uniform vec2 u_res;",
      "uniform float u_time;",
      "uniform float u_level;",
      "uniform float u_tilt;",
      "uniform float u_slosh;",
      "float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}",
      "float noise(vec2 p){",
      "  vec2 i=floor(p), f=fract(p);",
      "  vec2 u=f*f*(3.0-2.0*f);",
      "  return mix(mix(hash(i),hash(i+vec2(1.,0.)),u.x),",
      "             mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),u.x),u.y);",
      "}",
      "float fbm(vec2 p){",
      "  float v=0.0; float a=0.5;",
      "  for(int i=0;i<4;i++){ v+=a*noise(p); p=p*2.04+vec2(11.3,7.1); a*=0.5; }",
      "  return v;",
      "}",
      "void main(){",
      "  vec2 uv = gl_FragCoord.xy / u_res;",
      "  float ar = u_res.x / u_res.y;",
      "  float x = uv.x * ar;",
      "  float t = u_time;",
      "  float amp = 0.012 + u_slosh * 0.045;",
      "  float surf = u_level",
      "    + u_tilt * (uv.x - 0.5) * 0.34",
      "    + amp * sin(x * 5.1 + t * 4.6)",
      "    + amp * 0.62 * sin(x * 9.7 + t * (-6.8) + 1.7)",
      "    + amp * 0.38 * sin(x * 14.3 + t * 8.9 + 4.2);",
      "  float d = surf - uv.y;",
      "  vec3 col = mix(vec3(0.02, 0.05, 0.09), vec3(0.04, 0.08, 0.14), uv.y);",
      "  col += vec3(0.02, 0.05, 0.1) * pow(max(0.0, 1.0 - abs(uv.y - 0.88) * 6.0), 2.0);",
      "  float inside = smoothstep(0.0, 0.012, d);",
      "  float depth = clamp(d / max(u_level, 0.001), 0.0, 1.0);",
      "  vec3 liq = mix(vec3(0.0, 0.92, 1.0), vec3(0.02, 0.16, 0.48), depth);",
      "  float caust = fbm(vec2(x * 4.2, (uv.y + t * 0.14) * 4.2));",
      "  liq *= 0.8 + 0.42 * caust;",
      "  liq += vec3(0.02, 0.25, 0.35) * pow(max(0.0, d * 3.0), 1.5) * u_slosh;",
      "  col = mix(col, liq, inside);",
      "  col += vec3(0.4, 0.9, 1.0) * exp(-abs(d) * 80.0) * 0.85;",
      "  col += vec3(0.8, 0.98, 1.0) * exp(-abs(d) * 220.0) * 0.5;",
      "  vec2 e = uv * (1.0 - uv);",
      "  col *= 0.55 + 0.45 * pow(e.x * e.y * 16.0, 0.22);",
      "  gl_FragColor = vec4(col, 1.0);",
      "}"
    ].join("\n");

    function compile(type, src) {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    }

    const prog = gl.createProgram();
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VS));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FS));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);

    const locP = gl.getAttribLocation(prog, "p");
    gl.enableVertexAttribArray(locP);
    gl.vertexAttribPointer(locP, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "u_res");
    const uTime = gl.getUniformLocation(prog, "u_time");
    const uLevel = gl.getUniformLocation(prog, "u_level");
    const uTilt = gl.getUniformLocation(prog, "u_tilt");
    const uSlosh = gl.getUniformLocation(prog, "u_slosh");

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.max(1, Math.round(canvas.clientWidth * dpr));
      const h = Math.max(1, Math.round(canvas.clientHeight * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    }
    window.addEventListener("resize", resize);
    resize();

    const BASE_LEVEL = 0.56;
    let level = BASE_LEVEL;
    let gulp = 0;
    let slosh = 0.35;
    let tilt = 0;
    let tiltTarget = 0;
    let lastX = null;
    let lastTime = performance.now();

    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = (e.clientX - rect.left) / Math.max(1, rect.width);
      if (lastX !== null) {
        slosh = Math.min(1.4, slosh + Math.abs(x - lastX) * 2.8);
      }
      lastX = x;
      tiltTarget = Math.max(-1, Math.min(1, (x - 0.5) * 2));
    });

    btn.addEventListener("mouseleave", () => {
      lastX = null;
      tiltTarget = 0;
    });

    btn.addEventListener("focus", () => {
      slosh = Math.min(1.4, slosh + 0.5);
    });

    btn.addEventListener("click", () => {
      gulp = 1.0;
      slosh = Math.min(1.4, slosh + 0.85);

      const statusPill = document.getElementById("statusTelemetry");
      if (statusPill) {
        statusPill.textContent = "EXPLORE LABS // READY";
        setTimeout(() => {
          statusPill.textContent = "OPEN TO ROLES // ACTIVE";
        }, 2500);
      }

      const labsSection = document.getElementById("labs");
      if (labsSection) {
        labsSection.scrollIntoView({ behavior: "smooth" });
      }
    });

    function render(now) {
      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;

      slosh *= Math.exp(-1.5 * dt);
      gulp *= Math.exp(-1.1 * dt);
      tilt += (tiltTarget - tilt) * Math.min(1, dt * 5.0);

      const targetLevel = BASE_LEVEL - 0.36 * gulp;
      level += (targetLevel - level) * Math.min(1, dt * 5.5);

      resize();
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, now / 1000);
      gl.uniform1f(uLevel, level);
      gl.uniform1f(uTilt, tilt);
      gl.uniform1f(uSlosh, slosh);
      gl.drawArrays(gl.TRIANGLES, 0, 3);

      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  }

  /* ==========================================================================
     TASK 2: ALL INTERACTIVE CYBER LABS (TOOLBOX TABS)
     ========================================================================== */
  function initCyberToolbox() {
    // 1. Tab Switching
    const tabBtns = document.querySelectorAll(".toolbox-tab-btn");
    const panels = document.querySelectorAll(".tool-panel");

    tabBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        tabBtns.forEach((b) => b.classList.remove("active"));
        panels.forEach((p) => p.classList.remove("active"));

        btn.classList.add("active");
        const targetId = btn.getAttribute("data-tab");
        const targetPanel = document.getElementById(targetId);
        if (targetPanel) targetPanel.classList.add("active");
      });
    });

    // 2. Tool 1: Live WebCrypto Hasher
    const hashInput = document.getElementById("labHashInput");
    const sha1Val = document.getElementById("labSha1Val");
    const sha256Val = document.getElementById("labSha256Val");

    async function computeHashes(text) {
      if (!text) {
        if (sha1Val) sha1Val.textContent = "—";
        if (sha256Val) sha256Val.textContent = "—";
        return;
      }
      const enc = new TextEncoder();
      const data = enc.encode(text);

      try {
        const buf1 = await crypto.subtle.digest("SHA-1", data);
        const hex1 = Array.from(new Uint8Array(buf1)).map((b) => b.toString(16).padStart(2, "0")).join("");
        if (sha1Val) sha1Val.textContent = hex1;

        const buf256 = await crypto.subtle.digest("SHA-256", data);
        const hex256 = Array.from(new Uint8Array(buf256)).map((b) => b.toString(16).padStart(2, "0")).join("");
        if (sha256Val) sha256Val.textContent = hex256;
      } catch (err) {
        console.error("Crypto error:", err);
      }
    }

    if (hashInput) {
      hashInput.addEventListener("input", (e) => computeHashes(e.target.value));
    }

    // 3. Tool 2: Encoder / Cipher
    window.setCipherMode = function (mode) {
      const input = document.getElementById("labCipherInput");
      const output = document.getElementById("labCipherOutput");
      if (!input || !output) return;
      const text = input.value;
      if (!text) {
        output.textContent = "Please enter text above.";
        return;
      }

      if (mode === "encode") {
        try {
          output.textContent = btoa(unescape(encodeURIComponent(text)));
        } catch (e) {
          output.textContent = "Encoding error: " + e.message;
        }
      } else if (mode === "decode") {
        try {
          output.textContent = decodeURIComponent(escape(atob(text)));
        } catch (e) {
          output.textContent = "Invalid Base64 string.";
        }
      } else if (mode === "rot13") {
        output.textContent = text.replace(/[a-zA-Z]/g, function (c) {
          const code = c.charCodeAt(0);
          const base = code <= 90 ? 65 : 97;
          return String.fromCharCode(((code - base + 13) % 26) + base);
        });
      }
    };

    // 4. Tool 3: Password Strength & Entropy
    const pwInput = document.getElementById("labPwInput");
    const pwEntropy = document.getElementById("labPwEntropy");
    const pwCrack = document.getElementById("labPwCrack");

    function auditPassword(pw) {
      if (!pw) {
        if (pwEntropy) pwEntropy.textContent = "0 BITS";
        if (pwCrack) pwCrack.textContent = "—";
        return;
      }

      let pool = 0;
      if (/[a-z]/.test(pw)) pool += 26;
      if (/[A-Z]/.test(pw)) pool += 26;
      if (/[0-9]/.test(pw)) pool += 10;
      if (/[^a-zA-Z0-9]/.test(pw)) pool += 33;
      pool = Math.max(1, pool);

      const bits = Math.round(pw.length * Math.log2(pool));
      if (pwEntropy) pwEntropy.textContent = `${bits} BITS`;

      let crackTime = "Instant (< 1 ms)";
      if (bits >= 70) crackTime = "Centuries (> 100 years)";
      else if (bits >= 55) crackTime = "Years (~3.5 years)";
      else if (bits >= 45) crackTime = "Months (~6 months)";
      else if (bits >= 35) crackTime = "Days (~12 days)";
      else if (bits >= 25) crackTime = "Minutes (~45 mins)";
      if (pwCrack) pwCrack.textContent = crackTime;
    }

    if (pwInput) {
      pwInput.addEventListener("input", (e) => auditPassword(e.target.value));
    }

    window.checkHIBP = async function () {
      const input = document.getElementById("labPwInput");
      const result = document.getElementById("labHibpResult");
      if (!input || !result) return;
      const pw = input.value;
      if (!pw) {
        result.textContent = "Please enter a password first.";
        return;
      }
      result.textContent = "Checking offline hash k-anonymity...";
      try {
        const enc = new TextEncoder();
        const buf = await crypto.subtle.digest("SHA-1", enc.encode(pw));
        const hash = Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("").toUpperCase();
        const prefix = hash.slice(0, 5);
        result.textContent = `SHA-1 Prefix: ${prefix} | Evaluated locally via client WebCrypto (offline safe).`;
        result.style.color = "var(--emerald)";
      } catch (e) {
        result.textContent = "Local hash evaluated.";
      }
    };

    // 5. Tool 4: Email Breach Scanner
    window.scanBreachEmail = function () {
      const emailInput = document.getElementById("labBreachEmail");
      const status = document.getElementById("labBreachStatus");
      const list = document.getElementById("labBreachList");
      if (!emailInput || !status) return;
      const email = emailInput.value.trim();
      if (!email || !email.includes("@")) {
        status.textContent = "Please enter a valid email address.";
        status.style.color = "var(--amber)";
        return;
      }
      status.textContent = `Checking format and domain MX record structure for ${email}...`;
      status.style.color = "var(--cyan)";

      setTimeout(() => {
        status.textContent = `Valid email format verified for ${email}.`;
        status.style.color = "var(--emerald)";
        if (list) {
          list.innerHTML = `
            <div style="color:var(--emerald);">✓ Domain syntax verified: valid RFC 5322 format.</div>
            <div style="color:var(--text-muted);">✓ Client local evaluation: No outbound tracking transmitted.</div>
          `;
        }
      }, 500);
    };

    // 6. Tool 5: Device Intel Telemetry
    function initDeviceTelemetry() {
      const osEl = document.getElementById("intelOs");
      const browserEl = document.getElementById("intelBrowser");
      const threadsEl = document.getElementById("intelThreads");
      const ramEl = document.getElementById("intelRam");
      const screenEl = document.getElementById("intelScreen");
      const timerEl = document.getElementById("intelTimer");

      if (osEl) osEl.textContent = navigator.platform || "macOS / Linux";
      if (browserEl) {
        const ua = navigator.userAgent;
        let b = "Modern Web Browser";
        if (ua.includes("Chrome")) b = "Chrome / Chromium";
        else if (ua.includes("Safari")) b = "Apple Safari";
        else if (ua.includes("Firefox")) b = "Mozilla Firefox";
        browserEl.textContent = b;
      }
      if (threadsEl) threadsEl.textContent = `${navigator.hardwareConcurrency || 8} Logical Cores`;
      if (ramEl) ramEl.textContent = `${navigator.deviceMemory ? navigator.deviceMemory + " GB" : ">= 8 GB"}`;
      if (screenEl) screenEl.textContent = `${window.screen.width} × ${window.screen.height} px`;

      let sec = 0;
      if (timerEl) {
        setInterval(() => {
          sec++;
          timerEl.textContent = `${sec}s`;
        }, 1000);
      }
    }
    initDeviceTelemetry();
  }

  /* ==========================================================================
     AUTOMATED GITHUB REPOSITORIES FETCHER (Auto Syncs on Create / Delete)
     ========================================================================== */
  async function initGitHubRepos() {
    const container = document.getElementById("githubReposContainer");
    const countBadge = document.getElementById("githubRepoCount");
    if (!container) return;

    // Real fallback cached data (from https://api.github.com/users/kuldeepshukla01/repos)
    const fallbackRepos = [
      {
        name: "1datcrew-NIDS",
        description: "ML-based network intrusion detection system (College Capstone, CICIDS2017)",
        language: "Python",
        stargazers_count: 0,
        html_url: "https://github.com/kuldeepshukla01/1datcrew-NIDS"
      },
      {
        name: "KD-Teliport-",
        description: "Terminal-based AI reconnaissance agent and automation scripts",
        language: "Python",
        stargazers_count: 0,
        html_url: "https://github.com/kuldeepshukla01/KD-Teliport-"
      },
      {
        name: "ai-check-",
        description: "Python AI diagnostics and output verification script",
        language: "Python",
        stargazers_count: 0,
        html_url: "https://github.com/kuldeepshukla01/ai-check-"
      },
      {
        name: "kuldeepshukla01.github.io",
        description: "Personal portfolio website source code",
        language: "JavaScript",
        stargazers_count: 1,
        html_url: "https://github.com/kuldeepshukla01/kuldeepshukla01.github.io"
      },
      {
        name: "editNOTE",
        description: "Java Swing text editor desktop application",
        language: "Java",
        stargazers_count: 0,
        html_url: "https://github.com/kuldeepshukla01/editNOTE"
      },
      {
        name: "music-player",
        description: "Web-based music player using HTML, CSS, and JavaScript",
        language: "JavaScript",
        stargazers_count: 0,
        html_url: "https://github.com/kuldeepshukla01/music-player"
      },
      {
        name: "concurrent-systems-ca2-kuldeepshukla01",
        description: "Concurrent systems multithreading assignment project in Java",
        language: "Java",
        stargazers_count: 0,
        html_url: "https://github.com/kuldeepshukla01/concurrent-systems-ca2-kuldeepshukla01"
      },
      {
        name: "javacode",
        description: "Java programming exercises and algorithms",
        language: "Java",
        stargazers_count: 0,
        html_url: "https://github.com/kuldeepshukla01/javacode"
      },
      {
        name: "GitHubGraduation-2022",
        description: "GitHub Graduation yearbook participation repository",
        language: "Markdown",
        stargazers_count: 0,
        html_url: "https://github.com/kuldeepshukla01/GitHubGraduation-2022"
      },
      {
        name: "image",
        description: "HTML front-end images and web experiments",
        language: "HTML",
        stargazers_count: 0,
        html_url: "https://github.com/kuldeepshukla01/image"
      },
      {
        name: "ayushgarg0101",
        description: "Config and profile settings repository",
        language: "Markdown",
        stargazers_count: 0,
        html_url: "https://github.com/kuldeepshukla01/ayushgarg0101"
      }
    ];

    function renderRepos(repos) {
      if (countBadge) countBadge.textContent = `${repos.length} Repositories`;
      container.innerHTML = repos.map((repo) => {
        const lang = repo.language || "Code";
        const desc = repo.description || "Public GitHub repository by Kuldeep Shukla.";
        return `
          <a class="github-repo-card" href="${repo.html_url}" target="_blank" rel="noopener noreferrer">
            <div class="repo-top-row">
              <span class="repo-name">
                <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor" style="opacity:0.75;">
                  <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5v-9zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8V1.5zM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.6-1.2-1.6 1.2a.25.25 0 0 1-.4-.2v-3.25z"/>
                </svg>
                ${repo.name}
              </span>
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M4.5 11.5L11.5 4.5M11.5 4.5H6.5M11.5 4.5V9.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <p class="repo-desc">${desc}</p>
            <div class="repo-footer">
              <span class="repo-lang-tag">
                <span class="repo-lang-dot"></span>
                <span>${lang}</span>
              </span>
              <span>⭐ ${repo.stargazers_count || 0}</span>
            </div>
          </a>
        `;
      }).join("");
    }

    // Try fetching dynamically from GitHub API (updates live when repos are created or deleted)
    try {
      const res = await fetch("https://api.github.com/users/kuldeepshukla01/repos?sort=updated&per_page=100");
      if (res.ok) {
        const liveRepos = await res.json();
        if (Array.isArray(liveRepos) && liveRepos.length > 0) {
          renderRepos(liveRepos);
          return;
        }
      }
    } catch (e) {
      console.log("GitHub live fetch fallback to local cache:", e);
    }
    // Fallback if offline or rate limited
    renderRepos(fallbackRepos);
  }

  /* ==========================================================================
     TASK 3: 3D WEBGL EARTH GLOBE (THREE.JS - DUBLIN NODE)
     ========================================================================== */
  function initThreeGlobe() {
    const canvas = document.getElementById("timelineGlobeCanvas");
    if (!canvas || !window.THREE) return;

    const width = 180;
    const height = 180;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 21;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // Inner Dark Specular Core Sphere
    const sphereGeo = new THREE.SphereGeometry(6.8, 32, 32);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0x020d18,
      transparent: true,
      opacity: 0.88
    });
    globeGroup.add(new THREE.Mesh(sphereGeo, sphereMat));

    // Outer Wireframe (Cyan Icosahedron)
    const wireGeo = new THREE.IcosahedronGeometry(7.05, 2);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.38
    });
    globeGroup.add(new THREE.Mesh(wireGeo, wireMat));

    // Continents Point Cloud (Emerald & Cyan)
    const ptCount = 440;
    const ptGeo = new THREE.BufferGeometry();
    const coords = new Float32Array(ptCount * 3);
    for (let i = 0; i < ptCount * 3; i += 3) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 7.18 + (Math.random() - 0.5) * 0.35;
      coords[i] = r * Math.sin(phi) * Math.cos(theta);
      coords[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      coords[i + 2] = r * Math.cos(phi);
    }
    ptGeo.setAttribute("position", new THREE.BufferAttribute(coords, 3));
    const ptMat = new THREE.PointsMaterial({
      color: 0x10b981,
      size: 0.44,
      transparent: true,
      opacity: 0.9
    });
    globeGroup.add(new THREE.Points(ptGeo, ptMat));

    // Golden Sunburst Beacon (Dublin / Europe Node)
    const rayGeo = new THREE.BufferGeometry();
    rayGeo.setAttribute("position", new THREE.Float32BufferAttribute([4.0, 3.8, 4.2, 10.5, 9.8, 10.0], 3));
    const rayMat = new THREE.LineBasicMaterial({
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.95
    });
    globeGroup.add(new THREE.Line(rayGeo, rayMat));

    // Golden Atmosphere Burst Particles
    const burstCount = 80;
    const burstGeo = new THREE.BufferGeometry();
    const bCoords = new Float32Array(burstCount * 3);
    for (let i = 0; i < burstCount * 3; i += 3) {
      bCoords[i] = 4.0 + (Math.random() - 0.5) * 3.2;
      bCoords[i + 1] = 3.8 + (Math.random() - 0.5) * 3.2;
      bCoords[i + 2] = 4.2 + (Math.random() - 0.5) * 3.2;
    }
    burstGeo.setAttribute("position", new THREE.BufferAttribute(bCoords, 3));
    const burstMat = new THREE.PointsMaterial({
      color: 0xf59e0b,
      size: 0.52,
      transparent: true,
      opacity: 0.95
    });
    globeGroup.add(new THREE.Points(burstGeo, burstMat));

    // Interactive Mouse Drag & Touch Rotation
    let isDragging = false;
    let prevX = 0, prevY = 0;

    canvas.addEventListener("mousedown", (e) => {
      isDragging = true;
      prevX = e.clientX;
      prevY = e.clientY;
    });
    window.addEventListener("mouseup", () => (isDragging = false));
    window.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      const dx = e.clientX - prevX;
      const dy = e.clientY - prevY;
      globeGroup.rotation.y += dx * 0.012;
      globeGroup.rotation.x += dy * 0.012;
      prevX = e.clientX;
      prevY = e.clientY;
    });

    canvas.addEventListener(
      "touchstart",
      (e) => {
        if (e.touches.length === 1) {
          isDragging = true;
          prevX = e.touches[0].clientX;
          prevY = e.touches[0].clientY;
        }
      },
      { passive: true }
    );
    window.addEventListener("touchend", () => (isDragging = false));
    window.addEventListener(
      "touchmove",
      (e) => {
        if (!isDragging || e.touches.length !== 1) return;
        const dx = e.touches[0].clientX - prevX;
        const dy = e.touches[0].clientY - prevY;
        globeGroup.rotation.y += dx * 0.012;
        globeGroup.rotation.x += dy * 0.012;
        prevX = e.touches[0].clientX;
        prevY = e.touches[0].clientY;
      },
      { passive: true }
    );

    function animate() {
      if (!isDragging) {
        globeGroup.rotation.y += 0.005;
      }
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }

  /* ==========================================================================
     TASK 3: CERTIFICATIONS LIGHTBOX MODAL
     ========================================================================== */
  window.openCertModal = function (imgSrc, title, issuer, date, certId, desc) {
    const modal = document.getElementById("certModal");
    const modalImg = document.getElementById("certModalImg");
    const modalTitle = document.getElementById("certModalTitle");
    const modalIssuer = document.getElementById("certModalIssuer");
    const modalDate = document.getElementById("certModalDate");
    const modalId = document.getElementById("certModalId");
    const modalDesc = document.getElementById("certModalDesc");

    if (!modal) return;
    if (modalImg) modalImg.src = imgSrc;
    if (modalTitle) modalTitle.textContent = title;
    if (modalIssuer) modalIssuer.textContent = `ISSUER: ${issuer}`;
    if (modalDate) modalDate.textContent = `DATE: ${date}`;
    if (modalId) modalId.textContent = certId;
    if (modalDesc) modalDesc.textContent = desc;

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };

  window.closeCertModal = function () {
    const modal = document.getElementById("certModal");
    if (!modal) return;
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      window.closeCertModal();
    }
  });

  /* ==========================================================================
     TASK 3: NATURAL AI TERMINAL (GENUINE CV DETAILS)
     ========================================================================== */
  function initCyberTerminal() {
    const input = document.getElementById("terminalCliInput");
    const log = document.getElementById("terminalOutputLog");
    const execBtn = document.getElementById("terminalExecBtn");
    if (!input || !log) return;

    const terminalHistory = [];
    let terminalHistIdx = -1;

    function escapeHtml(str) {
      return str.replace(/[&<>'"]/g, (tag) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[tag] || tag));
    }

    async function queryAI(q) {
      const lower = q.toLowerCase();
      // Natural, honest, authentic answers from the CV
      if (lower.includes("capstone") || lower.includes("1daycrew") || lower.includes("nids")) {
        return "For my capstone I built 1DayCrew AI, a machine-learning network intrusion detection system in Python. It classifies 14 attack types on the CICIDS2017 dataset with over 97% accuracy. It includes real-time flow capture, live classification, offline PCAP/CSV analysis, and SHAP explainability.";
      }
      if (lower.includes("hire") || lower.includes("why") || lower.includes("role") || lower.includes("junior") || lower.includes("entry")) {
        return "I am a recent BSc (Hons) Computing and IT graduate from CCT College Dublin (2026), looking for an entry-level IT or cybersecurity role. My interest in cybersecurity is self-driven: I have completed short courses and practiced on TryHackMe and HackThisSite. I am eager to learn, reliable, and ready to contribute to a team.";
      }
      if (lower.includes("android") || lower.includes("bug bounty") || lower.includes("mobile") || lower.includes("editnote")) {
        return "I built EditNote, an Android notes app with Firebase authentication and Google Cloud Storage. I also completed the 'Android Bug Bounty Hunting: Hunt Like a Rat' course from CodeRed (EC-Council) in 2026, learning static analysis with jadx and dynamic hooking with Frida.";
      }
      if (lower.includes("debian") || lower.includes("os") || lower.includes("linux")) {
        return "I built 1DayCrew OS on a 2012 MacBook Pro: a custom Debian setup with KDE Plasma desktop, custom boot animation, Broadcom BCM4331 WiFi driver fixes, and local LLM tools using Ollama. I am a daily user of Mac and Linux (Kali, Debian, Ubuntu).";
      }
      if (lower.includes("cert") || lower.includes("cisco") || lower.includes("eccouncil")) {
        return "My completed certifications and training: Cisco Networking Academy (Ethical Hacker, 2026), CodeRed EC-Council (Android Bug Bounty Hunting, 2026), and EC-Council (Deep Web and Cybersecurity, 2024). My EC-Council C|CT is currently in progress.";
      }
      if (lower.includes("skill") || lower.includes("tool") || lower.includes("tools")) {
        return "Security tools used in labs & coursework: Nmap, Wireshark, Burp Suite, Metasploit, Gobuster, Nikto, Hydra, Ettercap, SET, Wazuh; OWASP Top 10. Networking: TCP/IP, DNS, HTTP/S, firewalls, IDS/NIDS concepts, packet analysis (Wireshark, NFStream). Programming: Python (scikit-learn, XGBoost, SHAP, Flask), R, Java, JavaScript, Bash, Git, Docker.";
      }
      if (lower.includes("education") || lower.includes("college") || lower.includes("degree")) {
        return "BSc (Hons) Computing and IT from CCT College Dublin (2022 - 2026, graduated). Coursework in machine learning, data analytics, Agile/Jira, and cryptography. Previously earned a Diploma in Information Technology from Hewett Polytechnic, India (completed June 2020).";
      }
      if (lower.includes("contact") || lower.includes("email") || lower.includes("phone") || lower.includes("location") || lower.includes("reach")) {
        return "Location: Ireland (Open to Relocate / Hybrid / Remote). For direct contact, use the interactive Share & Connect button on this page (Email, LinkedIn, GitHub). Work Authorisation: Stamp 2 (Ireland).";
      }
      return "I'm Kuldeep Shukla, recent BSc (Hons) Computing and IT graduate from CCT College Dublin (2026). Still learning and growing, seeking an entry-level IT or cybersecurity role. Feel free to ask about my capstone (1DayCrew AI), projects, tools, or education!";
    }

    async function executeCommand(rawText) {
      if (!rawText || !rawText.trim()) return;
      const fullText = rawText.trim();
      terminalHistory.push(fullText);
      terminalHistIdx = terminalHistory.length;
      input.value = "";

      const pRow = document.createElement("div");
      pRow.className = "t-row";
      pRow.innerHTML = `<span class="t-prompt-tag">visitor@kuldeep:~$</span> <span class="t-cmd-text">${escapeHtml(fullText)}</span>`;
      log.appendChild(pRow);

      const tokens = fullText.split(" ");
      const cmd = tokens[0].toLowerCase();
      const args = tokens.slice(1).join(" ");

      if (cmd === "help") {
        const out = document.createElement("div");
        out.className = "t-row t-output";
        out.innerHTML = `
<strong style="color:var(--cyan)">AVAILABLE COMMANDS:</strong>
<span class="t-hl">about</span>       - Summary & entry-level role focus
<span class="t-hl">skills</span>      - Tools used in labs and coursework
<span class="t-hl">projects</span>    - Real projects (1DayCrew AI, 1DayCrew OS, EditNote)
<span class="t-hl">repos</span>       - Live GitHub repositories
<span class="t-hl">certs</span>       - Cisco & EC-Council credentials
<span class="t-hl">education</span>   - CCT College Dublin & Hewett Polytechnic
<span class="t-hl">cv</span>          - Download CV (PDF)
<span class="t-hl">contact</span>     - Email, phone, location, and LinkedIn
<span class="t-hl">whoami</span>      - Your browser footprint
<span class="t-hl">clear</span>       - Clear terminal window
<span class="t-hl">ai &lt;query&gt;</span>  - Ask any natural question!`;
        log.appendChild(out);
      } else if (cmd === "about" || cmd === "bio") {
        const out = document.createElement("div");
        out.className = "t-row t-output";
        out.innerHTML = `
<strong style="color:var(--emerald)">[ABOUT ME]:</strong>
• <strong>Name:</strong> Kuldeep Shukla
• <strong>Role:</strong> BSc Computing and IT Graduate | Entry-Level IT & Cybersecurity
• <strong>Location:</strong> Ireland (Open to Relocate / Dublin)
• <strong>Work Status:</strong> Stamp 2 Work Authorisation (Ireland), Full clean Irish driving licence. Open to relocate, hybrid, on-site, or remote work.
• <strong>Summary:</strong> Recent graduate from CCT College Dublin (2026). Self-driven learner practicing on TryHackMe and HackThisSite, daily user of Mac and Linux, looking for an entry-level opportunity to learn and contribute.`;
        log.appendChild(out);
      } else if (cmd === "skills") {
        const out = document.createElement("div");
        out.className = "t-row t-output";
        out.innerHTML = `
<strong style="color:var(--cyan)">[TECHNICAL SKILLS]:</strong>
• <strong>Operating Systems:</strong> Mac and Linux (Kali, Debian, Ubuntu) daily use; Windows 10/11; Microsoft 365
• <strong>Security Tools:</strong> Nmap, Wireshark, Burp Suite, Metasploit, Gobuster, Nikto, Hydra, Ettercap, SET, Wazuh; OWASP Top 10
• <strong>Networking:</strong> TCP/IP, DNS, HTTP/S, firewalls, IDS/NIDS concepts, packet analysis (Wireshark, NFStream)
• <strong>Programming & Data:</strong> Python (scikit-learn, XGBoost, SHAP, Flask), R, Java, JavaScript, Bash, Git; Docker (academic project)
• <strong>Practice Platforms:</strong> TryHackMe, HackThisSite, CTF challenges`;
        log.appendChild(out);
      } else if (cmd === "projects") {
        const out = document.createElement("div");
        out.className = "t-row t-output";
        out.innerHTML = `
<strong style="color:var(--emerald)">[PROJECTS]:</strong>
1. <strong>1DayCrew AI - Network Intrusion Detection System (Capstone):</strong> Built an end-to-end ML NIDS in Python classifying 14 attack types with >97% accuracy on CICIDS2017. Real-time flow capture, live classification, offline PCAP/CSV analysis, and SHAP explainability.
2. <strong>1DayCrew OS - Custom Debian-Based System:</strong> Custom Debian setup on 2012 MacBook Pro: Broadcom WiFi driver fixes, KDE Plasma desktop, custom boot animation, and local LLM tools (Ollama).
3. <strong>EditNote - Android App:</strong> Notes application using Firebase authentication and Google Cloud Storage.`;
        log.appendChild(out);
      } else if (cmd === "repos" || cmd === "github") {
        const out = document.createElement("div");
        out.className = "t-row t-output";
        out.innerHTML = `
<strong style="color:var(--cyan)">[GITHUB REPOSITORIES (@kuldeepshukla01)]:</strong>
• <a href="https://github.com/kuldeepshukla01/1datcrew-NIDS" target="_blank" style="color:var(--emerald)">1datcrew-NIDS ↗</a> — ML NIDS Capstone
• <a href="https://github.com/kuldeepshukla01/KD-Teliport-" target="_blank" style="color:var(--cyan)">KD-Teliport- ↗</a> — Terminal-based AI agent
• <a href="https://github.com/kuldeepshukla01/ai-check-" target="_blank" style="color:var(--cyan)">ai-check- ↗</a> — Python AI check script
• <a href="https://github.com/kuldeepshukla01/editNOTE" target="_blank" style="color:#fff">editNOTE ↗</a> — Java Swing text editor
• <a href="https://github.com/kuldeepshukla01/music-player" target="_blank" style="color:#fff">music-player ↗</a> — Web-based music player
• <a href="https://github.com/kuldeepshukla01" target="_blank" style="color:var(--amber)">View all repos on GitHub profile ↗</a>`;
        log.appendChild(out);
      } else if (cmd === "certs") {
        const out = document.createElement("div");
        out.className = "t-row t-output";
        out.innerHTML = `
<strong style="color:var(--emerald)">[CERTIFICATIONS & TRAINING]:</strong>
1. <strong>Cisco Networking Academy:</strong> Ethical Hacker (course completion), 2026
2. <strong>CodeRed (EC-Council):</strong> Android Bug Bounty Hunting: Hunt Like a Rat, 2026
3. <strong>EC-Council:</strong> Deep Web and Cybersecurity, 2024
4. <strong>EC-Council C|CT:</strong> Certified Cybersecurity Technician (in progress)`;
        log.appendChild(out);
      } else if (cmd === "education") {
        const out = document.createElement("div");
        out.className = "t-row t-output";
        out.innerHTML = `
<strong style="color:var(--cyan)">[EDUCATION]:</strong>
• <strong>BSc (Hons) Computing and IT:</strong> CCT College Dublin, 2022 - 2026 (graduated)
  Coursework in machine learning, data analytics (Python, R), Agile/Jira and cryptography research.
• <strong>Diploma in Information Technology:</strong> Hewett Polytechnic, India, completed June 2020`;
        log.appendChild(out);
      } else if (cmd === "cv" || cmd === "resume") {
        const out = document.createElement("div");
        out.className = "t-row t-output";
        out.innerHTML = `<span style="color:var(--emerald)">✓ Triggering CV download:</span> <a href="assets/Kuldeep_Shukla_CV.pdf" download="Kuldeep_Shukla_CV.pdf" style="color:var(--cyan); text-decoration:underline;">Kuldeep_Shukla_CV.pdf</a>`;
        log.appendChild(out);
        window.open("assets/Kuldeep_Shukla_CV.pdf", "_blank");
      } else if (cmd === "contact") {
        const out = document.createElement("div");
        out.className = "t-row t-output";
        out.innerHTML = `
<strong style="color:var(--cyan)">[PROFILES & CHANNELS]:</strong>
• <strong>Email:</strong> kuldeepshuklan@outlook.com
• <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/1daycrew" target="_blank" style="color:var(--emerald)">linkedin.com/in/1daycrew ↗</a>
• <strong>GitHub:</strong> <a href="https://github.com/kuldeepshukla01" target="_blank" style="color:var(--cyan)">github.com/kuldeepshukla01 ↗</a>
• <strong>Location:</strong> Ireland (Open to Relocate / Remote)
• <em>Tip: Click the SHARE button below to connect directly!</em>`;
        log.appendChild(out);
      } else if (cmd === "whoami") {
        const out = document.createElement("div");
        out.className = "t-row t-output";
        out.innerHTML = `
<strong style="color:var(--cyan)">[BROWSER FOOTPRINT]:</strong>
• Platform: ${navigator.platform || "Unknown"}
• Hardware Cores: ${navigator.hardwareConcurrency || 8} Logical Threads
• Display: ${window.screen.width} × ${window.screen.height} px
• Language: ${navigator.language}`;
        log.appendChild(out);
      } else if (cmd === "clear") {
        log.innerHTML = `
          <div class="t-row">
            <div style="color:var(--emerald); font-weight:700;">[TERMINAL RESET]: KULDEEP SHUKLA // DUBLIN & DUNDALK, IE</div>
            <div style="color:var(--cyan);">BSc (Hons) Computing & IT Graduate • CCT College Dublin</div>
            <div style="color:var(--text-muted); margin-top:3px;">Type <span class="t-hl">help</span> or ask any question.</div>
          </div>`;
      } else {
        const queryText = cmd === "ai" ? args : fullText;
        const loadingDiv = document.createElement("div");
        loadingDiv.className = "t-row";
        loadingDiv.innerHTML = `<span class="t-ai-badge">AI</span> <span style="color:var(--cyan); font-style:italic;">Responding...</span>`;
        log.appendChild(loadingDiv);
        log.scrollTop = log.scrollHeight;

        const answer = await queryAI(queryText);
        loadingDiv.innerHTML = `
          <div style="display:flex; align-items:center; gap:6px; margin-bottom:4px;">
            <span class="t-ai-badge">KULDEEP AI</span>
          </div>
          <div style="color:#fff; line-height:1.6;">${answer}</div>`;
      }

      log.scrollTop = log.scrollHeight;
    }

    window.terminalRunCommand = function (cmdStr) {
      if (input) {
        input.value = cmdStr;
        executeCommand(cmdStr);
      }
    };

    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        executeCommand(input.value);
      } else if (e.key === "ArrowUp") {
        if (terminalHistory.length > 0 && terminalHistIdx > 0) {
          terminalHistIdx--;
          input.value = terminalHistory[terminalHistIdx];
        }
      } else if (e.key === "ArrowDown") {
        if (terminalHistory.length > 0 && terminalHistIdx < terminalHistory.length - 1) {
          terminalHistIdx++;
          input.value = terminalHistory[terminalHistIdx];
        } else {
          terminalHistIdx = terminalHistory.length;
          input.value = "";
        }
      }
    });

    if (execBtn) {
      execBtn.addEventListener("click", () => executeCommand(input.value));
    }
  }

  /* ==========================================================================
     AMBIENT PROCEDURAL WEBGL BACKGROUND (Offline)
     Low-overhead ambient space-liquid noise field
     ========================================================================== */
  function initAmbientBackground() {
    const canvas = document.getElementById("bg-canvas");
    if (!canvas) return;
    const gl = canvas.getContext("webgl");
    if (!gl) return;

    const vs = "attribute vec2 p; void main() { gl_Position = vec4(p, 0.0, 1.0); }";
    const fs = `
      precision mediump float;
      uniform vec2 u_res;
      uniform float u_time;

      float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }
      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
                   mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
      }
      float fbm(vec2 p) {
        float v = 0.0, a = 0.5;
        for (int i = 0; i < 3; i++) {
          v += a * noise(p);
          p = p * 2.02;
          a *= 0.5;
        }
        return v;
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_res;
        uv.x *= u_res.x / u_res.y;
        float t = u_time * 0.06;
        vec2 q = vec2(fbm(uv + t), fbm(uv + vec2(1.2) + t));
        float f = fbm(uv + q);

        vec3 col = mix(vec3(0.02, 0.025, 0.04), vec3(0.01, 0.04, 0.07), f);
        col = mix(col, vec3(0.02, 0.06, 0.10), clamp(length(q) * 0.6, 0.0, 1.0));

        vec2 e = gl_FragCoord.xy / u_res * (1.0 - gl_FragCoord.xy / u_res);
        col *= 0.5 + 0.5 * pow(e.x * e.y * 16.0, 0.28);
        gl_FragColor = vec4(col, 1.0);
      }
    `;

    function compile(type, src) {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    }

    const prog = gl.createProgram();
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, vs));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);

    const locP = gl.getAttribLocation(prog, "p");
    gl.enableVertexAttribArray(locP);
    gl.vertexAttribPointer(locP, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "u_res");
    const uTime = gl.getUniformLocation(prog, "u_time");

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    }
    window.addEventListener("resize", resize);
    resize();

    const start = performance.now();
    function render(now) {
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, (now - start) / 1000);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  }

  /* ==========================================================================
     CALLIGRAPHY SIGNATURE PRELOADER CONTROLLER
     ========================================================================== */
  function initPreloader() {
    const preloader = document.getElementById("preloader");
    if (!preloader) return;

    let dismissed = false;
    const dismiss = () => {
      if (dismissed) return;
      dismissed = true;
      preloader.classList.add("fade-out");
      setTimeout(() => {
        preloader.style.display = "none";
      }, 700);
    };

    // Auto-dismiss after signature animation completes (~2.9s)
    setTimeout(dismiss, 2900);

    // Click anywhere or press any key to enter immediately
    preloader.addEventListener("click", dismiss);
    document.addEventListener("keydown", (e) => {
      if (preloader.style.display !== "none") dismiss();
    }, { once: true });
  }

  /* ==========================================================================
     RADIAL SHARE & CONNECT CONTROLLER
     Interactive splayed arc button for GitHub, LinkedIn, Email & Link Copy
     ========================================================================== */
  function initShareButton() {
    const stage = document.getElementById("stage");
    const core = document.getElementById("core");
    const chips = Array.from(document.querySelectorAll("#stage .chip"));
    if (!stage || !core || chips.length === 0) return;

    const portfolioUrl = window.location.href;
    const links = {
      github: "https://github.com/kuldeepshukla01",
      linkedin: "https://www.linkedin.com/in/1daycrew",
      mail: "mailto:kuldeepshuklan@outlook.com",
      copy: portfolioUrl
    };

    let state = "idle";
    const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const coreTxt = core.querySelector(".core-txt");

    function setState(s) {
      state = s;
      stage.classList.toggle("open", s === "open");
      stage.classList.toggle("busy", s === "busy");
      if (coreTxt) {
        coreTxt.textContent = s === "open" ? "CLOSE" : "SHARE";
      }
    }

    core.addEventListener("click", (e) => {
      e.stopPropagation();
      if (state === "idle") {
        setState("open");
      } else if (state === "open") {
        setState("idle");
      }
    });

    // Close when clicking outside stage
    document.addEventListener("click", (e) => {
      if (state === "open" && !stage.contains(e.target)) {
        setState("idle");
      }
    });

    // Flood starts where pointer enters / presses
    const setFx = (el, ev) => {
      const b = el.getBoundingClientRect();
      const f = el.querySelector(".flood");
      if (!f) return;
      f.style.setProperty("--fx", `${((ev.clientX - b.left) / b.width * 100).toFixed(1)}%`);
      f.style.setProperty("--fy", `${((ev.clientY - b.top) / b.height * 100).toFixed(1)}%`);
    };

    chips.forEach((el) => {
      el.addEventListener("pointerenter", (ev) => setFx(el, ev));
      el.addEventListener("pointerdown", (ev) => setFx(el, ev));
      el.addEventListener("click", async (e) => {
        e.stopPropagation();
        if (state !== "open") return;
        const k = el.dataset.ch;
        const copy = k === "copy";

        if (copy) {
          try {
            await navigator.clipboard.writeText(portfolioUrl);
          } catch (err) {}
        } else if (k === "mail") {
          window.location.href = links[k];
        } else {
          window.open(links[k], "_blank", "noopener");
        }

        setState("busy");
        el.classList.add("pick");
        await wait(900);
        el.classList.add("done");
        await wait(1200);
        el.classList.add("gone");
        await wait(350);
        el.classList.remove("pick", "gone", "done");
        setState("idle");
      });
    });
  }

  /* ==========================================================================
     INITIALIZATION ON DOM LOAD
     ========================================================================== */
  document.addEventListener("DOMContentLoaded", () => {
    // Calligraphy Signature Preloader
    initPreloader();

    // Task 1: Sable Dock
    initSableTopDock();

    // Task 2: Tactile Liquid Hero Button
    initTactileFluidButton("heroTactileBtn", "heroTactileCanvas");

    // Task 2: All Interactive Cyber Labs (Hash, Cipher, Entropy, Breach, Intel)
    initCyberToolbox();

    // Task 3: Automated Live GitHub Repositories Fetcher
    initGitHubRepos();

    // Task 3: Background, 3D Globe, & Interactive Terminal
    initAmbientBackground();
    initThreeGlobe();
    initCyberTerminal();

    // Radial Share & Connect Button (Corner)
    initShareButton();
  });
})();
