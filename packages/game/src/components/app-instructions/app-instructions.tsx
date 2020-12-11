import { Component, State, h } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'app-instructions',
  styleUrl: 'app-instructions.css',
  scoped: true,
})
export class AppInstructions {
  @State()
  show: boolean = false;

  render() {
    const controlClasses = classNames('control', {
      show: this.show,
    });

    return (
      <div class="app-instructions">
        <div class={controlClasses} onClick={() => (this.show = !this.show)}>
          <i class="fa fa-info fa-fw"></i>
        </div>

        {this.show && (
          <div class="instructions">
            <div class="set">
              <a-bottle selected colors={JSON.stringify(['#ed4a4d'])}></a-bottle>
              <i class="fa fa-long-arrow-alt-right fa-fw icon"></i>
              <a-bottle colors={JSON.stringify(['#ed4a4d'])}></a-bottle>
              <i class="fa fa-long-arrow-alt-right fa-fw icon"></i>
              <a-bottle colors={JSON.stringify(['#ed4a4d', '#ed4a4d'])}></a-bottle>
            </div>

            <div class="set">
              <a-bottle selected colors={JSON.stringify(['#ed4a4d'])}></a-bottle>
              <i class="fa fa-long-arrow-alt-right fa-fw icon"></i>
              <a-bottle colors={JSON.stringify(['#40c02f'])}></a-bottle>
              <i class="fa fa-long-arrow-alt-right fa-fw icon"></i>
              <a-bottle warning colors={JSON.stringify(['#40c02f'])}></a-bottle>
            </div>

            <div class="set">
              <a-bottle selected colors={JSON.stringify(['#ed4a4d', '#ed4a4d'])}></a-bottle>
              <i class="fa fa-long-arrow-alt-right fa-fw icon"></i>
              <a-bottle colors={JSON.stringify(['#ed4a4d', '#40c02f'])}></a-bottle>
              <i class="fa fa-long-arrow-alt-right fa-fw icon"></i>
              <a-bottle colors={JSON.stringify(['#ed4a4d', '#ed4a4d', '#ed4a4d', '#40c02f'])}></a-bottle>
            </div>

            <div class="set">
              <a-bottle selected colors={JSON.stringify(['#ed4a4d', '#ed4a4d'])}></a-bottle>
              <i class="fa fa-long-arrow-alt-right fa-fw icon"></i>
              <a-bottle colors={JSON.stringify(['#ed4a4d', '#40c02f', '#f4ce43'])}></a-bottle>
              <i class="fa fa-long-arrow-alt-right fa-fw icon"></i>
              <a-bottle warning colors={JSON.stringify(['#ed4a4d', '#40c02f', '#f4ce43'])}></a-bottle>
            </div>

            <div class="set">
              <a-bottle finished colors={JSON.stringify(['#ed4a4d', '#ed4a4d', '#ed4a4d', '#ed4a4d'])}></a-bottle>
              <i class="fa fa-fw icon"></i>
              <a-bottle finished colors={JSON.stringify(['#40c02f', '#40c02f', '#40c02f', '#40c02f'])}></a-bottle>
              <i class="fa fa-fw icon"></i>
              <a-bottle finished></a-bottle>
            </div>
          </div>
        )}
      </div>
    );
  }
}
