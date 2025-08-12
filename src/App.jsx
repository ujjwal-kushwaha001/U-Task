import { useState } from 'react'
import Navbar from './components/navbar'
import Todo from './components/todo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Todo/>
    </>
  )
}

export default App
