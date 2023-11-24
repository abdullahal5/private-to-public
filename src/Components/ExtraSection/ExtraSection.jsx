import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ExtraSection = () => {
  const { data: review = [] } = useQuery({
    queryKey: ["review"],
    queryFn: async () => {
      const res = await axios.get("/new.json");
      return res.data;
    },
  });
  // console.log(review);
  return (
    <div>
      <section>
        <h1 className="text-3xl my-10 text-center">What's Advantage?</h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
          }}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {review.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-slate-50 p-10">
                <img className="w-96" src={item?.image} alt="" />
                <p className="text-xl font-semibold text-center">
                  {item?.title}
                </p>
                <p className="text-center">{item?.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default ExtraSection;
