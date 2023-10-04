import { useState } from "react";

function App() {

  const [counter, setCounter] = useState(0);

  const incrementValue = () => setCounter(counter + 1);
  const decrementValue = () => {
    if (counter > 0) setCounter(counter - 1)
  } 

  return (
    <>
      <h1> Couter App </h1>

      <h1> Counter Value : {counter} </h1>

      <button onClick={incrementValue}> Increment </button> <br />
      <button onClick={decrementValue}> Decrement </button>

    </>
  )
}

export default App
