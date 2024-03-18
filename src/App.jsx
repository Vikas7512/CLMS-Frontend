import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import { Home } from "./components/Home";
import { Admin } from "./components/Admin";
import { Dashboard } from"./components/Dashboard";
import { Bookcard } from "./components/Bookcard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/login" element={<SignIn />}></Route>
        <Route path="/Admin" element={<Admin />}></Route>
        <Route path="/Dashboard" element={<Dashboard />}></Route>
        <Route path="/Bookcard" element={<Bookcard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
