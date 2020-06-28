import fullpage from "fullPage";
import lax from 'lax.js'

const updateLax = () => {
  lax.update(window.scrollY)
  window.requestAnimationFrame(updateLax)
}

Drupal.behaviors.animation = {
  attach(context) {
    lax.setup() // init
    window.requestAnimationFrame(updateLax)

  },
};
