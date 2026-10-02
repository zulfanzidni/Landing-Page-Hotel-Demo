/**
 * Hotel Demo Resort - Logic & Interaktivitas CRO
 */

document.addEventListener('DOMContentLoaded', () => {
  initWhatsAppLinks();
  initFaqAccordion();
  initStickyMobileBar();
  initSmoothScroll();
});

/**
 * Memastikan semua tombol CTA terhubung dengan generator WhatsApp URL yang dinamis
 */
function initWhatsAppLinks() {
  const config = window.HOTEL_CONFIG;
  const generateUrl = window.generateWhatsAppUrl;

  if (!config || !generateUrl) {
    console.warn('HOTEL_CONFIG atau generateWhatsAppUrl belum terdefinisi.');
    return;
  }

  // Header CTA WhatsApp
  const headerWaBtn = document.getElementById('header-wa-cta');
  if (headerWaBtn) {
    headerWaBtn.href = generateUrl();
  }

  // Hero CTA WhatsApp
  const heroWaBtn = document.getElementById('hero-wa-btn');
  if (heroWaBtn) {
    heroWaBtn.href = generateUrl();
  }

  // Bottom CTA WhatsApp
  const bottomWaBtn = document.getElementById('main-bottom-wa-cta');
  if (bottomWaBtn) {
    bottomWaBtn.href = generateUrl();
  }

  // Sticky Mobile WhatsApp
  const stickyMobileWaBtn = document.getElementById('sticky-mobile-wa-btn');
  if (stickyMobileWaBtn) {
    stickyMobileWaBtn.href = generateUrl();
  }

  // Room Card CTAs
  const roomButtons = document.querySelectorAll('.room-cta-btn');
  roomButtons.forEach(btn => {
    const roomName = btn.getAttribute('data-room');
    if (roomName) {
      btn.href = generateUrl(roomName, config.defaultPromoCode);
    }
  });
}

/**
 * Accordion FAQ yang halus, aksesibel, dan bebas lonjakan layout (CLS)
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Tutup semua item lain agar rapi
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const btn = otherItem.querySelector('.faq-question');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle state saat ini
      if (isActive) {
        item.classList.remove('active');
        questionBtn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/**
 * Kontrol visibilitas Sticky Mobile Bar saat pengunjung scroll
 */
function initStickyMobileBar() {
  const stickyBar = document.getElementById('sticky-mobile-bar');
  if (!stickyBar) return;

  const heroSection = document.getElementById('hero');
  const triggerPoint = heroSection ? heroSection.offsetHeight * 0.4 : 250;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollPosition = window.scrollY || window.pageYOffset;
        if (scrollPosition > triggerPoint) {
          stickyBar.style.transform = 'translateY(0)';
          stickyBar.style.opacity = '1';
          stickyBar.style.pointerEvents = 'auto';
        } else {
          stickyBar.style.transform = 'translateY(100%)';
          stickyBar.style.opacity = '0';
          stickyBar.style.pointerEvents = 'none';
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Initial state check
  if (window.scrollY < triggerPoint) {
    stickyBar.style.transform = 'translateY(100%)';
    stickyBar.style.opacity = '0';
    stickyBar.style.pointerEvents = 'none';
  }
}

/**
 * Smooth scrolling untuk link jangkar internal (#)
 */
function initSmoothScroll() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#' || !targetId.startsWith('#')) return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}
