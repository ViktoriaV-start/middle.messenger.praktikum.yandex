import Handlebars from 'handlebars';
import templateSource from './app.hbs?raw';
import './styles/variables.css';
import './styles/app.css';

import { resolveRoute } from './router';
import { Navigation } from '@pages/ui/navigation';

const template = Handlebars.compile(templateSource);

export function App() {
  const navigation = Navigation();

  return template({
    page: resolveRoute(),
    navigation,
  });
}
