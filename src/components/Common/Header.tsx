import { LogoIc, HomeIc, UserIc, PencilIc } from "../../asset/icon/index";

import styled from "styled-components";
import tw from "twin.macro";

export default function Header() {
  return (
    <header className="text-gray-600 body-font">
      <HeaderWrapper>
        <LogoIcon />
        <NavWrapper>
          <NavIcon as={HomeIc} />
          <NavIcon as={UserIc} />
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

const LogoIcon = styled(LogoIc)`
  ${tw`
		w-6
    h-6
	`}
`;

const NavWrapper = styled.nav`
  ${tw`md:ml-auto flex flex-wrap items-center text-base justify-center`}
`;

const NavIcon = styled.div`
  ${tw`
  w-5
  h-5
  mr-5
`}
`;

const PencilBtn = styled.button`
  ${tw`
    inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0
  `}
`;

const PencilIcon = styled(PencilIc)`
  ${tw`
		w-5
    h-5
    m-1.5
	`}
`;
