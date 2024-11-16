import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import './Carousel.scss';
import { Pagination } from 'swiper/modules';

const Payattention = ({ images, text, note }) => {
  return (
    <>
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
    </>
  );
};

export default Payattention;
