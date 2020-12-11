# my-component



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                 | Type      | Default |
| ---------- | ---------- | ------------------------------------------- | --------- | ------- |
| `colors`   | `colors`   | The list of colors represented as an array  | `string`  | `''`    |
| `finished` | `finished` | Indicate a winning state                    | `boolean` | `false` |
| `selected` | `selected` | Indicate that the bottle is selected        | `boolean` | `false` |
| `warning`  | `warning`  | Indicate that the bottle cannot be targeted | `boolean` | `false` |


## Dependencies

### Depends on

- [a-color](../color)

### Graph
```mermaid
graph TD;
  a-bottle --> a-color
  style a-bottle fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
