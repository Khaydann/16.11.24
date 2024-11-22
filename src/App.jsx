import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' // Add this import
import Homepage from './assets/Pages/Hompage/Homepage' 
import Kuki from './assets/Pages/Kuki/Kuki'
import Condition from './assets/Pages/Condition and rules/Condition'
import Infosec from './assets/Pages/Info Security/Infosec'
import Elaqe from './assets/Pages/Bizimlə-əlaqə/Elaqe'
import Haqqimizda from './assets/Pages/Haqqimizda/Haqqimizda'
import Showroom from './assets/Pages/Showroom/Showroom'
import Absheron from './assets/Pages/Absheron/Absheron'
import Babek from './assets/Pages/Babek/Babek'
import Servispaketler from './assets/Pages/Servispaketler/Servispaketler'
import Orjinalhisseler from './assets/Pages/Orjinalhisseler/Orjinalhisseler'
import Login from './assets/Components/Login/Login'
import Signup from './assets/Components/Signup/Signup'
import Aksessuar from './assets/Pages/Ehtiyathisseleri/Aksessuar'


const App = () => {
  return (
    <Router>  {/* This will wrap the Routes */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sert&&qaydalar" element={<Condition />} />
        <Route path="/kuki-siyaseti" element={<Kuki/>} />
        <Route path="/Məlumatların-Mühafizəsi" element={<Infosec/>} />
        <Route path="/Bizimlə-əlaqə" element={<Elaqe/>} />
        <Route path="/Haqqımızda" element={<Haqqimizda/>} />
        <Route path="/Showroom" element={<Showroom/>} />
        <Route path="/Absheron-adress" element={<Absheron/>} />
        <Route path="/Babek-adress" element={<Babek/>} />
        <Route path="/Servis-paketler" element={<Servispaketler/>} />
        <Route path="/Orjinal-hisseler" element={<Orjinalhisseler/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/SignUp" element={<Signup/>} />
        <Route path="/Acs" element={<Aksessuar/>} />
      </Routes>
    </Router>
  )
}

export default App
