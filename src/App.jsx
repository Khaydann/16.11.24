import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' // Add this import
import Homepage from './assets/Pages/Hompage/Homepage' 
import Kuki from './assets/Pages/Kuki/Kuki'
import Condition from './assets/Pages/Condition and rules/Condition'
import Infosec from './assets/Pages/Info Security/Infosec'
import Elaqe from './assets/Pages/Bizimlə-əlaqə/Elaqe'


const App = () => {
  return (
    <Router>  {/* This will wrap the Routes */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sert & qaydalar" element={<Condition />} />
        <Route path="/kuki siyaseti" element={<Kuki/>} />
        <Route path="/Məlumatların-Mühafizəsi" element={<Infosec/>} />
        <Route path="/Bizimlə-əlaqə" element={<Elaqe/>} />
      </Routes>
    </Router>
  )
}

export default App
