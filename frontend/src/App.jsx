import { useState } from "react";
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log(isLoggedIn)
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage isLoggedIn={isLoggedIn}/>} />
        <Route path="/contact" element={<ContactPage isLoggedIn={isLoggedIn}/>} />
        <Route path="/login" element={<LoginForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/venue/:title" element={<VenueView isLoggedIn={isLoggedIn} />} />
        <Route path="/venuelist" element={<VenueList isLoggedIn={isLoggedIn}/>}></Route>
        <Route path="/profile" element={<UserProfile />}></Route>
        <Route path="/userbookings" element={<BookingPage />}></Route>
        <Route path="/adminview" element={<AdminView />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
