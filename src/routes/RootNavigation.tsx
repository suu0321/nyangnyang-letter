import styled from "@emotion/styled";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import LoginNavigation from "./LoginNavigation";

const RootNavigation = () => {
  const token = true;

  return (
    <BrowserRouter>
      <Container>
        <Contents>
          <Routes>
            <Route
              path="*"
              element={token ? <MainNavigation /> : <LoginNavigation />}
            />
          </Routes>
        </Contents>
      </Container>
    </BrowserRouter>
  );
};

export default RootNavigation;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Contents = styled.main`
  width: 414px;
  height: 736px;
  border-radius: 30px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  @media screen and (max-width: 414px) {
    width: 100%;
    height: 100%;
  }
`;
