import "./App.css";

import tw from "twin.macro";
import Router from "./components/Common/Router";

export default function App() {
  return (
    <AppContainer>
      <Router />
    </AppContainer>
  );
}

const AppContainer = tw.div`
  flex
  w-full
  h-full
`;
