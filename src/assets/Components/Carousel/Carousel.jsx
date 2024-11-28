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
            slidesPerView: 3.5, // Shows 2 slides per view for screens 960px and below
          },
          960: {
            slidesPerView: 2.5, // Shows 2 slides per view for screens 960px and below
          },
          600: {
            slidesPerView: 2, // Shows 1 slide per view for screens 600px and below
          },
          300: {
            slidesPerView: 1, // Shows 1 slide per view for screens 600px and below
          },
        }}
      >
        {images.map((item, index) => (
          <SwiperSlide key={index} className="Pa-slide">
            <div className="Pa-content">
              <img className="Pa-carousel" src={item} alt="carousel" />
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
