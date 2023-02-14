import { useState } from "react";
import { ExampleComponent } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <ExampleComponent />
    </div>
  );
}

export default App;
