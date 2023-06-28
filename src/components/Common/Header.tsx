import styled from "styled-components";
import tw from "twin.macro";

import { LogoIc, HomeIc, UserIc, PencilIc } from "../../asset/icon/index";

import { Link, useMatch } from "react-router-dom";

import { useRecoilState } from "recoil";
import { showPopup } from "../../recoil/showPopup";

export default function Header() {
  const [show, setShow] = useRecoilState(showPopup);
  const homeMatch = useMatch("/");
  const userMatch = useMatch("/user");

  function handlePopup() {
    setShow(true);
  }

  return (
    <header className="text-gray-600 body-font sticky top-0 bg-black z-10 pb-3">
      <HeaderWrapper>
        <LogoWrapper to="/">
          <LogoIcon />
        </LogoWrapper>
        <NavWrapper>
          <NavItem to="/" active={!!homeMatch}>
            <NavIcon as={HomeIc} />
          </NavItem>
          <NavItem to="/user" active={!!userMatch}>
            <NavIcon as={UserIc} />
          </NavItem>
          <PencilBtn onClick={handlePopup}>
            <PencilIcon />
          </PencilBtn>
        </NavWrapper>
      </HeaderWrapper>
    </header>
  );
}

const HeaderWrapper = styled.div`
  ${tw`
    container mx-auto flex flex-wrap pt-5 flex-col md:flex-row items-center
  `}
`;

const LogoWrapper = styled(Link)``;

const LogoIcon = styled(LogoIc)`
  ${tw`
    w-9
    h-9
    cursor-pointer
  `}
  fill: #fff;
`;

const NavWrapper = styled.nav`
  ${tw`md:ml-auto flex flex-wrap items-center text-base justify-center`}
`;

const NavItem = styled(Link)<{ active: boolean }>`
  ${({ active }) => (active ? "#fff" : "#d3d3d3")};
`;

const NavIcon = styled.div`
  ${tw`
    w-5
    h-5
    mr-5
    cursor-pointer
  `}
`;

const PencilBtn = styled.button`
  ${tw`
    inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0
  `}
  background-color: #FCD34D;
`;

const PencilIcon = styled(PencilIc)`
  ${tw`
    w-5
    h-5
    m-1.5
  `}
`;
