

import AnimatedRouters from "./router/AnimatedRouters";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/globalStyles";
import { MainContainer } from "./App.styled";


function App() {
  return (
    <MainContainer>
      <GlobalStyles/>
      <BrowserRouter>
        <AnimatedRouters />
      </BrowserRouter>
    </MainContainer>
  );
}

export default App;
