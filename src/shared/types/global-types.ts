import Block from '../lib/block';

export interface BlockOwnProps {
  __children?: Array<{
    component: Block<object>;
    embed(node: DocumentFragment): void;
  }>;
  __refs?: Record<string, Element>;
}

export type Indexed<T = unknown> = {
  [key in string]: T;
};
