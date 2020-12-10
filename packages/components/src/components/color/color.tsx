import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'a-color',
  styleUrl: 'color.css',
  shadow: true,
})
export class Color {
  /**
   * The list of colors represented as an array
   */
  @Prop() color: string = '';

  render() {
    return <div class="color" style={{ backgroundColor: this.color }} />;
  }
}
