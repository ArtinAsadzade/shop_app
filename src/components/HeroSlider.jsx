import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Slider() {
  const [sliderImages] = useState([
    { id: 1, src: "/Slider/slide1.gif" },
    { id: 2, src: "/Slider/1.jpg" },
    { id: 3, src: "/Slider/4.jpg" },
  ]);

  const progressCircle = useRef(null);
  const onAutoplayTimeLeft = (progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
  };

  return (
    <div className="container w-full my-10 m-auto cursor-pointer hidden lg:block">
      <Swiper
        spaceBetween={30}
        centeredSlides
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper h-[350px]"
      >
        {sliderImages.map((item) => (
          <SwiperSlide key={item.id}>
            <img className="rounded-md h-full md:rounded-3xl md:px-2 object-cover" key={item.id} src={item.src} alt="banner" />
          </SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}></svg>
        </div>
      </Swiper>
    </div>
  );
}
