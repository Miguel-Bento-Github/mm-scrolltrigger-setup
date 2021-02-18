import AbstractBlock from '../AbstractBlock';

export default class TextBlock extends AbstractBlock {
  public static readonly displayName: string = 'text-block';

  constructor(el: HTMLElement) {
    super(el);
  }

  public dispose() {
    super.dispose();
  }
}
