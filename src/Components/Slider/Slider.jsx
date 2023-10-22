import { Swiper, SwiperSlide  } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Slider = () => {
    return (

        <div >
            <Swiper
           modules={[Navigation, Pagination, A11y, Autoplay]}
           spaceBetween={0}
           slidesPerView={1}
           navigation={true}
           pagination={{ clickable: true }}
        //    scrollbar={{ draggable: true }}
           autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
            
        >
            <SwiperSlide><img src="https://i.ibb.co/JqCSxzQ/slider-1.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://i.ibb.co/xzz8rQw/slider-2.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://i.ibb.co/cwYXVJH/slider-3.png" alt="" /></SwiperSlide>
            ...
        </Swiper>
        </div>

    );
};

export default Slider;