import React from 'react'
import './Hpsec1.scss'
import { useNavigate } from 'react-router-dom'
const Hpsec1 = () => {
  const navigate=useNavigate()
  return (
    <div className='hpsec1-main'>
  
<div className="hpsec1-photo">  <video
        className="video w-full h-full object-cover"
        autoPlay
        loop
        muted
        suppressHydrationWarning
      >
        <source src="/Aydan'sMc.mp4" type="video/mp4" />
      </video></div>
<div className="hpsec1-text">  <h4 className="h4-hpsec1">Sizin üçün yaradılıb</h4>

<div className="hpsec1-buttons">
  <button onClick={()=>navigate("/Haqqımızda")} className="hpsec1-btn1"><p>Haqqımızda</p></button>
  <button  onClick={()=>navigate("/Bizimlə-əlaqə")} className="hpsec1-btn2"><p>Əlaqə</p></button>
</div>
</div>

    </div>
  )
}

export default Hpsec1
