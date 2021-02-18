import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const scrollTransition = (
  trigger: HTMLElement,
  animation: gsap.core.Animation,
  props?: Object,
): gsap.plugins.ScrollTriggerInstance =>
  ScrollTrigger.create({
    trigger,
    animation,
    toggleActions: 'play complete none none',
    start: 'top 65%',
    ...props,
  });
