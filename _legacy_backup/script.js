const pageLoad = Date.now();
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('on', scrollY > 24), {passive: true});

const io = new IntersectionObserver(es => {
  es.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, {threshold: .12});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab)?.classList.add('active');
  });
});

async function digest(algo, str) {
  const buf = await crypto.subtle.digest(algo, new TextEncoder().encode(str));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
}

document.getElementById('hash-input').addEventListener('input', async e => {
  const v = e.target.value;
  if (!v) {
    document.getElementById('hash-sha1').textContent = '—';
    document.getElementById('hash-sha256').textContent = '—';
    return;
  }
  document.getElementById('hash-sha1').textContent = await digest('SHA-1', v);
  document.getElementById('hash-sha256').textContent = await digest('SHA-256', v);
});

let cipherMode = 'encode';
document.querySelectorAll('[data-mode]').forEach(b => {
  b.addEventListener('click', () => {
    document.querySelectorAll('[data-mode]').forEach(x => x.classList.remove('on'));
    b.classList.add('on');
    cipherMode = b.dataset.mode;
    processCipher();
  });
});
document.getElementById('cipher-input').addEventListener('input', processCipher);

function processCipher() {
  const v = document.getElementById('cipher-input').value;
  const out = document.getElementById('cipher-output');
  if (!v) { out.textContent = '—'; return; }
  try {
    if (cipherMode === 'encode') out.textContent = btoa(unescape(encodeURIComponent(v)));
    else if (cipherMode === 'decode') out.textContent = decodeURIComponent(escape(atob(v.trim())));
    else out.textContent = v.replace(/[a-zA-Z]/g, c => String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26));
  } catch { out.textContent = 'Error.'; }
}

function entropy(pw) {
  if (!pw) return 0;
  let R = 0;
  if (/[a-z]/.test(pw)) R += 26;
  if (/[A-Z]/.test(pw)) R += 26;
  if (/[0-9]/.test(pw)) R += 10;
  if (/[^a-zA-Z0-9]/.test(pw)) R += 33;
  return Math.round(pw.length * (R ? Math.log2(R) : 0));
}

document.getElementById('password-input').addEventListener('input', () => {
  const pw = document.getElementById('password-input').value;
  const e = entropy(pw);
  const bar = document.getElementById('strength-bar');
  bar.style.width = Math.min(100, (e / 80) * 100) + '%';
  let label = '—', col = 'var(--muted)';
  if (pw) {
    if (e < 28) { label = 'Very weak'; col = 'var(--danger)'; }
    else if (e < 40) { label = 'Weak'; col = 'var(--danger)'; }
    else if (e < 60) { label = 'Fair'; col = 'var(--warn)'; }
    else if (e < 80) { label = 'Strong'; col = 'var(--ok)'; }
    else { label = 'Very strong'; col = 'var(--accent)'; }
  }
  bar.style.background = col;
  document.getElementById('strength-label').textContent = label;
  document.getElementById('strength-label').style.color = col;
  document.getElementById('entropy-label').textContent = e;

  const R = (/[a-z]/.test(pw) ? 26 : 0) + (/[A-Z]/.test(pw) ? 26 : 0) + (/[0-9]/.test(pw) ? 10 : 0) + (/[^a-zA-Z0-9]/.test(pw) ? 33 : 0);
  const secs = R && pw.length ? Math.pow(R, pw.length) / 1e10 : 0;
  let time = 'Instantly';
  if (secs >= 1 && secs < 60) time = Math.round(secs) + 's';
  else if (secs >= 60 && secs < 3600) time = Math.round(secs / 60) + ' min';
  else if (secs >= 3600 && secs < 86400) time = Math.round(secs / 3600) + ' hrs';
  else if (secs >= 86400 && secs < 31536000) time = Math.round(secs / 86400) + ' days';
  else if (secs >= 31536000) time = Math.round(secs / 31536000) + ' yrs';
  document.getElementById('crack-time').textContent = pw ? time : '—';

  const checks = [];
  if (pw.length && pw.length < 8) checks.push('Too short');
  if (pw && !/[A-Z]/.test(pw)) checks.push('No uppercase');
  if (pw && !/[a-z]/.test(pw)) checks.push('No lowercase');
  if (pw && !/[0-9]/.test(pw)) checks.push('No number');
  if (pw && !/[^a-zA-Z0-9]/.test(pw)) checks.push('No special');
  const audit = document.getElementById('complexity-audit');
  if (!pw) { audit.textContent = '—'; audit.style.color = 'var(--muted)'; }
  else if (!checks.length) { audit.textContent = '✓ Complex'; audit.style.color = 'var(--ok)'; }
  else { audit.textContent = '⚠ ' + checks[0]; audit.style.color = 'var(--danger)'; }

  document.getElementById('hibp-result').textContent = 'Not queried.';
  document.getElementById('hibp-result').style.color = 'var(--muted)';
});

document.getElementById('hibp-btn').addEventListener('click', async () => {
  const pw = document.getElementById('password-input').value;
  const res = document.getElementById('hibp-result');
  if (!pw) { res.textContent = 'Enter password first.'; res.style.color = 'var(--danger)'; return; }
  res.textContent = 'Querying…';
  try {
    const hash = [...new Uint8Array(await crypto.subtle.digest('SHA-1', new TextEncoder().encode(pw)))].map(b => b.toString(16).padStart(2, '0')).join('').toUpperCase();
    const r = await fetch('https://api.pwnedpasswords.com/range/' + hash.slice(0, 5));
    const text = await r.text();
    let count = 0;
    for (const line of text.split('\n')) {
      const [s, c] = line.split(':');
      if (s.trim() === hash.slice(5)) { count = parseInt(c, 10); break; }
    }
    if (count) { res.innerHTML = `⚠ ${count.toLocaleString()} breaches`; res.style.color = 'var(--danger)'; }
    else { res.textContent = '✓ No known leaks'; res.style.color = 'var(--ok)'; }
  } catch { res.textContent = 'Failed.'; res.style.color = 'var(--danger)'; }
});

document.getElementById('breach-btn').addEventListener('click', async () => {
  const email = document.getElementById('breach-email').value.trim();
  const status = document.getElementById('breach-status');
  const results = document.getElementById('breach-results');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    status.innerHTML = '<span style="color:var(--danger)">Valid email required.</span>';
    return;
  }
  status.textContent = 'Scanning…';
  status.style.color = 'var(--accent)';
  results.innerHTML = '';
  try {
    const r = await fetch('https://api.xposedornot.com/v1/breach-analytics?email=' + encodeURIComponent(email));
    const data = await r.json();
    if (!data.ExposedBreaches?.breaches_details) {
      status.innerHTML = '<span style="color:var(--ok)">✓ Not found in known leaks.</span>';
      return;
    }
    const list = data.ExposedBreaches.breaches_details;
    status.innerHTML = `⚠ <strong style="color:var(--danger)">${list.length}</strong> breaches`;
    status.style.color = 'var(--danger)';
    results.innerHTML = list.map(b => `
      <div class="hash-results" style="margin-top:10px;text-align:left">
        <strong style="color:var(--accent)">${b.breach || 'Unknown'}</strong>
        <span style="color:var(--faint);font-size:.78rem">${b.xposed_date || ''}</span>
        <p style="font-size:.82rem;color:var(--muted);margin-top:6px">${(b.details || '').slice(0, 160)}</p>
      </div>`).join('');
  } catch {
    status.innerHTML = '<span style="color:var(--danger)">Scan failed.</span>';
  }
});

(function () {
  const ua = navigator.userAgent;
  let os = 'Unknown', browser = 'Unknown';
  if (/Win/.test(ua)) os = 'Windows';
  else if (/Mac/.test(ua) && !('ontouchend' in document)) os = 'macOS';
  else if (/Linux/.test(ua)) os = 'Linux';
  else if (/Android/.test(ua)) os = 'Android';
  else if (/iPhone|iPad/.test(ua)) os = 'iOS';

  if (/Firefox/.test(ua)) browser = 'Firefox';
  else if (/Edg/.test(ua)) browser = 'Edge';
  else if (/Chrome/.test(ua)) browser = 'Chrome';
  else if (/Safari/.test(ua)) browser = 'Safari';

  document.getElementById('intel-os').textContent = os;
  document.getElementById('intel-browser').textContent = browser;
  document.getElementById('intel-cores').textContent = (navigator.hardwareConcurrency || '?') + ' cores';
  document.getElementById('intel-ram').textContent = navigator.deviceMemory ? `~${navigator.deviceMemory} GB` : 'n/a';
  document.getElementById('intel-screen').textContent = `${screen.width}×${screen.height}`;
  document.getElementById('intel-tz').textContent = Intl.DateTimeFormat().resolvedOptions().timeZone;
  document.getElementById('intel-bot').textContent = navigator.webdriver ? '⚠ Auto' : '✓ Genuine';
  document.getElementById('intel-bot').style.color = navigator.webdriver ? 'var(--danger)' : 'var(--ok)';

  const conn = navigator.connection || navigator.mozConnection;
  document.getElementById('intel-conn').textContent = conn ? `${conn.effectiveType || ''} ${conn.downlink ? conn.downlink + ' Mbps' : ''}` : 'n/a';

  try {
    const c = document.createElement('canvas');
    const ctx = c.getContext('2d');
    ctx.font = '12px monospace';
    ctx.fillText('ks', 2, 12);
    let h = 0;
    const d = c.toDataURL();
    for (let i = 0; i < d.length; i++) { h = ((h << 5) - h) + d.charCodeAt(i); h |= 0; }
    document.getElementById('intel-canvas').textContent = Math.abs(h).toString(16).toUpperCase();
  } catch {
    document.getElementById('intel-canvas').textContent = 'blocked';
  }

  fetch('https://ipapi.co/json/')
    .then(r => r.json())
    .then(d => {
      document.getElementById('intel-ip').textContent = `${d.ip} · ${d.city || ''}`;
      const vpn = /(vpn|proxy|hosting|cloud|aws|azure)/i.test(d.org || '') ? '⚠ VPN?' : '✓ Clean';
      document.getElementById('intel-vpn').textContent = vpn;
      document.getElementById('intel-vpn').style.color = vpn.includes('Clean') ? 'var(--ok)' : 'var(--danger)';
    })
    .catch(() => { document.getElementById('intel-ip').textContent = 'n/a'; });

  setInterval(() => {
    document.getElementById('intel-time').textContent = Math.round((Date.now() - pageLoad) / 1000) + 's';
  }, 1000);
})();

fetch('https://api.github.com/users/kuldeepshukla01/repos?sort=pushed&per_page=12')
  .then(r => r.json())
  .then(repos => {
    const list = (Array.isArray(repos) ? repos.filter(x => !x.fork) : []).slice(0, 6);
    if (!list.length) return;
    document.getElementById('github-grid').innerHTML = list.map(repo => `
      <div class="gh-card glass">
        <h3>${repo.name.replace(/[-_]/g, ' ')}</h3>
        <div class="gh-meta">${repo.language || 'Code'} · ★ ${repo.stargazers_count || 0}</div>
        <p>${repo.description || 'View on GitHub.'}</p>
        <a href="${repo.html_url}" target="_blank" rel="noopener">Repo ↗</a>
      </div>`).join('');
  }).catch(() => {});

document.querySelectorAll('.glass').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width * 100).toFixed(1);
    const y = ((e.clientY - r.top) / r.height * 100).toFixed(1);
    card.style.setProperty('--mx', x + '%');
    card.style.setProperty('--my', y + '%');
  });
});
