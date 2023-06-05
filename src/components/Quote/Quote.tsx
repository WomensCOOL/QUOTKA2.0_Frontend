import styled from "styled-components";
import tw from "twin.macro";

import { Link } from "react-router-dom";
import ReactItem from "./ReactItem";
import ProfileImg from "./ProfileImg";

export default function Quote() {

  return (
    <QuoteWrapper>
      <QuoteContainer>
     <ProfileImg/>
        <TextWrapper>
          <UserLink to="/user">얏호</UserLink>
          <FollowBtn>팔로우</FollowBtn>
          <QuoteText>
            맛난음식을 얏호얏호 맛나게 얏호 오이를 고추장에 찍어 냠냠
            맛도리탕이다! 얏호얏호
          </QuoteText>
          <SpeakerWrapper>
            <Speaker>작자 미상</Speaker>
            <TagContainer></TagContainer>
            <Tags>#작자미상</Tags>
            <Tags>#어디서들음</Tags>
          </SpeakerWrapper>

          <FeedbackWrapper>
            <ReactionBtn>
              반응 <ReactNum>123</ReactNum> 개
            </ReactionBtn>
            <ReactItem/>
          </FeedbackWrapper>
        </TextWrapper>
      </QuoteContainer>
    </QuoteWrapper>
  );
}

const QuoteWrapper = styled.div`
  ${tw`
     text-white pl-16 pr-16 pt-6 max-w-3xl `}
`;

const QuoteContainer = styled.div`
  ${tw`flex gap-4 md:gap-6 text-white`}
`;

const TextWrapper = styled.div`
  ${tw`rounded-sm bg-[#212121] p-5 pt-4
`}
`;

const UserLink = styled(Link)`
  ${tw`font-semibold transition duration-100 text-xs`}
`;

const FollowBtn = styled.span`
  ${tw`py-1 px-1 text-[#FCD34D] text-xs font-semibold `}
`;

const QuoteText = styled.div`
  ${tw`sm:text-xl text-xl font-serif font-semibold mt-6 mb-4`}
`;

const SpeakerWrapper = styled.div`
  ${tw`flex items-center flex-wrap pb-6 mb-4 border-b-[0.1rem] border-gray-600 mt-auto w-full`}
`;

const Speaker = styled.div`
  ${tw`inline-flex items-center`}
`;

const TagContainer = styled.div`
  ${tw`flex items-center flex-wrap pt-4 mt-auto w-full`}
`;

const Tags = styled.span`
  ${tw`text-gray-400  text-sm pr-2`}
`;

const FeedbackWrapper = styled.div`
  ${tw`flex items-center flex-wrap  mt-auto w-full`}
`;

const ReactionBtn = styled.button`
  ${tw`border-gray-400 text-gray-400 border p-1 pr-4 pl-4 rounded-[30px] inline-flex items-center`}
`;

const ReactNum = styled.span`
  ${tw`text-white font-semibold`}
`;

