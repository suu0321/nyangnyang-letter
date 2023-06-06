import { Route, Routes } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import LoginNavigation from "./LoginNavigation";

const RootNavigation = () => {
  const token = true;

  return (
    <Routes>
      <Route
        path="*"
        element={token ? <MainNavigation /> : <LoginNavigation />}
      />
    </Routes>
  );
};

export default RootNavigation;
