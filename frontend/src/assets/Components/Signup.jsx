import { useState, useEffect } from "react";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });
  const [csrfToken, setCSRFToken] = useState("");

  useEffect(() => {
    async function fetchCSRFToken() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/csrf/", {
          withCredentials: true, // include credentials for CORS requests
        });
        setCSRFToken(response.data.csrfToken);
        console.log(csrfToken);
      } catch (error) {
        console.error("Error fetching CSRF token:", error);
      }
    }
    fetchCSRFToken();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await axios.post(
        "http://127.0.0.1:8000/register/",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": csrfToken, // Include CSRF token in headers
          },
          withCredentials: true, // include credentials for CORS requests
        }
      );
      if (response.data.success) {
        console.log("success");
        window.location.href = "/"; // Redirect to homepage on successful registration
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        id="border"
        className="w-full max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-lg sm:p-8 md:p-10 dark:bg-gray-800 dark:border-gray-700"
      >
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Create an account
          </h5>
          <div>
            <label
              htmlFor="username"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Your Username"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password1"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password1"
              id="password1"
              value={formData.password1}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="••••••••"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password2"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="password2"
              id="password2"
              value={formData.password2}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2"
          >
            Sign Up
          </button>
          {/* Other buttons and links */}
        </form>
      </div>
    </div>
  );
};

export default Signup;
