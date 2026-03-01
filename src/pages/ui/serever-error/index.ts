import Handlebars from 'handlebars';
import templateSource from './server-error.hbs?raw';
import { Info } from '@shared/ui/info';
import { SERVER_ERROR_INFO } from '@pages/constants';

const template = Handlebars.compile(templateSource);

export function ServerError() {
  return template({
    information: Info(SERVER_ERROR_INFO),
  });
}
