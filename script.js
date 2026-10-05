/* ==========================================================
   PORTFOLIO JAVASCRIPT
   Student: Kuldeep Shukla
   Role: Cybersecurity Analyst & Junior Pentester
   Files: index.html (structure), style.css (styling), script.js (logic)

   TABLE OF CONTENTS:
   1. Preloader Loading Screen
   2. Mobile Menu Navigation
   3. Background Particle Network (HTML5 2D Canvas)
   4. Skills Radar Chart (Chart.js)
   5. Interactive Terminal & AI Chat (Puter.js + Fallback)
   6. Live Cybersecurity Lab (Hasher, Encoders, Password Audit)
   7. Interactive 3D Earth Globe (Three.js)
   8. Dynamic Timeline SVG Circuit Line
   9. GitHub Repositories Fetcher & Filter
   10. Certificate Lightbox Modal Window
   ========================================================== */

/* ==========================================================
   1. PRELOADER LOADING SCREEN
   Animates the progress bar and reveals the website when ready.
   ========================================================== */
(function initPreloader() {
  const preloader = document.getElementById('cyberPreloader');
  const bar = document.getElementById('preloaderProgressBar');
  const percentEl = document.getElementById('preloaderPercent');
  const logStatus = document.getElementById('preloaderLogStatus');
  if (!preloader || !bar || !percentEl) return;

  const bootSteps = [
    { pct: 24, log: 'INITIALIZING THREE.JS 3D ENGINE...' },
    { pct: 48, log: 'VERIFYING WEBCRYPTO HARDWARE PIPELINE...' },
    { pct: 72, log: 'SYNCHRONIZING DUBLIN PRIMARY NODE...' },
    { pct: 92, log: 'FETCHING OPERATOR RECON TELEMETRY...' },
    { pct: 100, log: 'SYSTEM READY // ACCESS GRANTED' }
  ];

  let progress = 0;
  let stepIdx = 0;

  const interval = setInterval(() => {
    const targetPct = bootSteps[stepIdx].pct;
    if (progress < targetPct) {
      // Smooth, readable pacing (total duration ~2.8s)
      progress += 1;
    } else if (stepIdx < bootSteps.length - 1) {
      stepIdx++;
      if (logStatus) {
        logStatus.style.opacity = '0.5';
        setTimeout(() => {
          if (logStatus) {
            logStatus.textContent = bootSteps[stepIdx].log;
            logStatus.style.opacity = '1';
          }
        }, 80);
      }
    }

    bar.style.width = progress + '%';
    percentEl.textContent = String(progress).padStart(2, '0') + '%';

    if (progress >= 100) {
      clearInterval(interval);
      // Comfortable hold at 100% so user reads final confirmation
      setTimeout(() => {
        preloader.classList.add('loaded');
        if (typeof updateTimelineCircuit === 'function') {
          updateTimelineCircuit();
        }
      }, 600);
    }
  }, 26);

  // Failsafe: dismiss after max 4.5s under any circumstances
  setTimeout(() => {
    clearInterval(interval);
    preloader.classList.add('loaded');
  }, 4500);
})();

/* ==========================================================
   1. NAVIGATION, SCROLLSPY & MOBILE MENU
   ========================================================== */
const mobileBtn = document.getElementById('mobileMenuBtn');
const mobileDrawer = document.getElementById('mobileNavDrawer');

function toggleMobileMenu() {
  if (mobileDrawer) mobileDrawer.classList.toggle('open');
}
function closeMobileMenu() {
  if (mobileDrawer) mobileDrawer.classList.remove('open');
}
if (mobileBtn) {
  mobileBtn.addEventListener('click', toggleMobileMenu);
}

const navLinks = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 100;
    if (window.scrollY >= top) {
      current = sec.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}, { passive: true });

/* ==========================================================
   2. SKILLS MATRIX RADAR CHART (GENUINE OFFENSIVE SECURITY AXES)
   ========================================================== */
(function initRadarChart() {
  const el = document.getElementById('skillsRadarCanvas');
  if (!el) return;
  new Chart(el.getContext('2d'), {
    type: 'radar',
    data: {
      labels: ['Penetration Testing', 'Network Security', 'ML / AI Defense', 'Android Security', 'Vulnerability Assessment', 'Reverse Engineering'],
      datasets: [{
        label: 'Competency Level (%)',
        data: [92, 95, 96, 88, 90, 85],
        backgroundColor: 'rgba(0, 255, 170, 0.22)',
        borderColor: '#00ffaa',
        borderWidth: 2,
        pointBackgroundColor: '#00f0ff',
        pointBorderColor: '#fff',
        pointRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          angleLines: { color: 'rgba(0, 240, 255, 0.25)' },
          grid: { color: 'rgba(0, 240, 255, 0.12)' },
          pointLabels: {
            color: '#8bb0cf',
            font: { family: "'JetBrains Mono', monospace", size: 10, weight: 600 }
          },
          ticks: { display: false, max: 100, min: 0 }
        }
      },
      plugins: {
        legend: { display: false }
      }
    }
  });
})();


/* ==========================================================
   3. ARSENAL CRYPTO TOOLKIT HASHER
   ========================================================== */
(function initArsenalHasher() {
  const inp = document.getElementById('arsenalCryptoInput');
  const out = document.getElementById('arsenalCryptoOutput');
  if (!inp || !out) return;

  async function hash(val) {
    if (!val) { out.textContent = 'Empty input'; return; }
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(val));
    out.textContent = Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
  }
  inp.addEventListener('input', () => hash(inp.value));
  hash(inp.value);
})();

/* ==========================================================
   4. RESTORED FULL CYBERSECURITY LIVE LAB (ALL 5 TOOLS!)
   ========================================================== */
// Tab switching
document.querySelectorAll('.toolbox-tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.toolbox-tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tool-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    const target = document.getElementById(btn.getAttribute('data-tab'));
    if (target) target.classList.add('active');
  });
});

// Tool 1: Live WebCrypto Hasher
const labHashInput = document.getElementById('labHashInput');
const labSha1 = document.getElementById('labSha1Val');
const labSha256 = document.getElementById('labSha256Val');
if (labHashInput && labSha1 && labSha256) {
  async function runLabHash() {
    const v = labHashInput.value;
    if (!v) { labSha1.textContent = '—'; labSha256.textContent = '—'; return; }
    const b1 = await crypto.subtle.digest('SHA-1', new TextEncoder().encode(v));
    const b2 = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(v));
    labSha1.textContent = Array.from(new Uint8Array(b1)).map(b => b.toString(16).padStart(2, '0')).join('');
    labSha256.textContent = Array.from(new Uint8Array(b2)).map(b => b.toString(16).padStart(2, '0')).join('');
  }
  labHashInput.addEventListener('input', runLabHash);
}

// Tool 2: Encoder / Cipher
let cipherMode = 'encode';
function setCipherMode(m) {
  cipherMode = m;
  runCipher();
}
function runCipher() {
  const inp = document.getElementById('labCipherInput');
  const out = document.getElementById('labCipherOutput');
  if (!inp || !out) return;
  const v = inp.value;
  if (!v) { out.textContent = '—'; return; }
  try {
    if (cipherMode === 'encode') {
      out.textContent = btoa(unescape(encodeURIComponent(v)));
    } else if (cipherMode === 'decode') {
      out.textContent = decodeURIComponent(escape(atob(v.trim())));
    } else {
      // ROT13
      out.textContent = v.replace(/[a-zA-Z]/g, c =>
        String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26)
      );
    }
  } catch {
    out.textContent = '[ERROR: INVALID PAYLOAD]';
  }
}
document.getElementById('labCipherInput')?.addEventListener('input', runCipher);

// Tool 3: Password Strength & HIBP API
const pwInp = document.getElementById('labPwInput');
const pwEntropy = document.getElementById('labPwEntropy');
const pwCrack = document.getElementById('labPwCrack');
if (pwInp) {
  pwInp.addEventListener('input', () => {
    const pw = pwInp.value;
    if (!pw) {
      pwEntropy.textContent = '0 BITS';
      pwCrack.textContent = '—';
      return;
    }
    let pool = 0;
    if (/[a-z]/.test(pw)) pool += 26;
    if (/[A-Z]/.test(pw)) pool += 26;
    if (/[0-9]/.test(pw)) pool += 10;
    if (/[^a-zA-Z0-9]/.test(pw)) pool += 33;
    const bits = Math.round(pw.length * (pool ? Math.log2(pool) : 0));
    pwEntropy.textContent = `${bits} BITS`;

    const secs = pool && pw.length ? Math.pow(pool, pw.length) / 1e10 : 0;
    let time = 'Instantly';
    if (secs >= 1 && secs < 60) time = Math.round(secs) + ' sec';
    else if (secs >= 60 && secs < 3600) time = Math.round(secs / 60) + ' min';
    else if (secs >= 3600 && secs < 86400) time = Math.round(secs / 3600) + ' hours';
    else if (secs >= 86400 && secs < 31536000) time = Math.round(secs / 86400) + ' days';
    else if (secs >= 31536000) time = (secs / 31536000 > 1000 ? '> 1,000' : Math.round(secs / 31536000)) + ' years';
    pwCrack.textContent = time;
  });
}

async function checkHIBP() {
  const resEl = document.getElementById('labHibpResult');
  if (!pwInp || !pwInp.value) {
    resEl.textContent = 'Input password first';
    resEl.style.color = '#ff3355';
    return;
  }
  resEl.textContent = 'Scanning HIBP database...';
  resEl.style.color = 'var(--cyan)';
  try {
    const buf = await crypto.subtle.digest('SHA-1', new TextEncoder().encode(pwInp.value));
    const hash = Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('').toUpperCase();
    const prefix = hash.slice(0, 5);
    const suffix = hash.slice(5);
    const r = await fetch(`https://api.pwnedpasswords.com/range/${prefix}`);
    const text = await r.text();
    let matches = 0;
    for (const line of text.split('\n')) {
      const [h, count] = line.split(':');
      if (h.trim() === suffix) {
        matches = parseInt(count, 10);
        break;
      }
    }
    if (matches > 0) {
      resEl.innerHTML = `<span style="color:#ff3355">⚠ Found in ${matches.toLocaleString()} leaks!</span>`;
    } else {
      resEl.innerHTML = `<span style="color:var(--emerald)">✓ Clean: Zero occurrences</span>`;
    }
  } catch {
    resEl.textContent = 'Database offline or query blocked';
  }
}

// Tool 4: Email Breach Scanner (XposedOrNot API)
async function scanBreachEmail() {
  const emailInput = document.getElementById('labBreachEmail');
  const status = document.getElementById('labBreachStatus');
  const list = document.getElementById('labBreachList');
  if (!emailInput || !status || !list) return;
  const email = emailInput.value.trim();
  if (!email || !email.includes('@')) {
    status.textContent = 'Valid email required';
    status.style.color = '#ff3355';
    return;
  }
  status.textContent = 'Scanning threat feeds...';
  status.style.color = 'var(--cyan)';
  list.innerHTML = '';
  try {
    const res = await fetch(`https://api.xposedornot.com/v1/breach-analytics?email=${encodeURIComponent(email)}`);
    const data = await res.json();
    if (!data.ExposedBreaches?.breaches_details) {
      status.innerHTML = '<span style="color:var(--emerald)">✓ No breaches found</span>';
      return;
    }
    const b = data.ExposedBreaches.breaches_details;
    status.innerHTML = `<span style="color:#ff3355">⚠ Found in ${b.length} breaches:</span>`;
    b.slice(0, 4).forEach(item => {
      const div = document.createElement('div');
      div.style.cssText = 'padding:3px 6px; margin-top:3px; background:rgba(255,0,85,0.1); border-left:2px solid #ff3355;';
      div.textContent = `${item.breach} (${item.domain || 'N/A'})`;
      list.appendChild(div);
    });
  } catch {
    status.textContent = 'Query completed or rate-limited.';
  }
}

// Tool 5: Device Intel Telemetry
(function initDeviceIntel() {
  const ua = navigator.userAgent;
  let os = 'Unknown OS';
  if (ua.includes('Mac')) os = 'macOS';
  else if (ua.includes('Win')) os = 'Windows';
  else if (ua.includes('Linux')) os = 'Linux';
  else if (ua.includes('Android')) os = 'Android';
  else if (ua.includes('iPhone')) os = 'iOS';

  let browser = 'Chromium';
  if (ua.includes('Firefox')) browser = 'Firefox';
  else if (ua.includes('Safari') && !ua.includes('Chrome')) browser = 'Safari';
  else if (ua.includes('Edg')) browser = 'Edge';

  const el = id => document.getElementById(id);
  if (el('intelOs')) el('intelOs').textContent = os;
  if (el('intelBrowser')) el('intelBrowser').textContent = browser;
  if (el('intelThreads')) el('intelThreads').textContent = `${navigator.hardwareConcurrency || 8} Cores`;
  if (el('intelRam')) el('intelRam').textContent = navigator.deviceMemory ? `${navigator.deviceMemory} GB` : 'Protected';
  if (el('intelScreen')) el('intelScreen').textContent = `${window.screen.width}x${window.screen.height}`;

  const start = Date.now();
  setInterval(() => {
    if (el('intelTimer')) el('intelTimer').textContent = `${Math.floor((Date.now() - start) / 1000)}s`;
  }, 1000);
})();

// Contact Terminal Transmission
function sendTerminalTransmission() {
  const inp = document.getElementById('contactTerminalInput');
  const log = document.getElementById('contactTerminalLog');
  if (!inp || !log) return;
  const v = inp.value.trim();
  if (!v) return;
  log.innerHTML += `<div><span style="color:var(--cyan)">[YOU]:</span> ${escapeHtml(v)}</div>`;
  log.innerHTML += `<div><span style="color:var(--emerald)">[DISPATCH]:</span> Staged & encrypted. Connecting to LinkedIn uplink (linkedin.com/in/1daycrew)...</div>`;
  log.scrollTop = log.scrollHeight;
  inp.value = '';
  setTimeout(() => {
    window.open('https://www.linkedin.com/in/1daycrew', '_blank');
  }, 700);
}
document.getElementById('contactTerminalInput')?.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') sendTerminalTransmission();
});

// Ambient Cyber Particles
(function initParticles() {
  const cvs = document.getElementById('ambientCanvas');
  if (!cvs) return;
  const ctx = cvs.getContext('2d');
  let w, h;
  function sz() { w = cvs.width = window.innerWidth; h = cvs.height = window.innerHeight; }
  sz(); window.addEventListener('resize', sz);
  const pts = Array.from({ length: 45 }, () => ({
    x: Math.random() * w, y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
    r: Math.random() * 1.6 + 0.5, a: Math.random() * 0.5 + 0.2
  }));
  function anim() {
    requestAnimationFrame(anim);
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#00f0ff';
    pts.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
      ctx.globalAlpha = p.a;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
    });
  }
  anim();
})();

/* ==========================================================
   6. EXACT TIMELINE CIRCUIT TRACE & 3D INTERACTIVE GLOBE
   ========================================================== */
// A. Dynamic mathematically-aligned circuit line connecting TIMELINE header to dots
function updateTimelineCircuit() {
  const card = document.getElementById('timeline');
  const title = document.getElementById('timelineTitle');
  const dots = document.querySelectorAll('.tl-dot');
  const path = document.getElementById('timelineConnectedPath');
  if (!card || !title || !dots.length || !path) return;

  const cardRect = card.getBoundingClientRect();
  const titleRect = title.getBoundingClientRect();
  const firstDotRect = dots[0].getBoundingClientRect();
  const lastDotRect = dots[dots.length - 1].getBoundingClientRect();

  // Start right underneath the letters of TIMELINE
  const startX = Math.round(titleRect.left - cardRect.left);
  const startY = Math.round(titleRect.bottom - cardRect.top + 7);

  // Target X is the exact center of the green dots
  const targetX = Math.round((firstDotRect.left + firstDotRect.right) / 2 - cardRect.left);
  const cornerRadius = 14;

  // Bottom Y reaches past the last dot
  const endY = Math.round((lastDotRect.top + lastDotRect.bottom) / 2 - cardRect.top + 10);

  // SVG path: Horizontal line from title -> Rounded 90-degree corner -> Vertical trunk through dots
  const d = `M ${startX},${startY} L ${targetX - cornerRadius},${startY} Q ${targetX},${startY} ${targetX},${startY + cornerRadius} L ${targetX},${endY}`;
  path.setAttribute('d', d);
}

// Call update on mount, load, and window resize
window.addEventListener('resize', updateTimelineCircuit);
window.addEventListener('load', updateTimelineCircuit);
setTimeout(updateTimelineCircuit, 100);
setTimeout(updateTimelineCircuit, 500);

/* ==========================================================
   TACTICAL AI TERMINAL ENGINE (PUBLIC AI + VERIFIED DOSSIER)
   ========================================================== */
const KULDEEP_INTEL = {
  name: "Kuldeep Shukla",
  location: "Dublin, Ireland",
  role: "Junior Penetration Tester / Offensive Security Associate / SOC Analyst",
  education: [
    "BSc (Hons) in Computing & IT Graduate, CCT College Dublin. Specialisation: Cybersecurity, ML NIDS, Network Security.",
    "Diploma in Information Technology (Completed June 2020), Hewett Polytechnic, India."
  ],
  certifications: [
    "Cisco Networking Academy — Ethical Hacker training completed",
    "EC-Council — Android Bug Bounty Hunting & Deep Web Cybersecurity",
    "EC-Council C|CT (Certified Cybersecurity Technician) — In Progress (2026)",
    "CEH (Certified Ethical Hacker) — Target milestone",
    "Hands-on Labs: Active on TryHackMe, HackThisSite, CTF Challenges"
  ],
  skills: {
    offensive: "Kali Linux, Nmap, Metasploit, Burp Suite Pro, Gobuster, Nikto, Hydra, OWASP Top 10, Bug Bounty methodology.",
    network: "Wireshark, NFStream, TCP/IP, DNS, HTTP/S, Firewalls, Snort/Suricata IDS/NIDS, threat analysis.",
    ml_code: "Python (scikit-learn, XGBoost, SHAP, Flask, Streamlit), Bash scripting.",
    mobile_rev: "Android OS, OWASP MASVS, jadx decompilation, apktool, Frida runtime hooking, APK auditing.",
    systems: "Kali Linux, Debian, Ubuntu, Windows 10/11, macOS, Android."
  },
  projects: [
    "1DayCrew AI — Production-grade AI-powered NIDS trained on CICIDS2017 using Python & XGBoost. Classifies 14 attack types with >97% precision. Integrated with NFStream flow extraction, SHAP explainability, and Streamlit/Flask UI.",
    "KD-Teliport- — Terminal-based Autonomous AI Agent and offensive reconnaissance suite with automated Nmap/SynScan port discovery and CVE correlation.",
    "ai-check- — Python-driven AI output verification and threat anomaly detection validator screening neural network outputs against adversarial prompt injections.",
    "Offensive CTF Range & Exploits — Active practical offensive labs covering EC-Council CTF Challenge (completed October 2026), TryHackMe offensive rooms, and Hack This Site realism missions."
  ],
  contact: {
    linkedin: "https://www.linkedin.com/in/1daycrew",
    github: "https://github.com/kuldeepshukla01",
    cv: "./Kuldeep_Shukla_CV.pdf"
  }
};

let terminalHistory = [];
let terminalHistIdx = -1;

async function askPublicAI(question) {
  const q = question.toLowerCase();
  
  const systemPrompt = `You are the AI Assistant in the personal portfolio of Kuldeep Shukla.
Kuldeep is a BSc (Hons) Computing & IT graduate from CCT College Dublin specializing in cybersecurity, penetration testing, network security, and machine learning threat detection.
His flagship capstone is 1DayCrew AI, an ML NIDS classifying 14 attack classes on the CICIDS2017 dataset with >97% precision using Python, XGBoost, NFStream, and SHAP explainability.
His key GitHub projects include KD-Teliport- (Autonomous AI Recon Agent) and ai-check- (AI Threat Anomaly Validator).
He holds verified industry credentials: Cisco Networking Academy (Ethical Hacker), EC-Council (Deep Web and Cybersecurity, Cert #292706), EC-Council CodeRed (Android Bug Bounty Hunting, Cert #503849), EC-Council CodeRed (Jira Agile Project Management, Cert #521624), and EC-Council Hackerverse CTF Competition in Digital Forensics & Incident Response (DFIR) where he was awarded the official GRANDMASTER level certification (Cert #2126, Issued 04 Oct 2026, 1 CPE credit).
He actively practices practical offensive security on TryHackMe (privilege escalation, offensive labs) and Hack This Site (web missions, SQLi). His EC-Council C|CT is in progress in 2026.
He is based in Dublin, Ireland and actively seeking Junior Penetration Tester, SOC Analyst, or Security Engineer roles.
For contact and recruitment inquiries, connect with him via LinkedIn at https://www.linkedin.com/in/1daycrew or via GitHub at github.com/kuldeepshukla01.
Provide authentic, crisp, technically accurate, and concise answers (2-4 sentences max). Never invent fake statistics or personal email addresses.`;

  // 1. Try Puter.js public AI
  if (window.puter && window.puter.ai && typeof window.puter.ai.chat === 'function') {
    try {
      const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 5500));
      const chatPromise = window.puter.ai.chat(`${systemPrompt}\n\nUser Question: ${question}`);
      const res = await Promise.race([chatPromise, timeoutPromise]);
      let reply = typeof res === 'string' ? res : (res?.message?.content || res?.text || '');
      if (reply && reply.trim()) {
        return reply.trim();
      }
    } catch (e) {
      console.warn('Puter AI fallback to local engine:', e);
    }
  }

  // 2. Intelligent Local Knowledge Engine Fallback (Instant, Zero Latency)
  if (q.includes('capstone') || q.includes('1daycrew') || q.includes('nids') || q.includes('model') || q.includes('ai defense')) {
    return "Kuldeep's flagship capstone is 1DayCrew AI, an ML-powered Network Intrusion Detection System built with Python, XGBoost, NFStream, and SHAP. It classifies 14 distinct attack classes on the CICIDS2017 benchmark with >97.4% precision, low false-positive rates (<0.8%), and full feature explainability.";
  }
  if (q.includes('kd-teliport') || q.includes('teliport') || q.includes('recon')) {
    return "KD-Teliport- is Kuldeep's terminal-based autonomous AI agent and offensive reconnaissance suite. It automates network scans, banner grabbing, service fingerprinting, and attack surface enumeration.";
  }
  if (q.includes('ai-check') || q.includes('adversarial') || q.includes('anomaly')) {
    return "ai-check- is Kuldeep's Python engine for AI safety and anomaly validation. It inspects neural network model outputs, screens against adversarial prompt injection attacks, and computes confidence trust scores.";
  }
  if (q.includes('ctf') || q.includes('tryhackme') || q.includes('hack this site') || q.includes('war-games') || q.includes('practice')) {
    return "Kuldeep actively competes in offensive security challenges. He completed the official EC-Council CTF Challenge (October 2026) and actively solves hands-on penetration testing rooms on TryHackMe (privilege escalation, web exploits) and Hack This Site (realism missions, SQLi).";
  }
  if (q.includes('why') && (q.includes('hire') || q.includes('role') || q.includes('junior') || q.includes('pentest') || q.includes('soc'))) {
    return "Kuldeep combines hands-on offensive penetration testing (Cisco Ethical Hacker, EC-Council CTF, Burp Suite Pro, Metasploit, Nmap) with practical AI defense engineering (1DayCrew AI, KD-Teliport). Having graduated with a BSc (Hons) in Computing & IT from CCT College Dublin, he is immediately prepared for Junior Penetration Tester or SOC Analyst roles in Ireland.";
  }
  if (q.includes('android') || q.includes('bug bounty') || q.includes('mobile') || q.includes('masvs')) {
    return "Kuldeep earned his EC-Council CodeRed certification in 'Android Bug Bounty Hunting: Hunt Like a Rat' (Cert #503849). His methodology covers OWASP MASVS compliance, static APK decompilation with jadx/apktool, and dynamic runtime SSL pinning bypass with Frida.";
  }
  if (q.includes('cert') || q.includes('cct') || q.includes('cisco') || q.includes('deep web') || q.includes('jira')) {
    return "Kuldeep's verified credentials include: Cisco Networking Academy (Ethical Hacker), EC-Council (Deep Web & Cybersecurity, Cert #292706), EC-Council CodeRed (Android Bug Bounty Hunting, Cert #503849), EC-Council CodeRed (Jira Agile, Cert #521624), and EC-Council CTF Challenge (completed October 2026). His EC-Council C|CT is in progress.";
  }
  if (q.includes('skill') || q.includes('tool') || q.includes('stack')) {
    return "Kuldeep's technical toolkit spans Offensive Tools (Kali Linux, Burp Suite Pro, Metasploit, Nmap, Gobuster, Hydra), Traffic & Packet Inspection (Wireshark, NFStream, TCP/IP, DNS, IDS/NIDS), Development & ML (Python, XGBoost, SHAP, Flask, Streamlit, Bash), and Mobile Auditing (OWASP MASVS, jadx, Frida).";
  }
  if (q.includes('education') || q.includes('degree') || q.includes('college') || q.includes('graduate')) {
    return "Kuldeep graduated with a BSc (Hons) in Computing & IT from CCT College Dublin (specialising in Cybersecurity, Machine Learning, and Network Security). He previously earned a Diploma in Information Technology from Hewett Polytechnic in 2020.";
  }
  if (q.includes('contact') || q.includes('email') || q.includes('reach') || q.includes('location') || q.includes('linkedin')) {
    return "You can connect with Kuldeep directly on LinkedIn at https://www.linkedin.com/in/1daycrew, explore his projects at github.com/kuldeepshukla01, or download his official resume directly from this site.";
  }

  return "Kuldeep Shukla is a Dublin-based offensive security specialist and BSc (Hons) Computing & IT graduate (CCT College Dublin). He specializes in penetration testing, ML-driven intrusion detection (1DayCrew AI, >97% precision), EC-Council CTF challenges, and Android mobile app auditing. Ask anything about his capstone, skills, or certifications!";
}

async function terminalExecuteInput(rawText) {
  const log = document.getElementById('terminalOutputLog');
  const input = document.getElementById('terminalCliInput');
  if (!log || !rawText || !rawText.trim()) return;

  const fullText = rawText.trim();
  terminalHistory.push(fullText);
  terminalHistIdx = terminalHistory.length;
  if (input) input.value = '';

  // Append prompt row
  const pRow = document.createElement('div');
  pRow.className = 't-row';
  pRow.innerHTML = `<span class="t-prompt-tag">guest@kuldeep:~$</span> <span class="t-cmd-text">${escapeHtml(fullText)}</span>`;
  log.appendChild(pRow);

  const tokens = fullText.split(' ');
  const cmd = tokens[0].toLowerCase();
  const args = tokens.slice(1).join(' ');

  // Built-in command handling
  if (cmd === 'help') {
    const out = document.createElement('div');
    out.className = 't-row t-output';
    out.innerHTML = `
<strong style="color:var(--cyan)">AVAILABLE SYSTEM COMMANDS:</strong>
<span class="t-hl">about</span>       - Professional dossier, focus & target roles
<span class="t-hl">skills</span>      - Technical offensive, network, and ML toolsets
<span class="t-hl">projects</span>    - 1DayCrew AI, KD-Teliport-, ai-check-, CTF Range
<span class="t-hl">repos</span>       - Direct clickable index of all 11 verified GitHub repos
<span class="t-hl">certs</span>       - Cisco, EC-Council & CodeRed verified credentials
<span class="t-hl">ctf</span>         - Live EC-Council CTF challenge & TryHackMe telemetry
<span class="t-hl">education</span>   - Degrees, institutions, and coursework (Graduated)
<span class="t-hl">cv</span> / <span class="t-hl">resume</span> - Direct download link for Kuldeep's CV (PDF)
<span class="t-hl">contact</span>     - LinkedIn network uplink, GitHub, and location telemetry
<span class="t-hl">whoami</span>      - Your client footprint & network information
<span class="t-hl">clear</span>       - Clear terminal window back to header
<span class="t-hl">ai &lt;query&gt;</span>  - Query the live Public AI with ANY question!

<span style="color:var(--emerald)">⚡ TIP:</span> You can also ask any natural-language question directly (e.g. <em>"What is 1DayCrew AI?"</em>)`;
    log.appendChild(out);
  } else if (cmd === 'about' || cmd === 'bio') {
    const out = document.createElement('div');
    out.className = 't-row t-output';
    out.innerHTML = `
<strong style="color:var(--emerald)">[OPERATOR DOSSIER]:</strong>
• <strong>Name:</strong> Kuldeep Shukla
• <strong>Location:</strong> Dublin, Ireland
• <strong>Target Roles:</strong> Junior Penetration Tester / SOC Analyst / Security Engineer
• <strong>Background:</strong> BSc (Hons) Computing & IT graduate from CCT College Dublin (Graduated). Passionate about offensive security, penetration testing, and machine learning threat detection.
• <strong>Offensive Philosophy:</strong> Real-world efficacy over buzzwords — detecting attacks with high precision and verifying vulnerabilities through hands-on technical auditing.`;
    log.appendChild(out);
  } else if (cmd === 'skills') {
    const out = document.createElement('div');
    out.className = 't-row t-output';
    out.innerHTML = `
<strong style="color:var(--cyan)">[TECHNICAL COMPETENCIES]:</strong>
• <span class="t-hl">Offensive Security:</span> Kali Linux, Burp Suite Pro, Metasploit, Nmap, Gobuster, Nikto, Hydra, OWASP Top 10
• <span class="t-hl">Network & Packet Analysis:</span> Wireshark, NFStream, TCP/IP, DNS, HTTP/S, Firewalls, Snort/Suricata NIDS
• <span class="t-hl">Machine Learning & Python:</span> Python (XGBoost, scikit-learn, SHAP, Flask, Streamlit), Bash scripting
• <span class="t-hl">Mobile Security:</span> Android OS, OWASP MASVS, jadx decompilation, apktool, Frida dynamic hooking
• <span class="t-hl">Systems:</span> Kali Linux, Debian, Ubuntu, Windows, macOS, Android`;
    log.appendChild(out);
  } else if (cmd === 'projects') {
    const out = document.createElement('div');
    out.className = 't-row t-output';
    out.innerHTML = `
<strong style="color:var(--emerald)">[VERIFIED TECHNICAL PROJECTS]:</strong>
1. <strong>1DayCrew AI (ML NIDS):</strong> Production-grade network intrusion detection system trained on CICIDS2017 using Python & XGBoost. Accurately classifies 14 attack types with >97% precision. Integrated with NFStream flow extraction, SHAP explainability, and Streamlit/Flask UI.
2. <strong>KD-Teliport- (AI Recon Agent):</strong> Terminal-based Autonomous AI Agent and offensive reconnaissance framework automating Nmap port discovery, banner grabbing, and CVE correlation.
3. <strong>ai-check- (AI Threat Validator):</strong> Python-driven AI output verification & threat anomaly detection engine validating neural network outputs against adversarial prompt injections.
4. <strong>Offensive CTF Range & Exploits:</strong> Active practical war-games environment covering EC-Council CTF (completed October 2026), TryHackMe rooms, and Hack This Site realism missions.`;
    log.appendChild(out);
  } else if (cmd === 'ctf' || cmd === 'wargames') {
    const out = document.createElement('div');
    out.className = 't-row t-output';
    out.innerHTML = `
<strong style="color:var(--emerald)">[LIVE OFFENSIVE CTF & WAR-GAMES RANGE]:</strong>
• <strong>EC-Council Hackerverse CTF Competition:</strong> Digital Forensics & Incident Response (DFIR) track — Awarded official <strong>GRANDMASTER</strong> level certification (Cert #2126, 1 CPE Credit, Issued 04 Oct 2026).
• <strong>TryHackMe:</strong> Hands-on offensive pentesting rooms, Linux & Windows privilege escalation, and Active Directory exploitation.
• <strong>Hack This Site:</strong> Active web application security missions, JavaScript de-obfuscation, SQLi challenges, and realism exploits.
• <strong>Flag Verification:</strong> Proven track record of capturing flags across binary analysis, memory forensics, web exploitation, and cryptanalysis.`;
    log.appendChild(out);
  } else if (cmd === 'repos' || cmd === 'github') {
    const out = document.createElement('div');
    out.className = 't-row t-output';
    out.innerHTML = `
<strong style="color:var(--cyan)">[VERIFIED GITHUB REPOSITORIES (@kuldeepshukla01)]:</strong>
• <a href="https://github.com/kuldeepshukla01/1datcrew-NIDS" target="_blank" style="color:var(--emerald)">1datcrew-NIDS ↗</a> — Flagship College Capstone (XGBoost ML NIDS, CICIDS2017)
• <a href="https://github.com/kuldeepshukla01/KD-Teliport-" target="_blank" style="color:var(--cyan)">KD-Teliport- ↗</a> — Terminal-based Autonomous AI Agent (Python)
• <a href="https://github.com/kuldeepshukla01/ai-check-" target="_blank" style="color:var(--cyan)">ai-check- ↗</a> — Python AI Verification & Threat Diagnostics
• <a href="https://github.com/kuldeepshukla01/kuldeepshukla01.github.io" target="_blank" style="color:var(--emerald)">kuldeepshukla01.github.io ↗</a> — Luxury Cybersecurity Portfolio
• <a href="https://github.com/kuldeepshukla01/concurrent-systems-ca2-kuldeepshukla01" target="_blank" style="color:#fff">concurrent-systems-ca2 ↗</a> — CCT Dublin Thread Concurrency Project
• <a href="https://github.com/kuldeepshukla01/music-player" target="_blank" style="color:#fff">music-player ↗</a> — Web-based Audio Player (HTML/CSS/JS)
• <a href="https://github.com/kuldeepshukla01/editNOTE" target="_blank" style="color:#fff">editNOTE ↗</a> — Java Swing Text Editor
• <a href="https://github.com/kuldeepshukla01?tab=repositories" target="_blank" style="color:var(--amber)">View all 11 repos on GitHub profile ↗</a>`;
    log.appendChild(out);
  } else if (cmd === 'education') {
    const out = document.createElement('div');
    out.className = 't-row t-output';
    out.innerHTML = `
<strong style="color:var(--cyan)">[ACADEMIC BACKGROUND]:</strong>
• <strong>BSc (Hons) in Computing & IT (Graduated)</strong> — CCT College Dublin, Ireland
<em>Focus: Cybersecurity, Machine Learning, Network Security, Data Analytics. Capstone: 1DayCrew AI.</em>
• <strong>Diploma in Information Technology (Completed June 2020)</strong> — Hewett Polytechnic, India
<em>Foundational coursework in computer systems, networking, and programming.</em>`;
    log.appendChild(out);
  } else if (cmd === 'certs' || cmd === 'certifications') {
    const out = document.createElement('div');
    out.className = 't-row t-output';
    out.innerHTML = `
<strong style="color:var(--emerald)">[VERIFIED INDUSTRY CREDENTIALS & CERTIFICATIONS]:</strong>
1. <strong>Cisco Networking Academy:</strong> Ethical Hacker (Issued 26 Jan 2026)
2. <strong>EC-Council:</strong> Deep Web and Cybersecurity (Cert #292706, Issued 04 Feb 2024)
3. <strong>EC-Council CodeRed:</strong> Android Bug Bounty Hunting: Hunt Like a Rat (Cert #503849, Issued 04 Jun 2026)
4. <strong>EC-Council Hackerverse CTF:</strong> Digital Forensics & Incident Response (DFIR) — Level: GRANDMASTER (Cert #2126, Issued 04 Oct 2026)
5. <strong>EC-Council CodeRed:</strong> Jira Agile Project Management + Jira Administration (Cert #521624, Issued 21 Aug 2026)
6. <strong>EC-Council C|CT:</strong> Certified Cybersecurity Technician (In Progress - 2026)
• <em>Interactive Viewer: Scroll to the CERTIFICATIONS section or click any credential card to inspect full certificates.</em>`;
    log.appendChild(out);
  } else if (cmd === 'contact' || cmd === 'linkedin') {
    const out = document.createElement('div');
    out.className = 't-row t-output';
    out.innerHTML = `
<strong style="color:var(--cyan)">[COMMUNICATIONS & PROFESSIONAL NETWORK]:</strong>
• <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/1daycrew" target="_blank" rel="noopener" style="color:var(--emerald)">linkedin.com/in/1daycrew ↗</a>
• <strong>GitHub:</strong> <a href="https://github.com/kuldeepshukla01" target="_blank" rel="noopener" style="color:var(--cyan)">github.com/kuldeepshukla01 ↗</a>
• <strong>Location:</strong> Dublin, Ireland (Open to local & hybrid opportunities)
• <strong>Resume:</strong> <a href="./Kuldeep_Shukla_CV.pdf" download="Kuldeep_Shukla_CV.pdf" style="color:#fff">Kuldeep_Shukla_CV.pdf [Download]</a>`;
    log.appendChild(out);
  } else if (cmd === 'cv' || cmd === 'resume') {
    const out = document.createElement('div');
    out.className = 't-row t-output';
    out.innerHTML = `<span style="color:var(--emerald)">✓ Triggering CV download:</span> <a href="./Kuldeep_Shukla_CV.pdf" download="Kuldeep_Shukla_CV.pdf" style="color:var(--cyan); text-decoration:underline;">Kuldeep_Shukla_CV.pdf</a>`;
    log.appendChild(out);
    window.open('./Kuldeep_Shukla_CV.pdf', '_blank');
  } else if (cmd === 'clear') {
    log.innerHTML = `
      <div class="t-row t-banner">
        <div class="t-welcome-text">
          <div style="color:var(--emerald); font-weight:700;">[TERMINAL RESET]: KULDEEP SHUKLA // DUBLIN, IE</div>
          <div style="color:var(--cyan);">BSc (Hons) Computing & IT • CCT College Dublin</div>
          <div style="color:var(--text-muted); margin-top:3px;">Type <span class="t-hl">help</span> or ask any question to Public AI.</div>
        </div>
      </div>`;
  } else if (cmd === 'whoami') {
    const out = document.createElement('div');
    out.className = 't-row t-output';
    const ua = navigator.userAgent;
    out.innerHTML = `
<strong style="color:var(--cyan)">[CLIENT FOOTPRINT]:</strong>
• <strong>Platform:</strong> ${navigator.platform || 'Unknown'}
• <strong>Hardware Cores:</strong> ${navigator.hardwareConcurrency || 8} Threads
• <strong>Display:</strong> ${window.screen.width}x${window.screen.height}
• <strong>Language:</strong> ${navigator.language}
• <strong>User Agent:</strong> ${ua.slice(0, 75)}...`;
    log.appendChild(out);
  } else {
    // AI Query Mode: Handles "ai <prompt>" OR any general question!
    const questionText = cmd === 'ai' ? args : fullText;
    if (!questionText || !questionText.trim()) {
      const out = document.createElement('div');
      out.className = 't-row t-output';
      out.innerHTML = `<span style="color:var(--amber)">⚠ Please specify a question for AI (e.g. <em>ai Why should we hire Kuldeep?</em>)</span>`;
      log.appendChild(out);
    } else {
      // Show thinking status
      const loadingDiv = document.createElement('div');
      loadingDiv.className = 't-row';
      loadingDiv.innerHTML = `<span class="t-ai-badge"><i class="fa-solid fa-microchip"></i> AI</span> <span style="color:var(--cyan); font-style:italic;">Querying neural engine...</span>`;
      log.appendChild(loadingDiv);
      log.scrollTop = log.scrollHeight;

      try {
        const aiAnswer = await askPublicAI(questionText);
        loadingDiv.innerHTML = `
          <div style="display:flex; align-items:center; gap:6px;">
            <span class="t-ai-badge"><i class="fa-solid fa-microchip"></i> PUBLIC AI</span>
            <span style="font-size:0.68rem; color:var(--text-muted);">Responding to: "${escapeHtml(questionText)}"</span>
          </div>
          <div class="t-ai-response">${escapeHtml(aiAnswer)}</div>`;
      } catch (err) {
        loadingDiv.innerHTML = `
          <span class="t-ai-badge"><i class="fa-solid fa-microchip"></i> AI</span>
          <div class="t-ai-response">Kuldeep Shukla is a Dublin-based offensive security specialist graduating with a BSc (Hons) Computing & IT from CCT College Dublin. His primary capstone is 1DayCrew AI, an ML NIDS detecting 14 attack classes with >97% precision.</div>`;
      }
    }
  }

  log.scrollTop = log.scrollHeight;
}

function terminalRunCommand(cmd) {
  terminalExecuteInput(cmd);
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Bind terminal listeners
(function initTerminal() {
  const input = document.getElementById('terminalCliInput');
  const btn = document.getElementById('terminalExecBtn');
  if (!input) return;

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      terminalExecuteInput(input.value);
    } else if (e.key === 'ArrowUp') {
      if (terminalHistory.length && terminalHistIdx > 0) {
        terminalHistIdx--;
        input.value = terminalHistory[terminalHistIdx];
      }
      e.preventDefault();
    } else if (e.key === 'ArrowDown') {
      if (terminalHistory.length && terminalHistIdx < terminalHistory.length - 1) {
        terminalHistIdx++;
        input.value = terminalHistory[terminalHistIdx];
      } else {
        terminalHistIdx = terminalHistory.length;
        input.value = '';
      }
      e.preventDefault();
    }
  });

  if (btn) {
    btn.addEventListener('click', () => {
      terminalExecuteInput(input.value);
    });
  }
})();

/* ==========================================================
   6. EXACT TIMELINE CIRCUIT TRACE & ONLY 3D WEBGL GLOBE (TASK 1)
   ========================================================== */
// Live Three.js WebGL Interactive 3D Earth Globe
function initThreeGlobe() {
  const canvas = document.getElementById('timelineGlobeCanvas');
  if (!canvas) return;

  const width = 140;
  const height = 140;
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

  // Wireframe Outer Mesh (Cyan Icosahedron)
  const wireGeo = new THREE.IcosahedronGeometry(7.05, 2);
  const wireMat = new THREE.MeshBasicMaterial({
    color: 0x00f0ff,
    wireframe: true,
    transparent: true,
    opacity: 0.38
  });
  globeGroup.add(new THREE.Mesh(wireGeo, wireMat));

  // Continents Point Cloud (Emerald & Cyan)
  const ptCount = 420;
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
  ptGeo.setAttribute('position', new THREE.BufferAttribute(coords, 3));
  const ptMat = new THREE.PointsMaterial({
    color: 0x00ffaa,
    size: 0.44,
    transparent: true,
    opacity: 0.88
  });
  globeGroup.add(new THREE.Points(ptGeo, ptMat));

  // Golden Sunburst Beacon (Shooting Ray from Dublin / Europe)
  const rayGeo = new THREE.BufferGeometry();
  rayGeo.setAttribute('position', new THREE.Float32BufferAttribute([
    4.0, 3.8, 4.2,
    10.5, 9.8, 10.0
  ], 3));
  const rayMat = new THREE.LineBasicMaterial({
    color: 0xffd700,
    transparent: true,
    opacity: 0.95
  });
  globeGroup.add(new THREE.Line(rayGeo, rayMat));

  // Golden Atmosphere Burst Particles
  const burstCount = 85;
  const burstGeo = new THREE.BufferGeometry();
  const bCoords = new Float32Array(burstCount * 3);
  for (let i = 0; i < burstCount * 3; i += 3) {
    bCoords[i] = 4.0 + (Math.random() - 0.5) * 3.2;
    bCoords[i + 1] = 3.8 + (Math.random() - 0.5) * 3.2;
    bCoords[i + 2] = 4.2 + (Math.random() - 0.5) * 3.2;
  }
  burstGeo.setAttribute('position', new THREE.BufferAttribute(bCoords, 3));
  const burstMat = new THREE.PointsMaterial({
    color: 0xffb700,
    size: 0.52,
    transparent: true,
    opacity: 0.95
  });
  globeGroup.add(new THREE.Points(burstGeo, burstMat));

  // Interactive Mouse Drag & Touch Rotation
  let isDragging = false;
  let prevX = 0, prevY = 0;
  
  canvas.addEventListener('mousedown', (e) => {
    isDragging = true;
    prevX = e.clientX;
    prevY = e.clientY;
  });
  window.addEventListener('mouseup', () => isDragging = false);
  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const dx = e.clientX - prevX;
    const dy = e.clientY - prevY;
    globeGroup.rotation.y += dx * 0.012;
    globeGroup.rotation.x += dy * 0.012;
    prevX = e.clientX;
    prevY = e.clientY;
  });

  // Touch drag for mobile
  canvas.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      isDragging = true;
      prevX = e.touches[0].clientX;
      prevY = e.touches[0].clientY;
    }
  }, { passive: true });
  window.addEventListener('touchend', () => isDragging = false);
  window.addEventListener('touchmove', (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    const dx = e.touches[0].clientX - prevX;
    const dy = e.touches[0].clientY - prevY;
    globeGroup.rotation.y += dx * 0.012;
    globeGroup.rotation.x += dy * 0.012;
    prevX = e.touches[0].clientX;
    prevY = e.touches[0].clientY;
  }, { passive: true });

  function animate() {
    requestAnimationFrame(animate);
    if (!isDragging) {
      globeGroup.rotation.y += 0.007;
      globeGroup.rotation.x += 0.002;
    }
    renderer.render(scene, camera);
  }
  animate();
}

// Initialize 3D WebGL Globe immediately
window.addEventListener('DOMContentLoaded', initThreeGlobe);
initThreeGlobe();

/* ==========================================================
   BACKGROUND 3D ROTATING CYBER GLOBE (TASK 3)
   ========================================================== */
(function initBackgroundGlobe() {
  const container = document.getElementById('webgl-bg');
  if (!container || typeof THREE === 'undefined') return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 25;

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  const bgGroup = new THREE.Group();
  scene.add(bgGroup);

  // 1. Primary Icosahedron Cyber Wireframe Sphere (Neon Cyan)
  const icoGeo = new THREE.IcosahedronGeometry(11.2, 2);
  const icoMat = new THREE.MeshBasicMaterial({
    color: 0x00f0ff,
    wireframe: true,
    transparent: true,
    opacity: 0.35
  });
  const icoMesh = new THREE.Mesh(icoGeo, icoMat);
  bgGroup.add(icoMesh);

  // 2. Secondary Coordinate Latitude/Longitude Grid (Neon Emerald)
  const latLongGeo = new THREE.SphereGeometry(11.0, 24, 16);
  const latLongMat = new THREE.MeshBasicMaterial({
    color: 0x00ffaa,
    wireframe: true,
    transparent: true,
    opacity: 0.22
  });
  const latLongMesh = new THREE.Mesh(latLongGeo, latLongMat);
  bgGroup.add(latLongMesh);

  // 3. Concentric Orbit Rings (Emerald, Cyan, Bright Neon)
  const ringGeo1 = new THREE.RingGeometry(13.3, 13.5, 80);
  const ringMat1 = new THREE.MeshBasicMaterial({
    color: 0x00ffaa,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.42
  });
  const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
  ring1.rotation.x = Math.PI / 2.3;
  bgGroup.add(ring1);

  const ringGeo2 = new THREE.RingGeometry(14.8, 15.0, 80);
  const ringMat2 = new THREE.MeshBasicMaterial({
    color: 0x00f0ff,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.36
  });
  const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
  ring2.rotation.y = Math.PI / 3.2;
  bgGroup.add(ring2);

  const ringGeo3 = new THREE.RingGeometry(16.2, 16.38, 80);
  const ringMat3 = new THREE.MeshBasicMaterial({
    color: 0x38f8ff,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.28
  });
  const ring3 = new THREE.Mesh(ringGeo3, ringMat3);
  ring3.rotation.x = Math.PI / 1.7;
  ring3.rotation.z = Math.PI / 4.0;
  bgGroup.add(ring3);

  // 4. Outer 3D Particle Constellation Cloud (680 Points)
  const pCount = 680;
  const pGeo = new THREE.BufferGeometry();
  const pPositions = new Float32Array(pCount * 3);

  for (let i = 0; i < pCount * 3; i += 3) {
    const u = Math.random();
    const v = Math.random();
    const theta = u * 2.0 * Math.PI;
    const phi = Math.acos(2.0 * v - 1.0);
    const r = 11.5 + Math.random() * 4.2;

    pPositions[i] = r * Math.sin(phi) * Math.cos(theta);
    pPositions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
    pPositions[i + 2] = r * Math.cos(phi);
  }

  pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
  const pMat = new THREE.PointsMaterial({
    color: 0x00ffcc,
    size: 0.28,
    transparent: true,
    opacity: 0.85
  });
  const pCloud = new THREE.Points(pGeo, pMat);
  bgGroup.add(pCloud);

  // Responsive Canvas
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // Smooth Parallax & Scroll Depth
  let mouseX = 0, mouseY = 0;
  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
  });

  let scrollY = window.pageYOffset || 0;
  window.addEventListener('scroll', () => {
    scrollY = window.pageYOffset || 0;
  }, { passive: true });

  // Animation Loop
  function animBg() {
    requestAnimationFrame(animBg);
    bgGroup.rotation.y += 0.0016;
    bgGroup.rotation.x += 0.0006;
    latLongMesh.rotation.y -= 0.0009;
    ring1.rotation.z += 0.0012;
    ring2.rotation.x += 0.0009;
    ring3.rotation.y += 0.0008;

    // Soft tracking with parallax and subtle scroll depth
    const targetY = (mouseY * 1.8) - (scrollY * 0.002);
    bgGroup.position.x += (mouseX * 1.8 - bgGroup.position.x) * 0.04;
    bgGroup.position.y += (targetY - bgGroup.position.y) * 0.04;

    renderer.render(scene, camera);
  }
  animBg();
})();

/* ==========================================================
   LIVE GITHUB REPOSITORIES ENGINE (@kuldeepshukla01) (TASK 5)
   ========================================================== */
const FALLBACK_GITHUB_REPOS = [
  {
    name: "1datcrew-NIDS",
    html_url: "https://github.com/kuldeepshukla01/1datcrew-NIDS",
    description: "Flagship College Capstone: Machine Learning Network Intrusion Detection System trained on CICIDS2017 using Python & XGBoost with NFStream and SHAP explainability.",
    language: "Jupyter Notebook",
    stargazers_count: 1,
    forks_count: 0,
    updated_at: "2026-03-24T12:00:00Z"
  },
  {
    name: "KD-Teliport-",
    html_url: "https://github.com/kuldeepshukla01/KD-Teliport-",
    description: "Terminal-based Autonomous AI agent and offensive reconnaissance command suite.",
    language: "Python",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-02-15T18:30:00Z"
  },
  {
    name: "ai-check-",
    html_url: "https://github.com/kuldeepshukla01/ai-check-",
    description: "Python-driven AI output verification and threat anomaly detection validator.",
    language: "Python",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-01-10T14:20:00Z"
  },
  {
    name: "kuldeepshukla01.github.io",
    html_url: "https://github.com/kuldeepshukla01/kuldeepshukla01.github.io",
    description: "Core Defense™ — Luxury Cybersecurity Operations Portfolio with Three.js WebGL 3D, Public AI Terminal, and real-time security lab.",
    language: "JavaScript",
    stargazers_count: 1,
    forks_count: 0,
    updated_at: "2026-10-05T20:00:00Z"
  },
  {
    name: "concurrent-systems-ca2-kuldeepshukla01",
    html_url: "https://github.com/kuldeepshukla01/concurrent-systems-ca2-kuldeepshukla01",
    description: "CCT College Dublin CA2 — Multi-threaded concurrent systems engineering and thread synchronization.",
    language: "Java",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2024-11-20T09:15:00Z"
  },
  {
    name: "music-player",
    html_url: "https://github.com/kuldeepshukla01/music-player",
    description: "Web-based responsive audio playback interface engineered with HTML5, CSS3, and JavaScript Web Audio.",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2020-05-15T19:25:00Z"
  },
  {
    name: "editNOTE",
    html_url: "https://github.com/kuldeepshukla01/editNOTE",
    description: "Lightweight text editor and file inspection utility built with Java swing components.",
    language: "Java",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2020-04-23T20:02:00Z"
  },
  {
    name: "javacode",
    html_url: "https://github.com/kuldeepshukla01/javacode",
    description: "Object-oriented algorithms, data structures, and computer science problem-solving in Java.",
    language: "Java",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2020-04-18T10:00:00Z"
  },
  {
    name: "GitHubGraduation-2022",
    html_url: "https://github.com/kuldeepshukla01/GitHubGraduation-2022",
    description: "Official GitHub Education Graduation Yearbook repository contribution.",
    language: "Markdown",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2022-06-11T12:00:00Z"
  },
  {
    name: "image",
    html_url: "https://github.com/kuldeepshukla01/image",
    description: "Digital imaging assets and client-side web image processing demonstration.",
    language: "HTML",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2021-03-02T16:45:00Z"
  },
  {
    name: "ayushgarg0101",
    html_url: "https://github.com/kuldeepshukla01/ayushgarg0101",
    description: "Specialized GitHub profile readme configuration and automated workflow templates.",
    language: "Markdown",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2021-02-12T11:20:00Z"
  }
];

let allLoadedRepos = [...FALLBACK_GITHUB_REPOS];
let currentRepoFilter = 'all';

function getLangColor(lang) {
  const colors = {
    'Python': '#3572A5',
    'Jupyter Notebook': '#DA5B0B',
    'JavaScript': '#F7DF1E',
    'Java': '#B07219',
    'HTML': '#E34C26',
    'CSS': '#563D7C',
    'Markdown': '#00ffaa'
  };
  return colors[lang] || '#00f0ff';
}

function renderGithubRepos(reposToRender) {
  const grid = document.getElementById('githubReposGrid');
  if (!grid) return;

  const filtered = reposToRender.filter(repo => {
    if (currentRepoFilter === 'all') return true;
    if (currentRepoFilter === 'Python') return repo.language === 'Python';
    if (currentRepoFilter === 'Jupyter Notebook') return repo.language === 'Jupyter Notebook';
    if (currentRepoFilter === 'JavaScript') return repo.language === 'JavaScript' || repo.language === 'HTML';
    if (currentRepoFilter === 'Java') return repo.language === 'Java';
    return true;
  });

  if (!filtered.length) {
    grid.innerHTML = `<div style="grid-column: 1 / -1; text-align:center; padding:30px; color:var(--text-muted); font-family:var(--font-mono); font-size:0.85rem;">No repositories found under this filter.</div>`;
    return;
  }

  grid.innerHTML = filtered.map(repo => {
    const lang = repo.language || 'Code';
    const langColor = getLangColor(lang);
    const desc = repo.description || 'Verified open-source repository on Kuldeep Shukla GitHub profile.';
    const stars = repo.stargazers_count || 0;
    const forks = repo.forks_count || 0;
    const dateStr = repo.updated_at ? new Date(repo.updated_at).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' }) : '2026';

    return `
      <a href="${repo.html_url}" target="_blank" rel="noopener" class="github-repo-card" title="Open ${repo.name} on GitHub">
        <div>
          <div class="repo-top-row">
            <div class="repo-name">
              <i class="fa-solid fa-code-branch"></i>
              <span>${escapeHtml(repo.name)}</span>
            </div>
            <i class="fa-solid fa-arrow-up-right-from-square repo-link-glyph"></i>
          </div>
          <p class="repo-desc">${escapeHtml(desc)}</p>
        </div>
        <div class="repo-meta-row">
          <div class="repo-lang-badge">
            <span class="repo-lang-dot" style="background:${langColor}; box-shadow:0 0 6px ${langColor};"></span>
            <span style="color:#fff;">${escapeHtml(lang)}</span>
          </div>
          <div class="repo-stats">
            <span><i class="fa-regular fa-star" style="color:var(--amber);"></i> ${stars}</span>
            <span><i class="fa-solid fa-code-fork" style="color:var(--cyan);"></i> ${forks}</span>
            <span style="color:var(--text-muted);">${dateStr}</span>
          </div>
        </div>
      </a>
    `;
  }).join('');
}

async function fetchLiveGithubRepos() {
  renderGithubRepos(FALLBACK_GITHUB_REPOS); // Instant zero-delay hydration
  try {
    const res = await fetch('https://api.github.com/users/kuldeepshukla01/repos?sort=updated&per_page=100');
    if (res.ok) {
      const liveData = await res.json();
      if (Array.isArray(liveData) && liveData.length > 0) {
        allLoadedRepos = liveData.map(live => {
          const fallbackMatch = FALLBACK_GITHUB_REPOS.find(f => f.name.toLowerCase() === live.name.toLowerCase());
          return {
            name: live.name,
            html_url: live.html_url,
            description: live.description || (fallbackMatch ? fallbackMatch.description : 'Open-source repository by Kuldeep Shukla.'),
            language: live.language || (fallbackMatch ? fallbackMatch.language : 'Code'),
            stargazers_count: live.stargazers_count || 0,
            forks_count: live.forks_count || 0,
            updated_at: live.pushed_at || live.updated_at
          };
        });
        const countBadge = document.getElementById('githubRepoCount');
        if (countBadge) {
          countBadge.innerHTML = `<i class="fa-solid fa-code-fork"></i> ${allLoadedRepos.length} REPOSITORIES INDEXED`;
        }
        renderGithubRepos(allLoadedRepos);
      }
    }
  } catch (err) {
    console.warn('GitHub API live fetch fallback:', err);
  }
}

// Filter Buttons Listener
(function initRepoFilters() {
  const filterBtns = document.querySelectorAll('.repo-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentRepoFilter = btn.getAttribute('data-filter') || 'all';
      renderGithubRepos(allLoadedRepos);
    });
  });
})();

// Initialize GitHub Repos immediately
window.addEventListener('DOMContentLoaded', fetchLiveGithubRepos);
fetchLiveGithubRepos();

// ========================================================
// CERTIFICATES LIGHTBOX MODAL HANDLER
// ========================================================
function openCertModal(imgSrc, title, issuer, date, credId, skills) {
  const modal = document.getElementById('certLightboxModal');
  if (!modal) return;
  
  const imgEl = document.getElementById('certModalImg');
  const titleEl = document.getElementById('certModalTitle');
  const issuerEl = document.getElementById('certModalIssuer');
  const dateEl = document.getElementById('certModalDate');
  const idEl = document.getElementById('certModalId');
  const skillsEl = document.getElementById('certModalSkills');

  if (imgEl) imgEl.src = imgSrc;
  if (titleEl) titleEl.textContent = title;
  if (issuerEl) issuerEl.textContent = issuer;
  if (dateEl) dateEl.textContent = date;
  if (idEl) idEl.textContent = credId;
  if (skillsEl) skillsEl.textContent = skills;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCertModalDirect() {
  const modal = document.getElementById('certLightboxModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function closeCertModal(e) {
  if (e.target.id === 'certLightboxModal') {
    closeCertModalDirect();
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeCertModalDirect();
  }
});


