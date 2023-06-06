import { Route, Routes } from "react-router-dom";
import Main from "@pages/Main/Main";

const MainNavigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
};

export default MainNavigation;
