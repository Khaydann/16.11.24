import React from 'react'
import './Hpsec1.scss'
import { useNavigate } from 'react-router-dom'
const Hpsec1 = () => {
  const navigate=useNavigate()
  return (
    <div className='hpsec1-main'>
  
<div className="hpsec1-photo"><img src="https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_fill,f_auto,fl_lossy,w_1366,h_621/auto-client/fae0b0ffe8a7042a015b8174b882e3c5/mercedes_benz_cle_coupe_c236_exterior_media_gallery_frontdesign_2176x1224_05_2023.jpg" alt="" /></div>
<div className="hpsec1-text">  <h4 className="h4-hpsec1">Sizin üçün yaradılıb</h4>
<span className="hpsec1-span">Yeni CLE Coupé</span>
<div className="hpsec1-buttons">
  <button onClick={()=>navigate("/Haqqımızda")} className="hpsec1-btn1">Haqqımızda</button>
  <button  onClick={()=>navigate("/Bizimlə-əlaqə")} className="hpsec1-btn2">Əlaqə</button>
</div>
</div>

    </div>
  )
}

export default Hpsec1
