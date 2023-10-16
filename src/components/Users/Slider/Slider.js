// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Pagination,Navigation,Autoplay,Parallax } from "swiper/modules";

import { data } from "./data";
import Overlay from "./Overlay";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <section className="w-full h-[75vh] ">
      <Swiper
         parallax={true}
         grabCursor={true}
         autoplay={{
           delay: 3000,
           disableOnInteraction: false,
         }}
         speed={800}
         loop={true}
         pagination={{
           clickable: true,
         }}
         navigation={true}
        modules={[Pagination, Navigation,Autoplay,Parallax]}
        className="mySwiper w-full h-full"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="w-full h-full relative">
              <img
                src={item.src}
                alt={item.alt}
                height={1920}
                width={1080}
                priority
                className="w-full h-full object-cover"
              />
            <Overlay/>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2] text-white space-y-5">
                <h1
                  data-swiper-parallax="-300%"
                  className="text-8xl font-semibold "
                >
                  {item.headline}
                </h1>
                <p data-swiper-parallax="-500%" className="text-2xl">
                  {item.paragraph}
                </p>
                <div data-swiper-parallax="-600%">
                  <Link href="/product" className=" bg-cyan-600/90 text-cyan-50 text-md px-5 py-3 rounded-xl font text-xl  hover:bg-cyan-500/75 hover:shadow-md hover:shadow-cyan-500/40 duration-700">
                    {item.cta}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
