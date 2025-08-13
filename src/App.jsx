import { useState } from 'react'
import Navbar from './components/navbar'
import Todo from './components/todo'
import './App.css'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Todo/>
    <Footer/>
    </>
  )
}

export default App
