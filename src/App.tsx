import { useState } from "react";
import { Title } from "./components/Title";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Title color="red" variant="md">
        Live de React.js do FullCycle
      </Title>
      <p>Contador de cliques: {count} </p>
      <button onClick={(e) => setCount(count + 1)}>Me clique!!!</button>
      <button onClick={(e) => setCount(0)}>Zera clique</button>
    </div>
  );
}

export default App;
