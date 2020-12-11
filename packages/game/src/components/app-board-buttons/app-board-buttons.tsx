import { Component, Prop, Event, h } from '@stencil/core';
import { store } from '@stencil/redux';

import { newGame, undo } from '../app-board/board.slice';
@Component({
  tag: 'app-board-buttons',
  styleUrl: 'app-board-buttons.css',
  shadow: false,
  scoped: true,
})
export class AppBoardButtons {
  @Prop({ mutable: true })
  undos;

  @Prop({ mutable: true })
  controlDifficulty;

  @Prop({ mutable: true })
  controlUndos;

  @Prop()
  finished: boolean = false;

  @Prop()
  disableUndo: boolean = false;

  newGame!: typeof newGame;
  undo!: typeof undo;

  /**
   * Emitted when the "New" button is clicked. Behavior is slightly different as consuming board should not use state of menu.
   */
  @Event()
  clickBoardNew;

  componentWillLoad() {
    store.mapStateToProps(this, state => {
      const { undos } = state.board;
      const { difficulty: controlDifficulty, undos: controlUndos } = state.controls;

      return { undos, controlDifficulty, controlUndos };
    });

    store.mapDispatchToProps(this, { newGame, undo });
  }

  render() {
    return (
      <div class="board-button-container">
        {this.finished && (
          <button
            class="button is-outlined is-rounded"
            onClick={() => {
              this.newGame({
                difficulty: this.controlDifficulty.start,
                undos: this.controlUndos.start,
              });
            }}
          >
            <span class="icon">
              <i class="fas fa-palette"></i>
            </span>
            <span>New</span>
          </button>
        )}

        {!this.finished && this.undos > 0 && (
          <button
            class="button is-outlined is-rounded"
            onClick={() => {
              this.undo();
            }}
            disabled={this.undos === 0 || this.disableUndo}
          >
            <span class="icon">
              <i class="fas fa-undo"></i>
            </span>
            <span>Undo {this.undos !== Number.POSITIVE_INFINITY && `(${this.undos})`}</span>
          </button>
        )}
      </div>
    );
  }
}
