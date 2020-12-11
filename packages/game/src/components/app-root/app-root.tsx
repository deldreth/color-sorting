import { Component, h } from '@stencil/core';
import { store } from '@stencil/redux';

import { default as rootStore } from './store';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  componentWillLoad() {
    store.setStore(rootStore);
  }

  render() {
    return (
      <main>
        <app-controls />

        <app-instructions />

        <app-board />
      </main>
    );
  }
}
