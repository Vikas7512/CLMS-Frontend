import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import { Home } from "./components/Home";
import { Admin } from "./components/Admin";
import { Dashboard } from "./components/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Footer from "./common/Footer";
import Header from "./common/Header";
import { AboutUs } from "./pages/LandingPage/AboutUs";
import { Ebooks } from "./pages/Ebooks";
import { Notification } from "./common/Notification";
import ShowBookDetail from "./components/ShowBookDetail";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:id" element={<ShowBookDetail />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ebooks" element={<Ebooks />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/notifications" element={<Notification />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
