import { useState } from 'react'
import './App.css'

function App() {
    let [counter,setCounter] = useState(15)
//   let counter = 5;
  const AddValue = ()=>{
    counter += 1;
    setCounter((prevCounter) => prevCounter + 1) // Fetch Previous Value And Than Update So This Will Increment As Much You Increment This
    setCounter(counter) // UseState Propagate Changes In Batches So This Will Update Value Only Once
    setCounter(counter)
    console.log(counter);
  }

  const Sub = ()=>{
    counter -= 1;
    setCounter(counter)
    console.log(counter);
  }
  
  return (
    <>
      <h1>Chai Or React | Counter</h1>
      <h2>Counter Default Value : {counter}</h2>
      <button
      onClick = {AddValue}
      >Add Value</button>
      <br />
      <button
      onClick={Sub}
      >Subtract Value</button>
    </>
  )
}

export default App
