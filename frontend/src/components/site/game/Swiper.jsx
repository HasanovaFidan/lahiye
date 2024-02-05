import React from 'react';
// Import Swiper React components
import { Swiper as ReactSwiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Swiperrs = () => {
  return (
    <>
<div className='top'>
<ReactSwiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{
          clickable: true,
          
        }}
        modules={[Pagination]}
        loop={true} 
        className="mySwiper"
      >
        <SwiperSlide className='saw'>
          <Link to={"/home"} >  <img src="https://cdn.gamenotebaku.az/logos_img/131/7/gamenote_img_59_1702713140.png.webp" alt="" /></Link>
        </SwiperSlide>
        <SwiperSlide className='sdw'>
         <Link to={"/aksesuar"}>   <img src="https://cdn.gamenotebaku.az/ERAUploads/slider/ERA_CMS_IMG_42_1686911550.jpg" alt="" /></Link>
        </SwiperSlide >
        <SwiperSlide className='sdw'>
         <Link to={"/akseuar"}> <img src="https://cdn.gamenotebaku.az/logos_img/131/9/gamenote_img_43_1702713252.png.webp" alt="" /></Link>
        </SwiperSlide>
        <SwiperSlide className='saw'>
         <Link to={"/home"}>   <img src="https://cdn.gamenotebaku.az/logos_img/131/1/gamenote_img_87_1702713030.png.webp" alt="" /></Link>
        </SwiperSlide>
        
  
      </ReactSwiper>
</div>
    </>
  );
};

export default Swiperrs;
