import { BrowserRouter, Route, Routes } from "react-router-dom";

import styled from "styled-components";
import tw from "twin.macro";

import Error404 from "../../pages/Error404";
import Main from "../../pages/Main";
import Header from "./Header";
import MainHeader from "../Main/MainHeader";

const TopSectionContainer = styled.div`
  ${tw`
		w-full
		h-screen
    flex-col
		relative
	`}
`;

export default function Router() {
  return (
    <BrowserRouter>
      <TopSectionContainer>
        <Header />
        <MainHeader />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </TopSectionContainer>
    </BrowserRouter>
  );
}
