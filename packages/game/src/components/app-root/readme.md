# app-root



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [app-controls](../app-controls)
- [app-instructions](../app-instructions)
- [app-board](../app-board)

### Graph
```mermaid
graph TD;
  app-root --> app-controls
  app-root --> app-instructions
  app-root --> app-board
  app-controls --> app-menu-button
  app-instructions --> a-bottle
  a-bottle --> a-color
  app-board --> a-bottle
  app-board --> app-board-buttons
  style app-root fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
