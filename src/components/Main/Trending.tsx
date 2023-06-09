import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import styled from "styled-components";
import tw from "twin.macro";

import { Navigation } from "swiper";
import TrendingItem from "./TrendingItem";

export default function Trending() {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
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
  );
}

const TrendingWrapper = styled.div`
  ${tw`
text-gray-600 px-5 py-12 mx-auto flex flex-wrap m-6`}
`;

const TrendingBox = styled.div`
  ${tw`flex flex-wrap -m-4`}
`;
