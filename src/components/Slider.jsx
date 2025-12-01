import "swiper/css";
import { Autoplay } from "swiper/modules"; // import the module
import { Swiper, SwiperSlide } from "swiper/react";
import { assets } from "../assets/assets";


const Slider = () => {
  return (
    <div className="relative z-10 w-full overflow-hidden rounded-4xl">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={false}
        autoplay={{
          delay: 2000, 
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={assets.slider_1}
            alt="Slide 1"
            className="w-full h-full object-cover rounded-xl select-none"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={assets.slider_2}
            alt="Slide 2"
            className="w-full h-full object-cover rounded-xl select-none"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
