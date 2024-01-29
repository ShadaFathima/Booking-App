import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./assets/MainPage";
import ContactPage from "./assets/ContactPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
