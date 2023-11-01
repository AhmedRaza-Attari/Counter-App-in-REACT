import { useState } from "react";

function App() {

  const [counter, setCounter] = useState(0);

  // const incrementValue = () => setCounter(counter + 1);

  // const incrementValue = () => {
  //   setCounter(counter + 1);
  //   setCounter(counter + 1);
  //   setCounter(counter + 1);
  //   setCounter(counter + 1);
  // }

  // Below the code works because 'setCounter' by default gives us the previous state, and the above code can't works because the code is same and that's why the code is update in a combine called 'batch file'
  const incrementValue = () => {
    // setCounter(() => {})
    setCounter(preCounter => preCounter + 1);
    setCounter(preCounter => preCounter + 1);
    setCounter(preCounter => preCounter + 1);
    setCounter(preCounter => preCounter + 1);
  }

  const decrementValue = () => {
    if (counter > 0) setCounter(counter - 1)
  } 
 
  return (
    <>
      <h1> Couter App </h1>

      <h2> Counter Value : {counter} </h2>

      <button onClick={incrementValue}> Increment </button> <br />
      <button onClick={decrementValue}> Decrement </button>

    </>
  )
}

export default App
