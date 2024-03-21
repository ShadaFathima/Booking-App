// LoginForm.jsx
/* eslint-disable react/prop-types */
import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginForm = ({setIsLoggedIn}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const [error, setError] = useState(""); // State to store error message

  const handleChange = (e) => { 
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await fetch('http://127.0.0.1:8000/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
        
      });
      const data = await response.json();
      if (data.success) {
        setIsLoggedIn(true);
        navigate('/'); 
        // window.location.href = '/';
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        id="border"
        className="w-full max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-lg sm:p-8 md:p-10 dark:bg-gray-800 dark:border-gray-700"
      >
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Login
          </h3>
          {error && (
            <div className="text-red-500">{error}</div> // Display error message if there's an error
          )}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="username"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
          >
            Login to your account
          </button>
          <div className="flex items-center mt-3">
            <div className="flex-1 border-b border-gray-300 dark:border-gray-600"></div>
            <span className="mx-3 text-sm text-gray-500 dark:text-gray-300">
              or sign in with
            </span>
            <div className="flex-1 border-b border-gray-300 dark:border-gray-600"></div>
          </div>
          <button
            type="button"
            className="w-full text-gray-700 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-blue-800 mt-4"
          >
            Sign in with Google
          </button>
          <div className="text-sm font-medium text-blue-500 dark:text-gray-300 mt-4">
            <Link to="/signup">Create account</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
