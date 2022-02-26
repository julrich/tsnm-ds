import { Component, define } from '@kickstartds/core/lib/core';

const identifier = 'encore.section-slider';
class SectionSlider extends Component {
  static identifier = identifier;

  constructor(element) {
    super(element);

    element.style.cursor = 'grab';
    element.style.userSelect = 'none';

    // Button Nav
    const [prevBtn, nextBtn] = element.nextElementSibling.querySelectorAll(
      '.c-button--slider-arrow'
    );
    const slides = element.querySelectorAll('.l-section--slider__slide');
    const [slide] = slides;

    element.addEventListener('scroll', () => {
      prevBtn.disabled = element.scrollLeft < 1;
      nextBtn.disabled =
        element.scrollLeft + element.offsetWidth >= element.scrollWidth;
    });

    const move = (forward) => {
      const slideWidth = slide.offsetWidth;
      const fraction = element.scrollLeft / slideWidth;
      const slideIndex = forward
        ? Math.floor(fraction) + 1
        : Math.ceil(fraction) - 1;

      element.scrollTo({ left: slideIndex * slideWidth, behavior: 'smooth' });
    };

    prevBtn.addEventListener('click', () => move(false));
    nextBtn.addEventListener('click', () => move(true));

    // Grab

    let scrollLeft = 0; // The current scroll
    let startX = 0; // The current mouse position
    let velX = 0; // Velocitiy
    let momentumID;

    const cancelMomentumTracking = () => cancelAnimationFrame(momentumID);

    const momentumLoop = () => {
      element.scrollLeft += velX;
      velX *= 0.9;
      if (Math.abs(velX) > 0.5) {
        momentumID = requestAnimationFrame(momentumLoop);
      }
    };

    const beginMomentumTracking = () => {
      cancelMomentumTracking();
      momentumID = requestAnimationFrame(momentumLoop);
    };

    const mouseMoveHandler = (e) => {
      e.preventDefault();

      const dx = e.clientX - startX;
      const prevScrollLeft = element.scrollLeft;
      element.scrollLeft = scrollLeft - dx;
      velX = element.scrollLeft - prevScrollLeft;
    };

    const mouseUpHandler = () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
      document.removeEventListener('mouseleave', mouseUpHandler);

      element.style.cursor = 'grab';
      element.style.removeProperty('user-select');
      beginMomentumTracking();
    };

    const mouseDownHandler = (e) => {
      scrollLeft = element.scrollLeft;
      startX = e.clientX;

      element.style.cursor = 'grabbing';
      element.style.userSelect = 'none';

      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler);
      document.addEventListener('mouseleave', mouseUpHandler);
      cancelMomentumTracking();
    };

    element.addEventListener('mousedown', mouseDownHandler);
    element.addEventListener('wheel', cancelMomentumTracking);
  }
}

define(identifier, SectionSlider);
