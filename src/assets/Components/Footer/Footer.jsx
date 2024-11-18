import React from 'react'
import './Footer.scss'
import { useNavigate } from 'react-router-dom'
    const Footer = () => {
      const navigate= useNavigate()
        const scrollToTop = () => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',  // Smooth scroll
            });
          };
        return (
          <footer>
              <div className="footer-top" onClick={scrollToTop}>
      <i className="fa-solid fa-chevron-up"></i>
      <p className="ft-p">Yuxarı</p>
    </div>
            < div className="footer-Main">
            <img  className="footer-logo-img1"src="https://d2638j3z8ek976.cloudfront.net/b1678f49515e0085804255bb3746863dd165e690/1726752299/images/mb-star-svg.svg" alt="" />

              <div className="footer-properity">
                <div className="footer-sirket">
                  <h3>Alıcılar üçün</h3>
                  <ul>
                    <li>
                      <a href="">Test drayva yazılmaq</a>
                    </li>
                    <li>
                      <a onClick={()=>navigate("/Mövcud-təkliflər")}  href="">Mövcud təkliflər</a>
                    </li>
                    <li>
                      <a  onClick={()=>navigate("/Showroom")} href="">Showroom siyahısı</a>
                    </li>
                   
                  </ul>
                </div>
                <div className="footer-musteri">
                  <h3>Sahiblər üçün</h3>
                  <ul>
                    <li>
                      <a href="">Servisə yazılmaq</a>
                    </li>
                    <li>
                      <a href="">Aksessuarlar</a>
                    </li>
                    <li>
                      <a href="">Həyat tərz kolleksiyası</a>
                    </li>
                    <li>
                      <a  onClick={()=>navigate("/Servis-paketler")} href="">Servis paketler</a>
                    </li>
                    <li>
                      <a  onClick={()=>navigate("/Orjinal-hisseler")} href="">Orjinal hissələr</a>
                    </li>
                    <li>
                      <a href="">Təlimat Kitabçası</a>
                    </li>
                    
                  </ul>
                </div>
              </div>
              <div className="footer-contact">
                <div className="f-elaqe">
                  <h3>Əlaqə</h3>
                  <div className="f-elaqe-prop">
                   
                  
                    
                   <span className="f-elaqe" onClick={()=>navigate("/Bizimlə-əlaqə")}>Bizimlə Əlaqə</span>
                  
                  </div>
                  <hr></hr>
                </div>
                <div className="f-socialmedia">
                  <h3>Bizi izləyin</h3>
                  <div className="f-social-icons">
                 <a href="https://www.facebook.com/MercedesBenzAzerbaijan/?locale=az_AZ"> <i class="fa-brands fa-facebook"></i></a>
                <a href="https://www.instagram.com/mercedesbenzaz/">  <i class="fa-brands fa-instagram"></i></a>
                 <a href="https://www.youtube.com/channel/UClj0L8WZrVydk5xKOscI6-A"> <i class="fa-brands fa-youtube"></i></a>
                 <a href="https://www.mercedesamgf1.com/partners/whatsapp"> <i class="fa-brands fa-whatsapp"></i></a>
                 <a href="https://www.tiktok.com/@mercedesbenz"> <i class="fa-brands fa-tiktok"></i></a>
                <a href="https://az.linkedin.com/in/mercedes-benz-azerbaijan-90607795">  <i class="fa-brands fa-linkedin"></i></a>
                 <a href="https://x.com/mercedesbenz"> <i class="fa-brands fa-twitter"></i></a>
                  </div>
                 
                </div>
              </div>
            </div>
            <div className="footer-extra">
           
              <div className="f-extra-txt"> © Mercedes-Benz Cars Azerbaijan 2024. Bütün hüquqlar qorunur
              </div>
             <div className="f-extra-nav">
                <nav>
                    <ul>
                        <li><a href="" onClick={()=>navigate("/sert&&qaydalar")}>Şərtlər və qaydalar</a></li>
                        <li><a href="" onClick={()=>navigate("/kuki-siyaseti")}> Kuki Siyasəti</a></li>
                        <li><a href="" onClick={()=>navigate("/Məlumatların-Mühafizəsi")}> Məlumatların Mühafizəsi</a></li>
                    </ul>
                </nav>
             </div>
            </div>
          </footer>
        );
      };
export default Footer
