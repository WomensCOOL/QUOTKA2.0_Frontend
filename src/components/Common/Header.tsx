import { LogoIc, HomeIc, UserIc, PencilIc } from "../../asset/icon/index";
import styled from "styled-components";
import tw from "twin.macro";
import { Link, useMatch } from "react-router-dom";

export default function Header() {
  const homeMatch = useMatch("/");
  const userMatch = useMatch("/user");

  return (
    <header className="text-gray-600 body-font">
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
        </NavWrapper>
        <PencilBtn>
          <PencilIcon />
        </PencilBtn>
      </HeaderWrapper>
    </header>
  );
}

const HeaderWrapper = styled.div`
  ${tw`
    container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center
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
  ${tw`
    w-5
    h-5
    mr-5
    cursor-pointer
  `}
  fill: ${({ active }) => (active ? "#fff" : "#d3d3d3")};
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
  background-color: rgb(252 211 77);
`;

const PencilIcon = styled(PencilIc)`
  ${tw`
    w-5
    h-5
    m-1.5
  `}
`;
