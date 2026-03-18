import Handlebars from 'handlebars';
import type { HelperOptions } from 'handlebars';

let uniqueId = 0;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function registerComponent(Component: any) {
  const dataAttribute = `data-component-hbs-id="${++uniqueId}"`;

  Handlebars.registerHelper(
    Component.componentName,
    function (this: unknown, { hash, data }: HelperOptions) {
      // const id = ++uniqueId;
      // const dataAttribute = `data-component-hbs-id="${id}"`;

      const component = new Component(hash);

      /**
       * data.root === this.props
       * hash — это объект аргументов из шаблона
       */
      if ('ref' in hash) {
        (data.root.__refs = data.root.__refs || {})[hash.ref] = component.element();
      }

      /** В data.root создаётся __children с типом:
       *
       * __children: {
       *   component: Block -> сам компонент
       *   embed(fragment) -> функция,
       * }[]
       *
       * __children — временный буфер компонентов, найденных в шаблоне, записывается в props
       * children - реальные дочерние компоненты Block
       */
      (data.root.__children = data.root.__children || []).push({
        component,
        embed(node: DocumentFragment) {
          const placeholder = node.querySelector(`[${dataAttribute}]`);

          // const placeholder = node.querySelector(`[data-component-hbs-id="${id}"]`);

          if (!placeholder) {
            throw new Error(`Can't find data-id for component ${Component.componentName}`);
          }

          const element = component.element();
          if (!element) {
            throw new Error('Component element is not created');
          }

          placeholder.replaceWith(element);
        },
      });

      return `<div ${dataAttribute}></div>`;
    }
  );
}

export { registerComponent };
