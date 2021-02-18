import AbstractBlock from '../AbstractBlock';
import { scrollTransition, visualTransition } from '../../../util/transitions';

export default class Banner extends AbstractBlock {
  public static readonly displayName: string = 'banner';

  constructor(el: HTMLElement) {
    super(el);
    const visual = this.getElement('[data-component="visual"]');
    visual && scrollTransition(el, visualTransition(visual));
  }

  public dispose() {
    super.dispose();
  }
}
