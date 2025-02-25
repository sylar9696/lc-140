import { useState, useEffect } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(10);


  function handleIncrement() {
    setCounter(
      (counter) => counter + 1
    );
  }

  function handleIncrement2() {
    setCounter2(
      (counter2) => counter2 + 1
    );
  }

  useEffect(() => {
    console.log("Eseguita!");
  }, [counter, counter2]);


  return (
    <div>
      <div>{counter}</div>
      <button onClick={handleIncrement}>
  		Incrementa
      </button>
      <div>{counter2}</div>
      <button onClick={handleIncrement2}>
  		Incrementa 2
      </button>
    </div>
  );
}
