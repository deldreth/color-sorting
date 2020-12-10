import { ABottle } from "@water-sorting/components-react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <ABottle colors={JSON.stringify(["red", "green"])} />
    </div>
  );
}

export default App;
