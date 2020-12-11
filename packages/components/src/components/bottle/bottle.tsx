import { Component, Prop, Watch, h } from '@stencil/core';
import classNames from 'classnames';

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
  @Prop()
  colors: string = '';

  /**
   * Indicate that the bottle is selected
   */
  @Prop()
  selected: boolean = false;

  /**
   * Indicate that the bottle cannot be targeted
   */
  @Prop()
  warning: boolean = false;

  /**
   * Indicate a winning state
   */
  @Prop()
  finished: boolean = false;

  @Watch('colors')
  private parseColors(nextColors: string) {
    this._colors = new Array(4).fill('transparent', 0, 4);
    const parsedColors = JSON.parse(nextColors);

    parsedColors.forEach((color, index) => {
      this._colors[index - parsedColors.length + this._colors.length] = color;
    });
  }

  componentWillLoad() {
    this.parseColors(this.colors);
  }

  render() {
    const classes = classNames('bottle', {
      selected: this.selected,
      warning: this.warning,
      finished: this.finished,
    });

    return (
      <div class={classes}>
        <div />
        {this._colors.map(color => (
          <a-color color={color}></a-color>
        ))}
      </div>
    );
  }
}
