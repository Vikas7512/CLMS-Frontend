import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./common/Footer";
import PrivateRoutes from "./common/PrivateRoutes";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<PrivateRoutes />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
