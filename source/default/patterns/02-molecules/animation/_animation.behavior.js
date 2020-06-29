import scrollmagic from 'scrollmagic';
import gsap from 'gsap';

Drupal.behaviors.animation = {
  attach(context) {
    var controller = new scrollmagic.Controller();


    let tl = gsap.timeline({

    });


    new scrollmagic.Scene({
      duration: 100,
      offset: 50
    })
        .setPin('#scrollmagic')
        .addTo(controller);

    new scrollmagic.Scene({
      duration: 100,
      offset: 150
    })
        .setPin('#scrollmagic')
        .setTween(tl)
        .addTo(controller);
  },
};
