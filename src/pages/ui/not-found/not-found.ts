import Handlebars from 'handlebars';
import templateSource from './not-found.hbs?raw';
import { Info } from '@shared/ui/info';
import { NOT_FOUND_INFO } from '@pages/constants';

const template = Handlebars.compile(templateSource);

export function NotFound() {
  return template({
    information: Info(NOT_FOUND_INFO),
  });
}
