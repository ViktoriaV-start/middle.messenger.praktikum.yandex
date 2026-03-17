import Block from '@shared/lib/block';
import { SERVER_ERROR_INFO } from '../../constants';
import templateSource from './server-error.hbs?raw';

export class ServerError extends Block<object> {
  static componentName = 'ServerError';
  protected template = templateSource;

  constructor() {
    super({
      ...SERVER_ERROR_INFO,
    });
  }

  componentDidMount() {}

  componentWillUnmount() {}

  protected events = {};
}
