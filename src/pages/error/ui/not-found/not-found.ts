import Block from '@app/block.ts';
import templateSource from './not-found.hbs?raw';
import { NOT_FOUND_INFO } from '../../constants';

export class NotFound extends Block<{}> {
  static componentName = 'NotFound';
  protected template = templateSource;

  constructor() {
    super({
      ...NOT_FOUND_INFO,
    });
  }

  componentDidMount() {}

  componentWillUnmount() {}

  protected events = {};
}
