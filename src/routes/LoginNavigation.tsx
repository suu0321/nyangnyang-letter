import { Route, Routes } from "react-router-dom";
import Login from "@pages/Login/Login";

const LoginNavigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default LoginNavigation;
