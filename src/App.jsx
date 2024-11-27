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

import Vclass from './assets/Pages/Vclass/Vclass'
import Wishlist from './assets/Pages/Wishlist/Wishlist'
import Eqesedan from './assets/Pages/Eqesedan/Eqesedan'
import Aclasshatchback from './assets/Pages/AClassHatchback/Aclasshatchback'
import Classsedan from './assets/Pages/C-Class-Sedan/Classsedan'
import MaybachSclass from './assets/Pages/Mercedes-MaybachS-Class/MaybachSclass'
import EQB from './assets/Pages/EQB/EQB'
import EQA from './assets/Pages/EQA/EQA'
import GLS from './assets/Pages/GLS/GLS'
import Gclass from './assets/Pages/G-class/Gclass'
import Cla from './assets/Pages/CLA/Cla'
import Clecabriolet from './assets/Pages/CLECabriolet/Clecabriolet'
import Slroadster from './assets/Pages/SLRoadster/Slroadster'
import Amggtccoupe from './assets/Pages/AMGGTCoupe/Amggtccoupe'
import Basket from './assets/Pages/Basket/Basket'
import Header from './assets/Components/Header/Header'
import Footer from './assets/Components/Footer/Footer'



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
        <Route path="/Aksessuarlar" element={<Aksessuar/>} />
        <Route path="/Homepage" element={<Homepage/>} />
        <Route path="/Wishlist" element={<Wishlist/>} />
        <Route path="/b" element={<Vclass/>} />
        <Route path="/Eqesedan" element={<Eqesedan/>} />
        <Route path="/A-class-hatchback" element={<Aclasshatchback/>} />
        <Route path="/C-Class-Sedan" element={<Classsedan/>} />
        <Route path="/Mercedes-Maybach-S-Class" element={<MaybachSclass/>} />
        <Route path="/EQB" element={<EQB/>} />
        <Route path="/EQA" element={<EQA/>} />
        <Route path="/GLS" element={<GLS/>} />
        <Route path="/G-class" element={<Gclass/>} />
           <Route path="/CLA" element={<Cla/>} />
           <Route path="/CLE-Cabriolet" element={<Clecabriolet/>} />
           <Route path="/SL-Roadster" element={<Slroadster/>} />
           <Route path="/AMG-GT-Coupé" element={<Amggtccoupe/>} />
           <Route path="/Basket" element={<Basket/>} />
           <Route path="/F" element={<Footer/>} />
      </Routes>
    </Router>
  )
}

export default App
