// Enhanced Animation Utilities - js/enhanced-animations.js
// Add this file and import it in your index.html

/**
 * ScrollReveal: Reveals elements on scroll with staggered animation
 */
function initScrollReveal() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.scroll-reveal, .stagger-animation').forEach((el) => {
    observer.observe(el);
  });
}

/**
 * Enhanced Hover Effects: Magnetic cursor effect
 */
function initMagneticCursor() {
  const magneticElements = document.querySelectorAll('a, button, .service-card');

  magneticElements.forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Store mouse position for CSS gradient
      el.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      el.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);

      // Subtle magnetic pull (optional GSAP)
      // gsap.to(el, {
      //   x: x * 0.2,
      //   y: y * 0.2,
      //   duration: 0.3
      // });
    });

    el.addEventListener('mouseleave', () => {
      // gsap.to(el, {
      //   x: 0,
      //   y: 0,
      //   duration: 0.3
      // });
    });
  });
}

/**
 * Curspr Glow: Custom cursor glow effect
 */
function initCursorGlow() {
  const cursorGlow = document.querySelector('.cursor-glow');

  if (!cursorGlow) {
    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    document.body.appendChild(glow);
  }

  const glow = document.querySelector('.cursor-glow');

  document.addEventListener('mousemove', (e) => {
    glow.style.left = `${e.clientX - 200}px`;
    glow.style.top = `${e.clientY - 200}px`;
  });

  document.addEventListener('mouseenter', () => {
    glow.classList.add('active');
  });

  document.addEventListener('mouseleave', () => {
    glow.classList.remove('active');
  });
}

/**
 * Smooth Scroll Fade: Elements fade in as they scroll into view
 */
function initSmoothScrollFade() {
  const fadeElements = document.querySelectorAll('[data-scroll-fade]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  });

  fadeElements.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

/**
 * Counter Animation: Animate numbers on scroll
 */
function initCounterAnimation() {
  const counters = document.querySelectorAll('[data-counter]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const target = parseInt(element.getAttribute('data-counter'));
        const duration = 2000; // 2 seconds
        const startTime = Date.now();

        const updateCounter = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const current = Math.floor(progress * target);
          element.textContent = current;

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          }
        };

        updateCounter();
        observer.unobserve(element);
      }
    });
  });

  counters.forEach((el) => observer.observe(el));
}

/**
 * Typed Text Effect: Simulates typing animation
 */
function initTypedText() {
  const typedElements = document.querySelectorAll('[data-typed]');

  typedElements.forEach((element) => {
    const text = element.textContent;
    const speed = parseInt(element.getAttribute('data-typed-speed')) || 100;

    element.textContent = '';
    let index = 0;

    const type = () => {
      if (index < text.length) {
        element.textContent += text[index];
        index++;
        setTimeout(type, speed);
      }
    };

    // Start typing when element comes into view
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        type();
        observer.unobserve(element);
      }
    });

    observer.observe(element);
  });
}

/**
 * Parallax Scroll Effect
 */
function initParallax() {
  const parallaxElements = document.querySelectorAll('[data-parallax]');

  window.addEventListener('scroll', () => {
    parallaxElements.forEach((el) => {
      const speed = el.getAttribute('data-parallax') || 0.5;
      const yPos = window.scrollY * speed;
      el.style.transform = `translateY(${yPos}px)`;
    });
  });
}

/**
 * Text Split Animation: Split text into characters and animate
 */
function splitTextAnimation(element) {
  const text = element.textContent;
  element.textContent = '';

  Array.from(text).forEach((char, index) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.display = 'inline-block';
    span.style.animation = `slideInUp 0.6s ease-out ${index * 0.05}s both`;
    element.appendChild(span);
  });
}

/**
 * Initialize all animations
 */
export function initEnhancedAnimations() {
  // Check if document is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}

function init() {
  try {
    initScrollReveal();
    initMagneticCursor();
    initCursorGlow();
    initSmoothScrollFade();
    initCounterAnimation();
    initTypedText();
    initParallax();
    console.log('✨ Enhanced animations initialized!');
  } catch (error) {
    console.warn('Some animations could not be initialized:', error);
  }
}

/**
 * GSAP Integration Helpers (if GSAP is available)
 */

// Timeline for coordinated animations
export function createAnimationTimeline() {
  if (typeof gsap !== 'undefined') {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        markers: false
      }
    });
    return tl;
  }
  return null;
}

// Stagger animation helper
export function staggerElements(selector, options = {}) {
  if (typeof gsap !== 'undefined') {
    gsap.to(selector, {
      duration: options.duration || 0.6,
      stagger: options.stagger || 0.1,
      opacity: options.opacity !== undefined ? options.opacity : 1,
      y: options.y !== undefined ? options.y : 0,
      ...options
    });
  }
}

// Reveal animation helper
export function revealOnScroll(selector, options = {}) {
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(selector, {
      scrollTrigger: {
        trigger: selector,
        start: options.start || 'top 80%',
        end: options.end || 'top 50%',
        toggleActions: options.toggleActions || 'play none none reverse'
      },
      duration: options.duration || 0.8,
      opacity: 1,
      y: 0,
      ...options
    });
  }
}

// Initialize on import
initEnhancedAnimations();
