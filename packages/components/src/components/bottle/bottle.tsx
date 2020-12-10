import { Component, Prop, Watch, h } from '@stencil/core';
import type { JSX } from '@stencil/core';

@Component({
  tag: 'a-bottle',
  styleUrl: 'bottle.css',
  shadow: true,
})
export class Bottle {
  private _colors: string[] = [];
  /**
   * The list of colors represented as an array
   */
  @Prop() colors: string = '';

  @Watch('colors')
  private parseColors(nextColors: string) {
    this._colors = JSON.parse(nextColors);
  }

  componentWillLoad() {
    this.parseColors(this.colors);
  }

  private renderColors(): JSX.Element[] {
    const colors = new Array(4).fill('transparent', 0, 4);

    this._colors.forEach((color, index) => {
      colors[index - this._colors.length + colors.length] = color;
    });

    return colors.map(color => <a-color color={color}></a-color>);
  }

  render() {
    return (
      <div class="bottle" tabIndex={-1}>
        <div />
        {this.renderColors()}
      </div>
    );
  }
}
