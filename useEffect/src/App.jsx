import { useEffect } from "react";
import Counter from "./components/Counter";
import About from "./components/About";

function App() {
  useEffect(() => {
    console.log("Hello React!");
  }, []);

  console.log("render");

  return (
    <>
      <h3>Welcome to useEffect</h3 >
      <Counter></Counter>
      <About></About>
    </>
  );
}

export default App;
