import React from 'react'
import './Servispaketler.scss'
import Bigintro from '../../Components/Bigintro/Bigintro'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import ShoppingTools from '../../Components/ShoppingTools/ShoppingTools'
const Servispaketler = () => {
  return (
    <div>
        <Header/>
        <Bigintro  text={["Mercedes-Benz Servis paketləri"]}image={["https://images.netdirector.co.uk/gforces-auto/image/upload/w_1308,h_595,dpr_2.0,q_auto,c_fill,f_auto,fl_lossy/auto-client/a21bcf827e28d527736e454fb7ead498/gsp_pc506250.jpg"]}/>
   <ShoppingTools/>
   <Footer/>
    </div>
  )
}

export default Servispaketler