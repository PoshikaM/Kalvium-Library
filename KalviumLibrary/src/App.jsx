import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Register from './Components/Register'
import NotFound from './Components/NotFound'

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/Register' element={<Register/>} />
        <Route exact path='*' element={<NotFound/>} />
      </Routes>
    </div>
  )
}

export default App