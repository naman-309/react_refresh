
import { useState, useMemo } from "react";

function App() {
  const [number, setNumber] = useState(5);

  const square = useMemo(() => {
    console.log("Square calculated");

    return number * number;
  }, [number]);

  return (
    <div>


      <h2>Number: {number}</h2>
      <button onClick={() => setNumber(number + 1)}>
        Increase Number
      </button>

      <h2>Square: {square}</h2>
    </div>
  );
}

export default App;
