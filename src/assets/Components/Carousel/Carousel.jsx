import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Carousel.scss'; 
import { Pagination } from 'swiper/modules';

const Payattention = ({ images, text, note }) => {
  return (
    <div className="payattention-container">
      <Swiper
        slidesPerView={3.5}
        centeredSlides={false}
        spaceBetween={0}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          1200: {
            slidesPerView: 3.5,
          },
          960: {
            slidesPerView: 2.5,
          },
          600: {
            slidesPerView: 2, 
          },
          300: {
            slidesPerView: 1, 
          },
        }}
      >
        {images.map((item, index) => (
          <SwiperSlide key={index} className="Pa-slide">
            <div className="Pa-content">
              <div className="Pa-carousel">
                <img className="Pa-carousel" src={item} alt="carousel" />
              </div>
              <h4 className="Pa-carousel-h4">{text}</h4>
              <span className="Pa-carousel-span">{note}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Payattention;
