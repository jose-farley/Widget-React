import { Route, Routes, BrowserRouter } from 'react-router-dom'
import style from './App.module.css'
import { DriverInfo } from './components/DriverInformation/DriverInfo'
import { DriverOnHisWay } from './components/DriverOnTheWay/DriverOnTheWay'
import { DriverPage } from './pages/DriverPage'

function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<DriverPage/>}/>
      </Routes>
    </BrowserRouter>
     
  )
}

export default App
