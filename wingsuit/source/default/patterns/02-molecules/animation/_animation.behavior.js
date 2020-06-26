import fullpage from "fullPage";

Drupal.behaviors.animation = {
  attach(context) {

    window.onload = function () {
      new fullpage('#fullpage', {
        licenseKey: 'F1C6D4A4-74994A21-9E0A0C26-D995DE1E',
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#ccddff'],
      });
    };

  },
};
