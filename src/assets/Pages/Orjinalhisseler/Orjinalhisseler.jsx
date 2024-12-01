import React from 'react'
import './Orjinalhisseler.scss'
import Header from '../../Components/Header/Header'
import Bigintro from '../../Components/Bigintro/Bigintro'
import Footer from '../../Components/Footer/Footer'
import ShoppingTools from '../../Components/ShoppingTools/ShoppingTools'
import Payattention from '../../Components/Carousel/Carousel'
const Orjinalhisseler = () => {
  return (
    <>
    <Header/>
  
    <Bigintro text={["Mercedes-Benz ehtiyat hissələri."]} image={["https://images.netdirector.co.uk/gforces-auto/image/upload/w_1349,h_613,q_auto,c_fill,f_auto,fl_lossy/auto-client/1c64ab68c3ce96213403b5cfc7f71477/img_stage_ersatzteile.jpg"]}/>
    <h2 className="pa-h2">Hər Mercedes-Benz üçün uyğun hissə.</h2>
          <p className="hp-p1">
          İstər köhnə Mercedes modeli üçün əvəzedici hissəyə, istərsə də yeni avtomobil üçün uyğun xidmət hissəsinə ehtiyacınız olmasından asılı olmayaraq, Mercedes-Benz-in hərtərəfli ehtiyat hissələri portfelində hər bir avtomobil və hər büdcə üçün fərdi uyğun seçim var. Əlbəttə ki, bütün hissə xətlərimizlə hər bir hissənin ciddi spesifikasiyalarımıza cavab verdiyinə əmin ola bilərsiniz.
          </p>
    <div className="orjinal-hisseler-main">

  <div className="oh-section">
    <div className="oh-text">
      <h3>Mercedes-Benz orijinal hissələri</h3>
      <p>Baxım və ya köhnəlmiş hissələrin dəyişdirilməsi zamanı Mercedes-Benz-də yalnız sertifikatlı yeni hissələrdən istifadə etmək istərdinizmi? O zaman sizə orijinal Mercedes-Benz hissələrini istifadə etməyi tövsiyə edirik. Onlar avtomobil istehsalçısı kimi Mercedes-Benz-in bütün nou-haularını birləşdirir, sizin avtomobiliniz üçün xüsusi olaraq hazırlanmış və avtomobilinizin digər komponentlərinə optimal şəkildə uyğunlaşdırılmışdır.</p>
    </div>
    <div className="oh-image">
      <img 
        src="https://images.netdirector.co.uk/gforces-auto/image/upload/w_742,h_417,q_auto,c_fill,f_auto,fl_lossy/auto-client/17ce8daa1e7c941002f476d34e743713/img_mod_textmedia_ersatzteile_originalteile.jpg" 
        alt="Orijinal ehtiyat hissəsi" 
      />
    </div>
  </div>


  <div className="oh-section reverse">
    <div className="oh-image">
      <img 
        src="https://images.netdirector.co.uk/gforces-auto/image/upload/w_530,h_530,q_auto,c_fill,f_auto,fl_lossy/auto-client/23c77eadc9497e7536085dda2bd96983/img_mod_textmedia_ersatzteile_tauschteile.jpg" 
        alt="Orijinal ehtiyat hissəsi" 
      />
    </div>
    <div className="oh-text">
      <h3>Mercedes-Benz Orijinal Yenidən Hazırlanmış Ehtiyat hissələri</h3>
      <p>Mercedes-Benz Orijinal Yenidən İstehsal edilmiş Hissələr seriyası bütün ən populyar avtomobil sinifləri üçün - başlanğıc mühərrikindən və sükandan tutmuş mühərrik və elektrik ötürücü sistemlərə qədər geniş çeşiddə ehtiyat hissələri təklif edir. Hər bir hissə ciddi Mercedes-Benz standartlarına uyğun yenidən istehsal, yoxlama və sınaqdan keçir. Nəticə yeni hissənin keyfiyyəti ilə sərfəli qiymətə Orijinal Yenidən İstehsal edilmiş Hissələrdir.</p>
    </div>
  </div>
</div>

    <h2 className="oh-h2">Orijinal görünür: saxta hissələrin olmasına diqqət edin.</h2>  
      <p className="oh-p">Mercedes-Benz xidmət partnyorunuz sizi saxta məhsullardan qoruyur. Saxta hissələr çox vaxt aldadıcı dərəcədə orijinal görünür, hətta ekspertlər belə onları ilk baxışdan asanlıqla müəyyən edə bilmirlər.</p>
       
    <Payattention  images={["https://images.netdirector.co.uk/gforces-auto/image/upload/w_372,h_496,q_auto,c_fill,f_auto,fl_lossy/auto-client/0cdb6cfdd7d6faef94f3b0105683ddf5/img_mod_textmedia_ersatzteile_bremsen.jpg","https://images.netdirector.co.uk/gforces-auto/image/upload/w_372,h_496,q_auto,c_fill,f_auto,fl_lossy/auto-client/1b4777d13f2ec95813d8eb0054305ae9/img_mod_textmedia_ersatzteile_motor_l.jpg","https://images.netdirector.co.uk/gforces-auto/image/upload/w_372,h_496,q_auto,c_fill,f_auto,fl_lossy/auto-client/c18633d18f390baf7ecd3fa70d048ef7/img_mod_bannerteaser_ersatzteile_servicepartner.jpg","https://images.netdirector.co.uk/gforces-auto/image/upload/w_372,h_496,q_auto,c_fill,f_auto,fl_lossy/auto-client/2ce166d45615a978e3d0360eff865446/img_mod_textmedia_ersatzteile_lfilter.jpg","https://images.netdirector.co.uk/gforces-auto/image/upload/w_372,h_496,q_auto,c_fill,f_auto,fl_lossy/auto-client/65c7f58ecc76377edb567f1fa45f1eb1/img_mod_textmedia_ersatzteile_motorluftfilter.jpg"]}/>
 
    <Footer/>
   </>
  )
}

export default Orjinalhisseler