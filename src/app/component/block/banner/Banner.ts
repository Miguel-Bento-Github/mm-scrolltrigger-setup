import AbstractBlock from '../AbstractBlock';

export default class Banner extends AbstractBlock {
  public static readonly displayName: string = 'banner';

  constructor(el: HTMLElement) {
    super(el);
  }

  public dispose() {
    super.dispose();
  }
}
