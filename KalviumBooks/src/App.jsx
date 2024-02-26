import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Register from './Components/Register'

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/Register' element={<Register/>} />
        <Route exact path='*' element={<h1>404 Error Page not Found</h1>} />
      </Routes>
    </div>
  )
}

export default App
