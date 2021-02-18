import AbstractBlock from '../AbstractBlock';
// import { scrollTransition, baseTransition } from '../../../util/transitions';


export default class {{name_pc}} extends AbstractBlock {
  public static readonly displayName:string = '{{name_sc}}';

  constructor(el:HTMLElement) {
    super(el);

    // const transitionItems = this.getElements('[data-transition-item]');
    // scrollTransition(el, baseTransition(transitionItems), { markers: true });
  }

  public dispose() {
    super.dispose();
  }
}
