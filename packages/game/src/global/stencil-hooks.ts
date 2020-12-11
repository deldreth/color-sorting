import { State } from 'haunted';
import { getElement, JSX, forceUpdate } from '@stencil/core';

const StateProp = Symbol('state');
export function useHook(component: unknown, hook: () => JSX.Element | JSX.Element[]) {
  let state = component[StateProp];
  if (!state) {
    const element = getElement(component);

    state = component[StateProp] = new State(() => {
      forceUpdate(element);
    }, element);

    //@ts-ignore
    const { disconnectedCallback } = component;
    component['disconnectedCallback'] = function () {
      state.teardown();
      state = null;
      disconnectedCallback && disconnectedCallback();
    };
  }

  return () => {
    const out = state.run(hook);
    state.runEffects();

    return out;
  };
}
