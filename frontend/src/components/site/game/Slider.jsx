import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

const Slider = () => (
    <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={{
            nextEl: false,
            prevEl: false,
        }}
        pagination={{
            clickable: true,
            
        }}
        modules={[EffectFade, Navigation, Pagination]}
        loop={true}
        className="mySw"
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
    >
        <SwiperSlide className='deneme'>
            <img  src="https://cdn.gamenotebaku.az/ERAUploads/slider/gamenote_img_13_1704803415.jpg.webp" class="no-dark-mode" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide className='deneme'>
            <img  src="https://cdn.gamenotebaku.az/ERAUploads/slider/ERA_CMS_IMG_84_1698931212.png" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide className='deneme'>
            <img  src="https://cdn.gamenotebaku.az/ERAUploads/slider/gamenote_img_58_1702996934.png.webp" alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide className='deneme'>
            <img style={{"width":"100%","height":"400px"}}  src="https://cdn.gamenotebaku.az/ERAUploads/slider/gamenote_img_6_1707123645.png.webp" alt="Slide 4" />
        </SwiperSlide>
        <SwiperSlide className='deneme'>
            <img   src="https://cdn.gamenotebaku.az/ERAUploads/slider/gamenote_img_95_1700728207.png.webp" alt="Slide 5" />
        </SwiperSlide>
        <SwiperSlide  className='deneme'>
            <img src="https://cdn.gamenotebaku.az/ERAUploads/slider/ERA_CMS_IMG_42_1686911550.jpg" alt="Slide 6" />
        </SwiperSlide>
        <SwiperSlide   className='deneme'>
            <img src="https://cdn.gamenotebaku.az/logos_img/131/7/gamenote_img_59_1702713140.png.webp" alt="Slide 7" />
        </SwiperSlide>
    </Swiper>
);

export default Slider;
