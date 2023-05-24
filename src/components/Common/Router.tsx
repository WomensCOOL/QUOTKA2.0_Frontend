import { BrowserRouter, Route, Routes } from "react-router-dom";

import styled from "styled-components";
import tw from "twin.macro";

import Error404 from "../../pages/Error404";
import Main from "../../pages/Main";

const TopSectionContainer = styled.div`
  ${tw`
		w-full
		flex
		h-screen
		relative
	`}
`;

export default function Router(){
  return (
    <TopSectionContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </TopSectionContainer>
  );
};

