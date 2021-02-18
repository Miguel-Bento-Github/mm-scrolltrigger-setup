import { gsap } from 'gsap';

export const visualTransition = (
  elements: HTMLElement | ReadonlyArray<HTMLElement>,
  props?: gsap.AnimationVars,
): gsap.core.Animation =>
  gsap.from(elements, {
    autoAlpha: 0,
    stagger: 0.4,
    scale: 0.5,
    ...props,
  });
