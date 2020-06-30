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

    // const tl = gsap.timeline({ yoyo: true });
    // tl.to('.demo-text-1', { opacity: 1, duration: 1 }, '>1');
    // tl.to('.demo-text-1', { opacity: 0, duration: 1 });
    // // tl.to('.demo-text-1', { opacity: 0, duration: 1 });
    //
    // scrolltrigger.create({
    //   animation: tl,
    //   markers: true,
    //   trigger: '.demo-text-1',
    //   start: 'top 20%',
    //   end: '1000px 20%',
    //   scrub: true,
    // });

    gsap.to(".demo-text-1", {
      scrollTrigger: {
        trigger: ".demo-text-1",
        start: "20px 200px",
        end: "500px 50%",
        scrub: true,
      },
      opacity: 1,
    });

    gsap.set(".demo-text-1", {
      scrollTrigger: {
        trigger: ".demo-text-1",
        start: "500px 200px",
        end: "1000px 50%",
        scrub: true,
      },
      opacity: 1,
    });

    gsap.to(".demo-text-1", {
      scrollTrigger: {
        trigger: ".demo-text-1",
        start: "1000px 200px",
        end: "1480px 50%",
        scrub: true,
      },
      opacity: 0,
    });
  },
};
