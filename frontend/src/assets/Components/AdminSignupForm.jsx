import { useState } from "react";
import { Link } from "react-router-dom";

const AdminSignupForm = ({ onSubmit }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
    venueName: "",
    venueDescription: "",
    venueImages: [],
    location: "",
    payment: "",
  });
  const [passwordError, setPasswordError] = useState("");
  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear validation error when user types in the field
    setValidationErrors({
      ...validationErrors,
      [e.target.name]: "",
    });
  };

  const handleNext = () => {
    if (step === 1) {
      // Validate step 1 inputs
      if (!validateStep1()) return;
      setStep(step + 1);
    } else {
      // Validate step 2 inputs
      if (!validateStep2()) return;
      if (formData.password1 !== formData.password2) {
        setPasswordError("Passwords do not match");
      } else {
        setPasswordError("");
        setStep(step + 1);
      }
    }
  };

  const validateStep1 = () => {
    const errors = {};
    // Validate step 1 inputs
    if (formData.username.trim() === "") {
      errors.username = "Username is required";
    }
    if (formData.email.trim() === "") {
      errors.email = "Email is required";
    }
    if (formData.password1.trim() === "") {
      errors.password1 = "Password is required";
    }
    if (formData.password2.trim() === "") {
      errors.password2 = "Confirm password is required";
    }
    if (formData.password1 !== formData.password2) {
      setPasswordError("Passwords do not match");
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateStep2 = () => {
    const errors = {};
    // Validate step 2 inputs
    if (formData.venueName.trim() === "") {
      errors.venueName = "Venue name is required";
    }
    if (formData.venueDescription.trim() === "") {
      errors.venueDescription = "Venue description is required";
    }
    if (formData.venueImages.length === 0) {
      errors.venueImages = "Venue images are required";
    }
    if (formData.location.trim() === "") {
      errors.location = "Location is required";
    }
    if (formData.payment.trim() === "") {
      errors.payment = "Payment is required";
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate all inputs before submitting
    if (!validateStep1() || !validateStep2()) return;
    onSubmit(formData);
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="w-full max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-lg sm:p-8 md:p-10 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            {step === 1 ? "Admin Sign Up - Step 1" : "Admin Sign Up - Step 2"}
          </h5>
          {step === 1 && (
            <>
              <div className="p-2">
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
                  className={`input-field ${
                    validationErrors.username
                      ? "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  }`}
                  placeholder="Your Username"
                  required
                />
                {validationErrors.username && (
                  <p className="text-red-500 text-sm">
                    {validationErrors.username}
                  </p>
                )}
              </div>
              <div className="p-2">
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
                  className={`input-field ${
                    validationErrors.email
                      ? "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  }`}
                  placeholder="name@company.com"
                  required
                />
                {validationErrors.email && (
                  <p className="text-red-500 text-sm">
                    {validationErrors.email}
                  </p>
                )}
              </div>
              <div className="p-2">
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
                  className={`input-field ${
                    validationErrors.password1
                      ? "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  }`}
                  placeholder="••••••••"
                  required
                />
                {validationErrors.password1 && (
                  <p className="text-red-500 text-sm">
                    {validationErrors.password1}
                  </p>
                )}
              </div>
              <div className="p-2">
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
                  className={`input-field ${
                    validationErrors.password2
                      ? "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  }`}
                  placeholder="••••••••"
                  required
                />
                {validationErrors.password2 && (
                  <p className="text-red-500 text-sm">
                    {validationErrors.password2}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={handleNext}
                className="w-full text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2"
              >
                Next
              </button>
            </>
          )}
          {step === 2 && (
            <>
              <div className="p-2">
                <label
                  htmlFor="venueName"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Venue Name
                </label>
                <input
                  type="text"
                  name="venueName"
                  id="venueName"
                  value={formData.venueName}
                  onChange={handleChange}
                  className={`input-field ${
                    validationErrors.venueName
                      ? "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  }`}
                  placeholder="Venue Name"
                  required
                />
                {validationErrors.venueName && (
                  <p className="text-red-500 text-sm">
                    {validationErrors.venueName}
                  </p>
                )}
              </div>
              <div className="p-2">
                <label
                  htmlFor="venueDescription"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Venue Description
                </label>
                <textarea
                  name="venueDescription"
                  value={formData.venueDescription}
                  onChange={handleChange}
                  className={`input-field ${
                    validationErrors.venueDescription
                      ? "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  }`}
                  placeholder="Venue Description"
                  required
                ></textarea>
                {validationErrors.venueDescription && (
                  <p className="text-red-500 text-sm">
                    {validationErrors.venueDescription}
                  </p>
                )}
              </div>
              <div className="p-2">
                <label
                  htmlFor="venueImages"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Venue Images
                </label>
                <input
                  type="file"
                  name="venueImages"
                  accept="image/*"
                  multiple
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      venueImages: [...e.target.files],
                    })
                  }
                  className={`input-field ${
                    validationErrors.venueImages
                      ? "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  }`}
                  required
                />
                {validationErrors.venueImages && (
                  <p className="text-red-500 text-sm">
                    {validationErrors.venueImages}
                  </p>
                )}
              </div>
              <div className="p-2">
                <label
                  htmlFor="location"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className={`input-field ${
                    validationErrors.location
                      ? "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  }`}
                  placeholder="Location"
                  required
                />
                {validationErrors.location && (
                  <p className="text-red-500 text-sm">
                    {validationErrors.location}
                  </p>
                )}
              </div>
              <div className="p-2">
                <label
                  htmlFor="payment"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Payment
                </label>
                <input
                  type="text"
                  name="payment"
                  value={formData.payment}
                  onChange={handleChange}
                  className={`input-field ${
                    validationErrors.payment
                      ? "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  }`}
                  placeholder="Payment"
                  required
                />
                {validationErrors.payment && (
                  <p className="text-red-500 text-sm">
                    {validationErrors.payment}
                  </p>
                )}
              </div>
              <p className="text-red-500 text-sm">{passwordError}</p>
              <button
                type="submit"
                className="w-full text-white bg-black hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2"
              >
                Submit
              </button>
            </>
          )}
          {/* Additional elements */}
          <div>
            <Link
              to="/adminlogin"
              className="text-sm font-medium text-blue-500 dark:text-gray-300 mt-4"
            >
              Already have an account? Login here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminSignupForm;
