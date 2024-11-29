import React from 'react'
import Header from '../../Components/Header/Header'
import Hpsec1 from '../../Components/HomepageSec1/Hpsec1'
import './Hompage.scss'
import Payattention from '../../Components/Carousel/Carousel'
import ShoppingTools from '../../Components/ShoppingTools/ShoppingTools'
import Footer from '../../Components/Footer/Footer'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
  const navigate=useNavigate()
  return (
 <>
    <Header/>
    <Hpsec1/>
    <div className="payattention-text">
      <h2 className="pa-h2">Diqqət mərkəzində</h2>  
      <p className="pa-p">Mercedes-Benz-dən ən son yenilikləri kəşf edin.</p>
       </div>
   <Payattention className="carusel-color" span={[""]} text={[""]} images={["https://images.netdirector.co.uk/gforces-auto/image/upload/w_531,h_708,q_auto,c_fill,f_auto,fl_lossy/auto-client/56764dc5e46774c15c30fc3d83028916/concept.png","https://images.netdirector.co.uk/gforces-auto/image/upload/w_539,h_719,dpr_2.0,q_auto,c_fill,f_auto,fl_lossy/auto-client/85824aaa7ea37edf5840f6e6380effa5/int.png","https://images.netdirector.co.uk/gforces-auto/image/upload/w_539,h_719,dpr_2.0,q_auto,c_fill,f_auto,fl_lossy/auto-client/d143f6504135a4fcadc86f50834d273c/manufaktur.png","https://images.netdirector.co.uk/gforces-auto/image/upload/w_539,h_719,dpr_2.0,q_auto,c_fill,f_auto,fl_lossy/auto-client/c9da82dece49a4bc5bfac158a717aa91/definingclas.png","https://images.netdirector.co.uk/gforces-auto/image/upload/w_539,h_719,dpr_2.0,q_auto,c_fill,f_auto,fl_lossy/auto-client/fc040730a77d12e40f7e33295903d2fe/eqesuvv.png","https://images.netdirector.co.uk/gforces-auto/image/upload/w_539,h_719,dpr_2.0,q_auto,c_fill,f_auto,fl_lossy/auto-client/0ed628ab0a3f62ab8787ddf10ff496d8/carousel_2_3_2_2.jpg","https://images.netdirector.co.uk/gforces-auto/image/upload/w_539,h_719,dpr_2.0,q_auto,c_fill,f_auto,fl_lossy/auto-client/7fc80bf8d2b85adabe0837e5853d5062/12_side_ecirgbv2.jpg","https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_crop,f_auto,fl_lossy,x_126,y_0,w_917,h_1223/w_1078,h_1438,c_fill/auto-client/1a4390619a7c03082ebcf39b164bca8c/mercedes_benz_concept_cars_eq_landingpage_concept_car_maybach_coupe_2176x1224_04_2022.jpg","https://images.netdirector.co.uk/gforces-auto/image/upload/w_539,h_719,dpr_2.0,q_auto,c_fill,f_auto,fl_lossy/auto-client/3d667337b812825263dc5f2613b8c00b/showcasing_innovations_2_homebanner_home_banner_mobile_2x1_1534x767px.jpg","https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_crop,f_auto,fl_lossy,x_948,y_0,w_1151,h_1535/w_1078,h_1438,c_fill/auto-client/3049a6057892e4ba0f97b35aec9090d6/mercedes_benz_c_class_w206_comfort_drivingdynamic_2730x1536_02_2021.jpg"]}/>
   <h2 className="pa-h2">Alış-veriş alətləri</h2> 
 <ShoppingTools/>
 <h2  onClick={()=>navigate("/Haqqımızda")} className="pa-h2">Haqqımızda</h2> 
 <p className="hp-p1">“Avtokapital-Azərbaycan” MMC – Mercedes-Benz Group AG-nin Mercedes-Benz markalı avtomobilləri üzrə Azərbaycandakı Rəsmi Nümayəndəliyi.</p>
 <p className="hp-p2">Bizim məqsədimiz – şirkətin müştərilərinə qayğı göstərmək, ən yüksək səviyyəli xidməti təmin etmək, habelə şirkətə istedadlı mütəxəssisləri cəlb etmək, müştərilərin maraqlarına uyğun olaraq, kollektiv yaradıcılıq potensialının həyata keçirilməsinə imkan yaratmaq.</p>
 <button onClick={()=>navigate("/Haqqımızda")} className="hp-btn">Haqqımızda</button>
<Footer/>
 </>
  )
}

export default Homepage
