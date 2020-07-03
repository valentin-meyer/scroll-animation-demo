import gsap from 'gsap';
import scrolltrigger from 'gsap/ScrollTrigger';
import lax from 'lax.js';

const updateLax = () => {
  lax.update(window.scrollY);
  window.requestAnimationFrame(updateLax);
};

Drupal.behaviors.animation = {
  attach(context) {
    console.log(context);
    lax.setup();
    window.requestAnimationFrame(updateLax);

    gsap.registerPlugin(scrolltrigger);

    gsap.to('.pin-container', {
      scrollTrigger: {
        trigger: '.pin-container',
        start: 'top top',
        end: '+=3000',
        pin: true,
      },
    });

    gsap.to('.demo-text-1', {
      scrollTrigger: {
        trigger: '.demo-text-1',
        start: '20px 200px',
        end: '500px 50%',
        scrub: true,
      },
      opacity: 1,
    });

    gsap.set('.demo-text-1', {
      scrollTrigger: {
        trigger: '.demo-text-1',
        start: '500px 200px',
        end: '1000px 50%',
        scrub: true,
      },
      opacity: 1,
    });

    gsap.to('.demo-text-1', {
      scrollTrigger: {
        trigger: '.demo-text-1',
        start: '1000px 200px',
        end: '1480px 50%',
        scrub: true,
      },
      opacity: 0,
    });

    gsap.to('.parallax-content', {
      yPercent: -100,
      ease: 'none',
      scrollTrigger: {
        trigger: '.parallax-section',
        // start: "top bottom", // the default values
        // end: "bottom top",
        scrub: true,
      },
    });

    gsap.to('.parallax-image', {
      yPercent: 50,
      ease: 'none',
      scrollTrigger: {
        trigger: '.parallax-section',
        // start: "top bottom", // the default values
        // end: "bottom top",
        scrub: true,
      },
    });

    // Parallax 2

    gsap.to('.headline-container', {
      ease: 'none',
      scrollTrigger: {
        trigger: '.headline-container',
        start: 'top center', // the default values
        end: 'top top',
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    });

    gsap.to('.parallax-image22', {
      ease: 'none',
      opacity: 1,
      scrollTrigger: {
        trigger: '.parallax-image22',
        start: 'top center', // the default values
        end: 'bottom top',
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    });

    gsap.to('.parallax-image22', {
      ease: 'none',
      scrollTrigger: {
        trigger: '.parallax-image22',
        start: 'center center', // the default values
        end: '+=3000',
        markers: true,
        scrub: true,
        pin: true,
      },
    });

    gsap.to('.parallax-image2', {
      ease: 'none',
      yPercent: -100,
      scrollTrigger: {
        trigger: '.parallax-image22',
        start: 'top center', // the default values
        end: 'bottom top',
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    });

  },
};
