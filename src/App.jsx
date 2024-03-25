import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import { Home } from "./components/Home";
import { Admin } from "./components/Admin";
import { Dashboard } from "./components/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Footer from "./common/Footer";

import { AboutUs } from "./pages/LandingPage/AboutUs";
import { Ebooks } from "./pages/Ebooks";
import { Notification } from "./common/Notification";
import ShowBookDetail from "./components/ShowBookDetail";
import { AddBooks } from "./components/Admindashboard/AddBooks";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard/addbooks" element={<AddBooks />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/aboutus" element={<AboutUs />} />
        <Route path="/home/:id" element={<ShowBookDetail />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/ebooks" element={<Ebooks />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/notifications" element={<Notification />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
