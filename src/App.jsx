import { useState } from "react";
import "./App.css";
import ShowCount from "./components/ShowCount/ShowCount";
import { Button } from "./components/Button/Button";

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
        <Button onClick={decrementCount} name={"Subtract"} />
        <Button onClick={incrementCount} name={"Add"} />
      </div>
    </div>
  );
}
export default App;
