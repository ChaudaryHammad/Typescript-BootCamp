
import { useState } from 'react'
import './App.css'
import Box from './components/Box'

function App() {
  const [count,setCount] = useState(0)
  console.log(count);

  return (
    <>
   <h1>Typescrip</h1>
   <Box heading="heading 1" count={count} func1={()=>{
  setCount(count+1) 
   }} />
    </>
  )
}

export default App
