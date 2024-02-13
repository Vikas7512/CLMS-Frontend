import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import { Home } from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/login" element={<SignIn />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
