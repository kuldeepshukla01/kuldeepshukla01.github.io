/* 
  ── DECUPLED INTERACTIVE SCRIPTS ──
  Designed for: 1Day_crew.DEV (Kuldeep Shukla)
  Features: Matrix Rain, Mobile Navigation, Scroll Effects, Fingerprinting, GitHub API Fetch
*/

// Initialize EmailJS contact form (loaded globally in HTML)
if (typeof emailjs !== 'undefined') {
  emailjs.init("S_prJ5TjZ3DcUdmQW");
}

const pageLoadTime = Date.now();

// ── IP & LOCATION & VPN DETECT API ──
function runFingerprinting() {
  // WebGL query
  const gpu = (() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) return 'WebGL Blocked';
      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      if (!debugInfo) return 'Supported (No info)';
      const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
      return renderer ? renderer.replace(/ANGLE \([^\)]+\)/g, '').trim() : 'Unknown GPU';
    } catch (e) {
      return 'Restricted';
    }
  })();

  // Canvas signature
  const canvasHash = (() => {
    try {
      const canvas = document.createElement('canvas');
      canvas.width = 150;
      canvas.height = 30;
      const ctx = canvas.getContext('2d');
      if (!ctx) return 'Not supported';
      ctx.textBaseline = "top";
      ctx.font = "12px 'Fira Code', monospace";
      ctx.fillStyle = "#00f0ff";
      ctx.fillRect(5, 5, 140, 2);
      ctx.fillStyle = "#ff007a";
      ctx.fillText("1day_crew.dev", 10, 10);
      ctx.fillText("🕵️🔐", 100, 8);
      const dataUrl = canvas.toDataURL();
      let hash = 0;
      for (let i = 0; i < dataUrl.length; i++) {
        hash = ((hash << 5) - hash) + dataUrl.charCodeAt(i);
        hash |= 0;
      }
      return Math.abs(hash).toString(16).toUpperCase();
    } catch (e) {
      return 'Blocked';
    }
  })();

  // User agent parsing
  const uaParsed = (() => {
    const ua = navigator.userAgent;
    let os = 'Unknown OS';
    let browser = 'Unknown Browser';

    if (ua.indexOf('Win') !== -1) os = 'Windows';
    else if (ua.indexOf('Mac') !== -1 && !('ontouchend' in document)) os = 'macOS';
    else if (ua.indexOf('Linux') !== -1) os = 'Linux';
    else if (ua.indexOf('Android') !== -1) os = 'Android';
    else if (/iPad|iPhone|iPod/.test(ua) || (ua.indexOf('Mac') !== -1 && 'ontouchend' in document)) os = 'iOS';

    if (ua.indexOf('Firefox') !== -1) browser = 'Firefox';
    else if (ua.indexOf('SamsungBrowser') !== -1) browser = 'Samsung Browser';
    else if (ua.indexOf('Opera') !== -1 || ua.indexOf('OPR') !== -1) browser = 'Opera';
    else if (ua.indexOf('Edge') !== -1 || ua.indexOf('Edg') !== -1) browser = 'Edge';
    else if (ua.indexOf('Chrome') !== -1) browser = 'Chrome';
    else if (ua.indexOf('Safari') !== -1) browser = 'Safari';

    const deviceType = /Mobi|Android|iPhone|iPad/i.test(ua) ? 'Mobile / Tablet' : 'Desktop';
    return { os, browser, deviceType };
  })();

  // Fetch IP details
  fetch('https://ipapi.co/json/')
    .then(r => r.json())
    .then(data => {
      const ipText = `${data.ip} | ${data.city}, ${data.region}, ${data.country_name} | ISP: ${data.org}`;
      const vpn = (data.org || '').match(
        /vpn|proxy|hosting|cloud|digitalocean|aws|azure|linode|vultr|ovh|tor/i
      ) ? '⚠ POSSIBLE VPN/PROXY' : '✓ CLEAN';

      // Populate hidden inputs for contact form
      const ipField = document.getElementById('fp_ip');
      const vpnField = document.getElementById('fp_vpn');
      if (ipField) ipField.value = ipText;
      if (vpnField) vpnField.value = vpn;

      // Populate Threat Intel tab UI Elements
      const intelIp = document.getElementById('intel-ip');
      const intelVpn = document.getElementById('intel-vpn');
      if (intelIp) intelIp.innerText = ipText;
      if (intelVpn) {
        intelVpn.innerText = vpn;
        intelVpn.style.color = vpn.includes('CLEAN') ? 'var(--accent-green)' : '#ff5f56';
      }
    })
    .catch(() => {
      const ipField = document.getElementById('fp_ip');
      const vpnField = document.getElementById('fp_vpn');
      if (ipField) ipField.value = 'Could not fetch IP';
      if (vpnField) vpnField.value = 'Unknown';

      const intelIp = document.getElementById('intel-ip');
      const intelVpn = document.getElementById('intel-vpn');
      if (intelIp) intelIp.innerText = 'Could not fetch IP';
      if (intelVpn) intelVpn.innerText = 'Unknown';
    });

  // Battery Status initialization
  const batteryField = document.getElementById('intel-battery');
  if (batteryField) {
    if (typeof navigator.getBattery === 'function') {
      navigator.getBattery().then(battery => {
        const updateBattery = () => {
          const pct = Math.round(battery.level * 100);
          const chg = battery.charging ? '⚡ Charging' : '🔌 Discharging';
          batteryField.innerText = `${pct}% (${chg})`;
        };
        updateBattery();
        battery.addEventListener('levelchange', updateBattery);
        battery.addEventListener('chargingchange', updateBattery);
      }).catch(() => {
        batteryField.innerText = 'API Blocked';
      });
    } else {
      batteryField.innerText = 'Not Supported';
    }
  }

  // Network connection data
  const connField = document.getElementById('intel-conn');
  if (connField) {
    const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (conn) {
      const speed = conn.downlink ? `${conn.downlink} Mbps` : 'Unknown Speed';
      const rtt = conn.rtt ? `${conn.rtt}ms RTT` : 'Unknown Latency';
      const type = conn.effectiveType ? conn.effectiveType.toUpperCase() : 'Cellular/WiFi';
      connField.innerText = `${type} (${speed} | ${rtt})`;
    } else {
      connField.innerText = 'Not Supported';
    }
  }

  // Static browser details
  const ua = navigator.userAgent;
  const screenText = `${screen.width}x${screen.height} | ${screen.colorDepth}bit | ratio: ${window.devicePixelRatio}x`;
  const tz = `${Intl.DateTimeFormat().resolvedOptions().timeZone} | UTC${-(new Date().getTimezoneOffset() / 60)}`;
  const lang = `${navigator.language} | ${navigator.languages.join(', ')}`;
  const ref = document.referrer || 'Direct / No referrer';

  // Fill contact form hidden inputs
  const uaField = document.getElementById('fp_ua');
  const screenField = document.getElementById('fp_screen');
  const tzField = document.getElementById('fp_tz');
  const langField = document.getElementById('fp_lang');
  const refField = document.getElementById('fp_ref');

  if (uaField) uaField.value = ua;
  if (screenField) screenField.value = screenText;
  if (tzField) tzField.value = tz;
  if (langField) langField.value = lang;
  if (refField) refField.value = ref;

  // Fill Threat Intel tab UI
  const intelDevice = document.getElementById('intel-device');
  const intelOs = document.getElementById('intel-os');
  const intelBrowser = document.getElementById('intel-browser');
  const intelTz = document.getElementById('intel-tz');
  const intelCores = document.getElementById('intel-cores');
  const intelRam = document.getElementById('intel-ram');
  const intelGpu = document.getElementById('intel-gpu');
  const intelScreen = document.getElementById('intel-screen');
  const intelCanvas = document.getElementById('intel-canvas');
  const intelBot = document.getElementById('intel-bot');
  const intelRef = document.getElementById('intel-ref');

  if (intelDevice) intelDevice.innerText = uaParsed.deviceType;
  if (intelOs) intelOs.innerText = uaParsed.os;
  if (intelBrowser) intelBrowser.innerText = uaParsed.browser;
  if (intelTz) intelTz.innerText = tz;
  if (intelRef) intelRef.innerText = ref;

  // Hardware metrics
  if (intelCores) intelCores.innerText = `${navigator.hardwareConcurrency || 'Unknown'} Cores`;
  if (intelRam) intelRam.innerText = navigator.deviceMemory ? `~${navigator.deviceMemory} GB` : 'Not Supported';
  if (intelGpu) {
    intelGpu.innerText = gpu;
    intelGpu.title = gpu; // tooltip for full GPU path
  }
  if (intelScreen) intelScreen.innerText = screenText;
  if (intelCanvas) intelCanvas.innerText = canvasHash;

  // Webdriver automation integrity audit
  if (intelBot) {
    if (navigator.webdriver) {
      intelBot.innerText = '⚠ HEADLESS (Automated)';
      intelBot.style.color = '#ff5f56';
    } else {
      intelBot.innerText = '✓ Genuine (Clean)';
      intelBot.style.color = 'var(--accent-green)';
    }
  }

  // Real-time page timer loop
  const intelTime = document.getElementById('intel-time');
  if (intelTime) {
    setInterval(() => {
      const elapsed = Math.round((Date.now() - pageLoadTime) / 1000);
      intelTime.innerText = `${elapsed}s on page`;
    }, 1000);
  }
}

// ── CONTACT FORM HANDLER ──
function initContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('status');
  if (!form) return;

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Honeypot check (hidden field to trap bots)
    const honeypot = form.querySelector('input[name="honeypot"]');
    if (honeypot && honeypot.value) {
      form.reset();
      return;
    }

    // Email validation
    const emailInput = form.querySelector('input[name="email"]');
    const emailVal = emailInput ? emailInput.value.trim() : '';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(emailVal)) {
      if (status) {
        status.style.color = '#FF3232';
        status.innerText = '>> ERROR: Enter a valid email address.';
      }
      return;
    }

    // Time-on-page checking
    const fpTimeField = document.getElementById('fp_time');
    const secs = Math.round((Date.now() - pageLoadTime) / 1000);
    if (fpTimeField) {
      fpTimeField.value = `${secs}s on page — ${secs < 4 ? '⚠ SUSPICIOUS (possible bot)' : '✓ OK'}`;
    }

    const btn = form.querySelector('button[type="submit"]');
    if (btn) {
      btn.disabled = true;
      const btnSpan = btn.querySelector('span');
      if (btnSpan) btnSpan.innerText = 'TRANSMITTING...';
    }
    
    if (status) {
      status.style.color = '#00DCC8';
      status.innerText = 'Transmitting...';
    }

    if (typeof emailjs !== 'undefined') {
      emailjs.sendForm('service_ccpimhj', 'template_pxr2b9p', this)
        .then(() => {
          if (status) {
            status.style.color = '#00FF46';
            status.innerText = ">> Message sent successfully to Kuldeep Shukla '@1day_crew'";
          }
          form.reset();
          if (btn) {
            btn.disabled = false;
            const btnSpan = btn.querySelector('span');
            if (btnSpan) btnSpan.innerText = 'SEND TRANSMISSION >';
          }
        }, (err) => {
          if (status) {
            status.style.color = '#FF3232';
            status.innerText = '>> Failed to send message. Please try again.';
          }
          console.error(err);
          if (btn) {
            btn.disabled = false;
            const btnSpan = btn.querySelector('span');
            if (btnSpan) btnSpan.innerText = 'SEND TRANSMISSION >';
          }
        });
    } else {
      if (status) {
        status.style.color = '#FF3232';
        status.innerText = '>> Failed: EmailJS library missing.';
      }
      if (btn) {
        btn.disabled = false;
        const btnSpan = btn.querySelector('span');
        if (btnSpan) btnSpan.innerText = 'SEND TRANSMISSION >';
      }
    }
  });
}

// ── MATRIX RAIN EFFECTS (CYBER CYAN) ──
function initMatrixRain() {
  const canvas = document.getElementById('matrix-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const fontSize = 13;
  const colSpacing = fontSize * 1.1;
  let cols, drops, speeds;

  function initDrops() {
    cols = Math.floor(canvas.width / colSpacing);
    drops = Array(cols).fill(0).map(() => Math.random() * -(canvas.height / fontSize) * 2);
    speeds = Array(cols).fill(0).map(() => 0.4 + Math.random() * 0.9);
  }

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initDrops();
  }
  
  resize();
  window.addEventListener('resize', resize);

  const chars = 'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ0123456789';
  const MAX_TRAIL = 32;

  function drawMatrix() {
    // Draws over canvas keeping a transparent dark background layer
    ctx.fillStyle = 'rgba(7, 9, 19, 0.025)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < cols; i++) {
      const x = i * colSpacing;
      const y = drops[i] * fontSize;

      // Glowing white lead head
      ctx.shadowBlur = 6;
      ctx.shadowColor = 'rgba(0, 240, 255, 0.9)';
      ctx.fillStyle = '#ffffff';
      ctx.font = `${fontSize}px "Fira Code", monospace`;
      ctx.fillText(chars[Math.floor(Math.random() * chars.length)], x, y);
      ctx.shadowBlur = 0;

      // Fading trailing drops
      const trailLength = 18 + Math.floor(Math.random() * 14);
      for (let t = 1; t < trailLength; t++) {
        const progress = t / trailLength;
        const alpha = Math.pow(1 - progress, 1.4) * 0.92;
        const g = Math.floor(180 * (1 - progress));
        const b = Math.floor(255 * (1 - progress));
        
        ctx.fillStyle = `rgba(0, ${g}, ${b}, ${alpha})`;
        ctx.font = `${fontSize}px "Fira Code", monospace`;
        const ty = y - t * fontSize;
        if (ty > -fontSize) {
          ctx.fillText(chars[Math.floor(Math.random() * chars.length)], x, ty);
        }
      }

      // Restart column drop once off-screen
      if (drops[i] * fontSize > canvas.height + MAX_TRAIL * fontSize) {
        if (Math.random() > 0.96) {
          drops[i] = -Math.floor(Math.random() * 20);
        }
      }
      drops[i] += speeds[i];
    }
  }

  setInterval(drawMatrix, 40);
}

// ── NAVIGATION CONTROLS ──
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const btn = document.getElementById('mobile-menu-btn');
  if (!menu || !btn) return;
  
  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
    btn.innerText = '☰';
  } else {
    menu.style.display = 'flex';
    btn.innerText = '✕';
  }
}

function initNavbarScroll() {
  const nav = document.querySelector('nav');
  if (!nav) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
}

// ── DYNAMIC GITHUB REPOSITORIES FETCH ──
const fallbackProjects = [
  {
    name: 'Matrix Scanner',
    description: 'Port & vulnerability scanner with real-time terminal UI and adaptive fingerprinting.',
    html_url: 'https://github.com/kuldeepshukla01/1day_crew.github.io',
    language: 'Python',
    stargazers_count: 5
  },
  {
    name: 'CryptoShell',
    description: 'A secure encrypted shell for remote hacking challenges with end-to-end cipher tunneling.',
    html_url: 'https://github.com/kuldeepshukla01',
    language: 'C++',
    stargazers_count: 3
  },
  {
    name: 'ReconGenius',
    description: 'Automated reconnaissance toolkit for bug bounty hunters with OSINT pipeline integration.',
    html_url: 'https://github.com/kuldeepshukla01',
    language: 'Shell',
    stargazers_count: 8
  }
];

function formatRepoName(name) {
  return name
    .replace(/[-_]/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function getRepoIcon(name, lang) {
  name = name.toLowerCase();
  lang = (lang || '').toLowerCase();
  
  if (name.includes('scan') || name.includes('recon') || name.includes('sniff') || name.includes('visual')) return '📡';
  if (name.includes('crypto') || name.includes('cipher') || name.includes('key') || name.includes('ca1') || name.includes('ca2')) return '🔒';
  if (name.includes('shell') || name.includes('terminal') || name.includes('ssh')) return '🐚';
  if (name.includes('exploit') || name.includes('hack') || name.includes('bypass') || name.includes('payload') || name.includes('ml')) return '💀';
  
  if (lang === 'python') return '🐍';
  if (lang === 'javascript' || lang === 'typescript') return '⚡';
  if (lang === 'html' || lang === 'css') return '🌐';
  if (lang === 'java' || lang === 'kotlin') return '☕';
  if (lang === 'c' || lang === 'c++' || lang === 'rust' || lang === 'go') return '⚙️';
  
  return '📁';
}

function renderProjects(repos) {
  const grid = document.getElementById('github-projects-grid');
  if (!grid) return;
  grid.innerHTML = '';
  
  repos.forEach(repo => {
    const icon = getRepoIcon(repo.name, repo.language);
    const langTag = repo.language ? `<span class="project-lang-tag">${repo.language}</span>` : '';
    const desc = repo.description || 'No description provided. Click below to view the source code and details on GitHub.';
    
    const card = document.createElement('div');
    card.className = 'project-card glass';
    // Adding brackets child for hover bracket trace effect
    card.innerHTML = `
      <div class="corner-brackets"></div>
      <div class="project-icon-wrap">${icon}</div>
      <h3>${formatRepoName(repo.name)}</h3>
      <div class="project-meta">
        ${langTag}
        <span class="project-stars-tag">⭐ ${repo.stargazers_count || 0}</span>
      </div>
      <p>${desc}</p>
      <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="project-link">
        GitHub Repo <span>→</span>
      </a>
    `;
    grid.appendChild(card);
  });
}

async function fetchGitHubProjects() {
  const username = 'kuldeepshukla01';
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=pushed&per_page=12`);
    if (!response.ok) throw new Error('GitHub API request failed');
    const repos = await response.json();
    const filteredRepos = repos.filter(repo => !repo.fork);
    
    if (filteredRepos.length === 0) {
      renderProjects(fallbackProjects);
      return;
    }
    renderProjects(filteredRepos.slice(0, 6));
  } catch (err) {
    console.error('Failed to fetch repos, loading fallbacks:', err);
    renderProjects(fallbackProjects);
  }
}

// ── CUSTOM MOUSE POINTER LOGIC ──
function initCustomCursor() {
  const dot = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  if (!dot || !ring) return;

  // Only run on desktop devices
  if (window.innerWidth <= 768) return;

  let mouseX = 0;
  let mouseY = 0;
  let ringX = 0;
  let ringY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Instantly place internal dot
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
    dot.style.opacity = '1';
    ring.style.opacity = '1';
  });

  // Ease position of outer ring (LERP)
  function animateRing() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;

    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;

    requestAnimationFrame(animateRing);
  }
  animateRing();

  document.addEventListener('mouseleave', () => {
    dot.style.opacity = '0';
    ring.style.opacity = '0';
  });

  // Attach hover styles to all interactive elements
  const hoverSelectors = 'a, button, input, textarea, .btn, .btn-submit, .project-card, .nav-logo, .terminal-dot';
  
  // Use event delegation to dynamically support GitHub cards
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(hoverSelectors)) {
      dot.classList.add('hovered-dot');
      ring.classList.add('hovered-ring');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(hoverSelectors)) {
      dot.classList.remove('hovered-dot');
      ring.classList.remove('hovered-ring');
    }
  });

  // Click active states
  window.addEventListener('mousedown', () => {
    dot.classList.add('active-dot');
    ring.classList.add('active-ring');
  });

  window.addEventListener('mouseup', () => {
    dot.classList.remove('active-dot');
    ring.classList.remove('active-ring');
  });
}

// ── INTERACTIVE TERMINAL CLI LOGIC ──
function focusTerminalInput() {
  const input = document.getElementById('terminal-input');
  if (input) input.focus();
}

function initTerminalCLI() {
  const input = document.getElementById('terminal-input');
  const history = document.getElementById('terminal-history');
  if (!input || !history) return;

  // Print startup hints in developer console
  console.log("%c>> SECURITY TRACE: Encrypted token found inside client resources.", "color: #00f0ff; font-family: monospace; font-size: 13px; font-weight: bold;");
  console.log("%cClue (Base64): RkxBR3sxZGF5X2NyZXdfc2VjcmV0X2RlY29kZWR9", "color: #ff007a; font-family: monospace; font-size: 13px;");
  console.log("Decode this in the about terminal via 'decode [clue]' and run 'submit [decoded_flag]' to solve the challenge!");

  input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      const fullCmd = input.value.trim();
      input.value = '';
      if (!fullCmd) return;

      const args = fullCmd.split(' ');
      const command = args[0].toLowerCase();
      const param = args.slice(1).join(' ');

      // Render command line in CLI
      const cmdLine = document.createElement('div');
      cmdLine.className = 'terminal-line';
      cmdLine.innerHTML = `<span class="terminal-cmd">[root@matrix:~]#</span> <span>${escapeHTML(fullCmd)}</span>`;
      history.appendChild(cmdLine);

      // Render output line
      const outputLine = document.createElement('div');
      outputLine.className = 'terminal-output';

      switch (command) {
        case 'help':
          outputLine.innerHTML = `
            Available commands:<br>
            - <span style="color: var(--accent-cyan)">help</span>: Displays list of options.<br>
            - <span style="color: var(--accent-cyan)">cat profile</span>: Outputs bio summary.<br>
            - <span style="color: var(--accent-cyan)">decode [hash]</span>: Decodes Base64 cipher text.<br>
            - <span style="color: var(--accent-cyan)">submit [flag]</span>: Submit verified flag to unlock reward.<br>
            - <span style="color: var(--accent-cyan)">tools</span>: Navigate directly to the client-side pentest toolbox.<br>
            - <span style="color: var(--accent-cyan)">clear</span>: Wipe terminal logs.
          `;
          break;

        case 'cat':
          if (param === 'profile' || param === '/etc/profile') {
            outputLine.innerText = `I'm Kuldeep, a college student with a passion for cyber defense, penetration testing, and CTF competitions. I love reverse engineering, Linux, open source, and coffee.`;
          } else {
            outputLine.innerHTML = `<span class="terminal-line-input-error">cat: ${escapeHTML(param || 'profile')}: file not found. Run 'cat profile'.</span>`;
          }
          break;

        case 'decode':
          if (!param) {
            outputLine.innerHTML = `<span class="terminal-line-input-error">Usage: decode [base64_string]</span>`;
          } else {
            try {
              const decoded = atob(param.trim());
              outputLine.innerHTML = `Decoded result: <span style="color: var(--accent-green); font-weight: bold;">${escapeHTML(decoded)}</span>`;
            } catch (err) {
              outputLine.innerHTML = `<span class="terminal-line-input-error">Invalid Base64 sequence. Usage: decode RkxBR...</span>`;
            }
          }
          break;

        case 'submit':
          if (!param) {
            outputLine.innerHTML = `<span class="terminal-line-input-error">Usage: submit [flag]</span>`;
          } else if (param.trim() === 'FLAG{1day_crew_secret_decoded}') {
            outputLine.innerHTML = `<span class="terminal-line-input-success">FLAG ACCEPTED: Access authorized. Launching serverless reward panel...</span>`;
            setTimeout(triggerCTFSuccess, 1000);
          } else {
            outputLine.innerHTML = `<span class="terminal-line-input-error">>> ACCESS DENIED: Invalid flag token parameter mismatch.</span>`;
          }
          break;

        case 'tools':
          outputLine.innerHTML = `Scrolling target layout scope to pentest toolbox...`;
          const toolSec = document.getElementById('toolbox');
          if (toolSec) {
            setTimeout(() => {
              toolSec.scrollIntoView({ behavior: 'smooth' });
            }, 500);
          }
          break;

        case 'clear':
          history.innerHTML = '';
          return;

        default:
          outputLine.innerHTML = `<span class="terminal-line-input-error">bash: ${escapeHTML(command)}: command not found. Type 'help' for options.</span>`;
      }

      history.appendChild(outputLine);
      
      const body = document.querySelector('.terminal-body');
      if (body) {
        body.scrollTop = body.scrollHeight;
      }
    }
  });
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}

// ── CYBER TOOLBOX LOGIC ──
let currentCipherMode = 'encode';

function switchToolboxTab(event, tabId) {
  const container = event.target.closest('.toolbox-card');
  if (!container) return;

  const tabs = container.querySelectorAll('.tab-btn');
  const panels = container.querySelectorAll('.tab-panel');

  tabs.forEach(tab => tab.classList.remove('active'));
  panels.forEach(panel => panel.classList.remove('active'));

  event.target.classList.add('active');
  const activePanel = document.getElementById(tabId);
  if (activePanel) activePanel.classList.add('active');
}

// Subtle Crypto Hash generator
async function calculateHashes() {
  const input = document.getElementById('hash-input').value;
  const sha1Field = document.getElementById('hash-sha1');
  const sha256Field = document.getElementById('hash-sha256');
  if (!sha1Field || !sha256Field) return;

  if (!input) {
    sha1Field.innerText = 'Type something to generate hash...';
    sha256Field.innerText = 'Type something to generate hash...';
    return;
  }

  try {
    // SHA-1
    const buffer1 = new TextEncoder().encode(input);
    const hashBuffer1 = await crypto.subtle.digest('SHA-1', buffer1);
    const hex1 = Array.from(new Uint8Array(hashBuffer1)).map(b => b.toString(16).padStart(2, '0')).join('');
    sha1Field.innerText = hex1;

    // SHA-256
    const buffer2 = new TextEncoder().encode(input);
    const hashBuffer2 = await crypto.subtle.digest('SHA-256', buffer2);
    const hex2 = Array.from(new Uint8Array(hashBuffer2)).map(b => b.toString(16).padStart(2, '0')).join('');
    sha256Field.innerText = hex2;
  } catch (err) {
    console.error('Crypto digests failed:', err);
  }
}

function setCipherMode(mode) {
  currentCipherMode = mode;
  
  // Update button highlights
  const controls = document.querySelector('.cipher-controls');
  if (controls) {
    const btns = controls.querySelectorAll('button');
    btns.forEach(btn => {
      if (btn.innerText.toLowerCase().includes(mode)) {
        btn.style.borderColor = 'var(--accent-cyan)';
        btn.style.boxShadow = '0 0 10px rgba(0, 240, 255, 0.15)';
      } else {
        btn.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        btn.style.boxShadow = 'none';
      }
    });
  }
  processCipher();
}

function processCipher() {
  const textarea = document.getElementById('cipher-input');
  const output = document.getElementById('cipher-output');
  if (!textarea || !output) return;

  const value = textarea.value;
  if (!value) {
    output.innerText = 'Output will appear here...';
    return;
  }

  if (currentCipherMode === 'encode') {
    try {
      output.innerText = btoa(unescape(encodeURIComponent(value)));
    } catch (e) {
      output.innerText = 'Error: Encoding failed.';
    }
  } else if (currentCipherMode === 'decode') {
    try {
      output.innerText = decodeURIComponent(escape(atob(value.trim())));
    } catch (e) {
      output.innerText = 'Error: Invalid Base64 sequence.';
    }
  } else if (currentCipherMode === 'rot13') {
    output.innerText = value.replace(/[a-zA-Z]/g, function(c) {
      return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
    });
  }
}

// Password entropy and strength calculations
function analyzePassword() {
  const password = document.getElementById('password-input').value;
  const bar = document.getElementById('strength-bar');
  const label = document.getElementById('strength-label');
  const entropyLabel = document.getElementById('entropy-label');
  const crackTime = document.getElementById('crack-time');
  const audit = document.getElementById('complexity-audit');

  if (!bar || !label || !entropyLabel || !crackTime || !audit) return;

  // Reset HIBP query result
  const hibpResult = document.getElementById('hibp-result');
  if (hibpResult) {
    hibpResult.innerText = 'Not queried.';
    hibpResult.style.color = 'var(--text-muted)';
  }

  if (!password) {
    bar.style.width = '0%';
    label.innerText = 'Too Short';
    label.style.color = 'var(--text-muted)';
    entropyLabel.innerText = '0';
    crackTime.innerText = 'Instantly';
    audit.innerText = 'Too short';
    audit.style.color = 'var(--text-muted)';
    return;
  }

  // Calculate pool size R
  let R = 0;
  if (/[a-z]/.test(password)) R += 26;
  if (/[A-Z]/.test(password)) R += 26;
  if (/[0-9]/.test(password)) R += 10;
  if (/[^a-zA-Z0-9]/.test(password)) R += 33;

  const L = password.length;
  const entropy = Math.round(L * (R > 0 ? Math.log2(R) : 0));
  entropyLabel.innerText = entropy;

  const percent = Math.min(100, Math.round((entropy / 80) * 100));
  bar.style.width = `${percent}%`;

  let rating = 'Weak';
  let color = '#ff5f56';
  let glow = 'rgba(255, 95, 86, 0.4)';

  if (entropy < 28) {
    rating = 'Very Weak';
    color = '#ff5f56';
    glow = 'rgba(255, 95, 86, 0.4)';
  } else if (entropy >= 28 && entropy < 40) {
    rating = 'Weak';
    color = '#ff5f56';
    glow = 'rgba(255, 95, 86, 0.4)';
  } else if (entropy >= 40 && entropy < 60) {
    rating = 'Medium';
    color = '#febc2e';
    glow = 'rgba(254, 188, 46, 0.4)';
  } else if (entropy >= 60 && entropy < 80) {
    rating = 'Strong';
    color = '#27c93f';
    glow = 'rgba(39, 201, 63, 0.4)';
  } else if (entropy >= 80) {
    rating = 'Very Strong';
    color = 'var(--accent-cyan)';
    glow = 'rgba(0, 240, 255, 0.5)';
  }

  label.innerText = rating;
  label.style.color = color;
  bar.style.backgroundColor = color;
  bar.style.boxShadow = `0 0 10px ${glow}`;

  // Time estimates
  const guessesPerSecond = 1e10; // 10 billion guesses/sec
  const totalCombinations = Math.pow(R, L);
  const timeInSeconds = totalCombinations / guessesPerSecond;

  let timeString = 'Instantly';
  if (timeInSeconds < 1) {
    timeString = 'Instantly';
  } else if (timeInSeconds < 60) {
    timeString = `${Math.round(timeInSeconds)} seconds`;
  } else if (timeInSeconds < 3600) {
    timeString = `${Math.round(timeInSeconds / 60)} minutes`;
  } else if (timeInSeconds < 86400) {
    timeString = `${Math.round(timeInSeconds / 3600)} hours`;
  } else if (timeInSeconds < 31536000) {
    timeString = `${Math.round(timeInSeconds / 86400)} days`;
  } else if (timeInSeconds < 31536000 * 1000) {
    timeString = `${Math.round(timeInSeconds / 31536000)} years`;
  } else {
    const power = Math.floor(Math.log10(timeInSeconds / 31536000));
    const base = Math.round((timeInSeconds / 31536000) / Math.pow(10, power));
    timeString = `${base} x 10^${power} years`;
  }
  crackTime.innerText = timeString;

  // Complexity audit checks
  const checks = [];
  if (L < 8) checks.push('Too short (min 8 chars)');
  if (!/[A-Z]/.test(password)) checks.push('Missing uppercase letter');
  if (!/[a-z]/.test(password)) checks.push('Missing lowercase letter');
  if (!/[0-9]/.test(password)) checks.push('Missing number');
  if (!/[^a-zA-Z0-9]/.test(password)) checks.push('Missing special character');

  if (checks.length === 0) {
    audit.innerText = '✓ Safe Complex Structure';
    audit.style.color = 'var(--accent-green)';
  } else {
    audit.innerText = `⚠ ${checks[0]}`;
    audit.style.color = '#ff5f56';
  }
}

// ── HAVE I BEEN PWNED CHECKER (HIBP API via K-Anonymity) ──
async function checkHIBP() {
  const password = document.getElementById('password-input').value;
  const resultField = document.getElementById('hibp-result');
  const btn = document.getElementById('hibp-btn');
  if (!resultField || !btn) return;

  if (!password) {
    resultField.innerText = '⚠ Enter a password first.';
    resultField.style.color = '#ff5f56';
    return;
  }

  btn.disabled = true;
  btn.innerText = 'Querying HIBP...';
  resultField.innerText = 'Querying breach database...';
  resultField.style.color = 'var(--text-muted)';

  try {
    // 1. Generate SHA-1 hash of password
    const msgBuffer = new TextEncoder().encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-1', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('').toUpperCase();

    // 2. Extract first 5 characters and remaining suffix
    const first5 = hashHex.slice(0, 5);
    const suffix = hashHex.slice(5);

    // 3. Query HIBP range API
    const response = await fetch(`https://api.pwnedpasswords.com/range/${first5}`);
    if (!response.ok) throw new Error('HIBP API error');

    const responseText = await response.text();
    
    // 4. Search for the suffix in response
    const lines = responseText.split('\n');
    let leakCount = 0;
    
    for (let line of lines) {
      const parts = line.split(':');
      if (parts[0].trim() === suffix) {
        leakCount = parseInt(parts[1], 10);
        break;
      }
    }

    // 5. Render result
    if (leakCount > 0) {
      resultField.innerHTML = `⚠ PWNED! Found in <strong style="color: #ff5f56">${leakCount.toLocaleString()}</strong> data breaches.`;
      resultField.style.color = '#ff5f56';
    } else {
      resultField.innerHTML = `✓ SECURE! No known database leaks detected.`;
      resultField.style.color = 'var(--accent-green)';
    }
  } catch (err) {
    console.error('HIBP query failed:', err);
    resultField.innerText = '⚠ API Query failed. Try again.';
    resultField.style.color = '#ff5f56';
  } finally {
    btn.disabled = false;
    btn.innerText = 'Check Breach Database (HIBP)';
  }
}

// ── EMAIL BREACH CHECKER (XposedOrNot API Lookup) ──
async function checkEmailBreach() {
  const emailInput = document.getElementById('breach-email-input');
  const resultsDiv = document.getElementById('email-breach-results');
  const statusDiv = document.getElementById('email-breach-status');
  if (!emailInput || !resultsDiv || !statusDiv) return;

  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  if (!email || !emailRegex.test(email)) {
    statusDiv.innerHTML = '<span style="color: #ff5f56">>> ERROR: Enter a valid email address.</span>';
    resultsDiv.style.display = 'none';
    return;
  }

  statusDiv.innerHTML = '<span class="blink">▌</span> Scanning global breach indexes...';
  statusDiv.style.color = 'var(--accent-cyan)';
  resultsDiv.style.display = 'none';

  try {
    const response = await fetch(`https://api.xposedornot.com/v1/breach-analytics?email=${encodeURIComponent(email)}`);
    if (!response.ok) throw new Error('Breach directory response failed');

    const data = await response.json();
    
    // API returns ExposedBreaches as null if no breaches are found
    if (!data.ExposedBreaches || !data.ExposedBreaches.breaches_details) {
      statusDiv.innerHTML = '<span style="color: var(--accent-green); font-weight: bold;">✓ SECURE! This email address was not found in any known public data leaks.</span>';
      return;
    }

    const breaches = data.ExposedBreaches.breaches_details;

    statusDiv.innerHTML = `⚠ ALERT! Found in <strong style="color: #ff5f56">${breaches.length}</strong> public data breaches.`;
    statusDiv.style.color = '#ff5f56';
    resultsDiv.innerHTML = '';

    breaches.forEach(item => {
      const name = item.breach || 'Unknown Leak';
      const date = item.xposed_date || 'Unknown Date';
      const desc = item.details || 'No details provided.';
      const rawCategories = item.xposed_data || '';
      const categories = rawCategories.split(';').map(c => c.trim()).filter(c => c.length > 0);

      const card = document.createElement('div');
      card.className = 'hash-results';
      card.style.marginTop = '16px';
      card.style.textAlign = 'left';
      card.style.border = '1px solid rgba(255, 95, 86, 0.15)';
      card.innerHTML = `
        <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255, 255, 255, 0.05); padding-bottom: 8px; margin-bottom: 10px; flex-wrap: wrap; gap: 8px;">
          <strong style="color: var(--accent-cyan); font-size: 1.05rem;">${escapeHTML(name)}</strong>
          <span style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-muted);">${escapeHTML(date)}</span>
        </div>
        <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 12px; line-height: 1.55;">
          ${desc}
        </p>
        <div style="font-size: 0.82rem; color: var(--text-muted);">
          <strong style="color: var(--accent-pink);">Compromised Data:</strong> 
          <span style="font-family: var(--font-mono); color: var(--text-secondary);">${escapeHTML(categories.join(', '))}</span>
        </div>
      `;
      resultsDiv.appendChild(card);
    });

    resultsDiv.style.display = 'block';
  } catch (err) {
    console.error('Email breach scan failed:', err);
    statusDiv.innerHTML = '<span style="color: #ff5f56">>> ERROR: Connection to breach database failed. Try again.</span>';
    resultsDiv.style.display = 'none';
  }
}

// ── MODAL TRIGGER ALERTS ──
function triggerCTFSuccess() {
  const modal = document.getElementById('achievement-modal');
  if (modal) modal.classList.add('active');
}

function closeModal() {
  const modal = document.getElementById('achievement-modal');
  if (modal) modal.classList.remove('active');
}

// ── INIT INITIALIZATION ──
document.addEventListener('DOMContentLoaded', () => {
  runFingerprinting();
  initContactForm();
  initMatrixRain();
  initNavbarScroll();
  fetchGitHubProjects();
  initCustomCursor();
  initTerminalCLI();
});
