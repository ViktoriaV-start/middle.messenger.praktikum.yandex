import Block from '@shared/lib/block';
import { NOT_FOUND_INFO } from '../../constants';
import templateSource from './not-found.hbs?raw';

export class NotFound extends Block<object> {
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
