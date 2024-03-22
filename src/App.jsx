import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import { Home } from "./components/Home";
import { Admin } from "./components/Admin";
import { Dashboard } from "./components/Dashboard";
import { Bookcard } from "./components/Bookcard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Footer from "./common/Footer";
import Header from "./common/Header";
import { AboutUs } from "./pages/LandingPage/AboutUs";
import { Ebooks } from "./pages/Ebooks";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/login" element={<SignIn />}></Route>
        <Route path="/Admin" element={<Admin />}></Route>
        <Route path="/Dashboard" element={<Dashboard />}></Route>
        <Route path="/Bookcard" element={<Bookcard />}></Route>
        <Route path="/ebooks" element={<Ebooks />}></Route>
        <Route path="/AboutUs" element={<AboutUs />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
