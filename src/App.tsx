import "./App.css";
import { RecoilRoot } from "recoil";

import tw from "twin.macro";
import Router from "./components/Common/Router";

export default function App() {
  return (
    <RecoilRoot>
      <AppContainer>
        <Router />
      </AppContainer>
    </RecoilRoot>
  );
}

const AppContainer = tw.div`
  flex
  w-full
  h-full
`;
