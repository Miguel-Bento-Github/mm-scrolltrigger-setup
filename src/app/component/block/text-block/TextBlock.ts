import { gsap } from 'gsap';
import AbstractBlock from '../AbstractBlock';
import { scrollTransition, baseTransition, visualTransition } from '../../../util/transitions';

export default class TextBlock extends AbstractBlock {
  public static readonly displayName: string = 'text-block';

  constructor(el: HTMLElement) {
    super(el);

    const transitionItems = this.getElements('[data-transition-item]');

    const visuals = this.getElements('[data-component="visual"]');

    const animation = gsap
      .timeline()
      .add(baseTransition(transitionItems))
      .add(visualTransition(visuals));

    scrollTransition(el, animation);
  }

  public dispose() {
    super.dispose();
  }
}
