import { useEffect } from "react";
import Counter from "./components/Counter";
import About from "./components/About";
import Pass from "./components/Pass";
import Changemsg from "./components/Changemsg";

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
      <Pass></Pass>
      <hr>
      </hr>

      <Changemsg></Changemsg>
    </>
  );
}

export default App;
