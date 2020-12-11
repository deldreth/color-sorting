import { Component, h, Prop } from '@stencil/core';
import { store } from '@stencil/redux';
import { useEffect } from 'haunted';
import classNames from 'classnames';

import { useHook } from '../../global/stencil-hooks';

import { setSelectedIndex, setWarningIndex, moveColor, undo } from './board.slice';

@Component({
  tag: 'app-board',
  styleUrl: 'app-board.css',
})
export class AppBoard {
  @Prop({ mutable: true })
  selectedIndex: number;

  @Prop({ mutable: true })
  warningIndex: number;

  @Prop({ mutable: true })
  undos: number;

  @Prop({ mutable: true })
  board;

  @Prop({ mutable: true })
  previousStates;

  setSelectedIndex!: typeof setSelectedIndex;
  setWarningIndex!: typeof setWarningIndex;
  moveColor!: typeof moveColor;
  undo!: typeof undo;

  componentWillLoad() {
    store.mapStateToProps(this, state => {
      const { selectedIndex, warningIndex, undos, board, previousStates } = state.board;

      return { selectedIndex, warningIndex, undos, board, previousStates };
    });

    store.mapDispatchToProps(this, { setSelectedIndex, setWarningIndex, moveColor, undo });
  }

  /**
   * Determine if the current game is finished by checking that if the first position of a bottle has a color
   * then that bottle's length is 4 and all the colors of that bottle match the first color.
   */
  private isFinished(): boolean {
    return this.board.every(bottle =>
      bottle.every(color => {
        if (bottle[0]) {
          return bottle.length === 4 && bottle[0] === color;
        }

        return false;
      }),
    );
  }

  render = useHook(this, () => {
    useEffect(() => {
      setTimeout(() => this.setWarningIndex(null), 500);
    }, [this.warningIndex]);

    const boardClasses = classNames('app-board', {
      'with-three': this.board.length === 3,
      'with-five': this.board.length === 5,
      'with-four': this.board.length === 7 || this.board.length === 8,
    });

    const finished = this.isFinished();

    return (
      <div class="app-board-container">
        <div class="move-count">{this.previousStates.length - 1}</div>

        <div class={boardClasses}>
          {this.board.map((bottle: string[], index: number) => (
            <a-bottle
              colors={JSON.stringify(bottle)}
              selected={this.selectedIndex === index}
              warning={this.warningIndex === index}
              finished={finished}
              onClick={() => {
                if (this.selectedIndex !== null) {
                  this.moveColor(index);
                } else {
                  this.setSelectedIndex(index);
                }
              }}
            ></a-bottle>
          ))}
        </div>

        <app-board-buttons finished={finished} disableUndo={this.previousStates.length === 1}></app-board-buttons>
      </div>
    );
  });
}
