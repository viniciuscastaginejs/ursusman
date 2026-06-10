/* ============================================
   URSUSMAN — script.js
   Loader | i18n | Scroll | Counter | Marquee
============================================ */

// ============================================
// TRANSLATIONS
// ============================================
const translations = {
  pt: {
    // NAV
    nav_home: "Home",
    nav_about: "Sobre",
    nav_community: "Comunidade",
    nav_store: "Loja Oficial",
    nav_supporters: "Apoiadores",
    nav_contact: "Contato",
    btn_tropa: "Entrar na Tropa",

    // LOADER
    loader_lines: [
      "Conectando à Base Ursus...",
      "Carregando comunidade...",
      "Comunidade encontrada.",
      "Bem-vindo."
    ],

    // HERO
    hero_sub: "O universo oficial da Tropa do Ursus.",
    banner_placeholder: "Banner Promocional",
    banner_placeholder_sub: "Área reservada para anúncios e projetos",

    // NUMBERS
    numbers_eyebrow: "Tropa em Números",
    num_subs: "Inscritos",
    num_followers: "Seguidores",
    num_lives: "Lives",
    num_fans: "Fãs",

    // ABOUT
    about_eyebrow: "Sobre o Ursus",
    about_title: "Mais que um canal.<br/>Uma tropa.",
    about_text: "UrsusMan é um criador de conteúdo que construiu uma comunidade forte através de entretenimento, lives, interação e projetos especiais. Mais do que um canal, UrsusMan representa uma tropa conectada por momentos, histórias e experiências.",
    about_btn: "Conhecer a História",

    // UNIVERSO
    universe_eyebrow: "O Universo",
    universe_title: "Universo Ursus",
    universe_c1_title: "Comunidade",
    universe_c1_text: "Uma tropa unida por paixão, respeito e cumplicidade. Cada membro faz parte da história.",
    universe_c2_title: "Conteúdo",
    universe_c2_text: "Vídeos autênticos, entretenimento de qualidade e projetos que marcam a memória da tropa.",
    universe_c3_title: "Lives",
    universe_c3_text: "Momentos ao vivo que criam conexão real. Centenas de horas compartilhadas com a Tropa.",
    universe_c4_title: "Projetos",
    universe_c4_text: "Iniciativas especiais que vão além do conteúdo e transformam a comunidade em algo maior.",

    // BANNERS
    banners_eyebrow: "Destaques",
    banners_title: "Projetos & Eventos",
    banner1_title: "Projeto Especial",
    banner1_text: "Em breve novidades exclusivas para a Tropa do Ursus. Fique atento às redes.",
    banner2_title: "Evento Tropa",
    banner2_text: "Grandes momentos ao vivo e eventos especiais chegando para a comunidade.",
    banner3_title: "Anúncio Oficial",
    banner3_text: "Patrocinadores e parceiros que impulsionam o universo UrsusMan.",
    banner_btn: "Saiba Mais",

    // STORE
    store_eyebrow: "Loja Oficial",
    store_title: "Vista a Tropa",
    store_text: "Produtos exclusivos UrsusMan. Represente a tropa com estilo.",
    store_btn: "Visitar Loja Oficial",
    product1: "Camiseta Tropa",
    product2: "Boné UrsusMan",
    product3: "Moletom Oficial",

    // COMMUNITY
    community_eyebrow: "Conecte-se",
    community_title: "A Tropa está em todo lugar",
    community_yt_text: "Vídeos, clipes e conteúdo exclusivo para a Tropa.",
    community_yt_btn: "Inscrever-se",
    community_tw_text: "Lives ao vivo, interação em tempo real com toda a comunidade.",
    community_tw_btn: "Seguir na Twitch",
    community_ig_text: "Bastidores, novidades e momentos especiais no dia a dia.",
    community_ig_btn: "Seguir no Instagram",

    // APOIADORES
    supporters_eyebrow: "Parceiros",
    supporters_title: "Apoiadores Oficiais da Tropa",
    supporters_sub: "Empresas que acreditam e fortalecem a comunidade UrsusMan.",
    nk_desc: "Economize na conta de energia através da energia por assinatura.",
    mlx_desc: "Agência especializada em marketing digital, tráfego pago, branding e crescimento de marcas.",
    apoiador_btn: "Conhecer",
    cta_apoiador_title: "Quer Apoiar a Tropa?",
    cta_apoiador_text: "Sua empresa pode fazer parte dos apoiadores oficiais do UrsusMan e divulgar sua marca para toda a comunidade.",
    cta_apoiador_btn1: "Tornar-se Apoiador",
    cta_apoiador_btn2: "Entrar em Contato",

    // PARCERIAS
    partners_eyebrow: "Em Breve",
    partners_title: "Parcerias Futuras",

    // CONTACT
    contact_eyebrow: "Comercial",
    contact_title: "Vamos Conversar",
    contact_text: "Parcerias, publicidade e projetos especiais.",
    form_name: "Seu nome",
    form_company: "Empresa",
    form_instagram: "Instagram",
    form_email: "E-mail",
    form_message: "Mensagem",
    form_submit: "Enviar Mensagem",

    // FOOTER
    footer_rights: "© UrsusMan - Todos os direitos reservados."
  },

  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_community: "Community",
    nav_store: "Official Store",
    nav_supporters: "Supporters",
    nav_contact: "Contact",
    btn_tropa: "Join the Troop",

    loader_lines: [
      "Connecting to Ursus Base...",
      "Loading community...",
      "Community found.",
      "Welcome."
    ],

    hero_sub: "The official universe of the Ursus Troop.",
    banner_placeholder: "Promotional Banner",
    banner_placeholder_sub: "Reserved area for announcements and projects",

    numbers_eyebrow: "Troop in Numbers",
    num_subs: "Subscribers",
    num_followers: "Followers",
    num_lives: "Live Streams",
    num_fans: "Fans",

    about_eyebrow: "About Ursus",
    about_title: "More than a channel.<br/>A troop.",
    about_text: "UrsusMan is a content creator who built a strong community through entertainment, live streams, interaction and special projects. More than a channel, UrsusMan represents a troop connected by moments, stories and experiences.",
    about_btn: "Discover the Story",

    universe_eyebrow: "The Universe",
    universe_title: "Ursus Universe",
    universe_c1_title: "Community",
    universe_c1_text: "A troop united by passion, respect and togetherness. Every member is part of the story.",
    universe_c2_title: "Content",
    universe_c2_text: "Authentic videos, quality entertainment and projects that leave a mark on the troop's memory.",
    universe_c3_title: "Live Streams",
    universe_c3_text: "Live moments that create real connection. Hundreds of hours shared with the Troop.",
    universe_c4_title: "Projects",
    universe_c4_text: "Special initiatives that go beyond content and turn the community into something bigger.",

    banners_eyebrow: "Highlights",
    banners_title: "Projects & Events",
    banner1_title: "Special Project",
    banner1_text: "Exclusive news coming soon for the Ursus Troop. Stay tuned on our social media.",
    banner2_title: "Troop Event",
    banner2_text: "Big live moments and special events are on their way for the community.",
    banner3_title: "Official Announcement",
    banner3_text: "Sponsors and partners that power the UrsusMan universe.",
    banner_btn: "Learn More",

    store_eyebrow: "Official Store",
    store_title: "Wear the Troop",
    store_text: "Exclusive UrsusMan products. Represent the troop in style.",
    store_btn: "Visit Official Store",
    product1: "Troop T-Shirt",
    product2: "UrsusMan Cap",
    product3: "Official Hoodie",

    community_eyebrow: "Connect",
    community_title: "The Troop is everywhere",
    community_yt_text: "Videos, clips and exclusive content for the Troop.",
    community_yt_btn: "Subscribe",
    community_tw_text: "Live streams, real-time interaction with the entire community.",
    community_tw_btn: "Follow on Twitch",
    community_ig_text: "Behind the scenes, news and special moments every day.",
    community_ig_btn: "Follow on Instagram",

    supporters_eyebrow: "Partners",
    supporters_title: "Official Troop Supporters",
    supporters_sub: "Companies that believe in and strengthen the UrsusMan community.",
    nk_desc: "Save on your energy bill through subscription-based energy.",
    mlx_desc: "Agency specialized in digital marketing, paid traffic, branding and brand growth.",
    apoiador_btn: "Discover",
    cta_apoiador_title: "Want to Support the Troop?",
    cta_apoiador_text: "Your company can become one of UrsusMan's official supporters and showcase your brand to the entire community.",
    cta_apoiador_btn1: "Become a Supporter",
    cta_apoiador_btn2: "Contact Us",

    partners_eyebrow: "Coming Soon",
    partners_title: "Future Partnerships",

    contact_eyebrow: "Commercial",
    contact_title: "Let's Talk",
    contact_text: "Partnerships, advertising and special projects.",
    form_name: "Your name",
    form_company: "Company",
    form_instagram: "Instagram",
    form_email: "E-mail",
    form_message: "Message",
    form_submit: "Send Message",

    footer_rights: "© UrsusMan - All rights reserved."
  },

  es: {
    nav_home: "Inicio",
    nav_about: "Sobre",
    nav_community: "Comunidad",
    nav_store: "Tienda Oficial",
    nav_supporters: "Apoyadores",
    nav_contact: "Contacto",
    btn_tropa: "Unirse a la Tropa",

    loader_lines: [
      "Conectando a la Base Ursus...",
      "Cargando comunidad...",
      "Comunidad encontrada.",
      "Bienvenido."
    ],

    hero_sub: "El universo oficial de la Tropa Ursus.",
    banner_placeholder: "Banner Promocional",
    banner_placeholder_sub: "Área reservada para anuncios y proyectos",

    numbers_eyebrow: "La Tropa en Números",
    num_subs: "Suscriptores",
    num_followers: "Seguidores",
    num_lives: "Transmisiones",
    num_fans: "Fans",

    about_eyebrow: "Sobre Ursus",
    about_title: "Más que un canal.<br/>Una tropa.",
    about_text: "UrsusMan es un creador de contenido que construyó una comunidad fuerte a través del entretenimiento, transmisiones en vivo, interacción y proyectos especiales. Más que un canal, UrsusMan representa una tropa conectada por momentos, historias y experiencias.",
    about_btn: "Conocer la Historia",

    universe_eyebrow: "El Universo",
    universe_title: "Universo Ursus",
    universe_c1_title: "Comunidad",
    universe_c1_text: "Una tropa unida por pasión, respeto y complicidad. Cada miembro es parte de la historia.",
    universe_c2_title: "Contenido",
    universe_c2_text: "Videos auténticos, entretenimiento de calidad y proyectos que marcan la memoria de la tropa.",
    universe_c3_title: "Transmisiones",
    universe_c3_text: "Momentos en vivo que crean conexión real. Cientos de horas compartidas con la Tropa.",
    universe_c4_title: "Proyectos",
    universe_c4_text: "Iniciativas especiales que van más allá del contenido y transforman la comunidad en algo mayor.",

    banners_eyebrow: "Destacados",
    banners_title: "Proyectos y Eventos",
    banner1_title: "Proyecto Especial",
    banner1_text: "Próximamente novedades exclusivas para la Tropa Ursus. Mantente atento en las redes.",
    banner2_title: "Evento Tropa",
    banner2_text: "Grandes momentos en vivo y eventos especiales llegan para la comunidad.",
    banner3_title: "Anuncio Oficial",
    banner3_text: "Patrocinadores y socios que impulsan el universo UrsusMan.",
    banner_btn: "Saber Más",

    store_eyebrow: "Tienda Oficial",
    store_title: "Viste la Tropa",
    store_text: "Productos exclusivos UrsusMan. Representa la tropa con estilo.",
    store_btn: "Visitar Tienda Oficial",
    product1: "Camiseta Tropa",
    product2: "Gorra UrsusMan",
    product3: "Sudadera Oficial",

    community_eyebrow: "Conéctate",
    community_title: "La Tropa está en todos lados",
    community_yt_text: "Videos, clips y contenido exclusivo para la Tropa.",
    community_yt_btn: "Suscribirse",
    community_tw_text: "Transmisiones en vivo, interacción en tiempo real con toda la comunidad.",
    community_tw_btn: "Seguir en Twitch",
    community_ig_text: "Detrás de cámaras, novedades y momentos especiales en el día a día.",
    community_ig_btn: "Seguir en Instagram",

    supporters_eyebrow: "Socios",
    supporters_title: "Apoyadores Oficiales de la Tropa",
    supporters_sub: "Empresas que creen y fortalecen la comunidad UrsusMan.",
    nk_desc: "Ahorra en tu factura de energía con energía por suscripción.",
    mlx_desc: "Agencia especializada en marketing digital, tráfico pago, branding y crecimiento de marcas.",
    apoiador_btn: "Conocer",
    cta_apoiador_title: "¿Quieres Apoyar a la Tropa?",
    cta_apoiador_text: "Tu empresa puede formar parte de los apoyadores oficiales de UrsusMan y mostrar tu marca a toda la comunidad.",
    cta_apoiador_btn1: "Convertirse en Apoyador",
    cta_apoiador_btn2: "Entrar en Contacto",

    partners_eyebrow: "Próximamente",
    partners_title: "Futuras Alianzas",

    contact_eyebrow: "Comercial",
    contact_title: "Hablemos",
    contact_text: "Colaboraciones, publicidad y proyectos especiales.",
    form_name: "Tu nombre",
    form_company: "Empresa",
    form_instagram: "Instagram",
    form_email: "Correo electrónico",
    form_message: "Mensaje",
    form_submit: "Enviar Mensaje",

    footer_rights: "© UrsusMan - Todos los derechos reservados."
  }
};

// ============================================
// LANGUAGE SYSTEM
// ============================================
let currentLang = localStorage.getItem('ursusman_lang') || 'pt';

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  // Text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Placeholder attributes
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) {
      el.setAttribute('placeholder', t[key]);
    }
  });

  // Update lang button label
  const langLabels = { pt: 'PT', en: 'EN', es: 'ES' };
  document.getElementById('langCurrent').textContent = langLabels[lang] || 'PT';

  // Mark active option
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  currentLang = lang;
  localStorage.setItem('ursusman_lang', lang);
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
}

// ============================================
// LOADER
// ============================================
function runLoader() {
  const lang = localStorage.getItem('ursusman_lang') || 'pt';
  const lines = translations[lang].loader_lines;
  const textEl = document.getElementById('loader-text');
  const barEl = document.getElementById('loader-bar');
  const loader = document.getElementById('loader');

  let lineIndex = 0;
  let charIndex = 0;
  let totalDuration = 2200;
  let startTime = null;

  // Animate progress bar
  function animateBar(ts) {
    if (!startTime) startTime = ts;
    const progress = Math.min((ts - startTime) / totalDuration * 100, 100);
    barEl.style.width = progress + '%';
    if (progress < 100) requestAnimationFrame(animateBar);
  }
  requestAnimationFrame(animateBar);

  // Typewriter
  function typeNextLine() {
    if (lineIndex >= lines.length) {
      setTimeout(() => {
        loader.classList.add('hidden');
        document.body.style.overflow = '';
        triggerReveal();
      }, 300);
      return;
    }

    const line = lines[lineIndex];
    charIndex = 0;
    textEl.textContent = '';

    const typeInterval = setInterval(() => {
      textEl.textContent = line.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex >= line.length) {
        clearInterval(typeInterval);
        lineIndex++;
        setTimeout(typeNextLine, lineIndex === lines.length ? 400 : 280);
      }
    }, 28);
  }

  document.body.style.overflow = 'hidden';
  typeNextLine();
}

// ============================================
// HEADER SCROLL
// ============================================
function initHeader() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  });
}

// ============================================
// HAMBURGER MENU
// ============================================
function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const navMobile = document.getElementById('navMobile');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navMobile.classList.toggle('open');
  });

  // Close on nav link click
  navMobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navMobile.classList.remove('open');
    });
  });
}

// ============================================
// LANGUAGE DROPDOWN
// ============================================
function initLangSelector() {
  const selector = document.getElementById('langSelector');
  const langBtn = document.getElementById('langBtn');
  const langDropdown = document.getElementById('langDropdown');

  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    selector.classList.toggle('open');
  });

  document.addEventListener('click', () => {
    selector.classList.remove('open');
  });

  langDropdown.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const lang = btn.getAttribute('data-lang');
      applyTranslations(lang);
      selector.classList.remove('open');
    });
  });
}

// ============================================
// REVEAL ON SCROLL
// ============================================
function triggerReveal() {
  const revealEls = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => observer.observe(el));

  // Also immediately reveal hero
  document.querySelectorAll('#hero .reveal-up').forEach(el => el.classList.add('visible'));
}

// ============================================
// ANIMATED COUNTERS
// ============================================
function initCounters() {
  const counters = document.querySelectorAll('.number-val');
  let counted = false;

  function formatNumber(num, target, suffix) {
    if (target >= 10000 && suffix === 'K+') {
      return Math.round(num / 1000) + suffix;
    }
    if (target >= 1000 && suffix === 'K') {
      return Math.round(num / 1000) + 'K';
    }
    return Math.round(num) + suffix;
  }

  function runCounters() {
    if (counted) return;
    const section = document.getElementById('numeros');
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      counted = true;
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const prefix = counter.getAttribute('data-prefix') || '';
        const suffix = counter.getAttribute('data-suffix') || '';
        let start = 0;
        const duration = 1600;
        const startTime = performance.now();

        function tick(now) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3); // ease out cubic
          const current = eased * target;
          counter.textContent = prefix + formatNumber(current, target, suffix);
          if (progress < 1) requestAnimationFrame(tick);
          else counter.textContent = prefix + formatNumber(target, target, suffix);
        }
        requestAnimationFrame(tick);
      });
    }
  }

  window.addEventListener('scroll', runCounters);
  runCounters(); // check immediately
}

// ============================================
// MARQUEE — duplicate items for infinite loop
// ============================================
function initMarquee() {
  const track = document.getElementById('marqueeTrack');
  if (!track) return;

  // Duplicate content for seamless infinite scroll
  const original = track.innerHTML;
  // Triple for extra safety on wide screens
  track.innerHTML = original + original + original;
}

// ============================================
// PARALLAX ON HERO
// ============================================
function initParallax() {
  const heroBg = document.getElementById('heroBg');
  if (!heroBg) return;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY < window.innerHeight) {
      heroBg.style.transform = `translateY(${scrollY * 0.3}px)`;
    }
  }, { passive: true });
}

// ============================================
// SMOOTH ANCHOR SCROLL
// ============================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  // Apply saved language first (before loader)
  applyTranslations(currentLang);

  // Run loader
  runLoader();

  // Init all systems
  initHeader();
  initHamburger();
  initLangSelector();
  initCounters();
  initMarquee();
  initParallax();
  initSmoothScroll();
});
