import templateSource from './server-error.hbs?raw';
import { SERVER_ERROR_INFO } from '../../constants';
import Block from '@app/block.ts';

export class ServerError extends Block<{}> {
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
