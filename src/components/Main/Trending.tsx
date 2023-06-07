import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import TrendingItem from "./TrendingItem";

export default function Trending() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="text-gray-600 container px-5 py-12 mx-auto flex flex-wrap -m-4">
            <div className="flex flex-wrap -m-4">
              <TrendingItem rank={1} />
              <TrendingItem rank={2} />
              <TrendingItem rank={3} />
              <TrendingItem rank={4} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-gray-600 body-font container px-5 py-12 mx-auto flex flex-wrap -m-4">
            <div className="flex flex-wrap -m-4">
              <TrendingItem rank={5} />
              <TrendingItem rank={6} />
              <TrendingItem rank={7} />
              <TrendingItem rank={8} />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
