import React from 'react'
import './Orjinalhisseler.scss'
import Header from '../../Components/Header/Header'
import Bigintro from '../../Components/Bigintro/Bigintro'
import Footer from '../../Components/Footer/Footer'
import Payattention from '../../Components/Carousel/Carousel'
const Orjinalhisseler = () => {
  return (
    <>
    <Header/>
    <Bigintro text={["Mercedes-Benz ehtiyat hissələri."]} image={["https://images.netdirector.co.uk/gforces-auto/image/upload/w_1349,h_613,q_auto,c_fill,f_auto,fl_lossy/auto-client/1c64ab68c3ce96213403b5cfc7f71477/img_stage_ersatzteile.jpg"]}/>
    <h2 className="oh-h2">Orijinal görünür: saxta hissələrin olmasına diqqət edin.</h2>  
      <p className="oh-p">Mercedes-Benz xidmət partnyorunuz sizi saxta məhsullardan qoruyur. Saxta hissələr çox vaxt aldadıcı dərəcədə orijinal görünür, hətta ekspertlər belə onları ilk baxışdan asanlıqla müəyyən edə bilmirlər.</p>
       
    <Payattention  images={["https://images.netdirector.co.uk/gforces-auto/image/upload/w_372,h_496,q_auto,c_fill,f_auto,fl_lossy/auto-client/0cdb6cfdd7d6faef94f3b0105683ddf5/img_mod_textmedia_ersatzteile_bremsen.jpg","https://images.netdirector.co.uk/gforces-auto/image/upload/w_372,h_496,q_auto,c_fill,f_auto,fl_lossy/auto-client/1b4777d13f2ec95813d8eb0054305ae9/img_mod_textmedia_ersatzteile_motor_l.jpg","https://images.netdirector.co.uk/gforces-auto/image/upload/w_372,h_496,q_auto,c_fill,f_auto,fl_lossy/auto-client/c18633d18f390baf7ecd3fa70d048ef7/img_mod_bannerteaser_ersatzteile_servicepartner.jpg","https://images.netdirector.co.uk/gforces-auto/image/upload/w_372,h_496,q_auto,c_fill,f_auto,fl_lossy/auto-client/2ce166d45615a978e3d0360eff865446/img_mod_textmedia_ersatzteile_lfilter.jpg","https://images.netdirector.co.uk/gforces-auto/image/upload/w_372,h_496,q_auto,c_fill,f_auto,fl_lossy/auto-client/65c7f58ecc76377edb567f1fa45f1eb1/img_mod_textmedia_ersatzteile_motorluftfilter.jpg"]}/>
    
    <Footer/>
   </>
  )
}

export default Orjinalhisseler