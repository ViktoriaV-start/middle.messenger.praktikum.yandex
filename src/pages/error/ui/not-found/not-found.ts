import Block from '@shared/lib/block';
import { NOT_FOUND_INFO } from '../../constants';
import templateSource from './not-found.hbs?raw';

const COMPONENT_NAME = 'NotFound';

export class NotFound extends Block<Record<string, unknown>> {
  static componentName = COMPONENT_NAME;
  protected template = templateSource;

  constructor() {
    super({
      ...NOT_FOUND_INFO,
      componentName: COMPONENT_NAME,
    });
  }

  getContent() {
    this.render();

    return this.element();
  }
}
