import { Component, Prop, State, h } from '@stencil/core';
import { store } from '@stencil/redux';
import classNames from 'classnames';

import { setDifficulty, setUndos } from './controls.slice';
import { newGame, reset } from '../app-board/board.slice';

const difficultyOptions = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const undoOptions = [Number.POSITIVE_INFINITY, 10, 7, 5, 3, 1, 0];

@Component({
  tag: 'app-controls',
  styleUrl: 'app-controls.css',
})
export class AppControls {
  @Prop({ mutable: true })
  difficulty: { start: number; next: number };

  @Prop({ mutable: true })
  undos: { start: number; next: number };

  setDifficulty!: typeof setDifficulty;
  setUndos!: typeof setUndos;
  newGame!: typeof newGame;
  reset!: typeof reset;

  @State()
  open: boolean = false;

  componentWillLoad() {
    store.mapStateToProps(this, state => {
      const { difficulty, undos } = state.controls;

      return { difficulty, undos };
    });

    store.mapDispatchToProps(this, { setDifficulty, setUndos, newGame, reset });
  }

  render() {
    const controlClasses = classNames('app-controls', { open: this.open });
    const visiableControlClasses = classNames('visible-controls', { open: this.open });

    return (
      <div class={controlClasses}>
        <app-menu-button active={this.open} onClick={() => (this.open = !this.open)}></app-menu-button>

        {this.open && (
          <div class={visiableControlClasses}>
            <div class="field">
              <label class="label">Difficulty (Number of Colors)</label>
              <div class="select is-rounded">
                <select
                  id="difficulty-adjust"
                  onInput={event => {
                    // @ts-ignore
                    this.setDifficulty(parseInt(event.target.value, 10));
                  }}
                >
                  {difficultyOptions.map(difficulty => (
                    <option value={difficulty} selected={this.difficulty.next === difficulty}>
                      {difficulty}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div class="field">
              <label class="label">Number of Undos</label>
              <div class="select is-rounded">
                <select
                  id="undos-adjust"
                  onInput={event => {
                    // @ts-ignore
                    this.setUndos(parseFloat(event.target.value));
                  }}
                >
                  {undoOptions.map(undos => (
                    <option value={undos} selected={this.undos.next === undos}>
                      {undos}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <hr />

            <div class="buttons">
              <button
                onClick={() => {
                  this.open = false;
                  this.newGame({
                    difficulty: this.difficulty.next,
                    undos: this.undos.next,
                  });
                }}
                class="button is-rounded"
              >
                <span class="icon">
                  <i class="fas fa-palette"></i>
                </span>
                <span>New Game</span>
              </button>

              <button
                onClick={() => {
                  this.open = false;
                  this.reset({
                    undos: this.undos.start,
                  });
                }}
                class="button is-rounded"
              >
                <span class="icon">
                  <i class="fas fa-undo"></i>
                </span>
                <span>Reset Game</span>
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
