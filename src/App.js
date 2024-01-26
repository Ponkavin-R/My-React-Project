
// import './App.css';
// //rcc-to create react component
// import { BrowserRouter, Routes, Route } from "react-router-dom"
// import React from 'react'
// import Hello from './Hello'
// import Myclass from './Myclass'
// import Ter from './Ter'
// import Layout from "./Layout"
// import Home from "./Pages/Home"
// import About from "./Pages/About"
// import Contact from "./Pages/Contact"

// export default function App() {
//   return (
//     <>
//       <Hello />
//       <Myclass />
//       <Ter />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path="about" element={<About />} />
//             <Route path="contact" element={<Contact />} />

//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }
import React from 'react'
import Basic from './Event-DOM/Basic'
import Counter from './Event-DOM/Counter'
import Operations from './Event-DOM/Operations'
import UseStateandEffect from './UseState-useEffect/UseStateandEffect'
import Reducer from './UseState-useEffect/Reducer'
import Callback from './Callback'

export default function App() {
  return (
    <>
      <Basic />
      <Counter />
      <Operations />
      <UseStateandEffect />
      <Reducer />
      <Callback />
    </>
  )
}
