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
        <h2 className="pa-h2">Sürprizlər olmadan şəffaf təmir xərcləri.</h2>
          <p className="hp-p1">
          Mercedes-Benz Xidmət Paketləri vasitəsilə biz bütün planlaşdırılmış texniki xidmət prosedurlarını əhatə edir və xidmət xərclərinizi şəffaf edirik. Paketin müddətindən və yürüş məsafəsindən asılı olaraq, bütün daxil edilmiş xidmətləri əhatə edən sabit qiymət mövcuddur. Beləliklə, siz şəffaf təmir xərclərinə arxalana və xoşagəlməz sürprizlərdən qaça bilərsiniz.</p>
    <div className="orjinal-hisseler-main">
  {/* Birinci div */}
  <div className="oh-section">
    <div className="oh-text">
      <h3>Premium Servis</h3>
      <p>Mercedes-Benzin Azərbaycandakı Rəsmi Nümayəndəliyi olan «Avtokapital-Azərbaycan» şirkəti Mercedes-Benz markalı avtomobillərin xidməti üzrə xüsusi qiymətləri təklif edir.

Mercedes-Benz markalı avtomobillər üçün nəzərdə tutulan xidmət hər zaman öz unikallığı ilə seçilib. Müasir avadanlıq, cəld təmir, peşəkar işçi kollektivi. Mercedes-Benz markalı avtomobillərin servisi üçün işlənib hazırlanmış loyallığa dəstək proqramlarında müştəriyə qayğı məsələsi hər zaman əsas yeri tutub və tutacaq. «Premium-servis» proqramı – avtomobillər üçün nəzərdə tutulan bütün ehtiyat hissələrinə - 20% qədər, habelə rəsmi servisdə xidmət olunma şərti ilə, bütün xidmət növlərinə - 20% endirimin tətbiq edilməsinə şərait yaradır.</p>
    </div>
    <div className="oh-image">
      <img 
        src="https://images.netdirector.co.uk/gforces-auto/image/upload/w_742,h_417,q_auto,c_fill,f_auto,fl_lossy/auto-client/fd5aeb1c476f56598e359418b520692b/gsp_pc505811.jpg" 
        alt="Orijinal ehtiyat hissəsi" 
      />
    </div>
  </div>

  {/* İkinci div */}
  <div className="oh-section reverse">
    <div className="oh-image">
      <img 
        src="https://images.netdirector.co.uk/gforces-auto/image/upload/w_636,h_477,q_auto,c_fill,f_auto,fl_lossy/auto-client/1a76b31fc8616d4f76be82f760b9421e/gsp_pc508368.jpg" 
        alt="Orijinal ehtiyat hissəsi" 
      />
    </div>
    <div className="oh-text">
      <h3>Loyal Tarif</h3>
      <p>Azərbaycanda Mercedes-Benz-in Baş nümayəndəliyi – “AvtoKapital-Azərbaycan” rəsmi diler şəbəkəsində yaşı 2 ildən 4 ilə qədər olan Mercedes-Benz avtomobillərinin sahibləri üçün “Loyal Tarif”in tətbiq edildiyini elan edir. “Loyal Tarif” avtomobillərə xidmət Mercedes-Benz-in rəsmi servis mərkəzlərində xidmət göstərilməsi şərtilə orijinal ehtiyat hissələrinə 10%-ə qədər xüsusi endirimlər, həmçinin göstəriləcək xidmətlərə 10% endirim nəzərdə tutur.
      </p>
    </div>
  </div>
</div>

<h2 className="oh-h2">Orijinal görünür: saxta hissələrin olmasına diqqət edin.</h2>  
      <p className="oh-p">Mercedes-Benz xidmət partnyorunuz sizi saxta məhsullardan qoruyur. Saxta hissələr çox vaxt aldadıcı dərəcədə orijinal görünür, hətta ekspertlər belə onları ilk baxışdan asanlıqla müəyyən edə bilmirlər.</p>
       
   <ShoppingTools/>
   <Footer/>
    </div>
  )
}

export default Servispaketler