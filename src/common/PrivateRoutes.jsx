import { Route, Routes, useNavigate } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import { AddBooks } from "../components/Admindashboard/AddBooks";
import { Home } from "../components/Home";
import ShowBookDetail from "../components/ShowBookDetail";
import { Admin } from "../components/Admin";
import { Ebooks } from "../pages/Ebooks";
import { AboutUs } from "../pages/LandingPage/AboutUs";
import { Notification } from "./Notification";
import { Dashboard } from "../components/Dashboard";
import { selectUserDetails } from "../store/auth/selector";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const PrivateRoutes = () => {
  const userData = useSelector(selectUserDetails);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!userData.isAdmin) {
      navigate("/login");
    }
  };

  useEffect(() => {
    handleLogin();
  }, [userData]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard/addbooks" element={<AddBooks />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:id" element={<ShowBookDetail />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/ebooks" element={<Ebooks />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/notifications" element={<Notification />} />
      </Routes>
    </div>
  );
};

export default PrivateRoutes;
