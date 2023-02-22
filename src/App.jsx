import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Attendance from './components/Attendance'
import Show from './components/Show'


function App() {
  const [data, setData] = useState(null)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home setdata={setData}/>} />

      <Route path='/attendance' element={<Attendance data={data}/>} />
      <Route path='/show' element={<Show data={data}/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
