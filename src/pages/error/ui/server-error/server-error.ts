import Block from '@shared/lib/block';
import { SERVER_ERROR_INFO } from '../../constants';
import templateSource from './server-error.hbs?raw';

const COMPONENT_NAME = 'ServerError';

export class ServerError extends Block<Record<string, unknown>> {
  static componentName = COMPONENT_NAME;
  protected template = templateSource;

  constructor() {
    super({
      ...SERVER_ERROR_INFO,
      componentName: COMPONENT_NAME,
    });
  }

  componentDidMount() {}

  componentWillUnmount() {}

  protected events = {};
}
