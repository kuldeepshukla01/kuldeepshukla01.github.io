# Kuldeep Shukla — Cybersecurity Operations & Engineering Portfolio

[![Live Site](https://img.shields.io/badge/Live%20Site-kuldeepshukla01.github.io-06b6d4?style=flat&logo=github)](https://kuldeepshukla01.github.io)
[![License](https://img.shields.io/badge/License-MIT-emerald?style=flat)](LICENSE)
[![Degree](https://img.shields.io/badge/BSc%20(Hons)-Computing%20%26%20IT-3b82f6?style=flat)](https://www.cct.ie)
[![Status](https://img.shields.io/badge/Status-Graduated%20%7C%20Open%20to%20Work-10b981?style=flat)]()

A high-performance, responsive cybersecurity engineering and operations portfolio designed with an offline-first architecture. Featuring a cinematic 3D WebGL particle point cloud portrait preloader, an animated physics-driven top dock, an authentic calligraphy handwriting preloader, an interactive AI-assisted Unix terminal, live automated GitHub repository synchronization, and verified industry credentials.

---

## 1. Project Overview & Architectural Highlights

The portfolio is built with modern vanilla web technologies (HTML5, Vanilla CSS3, Modern ES6+ JavaScript, WebGL2 / Three.js, and Web Crypto API) to ensure maximum speed, portability, and zero bloated framework overhead.

```
kuldeepshukla01.github.io/
├── index.html              # Production landing page with chained 3D particle -> signature flow
├── loading.html            # Standalone 3D WebGL particle intro page & interactive portrait
├── standalone-signature.html# Standalone cursive handwriting signature preloader
├── particle-preloader.css  # WebGL particle preloader layout, typography & animation styles
├── particle-preloader.js   # WebGL2 shader pipeline, mouse repulsion physics & GSAP sequencer
├── style.css               # Core design tokens, ThreeUI Sable theme, and responsive CSS
├── script.js               # Application controllers, WebGL canvas, and API integrations
├── three.min.js            # Bundled local Three.js engine for offline 3D WebGL rendering
├── Kuldeep_Shukla_CV.pdf   # Verified graduate resume / CV download
├── full portfolio/         # Dedicated backup directory of full portfolio build
├── full-portfolio/         # Web-safe backup directory of full portfolio build
├── my-portfolio/           # Dedicated standalone workspace build directory
├── assets/
│   ├── kuldeep_portrait.png# High-resolution alpha portrait for WebGL particle cloud
│   └── cyber_assets/       # Verified certificate scans, institution badges, and graphics
└── README.md               # Technical documentation and project specification
```

---

## 2. Key Interactive Features

### 1. Two-Stage Cinematic Loading Sequence
1. **Stage 1 — 3D WebGL Particle Intro**:
   - High-energy light impact ripples across the screen, energetically typing **KULDEEP SHUKLA**.
   - Cyber-glitch morphs into **PORTFOLIO** and sweeps cleanly out to the flanks before fading into deep space, preventing any stuck word fragments.
   - Thousands of interactive 3D WebGL particles construct Kuldeep Shukla's portrait with real-time cursor repulsion and soft organic edge feathering (dissolving box borders on mobile devices).
   - Side credentials card displays verified graduate status, certifications, and the **Explore Full Portfolio** action.
   - **Tap Anywhere to Enter**: Tapping or clicking anywhere on the screen (or pressing <kbd>Enter</kbd> / <kbd>Space</kbd>) instantly advances to the handwriting signature animation.
2. **Stage 2 — Calligraphy Signature Name Animation**:
   - Tapping anywhere or clicking **Explore Full Portfolio** triggers the authentic cursive ink handwriting animation.
   - Built with high-performance SVG clipping stencils (`<clipPath>`) and dual GSAP + CSS attribute drivers, ensuring 100% smooth rendering across iOS Safari, macOS Safari, Firefox, and Chromium browsers.
   - Solid white cursive ink flows progressively from left to right (*Great Vibes* cursive) writing **Kuldeep Shukla**.
   - A pure white swirl flourish sweeps underneath to complete the signature before smoothly fading and unmasking the full portfolio.
   - Quick-skip is available at any time by tapping or pressing any key.

### 2. ThreeUI Animated Top Dock (Sable Physics)
- **Fluid Spring Physics**: Centered glass capsule inspired by modern dock physics with dynamic pointer distance magnification and elastic settling.
- **Keyboard Shortcuts**: Instant navigation mapped to keys `0x00` through `0x07` (`0` for Dossier, `1` for Terminal, `2` for Projects, `3` for Repositories, `4` for Certs, `5` for Timeline, `6` for Lab, `7` for Contact).
- **Glassmorphism Styling**: Backdrop blur with subtle border glow and active section indicators.

### 3. Calligraphy Signature Preloader
- **Authentic Handwriting Ink Flow**: Built with progressive SVG clipping paths (`<clipPath id="clipFirst">`, `<clipPath id="clipLast">`) unmasking solid white cursive text (*Great Vibes* typography) from left to right.
- **Zero Premature Borders**: Pitch-black canvas initialization prevents any ghost outlines or character borders from showing before the pen arrives.
- **Pure White Flourish Underline**: A smooth, curved pen stroke swoops underneath to complete the signature before transitioning into the portfolio view.
- **Quick-Skip Support**: Users can tap or press any key to enter immediately.

### 4. Dossier Card & Interactive AI Terminal
- **Verified Background**: Documents graduate status (BSc Hons in Computing & IT from CCT College Dublin), verified skills, and primary roles (Entry-Level IT, Junior Pentester, SOC Analyst).
- **Interactive Command-Line Terminal**:
  - Full CLI emulator supporting classic commands: `help`, `skills`, `projects`, `certs`, `about`, `repos`, `clear`, `contact`.
  - **Puter.js AI Integration**: Type `ai <question>` to chat with an AI assistant trained on Kuldeep's background.
  - **Offline Fallback Parser**: Built-in keyword matching ensures the terminal remains responsive even without an internet connection.

### 5. College Capstone & Personal Projects (Authentic Consoles)
Zero generic or AI-generated stock artwork. Each project is showcased with an authentic developer terminal and architecture console:
1. **1DayCrew AI — Network Intrusion Detection System (College Capstone)**:
   - End-to-end ML NIDS classifying 14 cyber attack types with **>97.4% precision** on the benchmark CICIDS2017 dataset.
   - Built with Python, XGBoost multiclass classification, NFStream real-time flow capture, SHAP explainability, and a Flask analytics dashboard.
2. **1DayCrew OS — Custom Debian-Based System**:
   - Custom Debian GNU/Linux 12 (*bookworm*) installation configured on a 2012 MacBook Pro (`MacBookPro9,2`).
   - Resolved proprietary Broadcom BCM4331 WiFi driver challenges (`wl-dkms`), configured KDE Plasma desktop, custom Plymouth boot animations, and offline LLM inference with Ollama.
3. **EditNote — Android Notes App**:
   - Native Android mobile application (Java) integrating Firebase Authentication and Google Cloud Storage with 256-bit AES encrypted sessions and offline SQLite caching.

### 6. Automated GitHub Repositories Live Feed
- **Dynamic Synchronization**: Automatically fetches public repositories directly from the GitHub REST API (`https://api.github.com/users/kuldeepshukla01/repos`).
- **Always Up to Date**: Any repository created or deleted on GitHub is instantly reflected in the portfolio without manual code edits.
- **Interactive Filters**: Instant filtering by language tag (`All`, `Python`, `Jupyter Notebook`, `Java`, `JavaScript`).
- **Live Metadata**: Real-time display of star counts, forks, descriptions, and update timestamps.

### 7. Verified Industry Certifications Gallery
High-resolution credentials gallery with an interactive modal lightbox:
- **EC-Council Hackerverse CTF Competition**: Grandmaster Level, Certificate #2126 (Oct 2026).
- **Cisco Networking Academy — Ethical Hacker**: Comprehensive penetration testing certification (Jan 2026).
- **Cisco Networking Academy — Certificate of Completion**: Course competencies verification (Jan 2026).
- **EC-Council — Deep Web and Cyber Security**: Darknet intelligence and threat analysis (Feb 2024).
- **EC-Council CodeRed — Android Bug Bounty Hunting**: Mobile application security testing (Jun 2026).
- **EC-Council CodeRed — Jira Agile Project Management**: DevSecOps and vulnerability tracking (Aug 2026).

### 8. Connected Circuit Timeline & 3D WebGL Earth Globe
- **Education & Experience Milestones**: An interconnected circuit track detailing milestones from Hewett Polytechnic to CCT College Dublin.
- **Interactive 3D WebGL Globe**: Built with Three.js. Supports drag-to-rotate interaction, atmospheric aura, and a coordinate pin centered on Dublin, Ireland.

### 9. Client-Side Cyber Lab Suite
Browser-based security utilities utilizing the native W3C Web Crypto API (`window.crypto.subtle`):
- **Cryptographic Hash Calculator**: SHA-256 and SHA-512 with sub-millisecond calculation times.
- **Data Encoders**: Real-time Base64, Hexadecimal, and URL encoding/decoding.
- **Password Entropy & Strength Scorer**: Shannon entropy calculation in bits with brute-force resistance analysis.
- **Client Telemetry Scanner**: Safe inspection of local browser properties, screen metrics, and core availability.

### 10. Corner Radial Contact & Connect Dock
- Fixed bottom-right corner component matching the spinning border beam design of the CV download button.
- Labeled **CONTACT** (toggles to **CLOSE** when expanded).
- One-click splayed radial actions for **LinkedIn**, **GitHub**, **Email**, and **URL Copying** (with instant clipboard tick confirmation).

---

## 3. Technology Stack

| Layer | Technology | Role |
|---|---|---|
| **Structure** | Semantic HTML5 | Document outline, accessibility attributes (`aria-*`), and layout landmarks |
| **Styling** | Vanilla CSS3 | Custom properties, ThreeUI Sable theme, flexbox/grid systems, and animations |
| **Logic** | Modern ES6+ JavaScript | DOM manipulation, spring physics calculations, event dispatchers, and state management |
| **3D Graphics** | WebGL2 / Three.js (r128) | Interactive 3D particle point cloud portrait and 3D Earth globe |
| **Cryptography** | Web Crypto API | Hardware-accelerated client-side hashing (`crypto.subtle`) |
| **AI Terminal** | Puter.js (v2) | Public conversational AI integration with local fallback parsing |
| **Typography** | Inter, JetBrains Mono, Great Vibes | Clean modern UI hierarchy and authentic calligraphy handwriting |

---

## 4. Running Locally

No npm dependencies, node modules, or build tools are required. You can serve the project using any standard HTTP server:

```bash
# 1. Clone the repository
git clone https://github.com/kuldeepshukla01/kuldeepshukla01.github.io.git

# 2. Enter the repository directory
cd kuldeepshukla01.github.io

# 3. Start a local server (Python 3)
python3 -m http.server 8088

# 4. Open in your browser
open http://localhost:8088
```

- Navigate to `http://localhost:8088/loading.html` to experience the 3D particle preloader intro.
- Navigate to `http://localhost:8088/my-portfolio/` to test the modular workspace build.

---

## 5. Deployment

The repository is configured for automatic deployment via **GitHub Pages**. Any changes pushed to the `main` branch are automatically built and served live at:

**[https://kuldeepshukla01.github.io](https://kuldeepshukla01.github.io)**

---

## 6. Author & Contact

- **Author**: Kuldeep Shukla
- **Qualification**: BSc (Hons) in Computing & IT, CCT College Dublin (2026)
- **Location**: Dundalk, Co. Louth / Dublin, Ireland (Open to Relocate)
- **Email**: [kuldeepshuklan@outlook.com](mailto:kuldeepshuklan@outlook.com)
- **LinkedIn**: [linkedin.com/in/1daycrew](https://www.linkedin.com/in/1daycrew)
- **GitHub**: [github.com/kuldeepshukla01](https://github.com/kuldeepshukla01)
