import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./assets/MainPage";
import ContactPage from "./assets/ContactPage";
import LoginForm from "./assets/Components/Login/LoginForm";
import Signup from "./assets/Components/Signup";
import VenueView from "./assets/Components/VenueView";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/venue" element={<VenueView />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
