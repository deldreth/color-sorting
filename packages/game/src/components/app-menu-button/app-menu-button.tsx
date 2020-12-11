import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-menu-button',
  styleUrl: 'app-menu-button.css',
  shadow: true,
})
export class AppMenuButton {
  @Prop()
  active: boolean = false;

  render() {
    return (
      <div class="menu-button" tabIndex={-1}>
        <input type="checkbox" class={this.active && 'active'} />

        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  }
}
