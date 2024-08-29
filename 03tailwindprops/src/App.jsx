// import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
//   const [count, setCount] = useState(0)
let myObj = {
    username: "Darshan",
    age : 21
}
let newArr = [1,2,3,4]
  return (
    <>
    <h1>Chai Or React | Tailwind</h1>
    <Card username ='Dp Vasani' SomeObj ={myObj} SomeArr= {newArr}/>
    <Card username ='Darshan Vasani' btnText ="Click Me"/>
    </>
  )
}

export default App
