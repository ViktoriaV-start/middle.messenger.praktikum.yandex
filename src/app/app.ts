import Handlebars from 'handlebars';
import templateSource from './app.hbs?raw';
import './styles/variables.css';
import './styles/app.css';

import { resolveRoute } from './router';

const template = Handlebars.compile(templateSource);

export function App() {
  return template({
    page: resolveRoute(),
  });
}
