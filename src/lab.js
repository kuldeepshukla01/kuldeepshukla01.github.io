// Client-side Cybersecurity Live Lab Engine
// Incorporates Web Crypto Hashing, Ciphers, Password Entropy & HIBP, Breach Lookups, and Device Intel

export class CyberLab {
  constructor() {
    this.pageLoadTime = Date.now();
    this.cipherMode = 'encode';
    this.initTabs();
    this.initHasher();
    this.initCipher();
    this.initPasswordAnalyzer();
    this.initBreachScanner();
    this.initIntelFootprint();
  }

  initTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    const panels = document.querySelectorAll('.tab-panel');

    tabs.forEach(btn => {
      btn.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        const targetId = btn.getAttribute('data-tab');
        const panel = document.getElementById(targetId);
        if (panel) panel.classList.add('active');
      });
    });
  }

  // 1. Web Crypto SHA-1 & SHA-256 Hasher
  initHasher() {
    const hashInput = document.getElementById('hash-input');
    const hashSha1 = document.getElementById('hash-sha1');
    const hashSha256 = document.getElementById('hash-sha256');

    if (!hashInput || !hashSha1 || !hashSha256) return;

    const digest = async (algo, str) => {
      const buf = await crypto.subtle.digest(algo, new TextEncoder().encode(str));
      return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
    };

    hashInput.addEventListener('input', async (e) => {
      const val = e.target.value;
      if (!val) {
        hashSha1.textContent = '—';
        hashSha256.textContent = '—';
        return;
      }
      hashSha1.textContent = await digest('SHA-1', val);
      hashSha256.textContent = await digest('SHA-256', val);
    });
  }

  // 2. Base64 & ROT13 Cipher
  initCipher() {
    const cipherInput = document.getElementById('cipher-input');
    const cipherOutput = document.getElementById('cipher-output');
    const modeBtns = document.querySelectorAll('[data-mode]');

    if (!cipherInput || !cipherOutput) return;

    const process = () => {
      const v = cipherInput.value;
      if (!v) {
        cipherOutput.textContent = '—';
        return;
      }
      try {
        if (this.cipherMode === 'encode') {
          cipherOutput.textContent = btoa(unescape(encodeURIComponent(v)));
        } else if (this.cipherMode === 'decode') {
          cipherOutput.textContent = decodeURIComponent(escape(atob(v.trim())));
        } else {
          // ROT13
          cipherOutput.textContent = v.replace(/[a-zA-Z]/g, c =>
            String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26)
          );
        }
      } catch {
        cipherOutput.textContent = '[ERROR: INVALID_PAYLOAD]';
      }
    };

    modeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        modeBtns.forEach(b => b.classList.remove('on'));
        btn.classList.add('on');
        this.cipherMode = btn.getAttribute('data-mode');
        process();
      });
    });

    cipherInput.addEventListener('input', process);
  }

  // 3. Password Strength & Entropy + HIBP API
  initPasswordAnalyzer() {
    const pwInput = document.getElementById('password-input');
    const strengthBar = document.getElementById('strength-bar');
    const strengthLabel = document.getElementById('strength-label');
    const entropyLabel = document.getElementById('entropy-label');
    const crackTime = document.getElementById('crack-time');
    const complexityAudit = document.getElementById('complexity-audit');
    const hibpBtn = document.getElementById('hibp-btn');
    const hibpResult = document.getElementById('hibp-result');

    if (!pwInput || !strengthBar || !strengthLabel) return;

    const calcEntropy = (pw) => {
      if (!pw) return 0;
      let pool = 0;
      if (/[a-z]/.test(pw)) pool += 26;
      if (/[A-Z]/.test(pw)) pool += 26;
      if (/[0-9]/.test(pw)) pool += 10;
      if (/[^a-zA-Z0-9]/.test(pw)) pool += 33;
      return Math.round(pw.length * (pool ? Math.log2(pool) : 0));
    };

    pwInput.addEventListener('input', () => {
      const pw = pwInput.value;
      const ent = calcEntropy(pw);
      strengthBar.style.width = Math.min(100, (ent / 85) * 100) + '%';

      let label = '—', col = 'var(--text-muted)';
      if (pw) {
        if (ent < 28) { label = 'CRITICAL (Very Weak)'; col = '#ff0055'; }
        else if (ent < 45) { label = 'VULNERABLE (Weak)'; col = '#ff5500'; }
        else if (ent < 60) { label = 'FAIR (Moderate)'; col = '#ffaa00'; }
        else if (ent < 80) { label = 'ROBUST (Strong)'; col = '#00ff88'; }
        else { label = 'HARDENED (Military Grade)'; col = '#00ff66'; }
      }

      strengthBar.style.background = col;
      strengthLabel.textContent = label;
      strengthLabel.style.color = col;
      entropyLabel.textContent = ent;

      const pool = (/[a-z]/.test(pw) ? 26 : 0) + (/[A-Z]/.test(pw) ? 26 : 0) + (/[0-9]/.test(pw) ? 10 : 0) + (/[^a-zA-Z0-9]/.test(pw) ? 33 : 0);
      const secs = pool && pw.length ? Math.pow(pool, pw.length) / 1e10 : 0;
      let time = 'Instantly';
      if (secs >= 1 && secs < 60) time = Math.round(secs) + ' sec';
      else if (secs >= 60 && secs < 3600) time = Math.round(secs / 60) + ' min';
      else if (secs >= 3600 && secs < 86400) time = Math.round(secs / 3600) + ' hours';
      else if (secs >= 86400 && secs < 31536000) time = Math.round(secs / 86400) + ' days';
      else if (secs >= 31536000) time = (secs / 31536000 > 1000 ? '> 1,000' : Math.round(secs / 31536000)) + ' years';
      crackTime.textContent = pw ? time : '—';

      const checks = [];
      if (pw.length && pw.length < 8) checks.push('Length < 8');
      if (pw && !/[A-Z]/.test(pw)) checks.push('Missing Uppercase');
      if (pw && !/[a-z]/.test(pw)) checks.push('Missing Lowercase');
      if (pw && !/[0-9]/.test(pw)) checks.push('Missing Digits');
      if (pw && !/[^a-zA-Z0-9]/.test(pw)) checks.push('Missing Symbols');

      if (!pw) { complexityAudit.textContent = '—'; complexityAudit.style.color = 'var(--text-muted)'; }
      else if (!checks.length) { complexityAudit.textContent = '✓ Fully Compliant'; complexityAudit.style.color = 'var(--accent-green)'; }
      else { complexityAudit.textContent = '⚠ ' + checks.join(', '); complexityAudit.style.color = '#ff5500'; }

      hibpResult.textContent = 'Not queried.';
      hibpResult.style.color = 'var(--text-muted)';
    });

    if (hibpBtn) {
      hibpBtn.addEventListener('click', async () => {
        const pw = pwInput.value;
        if (!pw) {
          hibpResult.textContent = 'Input password first.';
          hibpResult.style.color = '#ff0055';
          return;
        }
        hibpResult.textContent = 'Scanning HIBP SHA-1 database...';
        try {
          const hashBuf = await crypto.subtle.digest('SHA-1', new TextEncoder().encode(pw));
          const hash = [...new Uint8Array(hashBuf)].map(b => b.toString(16).padStart(2, '0')).join('').toUpperCase();
          const prefix = hash.slice(0, 5);
          const suffix = hash.slice(5);

          const res = await fetch(`https://api.pwnedpasswords.com/range/${prefix}`);
          const text = await res.text();

          let count = 0;
          for (const line of text.split('\n')) {
            const [h, c] = line.split(':');
            if (h.trim() === suffix) {
              count = parseInt(c, 10);
              break;
            }
          }

          if (count > 0) {
            hibpResult.innerHTML = `<span style="color:#ff0055">⚠ LEAKED: Found in ${count.toLocaleString()} known database breaches!</span>`;
          } else {
            hibpResult.innerHTML = `<span style="color:var(--accent-green)">✓ CLEAN: Zero occurrences in known breach dumps.</span>`;
          }
        } catch {
          hibpResult.textContent = 'Query blocked or offline.';
          hibpResult.style.color = '#ff5500';
        }
      });
    }
  }

  // 4. Email Breach Lookup via XposedOrNot
  initBreachScanner() {
    const breachEmail = document.getElementById('breach-email');
    const breachBtn = document.getElementById('breach-btn');
    const breachStatus = document.getElementById('breach-status');
    const breachResults = document.getElementById('breach-results');

    if (!breachBtn || !breachEmail || !breachStatus) return;

    breachBtn.addEventListener('click', async () => {
      const email = breachEmail.value.trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        breachStatus.innerHTML = '<span style="color:#ff0055">Valid email syntax required.</span>';
        return;
      }
      breachStatus.textContent = 'Scanning threat intelligence feeds...';
      breachStatus.style.color = 'var(--accent-cyan)';
      breachResults.innerHTML = '';

      try {
        const r = await fetch(`https://api.xposedornot.com/v1/breach-analytics?email=${encodeURIComponent(email)}`);
        const data = await r.json();

        if (!data.ExposedBreaches?.breaches_details) {
          breachStatus.innerHTML = '<span style="color:var(--accent-green)">✓ No exposure identified across public threat dumps.</span>';
          return;
        }

        const breaches = data.ExposedBreaches.breaches_details;
        breachStatus.innerHTML = `<span style="color:#ff0055">⚠ EXPOSURE CONFIRMED: Found in ${breaches.length} breaches:</span>`;

        breaches.slice(0, 5).forEach(b => {
          const item = document.createElement('div');
          item.style.cssText = 'padding:6px 10px;margin-top:6px;background:rgba(255,0,85,0.08);border-left:2px solid #ff0055;border-radius:2px;font-size:0.8rem;';
          item.innerHTML = `<strong>${b.breach}</strong> &bull; Domain: ${b.domain || 'N/A'}`;
          breachResults.appendChild(item);
        });
      } catch {
        breachStatus.innerHTML = '<span style="color:var(--text-muted)">Query rate-limited or target not indexed.</span>';
      }
    });
  }

  // 5. Browser Intel / Footprint Telemetry
  initIntelFootprint() {
    const el = id => document.getElementById(id);

    // OS & Browser
    const ua = navigator.userAgent;
    let os = 'Unknown OS';
    if (ua.includes('Win')) os = 'Windows';
    else if (ua.includes('Mac')) os = 'macOS';
    else if (ua.includes('Linux')) os = 'Linux';
    else if (ua.includes('Android')) os = 'Android';
    else if (ua.includes('iPhone')) os = 'iOS';

    let browser = 'Unknown Browser';
    if (ua.includes('Firefox')) browser = 'Firefox';
    else if (ua.includes('Edg')) browser = 'Microsoft Edge';
    else if (ua.includes('Chrome')) browser = 'Chrome / Chromium';
    else if (ua.includes('Safari')) browser = 'Safari';

    if (el('intel-os')) el('intel-os').textContent = os;
    if (el('intel-browser')) el('intel-browser').textContent = browser;
    if (el('intel-cores')) el('intel-cores').textContent = `${navigator.hardwareConcurrency || 4} Threads`;
    if (el('intel-ram')) el('intel-ram').textContent = `${navigator.deviceMemory ? navigator.deviceMemory + ' GB' : 'Protected'}`;
    if (el('intel-screen')) el('intel-screen').textContent = `${window.screen.width}x${window.screen.height} @ ${window.devicePixelRatio}x`;
    if (el('intel-tz')) el('intel-tz').textContent = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
    if (el('intel-conn')) {
      const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      el('intel-conn').textContent = conn ? `${conn.effectiveType || '4G'} (~${conn.downlink || 10} Mbps)` : 'Direct TCP';
    }

    // Canvas Fingerprint Hash
    if (el('intel-canvas')) {
      try {
        const cvs = document.createElement('canvas');
        cvs.width = 120;
        cvs.height = 30;
        const ctx = cvs.getContext('2d');
        ctx.textBaseline = 'top';
        ctx.font = "14px 'Arial'";
        ctx.fillStyle = '#f60';
        ctx.fillRect(10, 1, 62, 20);
        ctx.fillStyle = '#069';
        ctx.fillText('0xKULDEEP', 2, 8);
        const data = cvs.toDataURL();
        let hash = 0;
        for (let i = 0; i < data.length; i++) {
          hash = (hash << 5) - hash + data.charCodeAt(i);
          hash |= 0;
        }
        el('intel-canvas').textContent = '0x' + Math.abs(hash).toString(16).toUpperCase();
      } catch {
        el('intel-canvas').textContent = 'Blocked';
      }
    }

    // Bot detection check
    if (el('intel-bot')) {
      const isBot = navigator.webdriver || window._phantom || window.__nightmare;
      el('intel-bot').textContent = isBot ? 'ALERT: AUTOMATION DETECTED' : 'HUMAN OPERATIVE';
      el('intel-bot').style.color = isBot ? '#ff0055' : 'var(--accent-green)';
    }

    // Session timer
    if (el('intel-time')) {
      setInterval(() => {
        const sec = Math.floor((Date.now() - this.pageLoadTime) / 1000);
        el('intel-time').textContent = `${sec}s`;
      }, 1000);
    }
  }
}
