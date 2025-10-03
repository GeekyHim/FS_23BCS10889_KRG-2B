// useState ------------------------------------------------------------------------------------------------------------------
// import { useState } from 'react'
import './App.css'

//const { useState, useEffect } = require("react");

// function App() {
//   const [counter, setCounter] = useState(0);
//   function Increment (){
//     setCounter(counter+1)
//   }
//   function Decrement(){
//     setCounter(counter-1)
//   }
//   return (
//     <>
//     <button onClick={Increment}> Increment </button>
//     <button onClick={Decrement}> Decrement </button>
//     <h3>Counter value is : {counter}</h3>
//     </>
    
//   )
// }

// export default App




// UseEffect ------------------------------------------------------------------------------------------------------------------


// import { useEffect, useState } from 'react'
// import './App.css'

// function App() {
//   const [counter, setCounter] = useState(0);
//   function Increment (){
//     setCounter(counter+1)
//   }
//   function Decrement(){
//     setCounter(counter-1)
//   }
//   function sayThis(){
//     console.log("COUNT UPDATED")
//   }
  
//   useEffect(sayThis,[counter]);
  
//   return (
//     <>
//     <button onClick={Increment}> Increment </button>
//     <button onClick={Decrement}> Decrement </button>
//     <h3>Counter value is : {counter}</h3>
//     </>
    
//   )
// }

// export default App


// UseEffect TASK ------------------------------------------------------------------------------------------------------------------

import { useState , useEffect} from 'react'

function App(){
  const [count, setCount] = useState(0);

  useEffect(()=>{
    setTimeout(()=>{
      console.log(count)
      setCount((count) => { return count + 1})
    },1000)
  });

  return (<h1>i have rendered {count} times!</h1>)
}

export default App