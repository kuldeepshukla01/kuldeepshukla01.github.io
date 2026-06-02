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
  fetch('https://ipapi.co/json/')
    .then(r => r.json())
    .then(data => {
      const ipField = document.getElementById('fp_ip');
      const vpnField = document.getElementById('fp_vpn');
      if (ipField) {
        ipField.value = `${data.ip} | ${data.city}, ${data.region}, ${data.country_name} | ISP: ${data.org}`;
      }
      if (vpnField) {
        const vpn = (data.org || '').match(
          /vpn|proxy|hosting|cloud|digitalocean|aws|azure|linode|vultr|ovh|tor/i
        ) ? '⚠ POSSIBLE VPN/PROXY' : '✓ CLEAN';
        vpnField.value = vpn;
      }
    })
    .catch(() => {
      const ipField = document.getElementById('fp_ip');
      const vpnField = document.getElementById('fp_vpn');
      if (ipField) ipField.value  = 'Could not fetch IP';
      if (vpnField) vpnField.value = 'Unknown';
    });

  // Static browser details (No permissions required)
  const uaField = document.getElementById('fp_ua');
  const screenField = document.getElementById('fp_screen');
  const tzField = document.getElementById('fp_tz');
  const langField = document.getElementById('fp_lang');
  const refField = document.getElementById('fp_ref');

  if (uaField) uaField.value = navigator.userAgent;
  if (screenField) {
    screenField.value = `${screen.width}x${screen.height} | ${screen.colorDepth}bit | ratio: ${window.devicePixelRatio}x`;
  }
  if (tzField) {
    tzField.value = `${Intl.DateTimeFormat().resolvedOptions().timeZone} | UTC${-(new Date().getTimezoneOffset() / 60)}`;
  }
  if (langField) {
    langField.value = `${navigator.language} | ${navigator.languages.join(', ')}`;
  }
  if (refField) {
    refField.value = document.referrer || 'Direct / No referrer';
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

// ── INIT INITIALIZATION ──
document.addEventListener('DOMContentLoaded', () => {
  runFingerprinting();
  initContactForm();
  initMatrixRain();
  initNavbarScroll();
  fetchGitHubProjects();
  initCustomCursor();
});
