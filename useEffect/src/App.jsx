import { useEffect } from "react";
import Counter from "./components/Counter";

function App() {
  useEffect(() => {
    console.log("Hello React!");
  }, []);

  console.log("render");

  return (
    <>
      <h3>Welcome to useEffect</h3 >
      <Counter></Counter>
    </>
  );
}

export default App;
