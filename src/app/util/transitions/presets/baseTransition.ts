import { gsap, Power2 } from 'gsap';

export const baseTransition = (
  elements: HTMLElement | ReadonlyArray<HTMLElement>,
  props?: gsap.AnimationVars,
): gsap.core.Animation =>
  gsap.from(elements, {
    y: 40,
    autoAlpha: 0,
    ease: Power2.easeOut,
    stagger: 0.4,
    ...props,
  });
