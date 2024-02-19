import React from 'react';
import { Swiper as ReactSwiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './xetto.scss';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

const SliderMarka = () => {
  return (
    <>
      <div className='lr'>
        <div className="xetto"></div>
        <h3 className='lazimsiz'>Top brendlər</h3>
        <ReactSwiper
          slidesPerView={5}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          loop={true} 
          className="mySwiper"
        >
          <SwiperSlide className='sonslider'>
            <Link to={"/msibrand"}><img src="https://cdn.gamenotebaku.az/logos_img/130/14/ERA_CMS_IMG_39_1695703917.png" alt="" /></Link>
          </SwiperSlide>
          <SwiperSlide className='sonslider'>
            <Link to={"/acerbrand"}><img src="https://cdn.gamenotebaku.az/logos_img/130/15/ERA_CMS_IMG_77_1695703942.png" alt="" /></Link>
          </SwiperSlide>
          <SwiperSlide className='sonslider'>
            <Link to={"/razerbrand"}><img src="https://cdn.gamenotebaku.az/logos_img/130/16/ERA_CMS_IMG_63_1695704142.png" alt="" /></Link>
          </SwiperSlide>
          <SwiperSlide className='sonslider'>
            <Link to={"/lenovobrand"}><img src="https://cdn.gamenotebaku.az/logos_img/130/17/ERA_CMS_IMG_95_1695704156.png" alt="" /></Link>
          </SwiperSlide>
          <SwiperSlide className='sonslider'>
            <Link to={"/asusbrand"}><img src="https://cdn.gamenotebaku.az/logos_img/130/19/gamenote_img_32_1703264377.png.webp" alt="" /></Link>
          </SwiperSlide>
          <SwiperSlide className='sonslider'>
            <Link to={"/asusbrand"}><img src="https://cdn.gamenotebaku.az/logos_img/130/20/gamenote_img_53_1703264249.png.webp" alt="" /></Link>
          </SwiperSlide>
        </ReactSwiper>
        <div className="xetto"></div>
      </div>
    </>
  );
};

export default SliderMarka;
