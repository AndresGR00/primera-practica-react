import { useState } from "react";
import "./App.css";
import ShowCount from "./components/ShowCount/ShowCount";
import AddButton from "./components/AddButton/AddButton";
import SubtractButton from "./components/SubtractButton/SubtractButton";

function App() {
  const [count, setCount] = useState(0);

  const decrementCount = () => {
    setCount(count - 1);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App flex flex-col gap-4">
      <ShowCount count={count} />
      <div className="Buttons flex gap-6 items-center justify-center">
        <SubtractButton onClick={decrementCount} />
        <AddButton onClick={incrementCount} />
      </div>
    </div>
  );
}
export default App;
