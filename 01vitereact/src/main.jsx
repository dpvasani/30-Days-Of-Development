import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// function MyApp(){
//     return (
//         <div>
//             <h1>My App</h1>
//         </div>
//     )
// }

// This Will Not Work Because We Doesn't Defined That How To Understand This Object Syntax In Custom React File We defined That
// const reactElement = {
//     type: 'a', // May Be Div Or P Or Whatever
//     props: {
//         href: 'http://google.com',
//         target: '_blank',
//         children: 'Click me'
//     }
// };

// const AnotherElement =(
//     <a href="https://google.com" target='_blank'>Visit The Google</a>
// )
// const anotherUser = Darshan Vasani
// const reactElement = React.createElement(
//     'a', // Type
//     {href:'https://google.com', target: '_blank'}, // Attribute Otherwise Empty
//     'Click Me To Visit Google' // Text To Show
//     anotherUser
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    {/* {AnotherElement} */}
    {/* reactElement */}
    {/* <MyApp /> */}
    {/* MyApp() */}
    {/* <h2>React With | Darshan Vasani {username}</h2> */}
    <App />
    <h2>React With | Darshan Vasani {username}</h2>
    </>
    
  </StrictMode>,
)
