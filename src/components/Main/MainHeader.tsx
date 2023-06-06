import styled from "styled-components";
import tw from "twin.macro";
import { Link, useMatch } from "react-router-dom";

export default function MainHeader() {
  const trendingMatch = useMatch("/");
  const quoteMatch = useMatch("/quote");
  const textMatch = useMatch("/text");

  return (
    <HeaderWrapper>
      <NavWrapper>
        <NavUl>
          <NavLi to="/" active={!!trendingMatch}>
            요즘 뜨는
          </NavLi>
          <NavLi to="/quote" active={!!quoteMatch}>
            인용구
          </NavLi>
          <NavLi to="/text" active={!!textMatch}>
            텍스트
          </NavLi>
        </NavUl>
      </NavWrapper>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  ${tw`
flex justify-center pl-16 pr-16 pt-1 sticky top-[4.5rem] bg-black z-10`}
`;

const NavWrapper = styled.nav`
  ${tw`
self-center top-0 w-full flex float-left justify-between items-center text-white `}
`;

const NavUl = styled.ul`
  ${tw`md:flex items-center text-[18px] font-semibold pr-10 space-x-1`}
`;

const NavLi = styled(Link)<{ active: boolean }>`
  ${tw`py-3 rounded-sm px-5`}

  &:hover {
    background-color: ${({ active }) => (active ? "#000" : "#212121")};
  }

  border-bottom: ${({ active }) =>
    active ? "2px solid #FCD34D" : "2px solid #000"};
  border-color: ${({ active }) => (active ? "#FCD34D" : "#000")};
  color: ${({ active }) => (active ? "#FCD34D" : "#fff")};
`;
