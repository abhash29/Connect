import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Header } from './Components/Header'
import { Landing } from './Components/Landing'
import { Landing2 } from './Components/Landing2'
import { Room } from './Components/Room'

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/landing2" element={<Landing2 />} />
        <Route path="/room" element={<Room />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
