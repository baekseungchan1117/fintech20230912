import React from 'react'
import Welcome from "./componets/Welcome";
import StateComponets from "./componets/StateComponets";
import EventComponent from "./componets/EventComponent";
import ListComponent from "./componets/ListComponent";
import AxiosComponent from "./componets/AxiosComponent";
import StyledComponent from "./componets/StyledComponent";
import {BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<ListComponent />}/>
        <Route path={'/b'} element={<StyledComponent />}/>
        {/* /event cnrk */}
        <Route path={'/event'} element={<EventComponent />}/>
        <Route path={'/axios'} element={<AxiosComponent />}/>
      </Routes>
    </BrowserRouter>
  )
}



// import React, {useState, useEffect } from "react"; 
// import axios from "axios";
// import './App.css';


// function App() {
//   const [text, setText] = useState([]);

//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/todos')
//     .then(function(res) {
//       setText(res.data);
//       console.log(res);
//       console.log(res.data);
//     }).catch((error) => {
//       console.log(error);
//     })
//   }, [])

  
//   return (
//     <>
//       <div>
//       {text.map((el) => {
//         return <div key={el.id}>{el.id}</div>
//       })}
//       </div>
//     </>
//   );
  
// }

// export default App;

