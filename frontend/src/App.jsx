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
import AdminSignupForm from "./assets/Components/AdminSignupForm";
import AdminLoginForm from "./assets/Components/AdminLoginForm";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log(isLoggedIn);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route
          path="/contact"
          element={<ContactPage isLoggedIn={isLoggedIn} />}
        />
        <Route
          path="/login"
          element={
            <LoginForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        ></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/venue/:title"
          element={
            <VenueView isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route
          path="/venuelist"
          element={
            <VenueList isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <UserProfile
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        ></Route>
        <Route path="/userbookings" element={<BookingPage />}></Route>
        <Route path="/adminview" element={<AdminView />}></Route>
        <Route path="/adminsignup" element={<AdminSignupForm />}></Route>
        <Route path="/adminlogin" element={<AdminLoginForm />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
