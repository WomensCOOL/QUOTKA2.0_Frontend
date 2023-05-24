import React from "react";
import "./App.css";

import tw from "twin.macro";
import Router from "./components/Common/Router";

const AppContainer = tw.div`
  flex
  w-full
  h-full

`;

function App() {
  return (
    <AppContainer>
      <Router />
    </AppContainer>
  );
}

export default App;
