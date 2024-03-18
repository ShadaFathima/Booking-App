import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./assets/MainPage";
import ContactPage from "./assets/ContactPage";
import LoginForm from "./assets/Components/Login/LoginForm";
import Signup from "./assets/Components/Signup";
import VenueView from "./assets/Components/VenueView";
import VenueList from "./assets/Components/VenueList";
import UserProfile from "./assets/Components/UserProfile";
import BookingPage from "./assets/Components/UserBooking";
import AdminView from "./assets/Components/AdminView";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/venue" element={<VenueView />}></Route>
        <Route path="/venuelist" element={<VenueList />}></Route>
        <Route path="/profile" element={<UserProfile />}></Route>
        <Route path="/userbookings" element={<BookingPage />}></Route>
        <Route path="/adminview" element={<AdminView />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
