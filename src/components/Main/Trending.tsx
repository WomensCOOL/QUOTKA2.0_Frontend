import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import styled from "styled-components";
import tw from "twin.macro";

import { Navigation } from "swiper";
import TrendingItem from "./TrendingItem";

export default function Trending() {
  return (
    <SwiperWrapper>
      <Swiper
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        modules={[Navigation]}
        className="mySwiper "
      >
        <div className="swiper-button-prev" />
        <div className="swiper-button-next" />
        <SwiperSlide>
          <TrendingWrapper>
            <TrendingBox>
              <TrendingItem rank={1} />
              <TrendingItem rank={2} />
              <TrendingItem rank={3} />
              <TrendingItem rank={4} />
            </TrendingBox>
          </TrendingWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <TrendingWrapper>
            <TrendingBox>
              <TrendingItem rank={5} />
              <TrendingItem rank={6} />
              <TrendingItem rank={7} />
              <TrendingItem rank={8} />
            </TrendingBox>
          </TrendingWrapper>
        </SwiperSlide>
      </Swiper>
    </SwiperWrapper>
  );
}

const SwiperWrapper = styled.div`
  ${tw`
     text-white pl-16 pr-16 pt-6 max-w-3xl cursor-pointer`}

  .swiper-button-prev {
    color: white;
  }

  .swiper-button-next {
    color: white;
  }
`;

const TrendingWrapper = styled.div`
  ${tw`
text-gray-600 px-5 py-4 mx-auto flex flex-wrap `}
`;

const TrendingBox = styled.div`
  ${tw`flex flex-wrap -m-4 `}
`;
