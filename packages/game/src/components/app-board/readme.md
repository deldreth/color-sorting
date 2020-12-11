# app-board



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description | Type     | Default     |
| ---------------- | ----------------- | ----------- | -------- | ----------- |
| `board`          | `board`           |             | `any`    | `undefined` |
| `previousStates` | `previous-states` |             | `any`    | `undefined` |
| `selectedIndex`  | `selected-index`  |             | `number` | `undefined` |
| `undos`          | `undos`           |             | `number` | `undefined` |
| `warningIndex`   | `warning-index`   |             | `number` | `undefined` |


## Dependencies

### Used by

 - [app-root](../app-root)

### Depends on

- a-bottle
- [app-board-buttons](../app-board-buttons)

### Graph
```mermaid
graph TD;
  app-board --> a-bottle
  app-board --> app-board-buttons
  a-bottle --> a-color
  app-root --> app-board
  style app-board fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
