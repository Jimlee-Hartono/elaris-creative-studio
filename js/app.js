/**
 * ELARIS CREATIVE STUDIO - MAIN INTERACTIVE ENGINE
 * Principles of UI/UX: High responsiveness, intuitive feedback,
 * accessible interaction states, and rich contextual transitions.
 */

// --- Internationalization Dictionary (ID & EN) ---
const I18N = {
  en: {
    nav: {
      about: "About",
      values: "Values",
      solutions: "Solutions",
      portfolio: "Work",
      services: "Services",
      process: "Process",
      estimator: "Scope Estimator",
      bmc: "Studio Blueprint",
      contact: "Start a Project"
    },
    hero: {
      badge: "ELARIS CREATIVE STUDIO • PT ELARIS INDONESIA",
      title: "Elevating Brands Through <span class='highlight'>Bespoke Design</span> & Digital Precision.",
      desc: "We engineer customized visual identities, high-converting digital products, and tactile packaging for ambitious startups, corporate leaders, and visionary brand owners. Not templates. Pure bespoke craft.",
      ctaPrimary: "Estimate Your Project",
      ctaSecondary: "Explore Portfolio",
      stat1Val: "100%",
      stat1Label: "Tailored (No Templates)",
      stat2Val: "99.4%",
      stat2Label: "On-Time Milestones",
      stat3Val: "48h",
      stat3Label: "Sprint Kickoff"
    },
    values: {
      badge: "Our Core Pillars",
      title: "Built on Precision, Character & Transparency",
      subtitle: "Derived directly from our studio canvas: four non-negotiable promises that separate Elaris from conventional agencies.",
      card1Title: "Bespoke & Authentic",
      card1Desc: "Custom-crafted visual solutions shaped strictly around your unique brand DNA and market segment. Zero repetitive templates.",
      card2Title: "Fast, Guaranteed Turnaround",
      card2Desc: "Structured sprint scheduling with crystal-clear milestone deliveries so you never miss a launch or marketing campaign.",
      card3Title: "Transparent & Controlled QC",
      card3Desc: "Rigorous quality control checkpoints with clearly documented revision phases to guarantee exceptional aesthetic and functional standards.",
      card4Title: "Production-Ready Master Files",
      card4Desc: "Flawless handover of complete vector sources, Figma design tokens, digital SVG assets, and calibrated CMYK print-ready files."
    },
    segments: {
      badge: "Tailored Solutions",
      title: "Engineered for Every Stage of Growth",
      subtitle: "Whether you are bootstrapping a new venture or scaling an established market leader, we adapt to your operational reality."
    },
    estimator: {
      badge: "Transparent Budgeting",
      title: "Interactive Scope & Investment Estimator",
      subtitle: "Explore indicative investment tiers based on your project deliverables or ongoing creative retainer needs.",
      projectTab: "Project-Based Engagement",
      retainerTab: "Monthly Dedicated Retainer",
      calculateBtn: "Lock This Scope in Brief"
    },
    bmc: {
      badge: "Studio Governance",
      title: "Our Transparent Business Model Canvas",
      subtitle: "See behind the curtain: the 9 strategic pillars governing how Elaris Creative Studio operates, delivers value, and partners with clients.",
      viewFullBtn: "Inspect Full Blueprint Architecture"
    },
    contact: {
      badge: "Collaborate With Us",
      title: "Let's Build Something Iconic",
      subtitle: "Tell us about your brand challenge. Our Art Director and Strategy team will review your brief within 24 business hours.",
      nameLabel: "Your Full Name",
      emailLabel: "Corporate Email Address",
      companyLabel: "Brand / Company Name",
      serviceLabel: "Primary Service Needed",
      budgetLabel: "Estimated Budget Range",
      messageLabel: "Project Brief & Objectives",
      submitBtn: "Submit Creative Brief"
    }
  },
  id: {
    nav: {
      about: "Tentang",
      values: "Nilai Utama",
      solutions: "Solusi Klien",
      portfolio: "Portofolio",
      services: "Layanan",
      process: "Alur Kerja",
      estimator: "Kalkulator Biaya",
      bmc: "Cetak Biru Studio",
      contact: "Mulai Proyek"
    },
    hero: {
      badge: "ELARIS CREATIVE STUDIO • PT ELARIS INDONESIA",
      title: "Membangun Citra Brand Melalui <span class='highlight'>Desain Kustom</span> & Presisi Digital.",
      desc: "Solusi visual berkarakter, produk digital bereputasi tinggi, dan desain kemasan taktil untuk UMKM, korporat B2B, dan pemilik merek. Bukan template pasaran. 100% orisinal dan terstruktur.",
      ctaPrimary: "Hitung Estimasi Proyek",
      ctaSecondary: "Lihat Portofolio",
      stat1Val: "100%",
      stat1Label: "Desain Kustom Orisinal",
      stat2Val: "99.4%",
      stat2Label: "Tepat Waktu Sesuai Deadline",
      stat3Val: "48 Jam",
      stat3Label: "Kickoff Proyek Cepat"
    },
    values: {
      badge: "Pilar Utama Kami",
      title: "Dibangun di Atas Presisi, Karakter & Transparansi",
      subtitle: "Dituangkan langsung dari Business Model Canvas Elaris: empat komitmen mutlak yang membedakan kami dari agensi konvensional.",
      card1Title: "Desain Kustom & Berkarakter",
      card1Desc: "Solusi visual yang disesuaikan khusus dengan identitas dan target pasar klien. Bukan template instan atau salinan generik.",
      card2Title: "Proses Cepat & Tepat Waktu",
      card2Desc: "Penjadwalan pengerjaan terstruktur dalam format sprint terukur demi memastikan kesepakatan deadline peluncuran selalu terpenuhi.",
      card3Title: "Revisi Transparan & Terkontrol",
      card3Desc: "Pedoman dan batasan revisi yang jelas didukung kendali mutu (Quality Control) ketat tanpa mengorbankan standar estetika akhir.",
      card4Title: "Format File Lengkap & Siap Pakai",
      card4Desc: "Penyerahan berkas master lengkap (Figma, AI/EPS, SVG web) serta berkas siap cetak berkalibrasi warna CMYK (PDF, TIFF, PNG high-res)."
    },
    segments: {
      badge: "Solusi Berdasarkan Segmen",
      title: "Dirancang Spesifik untuk Tiap Kebutuhan Bisnis",
      subtitle: "Dari merintis brand baru hingga pembaruan citra korporat multinasional, kami menyediakan arsitektur visual yang tepat sasaran."
    },
    estimator: {
      badge: "Transparansi Biaya",
      title: "Kalkulator Estimasi Lingkup & Investasi Proyek",
      subtitle: "Pilih model proyek atau skema langganan bulanan (retainer) untuk mendapatkan kalkulasi estimasi investasi secara langsung.",
      projectTab: "Proyek Berbasis Kontrak",
      retainerTab: "Layanan Langganan Bulanan (Retainer)",
      calculateBtn: "Gunakan Estimasi Ini di Formulir"
    },
    bmc: {
      badge: "Tata Kelola Studio",
      title: "Cetak Biru Model Bisnis Transparan (BMC)",
      subtitle: "Transparansi penuh: 9 blok strategis bagaimana Elaris Creative Studio beroperasi, menciptakan nilai, dan berkolaborasi dengan mitra.",
      viewFullBtn: "Buka Detail Lengkap Kanvas"
    },
    contact: {
      badge: "Kolaborasi Bersama Kami",
      title: "Mari Wujudkan Karya yang Berdampak",
      subtitle: "Ceritakan visi brand Anda. Creative Director dan tim strategi Elaris akan meninjau brief Anda dalam 24 jam kerja.",
      nameLabel: "Nama Lengkap",
      emailLabel: "Alamat Email Bisnis",
      companyLabel: "Nama Brand / Perusahaan",
      serviceLabel: "Layanan yang Dibutuhkan",
      budgetLabel: "Kisaran Anggaran",
      messageLabel: "Penjelasan Kebutuhan & Target Proyek",
      submitBtn: "Kirim Brief Kreatif"
    }
  }
};

// --- Case Studies & Portfolio Dataset ---
const PORTFOLIO_DATA = [
  {
    id: "lumina-botanicals",
    category: "packaging",
    client: "Lumina Botanicals",
    title: "Organic Skincare Dieline & Eco-Luxury Packaging",
    desc: "A tactile packaging system featuring custom dielines, FSC-certified embossing, and drop-tested durability coordinated with our logistics partners.",
    tags: ["Packaging", "Structural Dieline", "Print QC", "3D Mockup"],
    metrics: "+42% Shelf Eye-Tracking Engagement",
    visualGradient: "linear-gradient(135deg, #1b382b 0%, #0d1e16 100%)",
    icon: "🌱"
  },
  {
    id: "aurora-fintech",
    category: "uiux",
    client: "Aurora Wealth Platform",
    title: "Next-Gen Wealth Management Interface & Design System",
    desc: "Comprehensive web and mobile UI/UX design featuring 120+ modular Figma components, dark mode contrast mastery, and frictionless micro-interactions.",
    tags: ["UI/UX Design", "Figma Design System", "Web & Mobile", "Fintech"],
    metrics: "2.8x User Onboarding Completion Rate",
    visualGradient: "linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%)",
    icon: "💳"
  },
  {
    id: "nexa-logistics",
    category: "branding",
    client: "PT Nexa Express Logistik",
    title: "Enterprise Visual Rebranding & Fleet Fleet Collateral",
    desc: "Complete corporate rebranding for a major logistics group including logo architecture, digital guidelines, fleet vinyl wrap specs, and partner kits.",
    tags: ["Corporate Rebrand", "Brand Guidelines", "Logistics", "Signage"],
    metrics: "Unification of 14 Sub-Brands Across Indonesia",
    visualGradient: "linear-gradient(135deg, #312e81 0%, #1e1b4b 100%)",
    icon: "🚚"
  },
  {
    id: "solis-roastery",
    category: "branding",
    client: "Solis Artisan Coffee",
    title: "Specialty Coffee Identity, Can Packaging & Retail Suite",
    desc: "A vibrant visual identity and nitrogen-sealed can packaging series for specialty coffee roasters targeting gen-Z and millennial urbanites.",
    tags: ["Brand Identity", "Can Packaging", "Retail POS", "Print Oversight"],
    metrics: "Initial 10,000 Units Sold Out in 14 Days",
    visualGradient: "linear-gradient(135deg, #7c2d12 0%, #431407 100%)",
    icon: "☕"
  },
  {
    id: "kura-media",
    category: "retainer",
    client: "Kura Studio Network",
    title: "Ongoing Monthly Creative Retainer: Daily High-Converting Assets",
    desc: "Embedded Art Director and motion team delivering daily Meta Ads, carousels, and landing page variants synced seamlessly via Notion & Slack.",
    tags: ["Retainer Agreement", "Motion Ads", "Creative Testing", "Weekly QC"],
    metrics: "-28% Cost Per Customer Acquisition",
    visualGradient: "linear-gradient(135deg, #581c87 0%, #3b0764 100%)",
    icon: "⚡"
  },
  {
    id: "zenith-health",
    category: "uiux",
    client: "Zenith Telehealth",
    title: "Patient Teleconsultation Portal & Clinical Dashboard",
    desc: "Accessibility-first patient journey mapping, HIPAA-compliant UI design patterns, and cross-platform design token architecture.",
    tags: ["HealthTech", "UI/UX", "User Journey", "WCAG AAA"],
    metrics: "4.9/5 Patient Usability Score",
    visualGradient: "linear-gradient(135deg, #0e7490 0%, #164e63 100%)",
    icon: "🩺"
  }
];

// --- BMC Detailed Matrix Content ---
const BMC_DATA = {
  keyPartners: {
    title: "Key Partners",
    subtitle: "Mitra Strategis",
    points: [
      "Agensi Iklan & Media Buying: Kolaborasi data performa ads untuk penyempurnaan desain visual iklan.",
      "Jasa Ekspedisi / Logistik: Uji ketahanan fisik kemasan di lapangan & rekomendasi silang merchant.",
      "Mitra Percetakan Spesialis: Kalibrasi warna presisi, cetak foil emas, emboss, dan packaging.",
      "Vendor Hardware & Software: Integrasi ekosistem Adobe Creative Cloud & Figma Enterprise."
    ]
  },
  keyActivities: {
    title: "Key Activities",
    subtitle: "Aktivitas Kunci",
    points: [
      "Riset Mendalam & Pengembangan Konsep: Eksplorasi moodboard, target audience profiling, dan benchmarking.",
      "Proses Desain & Kreatif: Pembuatan identitas visual, UI/UX prototipe, ilustrasi, motion grafis, dan packaging.",
      "Revisi Terstruktur & Quality Control (QC): Pengujian kontras warna, legibility font, dan kesiapan file cetak/digital."
    ]
  },
  valuePropositions: {
    title: "Value Propositions",
    subtitle: "Proposisi Nilai Khas",
    points: [
      "Desain Kustom & Berkarakter: 100% orisinal, disesuaikan dengan DNA klien, zero template.",
      "Proses Cepat & Tepat Waktu (Fast Turnaround): Manajemen sprint ketat dengan garansi deadline.",
      "Revisi Transparan & Terkontrol: Pedoman revisi adil tanpa kompromi pada estetika akhir.",
      "Format File Lengkap & Siap Pakai: Master vector (AI/EPS), Figma tokens, SVG web, dan CMYK cetak."
    ]
  },
  customerRelationships: {
    title: "Customer Relationships",
    subtitle: "Hubungan Pelanggan",
    points: [
      "Dedicated Account Manager: Komunikasi satu pintu untuk memastikan brief tereksekusi akurat.",
      "Collaborative Workflow Transparan: Pemantauan progress real-time via Notion, ClickUp, dan Slack.",
      "Retainer Agreement: Kontrak jangka panjang bulanan dengan alokasi tim kreatif prioritas."
    ]
  },
  customerSegments: {
    title: "Customer Segments",
    subtitle: "Segmen Pelanggan",
    points: [
      "UMKM & Startup: Butuh identitas visual dari awal (logo, branding kit, UI MVP).",
      "Perusahaan / Korporat (B2B): Rebranding citra korporat, design system, dan materi promosi rutin.",
      "Pemilik Merek / Brand Owner: Desain kemasan taktil, aset digital, dan materi kampanye.",
      "Individu / Content Creator: Identitas visual personal yang artistik, elegan, dan profesional."
    ]
  },
  keyResources: {
    title: "Key Resources",
    subtitle: "Sumber Daya Kunci",
    points: [
      "Creative / Art Director & Strategist: Konseptor arah visual dan narasi brand.",
      "Graphic, Motion & Packaging Designers: Spesialis eksekusi teknis lintas media.",
      "Account / Project Manager: Pengatur timeline sprint, koordinasi mitra, dan kepuasan klien.",
      "Perangkat Studio: Workstation performa tinggi, lisensi Adobe CC, Figma, dan alat uji mockup fisik."
    ]
  },
  channels: {
    title: "Channels",
    subtitle: "Saluran Distribusi & Pemasaran",
    points: [
      "Direct B2B Outreach: Pitching langsung ke agensi, korporasi, dan perusahaan mitra.",
      "Co-Marketing & Cross-Referral: Rekomendasi timbal balik dari mitra logistik & periklanan.",
      "Digital Portfolio: Website resmi Elaris, Instagram, Behance, dan LinkedIn.",
      "Bundling Packages: Paket promosi komprehensif bersama mitra percetakan & agensi iklan."
    ]
  },
  costStructure: {
    title: "Cost Structure",
    subtitle: "Struktur Biaya",
    points: [
      "Operasional & SDM: Gaji tim kreatif internal, fee spesialis freelance, dan insentif.",
      "Lisensi Software & Perangkat: Langganan Adobe CC, Figma, font lisensi komersial, & cloud server.",
      "Pemasaran & Promosi: Iklan Meta Ads, Google Ads, dan showcase portofolio.",
      "Umum & Administrasi (G&A): Sewa studio, utilitas, dan alokasi ke induk PT Elaris Indonesia."
    ]
  },
  revenueStreams: {
    title: "Revenue Streams",
    subtitle: "Arus Pendapatan",
    points: [
      "Proyek Berbasis Kontrak (Project-Based): Biaya pembuatan logo, brand kit, UI/UX, dan packaging.",
      "Layanan Langganan Bulanan (Retainer Fee): Kontrak retainer bulanan untuk materi harian.",
      "Konsultasi Desain & Audit Branding: Biaya sesi audit strategi visual dan positioning brand.",
      "Komisi / Margin Eksekusi Cetak: Pendapatan pengelolaan cetak (printing management) bersama mitra."
    ]
  }
};

// --- App State ---
const State = {
  lang: localStorage.getItem("elaris_lang") || "id",
  theme: localStorage.getItem("elaris_theme") || "dark",
  estimator: {
    model: "project", // "project" or "retainer"
    service: "brand-identity",
    speed: "standard",
    extras: ["source-files", "style-guide"],
    retainerTier: "growth"
  }
};

// --- DOM Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLanguage();
  initAmbientGlow();
  initNavigation();
  initPortfolio();
  initSegmentTabs();
  initEstimator();
  initBMCInteractions();
  initContactForm();
});

// ==========================================================================
// 1. THEME MANAGEMENT (Dark Luxury & Light Architectural)
// ==========================================================================
function initTheme() {
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  applyTheme(State.theme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      State.theme = State.theme === "dark" ? "light" : "dark";
      localStorage.setItem("elaris_theme", State.theme);
      applyTheme(State.theme);
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const themeIcon = document.getElementById("theme-icon");
  if (themeIcon) {
    themeIcon.innerHTML = theme === "dark" 
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  }
}

// ==========================================================================
// 2. INTERNATIONALIZATION (EN & ID)
// ==========================================================================
function initLanguage() {
  const langButtons = document.querySelectorAll(".lang-btn");
  applyLanguage(State.lang);

  langButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const selectedLang = btn.getAttribute("data-lang");
      if (selectedLang && selectedLang !== State.lang) {
        State.lang = selectedLang;
        localStorage.setItem("elaris_lang", State.lang);
        applyLanguage(State.lang);
      }
    });
  });
}

function applyLanguage(lang) {
  document.querySelectorAll(".lang-btn").forEach(b => {
    b.classList.toggle("active", b.getAttribute("data-lang") === lang);
  });

  // Update translatable elements with [data-i18n]
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const keyPath = el.getAttribute("data-i18n").split(".");
    let current = I18N[lang];
    for (const key of keyPath) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        current = null;
        break;
      }
    }
    if (current) {
      el.innerHTML = current;
    }
  });

  // Re-run estimator to format currency labels
  updateEstimatorCalculation();
}

// ==========================================================================
// 3. AMBIENT GLOW & NAVIGATION
// ==========================================================================
function initAmbientGlow() {
  const glow = document.getElementById("ambient-glow");
  if (!glow) return;

  window.addEventListener("pointermove", (e) => {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  });
}

function initNavigation() {
  const nav = document.getElementById("site-nav");
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });
  }
}

// ==========================================================================
// 4. PORTFOLIO & CASE STUDIES FILTER
// ==========================================================================
function initPortfolio() {
  const container = document.getElementById("portfolio-grid");
  const filterButtons = document.querySelectorAll(".filter-btn");

  if (!container) return;

  renderPortfolioItems(PORTFOLIO_DATA);

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.getAttribute("data-filter");
      if (category === "all") {
        renderPortfolioItems(PORTFOLIO_DATA);
      } else {
        const filtered = PORTFOLIO_DATA.filter(item => item.category === category);
        renderPortfolioItems(filtered);
      }
    });
  });
}

function renderPortfolioItems(items) {
  const container = document.getElementById("portfolio-grid");
  if (!container) return;

  container.innerHTML = items.map(item => `
    <article class="portfolio-card" onclick="openPortfolioModal('${item.id}')">
      <div class="portfolio-media" style="background: ${item.visualGradient}">
        <span class="portfolio-badge-pill">${item.tags[0]}</span>
        <div class="portfolio-canvas">
          <span style="font-size: 4rem; filter: drop-shadow(0 10px 20px rgba(0,0,0,0.5));">${item.icon}</span>
        </div>
      </div>
      <div class="portfolio-body">
        <span class="portfolio-client">${item.client}</span>
        <h4 class="portfolio-title">${item.title}</h4>
        <p class="portfolio-desc">${item.desc}</p>
        <div class="portfolio-tags">
          ${item.tags.map(t => `<span class="tag-badge">${t}</span>`).join('')}
        </div>
      </div>
    </article>
  `).join('');
}

window.openPortfolioModal = function(id) {
  const item = PORTFOLIO_DATA.find(p => p.id === id);
  if (!item) return;

  const modal = document.getElementById("portfolio-modal");
  const content = document.getElementById("portfolio-modal-content");
  if (!modal || !content) return;

  content.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom: 20px;">
      <div>
        <span class="section-badge">${item.tags[0]} • Case Study</span>
        <h2 style="font-family: var(--font-serif); font-size: 2rem; margin-top: 8px;">${item.title}</h2>
        <p style="color: var(--text-muted); font-size: 1rem;">Client: <strong>${item.client}</strong></p>
      </div>
    </div>
    
    <div style="background: ${item.visualGradient}; height: 260px; border-radius: var(--radius-md); display:flex; align-items:center; justify-content:center; margin-bottom: 24px; position:relative;">
      <span style="font-size: 5rem;">${item.icon}</span>
      <div style="position:absolute; bottom: 16px; right: 16px; background: rgba(0,0,0,0.6); padding: 8px 14px; border-radius: var(--radius-sm); font-size: 0.85rem; font-weight: 700; color: var(--accent-gold);">
        Impact: ${item.metrics}
      </div>
    </div>

    <div style="display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 30px; margin-bottom: 24px;">
      <div>
        <h4 style="font-size: 1.1rem; margin-bottom: 8px; color: var(--text-main);">The Challenge & Bespoke Solution</h4>
        <p style="color: var(--text-muted); line-height: 1.7; font-size: 0.95rem; margin-bottom: 16px;">${item.desc}</p>
        <p style="color: var(--text-muted); line-height: 1.7; font-size: 0.95rem;">Following Elaris's core principles, every asset was tailored from foundational sketches to production-ready deliverables with strict quality controls.</p>
      </div>
      <div style="background: var(--bg-secondary); padding: 20px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
        <h5 style="font-size: 0.85rem; text-transform:uppercase; letter-spacing:0.05em; color: var(--accent-gold); margin-bottom: 12px;">Deliverables Handover</h5>
        <ul style="display:flex; flex-direction:column; gap:8px; font-size: 0.85rem; color: var(--text-muted);">
          <li>✓ Master Vector AI & EPS Source</li>
          <li>✓ Figma Design Tokens & Component Library</li>
          <li>✓ Calibrated CMYK Print Production Dielines</li>
          <li>✓ Web SVG & WebP Optimized Assets</li>
          <li>✓ Full Commercial Usage Rights</li>
        </ul>
      </div>
    </div>

    <div style="display: flex; justify-content: flex-end; gap: 12px;">
      <button class="btn btn-primary" onclick="requestSimilarScope('${item.title}')">
        Inquire Similar Scope
      </button>
    </div>
  `;

  modal.classList.add("active");
};

window.closeModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove("active");
};

// ==========================================================================
// 5. CUSTOMER SEGMENTS TABS (BMC CUSTOMER SEGMENTS)
// ==========================================================================
function initSegmentTabs() {
  const tabButtons = document.querySelectorAll(".segment-tab-btn");
  const panels = document.querySelectorAll(".segment-panel");

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");

      tabButtons.forEach(b => b.classList.remove("active"));
      panels.forEach(p => p.classList.remove("active"));

      btn.classList.add("active");
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) targetPanel.classList.add("active");
    });
  });
}

// ==========================================================================
// 6. INTERACTIVE PROJECT ESTIMATOR (PROJECT VS RETAINER PRICING)
// ==========================================================================
function initEstimator() {
  const modelCards = document.querySelectorAll(".model-option-card");
  const serviceChips = document.querySelectorAll(".service-chip");
  const speedSlider = document.getElementById("speed-slider");
  const extraChips = document.querySelectorAll(".extra-chip");
  const retainerOptions = document.querySelectorAll(".retainer-tier-chip");

  // Model switch: Project vs Retainer
  modelCards.forEach(card => {
    card.addEventListener("click", () => {
      modelCards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");
      State.estimator.model = card.getAttribute("data-model");

      const projectControls = document.getElementById("project-controls");
      const retainerControls = document.getElementById("retainer-controls");

      if (State.estimator.model === "project") {
        projectControls.style.display = "flex";
        retainerControls.style.display = "none";
      } else {
        projectControls.style.display = "none";
        retainerControls.style.display = "flex";
      }

      updateEstimatorCalculation();
    });
  });

  // Service Selection
  serviceChips.forEach(chip => {
    chip.addEventListener("click", () => {
      serviceChips.forEach(c => c.classList.remove("selected"));
      chip.classList.add("selected");
      State.estimator.service = chip.getAttribute("data-service");
      updateEstimatorCalculation();
    });
  });

  // Turnaround Slider
  if (speedSlider) {
    speedSlider.addEventListener("input", (e) => {
      const val = parseInt(e.target.value);
      if (val === 1) State.estimator.speed = "express";
      else if (val === 2) State.estimator.speed = "standard";
      else State.estimator.speed = "comprehensive";

      const speedLabel = document.getElementById("speed-label");
      if (speedLabel) {
        if (val === 1) speedLabel.innerText = State.lang === "id" ? "Ekspres (1-2 Minggu, +35%)" : "Fast-Track (1-2 Weeks, +35%)";
        else if (val === 2) speedLabel.innerText = State.lang === "id" ? "Standar Terjadwal (3-4 Minggu)" : "Standard Sprint (3-4 Weeks)";
        else speedLabel.innerText = State.lang === "id" ? "Komprehensif Enterprise (6+ Minggu)" : "Comprehensive Enterprise (6+ Weeks)";
      }
      updateEstimatorCalculation();
    });
  }

  // Extras toggle
  extraChips.forEach(chip => {
    chip.addEventListener("click", () => {
      chip.classList.toggle("selected");
      const extraKey = chip.getAttribute("data-extra");
      if (chip.classList.contains("selected")) {
        if (!State.estimator.extras.includes(extraKey)) State.estimator.extras.push(extraKey);
      } else {
        State.estimator.extras = State.estimator.extras.filter(k => k !== extraKey);
      }
      updateEstimatorCalculation();
    });
  });

  // Retainer tier selection
  retainerOptions.forEach(chip => {
    chip.addEventListener("click", () => {
      retainerOptions.forEach(c => c.classList.remove("selected"));
      chip.classList.add("selected");
      State.estimator.retainerTier = chip.getAttribute("data-tier");
      updateEstimatorCalculation();
    });
  });

  updateEstimatorCalculation();
}

function updateEstimatorCalculation() {
  const isId = State.lang === "id";
  const priceDisplay = document.getElementById("est-price-display");
  const termDisplay = document.getElementById("est-term-display");
  const scopeTitleDisplay = document.getElementById("est-scope-title");
  const featuresContainer = document.getElementById("est-features-container");

  if (!priceDisplay || !featuresContainer) return;

  if (State.estimator.model === "project") {
    // Base prices in IDR
    let baseMin = 15000000;
    let baseMax = 25000000;
    let serviceName = "Brand Identity Kit";

    if (State.estimator.service === "brand-identity") {
      baseMin = 15000000;
      baseMax = 28000000;
      serviceName = isId ? "Identitas Visual & Brand Guidelines" : "Visual Identity & Brand System";
    } else if (State.estimator.service === "uiux-design") {
      baseMin = 22000000;
      baseMax = 45000000;
      serviceName = isId ? "UI/UX & Desain Produk Digital" : "UI/UX & Digital Product Design";
    } else if (State.estimator.service === "packaging") {
      baseMin = 18000000;
      baseMax = 35000000;
      serviceName = isId ? "Desain Kemasan Taktil & Dieline" : "Tactile Packaging & Structural Dieline";
    } else if (State.estimator.service === "rebranding") {
      baseMin = 30000000;
      baseMax = 65000000;
      serviceName = isId ? "Pembaruan Citra Korporat (Rebrand)" : "Full Corporate Rebranding Suite";
    }

    // Speed multiplier
    let multiplier = 1.0;
    if (State.estimator.speed === "express") multiplier = 1.35;
    if (State.estimator.speed === "comprehensive") multiplier = 1.25;

    // Extras addition
    let extraCost = 0;
    let extraFeatures = [];
    if (State.estimator.extras.includes("print-management")) {
      extraCost += 4000000;
      extraFeatures.push(isId ? "Supervisi Produksi Cetak & QC Lapangan" : "Print Production & Factory QC Oversight");
    }
    if (State.estimator.extras.includes("tokens-design-system")) {
      extraCost += 6000000;
      extraFeatures.push(isId ? "Design System Tokens (Figma Master Components)" : "Design Tokens & Complete Component Library");
    }
    if (State.estimator.extras.includes("motion-kit")) {
      extraCost += 5000000;
      extraFeatures.push(isId ? "Aset Animasi Logo & Motion Promo" : "Animated Logo Ident & Social Motion Kit");
    }

    const finalMin = Math.round((baseMin * multiplier + extraCost) / 1000000) * 1000000;
    const finalMax = Math.round((baseMax * multiplier + extraCost * 1.2) / 1000000) * 1000000;

    if (isId) {
      priceDisplay.innerText = `Rp ${finalMin.toLocaleString("id-ID")} - ${finalMax.toLocaleString("id-ID")}`;
      termDisplay.innerText = "Estimasi Investasi Proyek Berbasis Kontrak (Milestone-Based)";
    } else {
      const usdMin = Math.round(finalMin / 15500);
      const usdMax = Math.round(finalMax / 15500);
      priceDisplay.innerText = `$${usdMin.toLocaleString("en-US")} - $${usdMax.toLocaleString("en-US")}`;
      termDisplay.innerText = "Estimated Project-Based Scope (Milestone Payments)";
    }

    scopeTitleDisplay.innerText = serviceName;

    featuresContainer.innerHTML = `
      <div class="est-feature-row"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> <span>${isId ? "100% Desain Kustom (Tanpa Template)" : "100% Bespoke Craft (Zero Templates)"}</span></div>
      <div class="est-feature-row"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> <span>${isId ? "Dedicated Project Manager & Alur Kerja Notion/Slack" : "Dedicated Account PM on Notion/Slack"}</span></div>
      <div class="est-feature-row"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> <span>${isId ? "Hak Cipta Penuh & Berkas Master AI/Figma/SVG/CMYK" : "Full Master Source Handoff (AI, Figma, CMYK)"}</span></div>
      ${extraFeatures.map(f => `<div class="est-feature-row"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> <span>${f}</span></div>`).join('')}
    `;

  } else {
    // Retainer Mode
    let monthlyMin = 18000000;
    let tierName = "Growth Retainer";
    let desc = "";

    if (State.estimator.retainerTier === "starter") {
      monthlyMin = 12000000;
      tierName = isId ? "Paket Retainer Starter (20 Jam/Bulan)" : "Starter Retainer (20 hrs/mo)";
      desc = isId ? "Cocok untuk UMKM yang butuh materi pemasaran rutin, social media kit, dan pemeliharaan visual." : "Ideal for startups needing consistent digital marketing graphics & brand maintenance.";
    } else if (State.estimator.retainerTier === "growth") {
      monthlyMin = 22000000;
      tierName = isId ? "Paket Retainer Growth (40 Jam/Bulan)" : "Growth Retainer (40 hrs/mo)";
      desc = isId ? "Dukungan penuh Art Director, Motion Designer, dan UI/UX Designer untuk scaling cepat." : "Full Art Director, Motion & UI/UX bandwidth for high-growth campaigns.";
    } else if (State.estimator.retainerTier === "enterprise") {
      monthlyMin = 45000000;
      tierName = isId ? "Paket Retainer Enterprise (Alokasi Khusus)" : "Enterprise Dedicated Studio Pod";
      desc = isId ? "Tim kreatif terdedikasi eksklusif dengan SLA pengerjaan cepat dan koordinasi harian." : "Exclusive dedicated multidisciplinary design pod with priority SLA and daily syncs.";
    }

    if (isId) {
      priceDisplay.innerText = `Rp ${monthlyMin.toLocaleString("id-ID")} / bln`;
      termDisplay.innerText = "Kontrak Langganan Jangka Panjang / Bulanan";
    } else {
      const usdMonthly = Math.round(monthlyMin / 15500);
      priceDisplay.innerText = `$${usdMonthly.toLocaleString("en-US")} / mo`;
      termDisplay.innerText = "Monthly Studio Retainer Agreement";
    }

    scopeTitleDisplay.innerText = tierName;

    featuresContainer.innerHTML = `
      <div class="est-feature-row"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> <span>${desc}</span></div>
      <div class="est-feature-row"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> <span>${isId ? "Alur Kerja Transparan via Notion / Slack / ClickUp" : "Direct Transparent Workflow on Notion / Slack"}</span></div>
      <div class="est-feature-row"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> <span>${isId ? "Prioritas Antrean Revisi & Quality Control (QC)" : "Priority Revision Queue & Strict Quality Control"}</span></div>
      <div class="est-feature-row"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> <span>${isId ? "Tanpa Biaya Tersembunyi, Pembatalan Fleksibel" : "Transparent Billing with Flexible Renewal Terms"}</span></div>
    `;
  }
}

window.applyEstimateToForm = function() {
  const scopeTitle = document.getElementById("est-scope-title").innerText;
  const priceRange = document.getElementById("est-price-display").innerText;
  const messageField = document.getElementById("contact-message");
  const serviceSelect = document.getElementById("contact-service");

  if (serviceSelect) {
    if (State.estimator.model === "retainer") {
      serviceSelect.value = "retainer";
    } else {
      serviceSelect.value = State.estimator.service;
    }
  }

  if (messageField) {
    messageField.value = `[Estimator Configuration]\nSelected Scope: ${scopeTitle}\nEstimated Range: ${priceRange}\nModel: ${State.estimator.model.toUpperCase()}\n\nAdditional notes about our objectives:\n`;
    messageField.focus();
  }

  // Smooth scroll to contact section
  const contactSec = document.getElementById("contact");
  if (contactSec) {
    contactSec.scrollIntoView({ behavior: "smooth" });
  }

  showToast(State.lang === "id" ? "Estimasi diterapkan ke formulir kontak!" : "Estimate configuration applied to the brief form!");
};

// ==========================================================================
// 7. BMC INTERACTIVE BLUEPRINT
// ==========================================================================
function initBMCInteractions() {
  // BMC Block Click Inspector
  document.querySelectorAll(".bmc-block").forEach(block => {
    block.addEventListener("click", () => {
      const bmcKey = block.getAttribute("data-bmc");
      if (bmcKey && BMC_DATA[bmcKey]) {
        openBMCModal(bmcKey);
      }
    });
  });
}

window.openBMCModal = function(key) {
  const modal = document.getElementById("bmc-modal");
  const content = document.getElementById("bmc-modal-content");
  if (!modal || !content) return;

  const data = BMC_DATA[key];
  if (!data) return;

  content.innerHTML = `
    <span class="section-badge">${data.title} • Business Model Canvas</span>
    <h2 style="font-family: var(--font-serif); font-size: 2.2rem; margin: 10px 0 6px;">${data.title} (${data.subtitle})</h2>
    <p style="color: var(--text-muted); font-size: 1rem; margin-bottom: 24px;">Core strategic operational building block of Elaris Creative Studio (PT Elaris Indonesia).</p>

    <div style="background: var(--bg-secondary); border: 1px solid var(--border-medium); border-radius: var(--radius-md); padding: 24px; margin-bottom: 24px;">
      <h4 style="font-size: 1rem; color: var(--accent-gold); margin-bottom: 14px; text-transform:uppercase; letter-spacing:0.05em;">Strategic Breakdown</h4>
      <ul style="display:flex; flex-direction:column; gap: 14px;">
        ${data.points.map(p => `
          <li style="display:flex; align-items:flex-start; gap: 10px; font-size: 0.95rem; line-height: 1.6; color: var(--text-main);">
            <span style="color: var(--accent-gold); font-size: 1.2rem; line-height: 1;">▪</span>
            <div>${p}</div>
          </li>
        `).join('')}
      </ul>
    </div>

    <div style="display: flex; justify-content: flex-end;">
      <button class="btn btn-outline" onclick="closeModal('bmc-modal')">Close Blueprint Inspector</button>
    </div>
  `;

  modal.classList.add("active");
};

// ==========================================================================
// 8. CONTACT / INQUIRY SUBMISSION WITH REAL-TIME FEEDBACK
// ==========================================================================
function initContactForm() {
  const form = document.getElementById("project-brief-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const company = document.getElementById("contact-company").value.trim();
    const service = document.getElementById("contact-service").value;
    const budget = document.getElementById("contact-budget").value;
    const message = document.getElementById("contact-message").value.trim();

    if (!name || !email || !message) {
      showToast(State.lang === "id" ? "Mohon lengkapi nama, email, dan brief Anda." : "Please fill in your name, email, and brief details.");
      return;
    }

    const submitBtn = form.querySelector("button[type='submit']");
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = `<span>Processing...</span>`;
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      form.reset();

      const modal = document.getElementById("inquiry-success-modal");
      const summaryBox = document.getElementById("inquiry-summary-box");
      if (modal && summaryBox) {
        summaryBox.innerHTML = `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Brand / Organization:</strong> ${company || "Not specified"}</p>
          <p><strong>Selected Engagement:</strong> ${service}</p>
          <p><strong>Budget Tier:</strong> ${budget}</p>
          <div style="margin-top: 12px; padding: 12px; background: var(--bg-primary); border-radius: 6px; font-size: 0.85rem; color: var(--text-muted); font-family: var(--font-mono);">
            ${message.replace(/\n/g, '<br/>')}
          </div>
        `;
        modal.classList.add("active");
      }
    }, 800);
  });
}

function showToast(message) {
  const toast = document.getElementById("toast-notice");
  const toastText = document.getElementById("toast-text");
  if (!toast || !toastText) return;

  toastText.innerText = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}

window.requestSimilarScope = function(title) {
  closeModal('portfolio-modal');
  const messageField = document.getElementById("contact-message");
  if (messageField) {
    messageField.value = `I am interested in exploring a scope similar to your case study: "${title}".\n\nOur brand details and requirements:\n`;
    messageField.focus();
  }
  const contactSec = document.getElementById("contact");
  if (contactSec) {
    contactSec.scrollIntoView({ behavior: "smooth" });
  }
};
