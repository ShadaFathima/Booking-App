import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const AdminSignupForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image1: null,
    image2: null,
    image3: null,
    location: "",
    location_link: "",
    payment_per_hour: "",
    name: "",
    email: "",
    contact: "",
    password1: "",
    password2: "",
  });
  const [fileData, setFileData] = useState({
    image1: null,
    image2: null,
    image3: null,
  });
  const [passwordError, setPasswordError] = useState("");
  const [validationErrors, setValidationErrors] = useState({});
  const [submitError, setSubmitError] = useState("");

  // const csrfToken = 'HYO5wFcXA5VFtT8hFPfwR5sMfBO4JFfaYrMpLv2pG8K6I8XxYSOl3jgbUjodq4Gr';
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFileData({
        ...fileData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]:
          name === "payment_per_hour"
            ? value !== ""
              ? value.toString()
              : ""
            : value,
      });
    }
    // Clear validation error when user types in the field
    setValidationErrors({
      ...validationErrors,
      [name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep1() || !validateStep2()) return;

    const formDataToSend = new FormData();

    // Append form data fields
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    // Append image files
    formDataToSend.append("image1", fileData.image1);
    formDataToSend.append("image2", fileData.image2);
    formDataToSend.append("image3", fileData.image3);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/save_venue/",
        formDataToSend
      );

      if (response.status !== 201) {
        throw new Error("Failed to save venue");
      }

      console.log("Venue saved successfully");
      window.location.href = "/";
    } catch (error) {
      if (error.response && error.response.data) {
        try {
          // Attempt to decode response data using UTF-8
          const decodedData = JSON.stringify(error.response.data);
          console.error("Response data:", decodedData);
        } catch (decodeError) {
          console.error("Error decoding response data:", decodeError);
        }
      }
      setSubmitError("Failed to save venue");
      console.error("Error:", error);
    }
  };

  const handleNext = () => {
    console.log("Current step:", step); // Log the current step
    if (step === 1) {
      // Validate step 1 inputs
      console.log("Validating step 1...");
      if (!validateStep1()) {
        console.log("Step 1 validation failed");
        return;
      }
      console.log("Step 1 validation passed");
      setStep(step + 1);
    } else {
      // Validate step 2 inputs
      console.log("Validating step 2...");
      if (!validateStep2()) {
        console.log("Step 2 validation failed");
        return;
      }
      console.log("Step 2 validation passed");
      if (formData.password1 !== formData.password2) {
        setPasswordError("Passwords do not match");
        console.log("Passwords do not match");
      } else {
        setPasswordError("");
        console.log("Passwords match");
        setStep(step + 1);
      }
    }
  };
  const validateStep1 = () => {
    const errors = {};
    // Validate step 1 inputs
    if (formData.name.trim() === "") {
      errors.name = "Name is required";
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
    if (formData.title.trim() === "") {
      errors.title = "Venue name is required";
    }
    if (formData.description.trim() === "") {
      errors.description = "Venue description is required";
    }
    if (!formData.image1 || !formData.image2 || !formData.image3) {
      errors.venueImages = "Three venue images are required";
    }
    if (formData.location.trim() === "") {
      errors.location = "Location is required";
    }
    if (formData.location_link.trim() === "") {
      errors.location_link = "Location link is required";
    }
    if (formData.payment_per_hour.trim() === "") {
      errors.payment_per_hour = "Payment is required";
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="w-full max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-lg sm:p-8 md:p-10 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            {step === 1 ? "Add venue - Step 1" : "Add venue - Step 2"}
          </h5>
          {step === 1 && (
            <>
              <div className="p-2">
                <label
                  htmlFor="name"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`input-field ${
                    validationErrors.name
                      ? "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  }`}
                  placeholder="Your Username"
                  required
                />
                {validationErrors.name && (
                  <p className="text-red-500 text-sm">
                    {validationErrors.name}
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
                  htmlFor="title"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Venue Name
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={formData.title}
                  onChange={handleChange}
                  className={`input-field ${
                    validationErrors.title
                      ? "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  }`}
                  placeholder="Venue Name"
                  required
                />
                {validationErrors.title && (
                  <p className="text-red-500 text-sm">
                    {validationErrors.title}
                  </p>
                )}
              </div>
              <div className="p-2">
                <label
                  htmlFor="description"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Venue Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className={`input-field ${
                    validationErrors.description
                      ? "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  }`}
                  placeholder="Venue Description"
                  required
                ></textarea>
                {validationErrors.description && (
                  <p className="text-red-500 text-sm">
                    {validationErrors.description}
                  </p>
                )}
              </div>
              <div className="p-2">
                <label
                  htmlFor="image1"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Venue Image 1
                </label>
                <input
                  type="file"
                  name="image1"
                  accept="image/*"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      image1: e.target.files[0],
                    })
                  }
                  required
                />
                {/* Add similar fields for venueImage2 and venueImage3 */}
              </div>
              <div className="p-2">
                <label
                  htmlFor="image2"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Venue Image 2
                </label>
                <input
                  type="file"
                  name="image2"
                  accept="image/*"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      image2: e.target.files[0],
                    })
                  }
                  required
                />
              </div>
              <div className="p-2">
                <label
                  htmlFor="image3"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Venue Image 3
                </label>
                <input
                  type="file"
                  name="image3"
                  accept="image/*"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      image3: e.target.files[0],
                    })
                  }
                  required
                />
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
                  htmlFor="location_link"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Location Link
                </label>
                <input
                  type="url"
                  name="location_link"
                  id="location_link"
                  value={formData.location_link}
                  onChange={handleChange}
                  className={`input-field ${
                    validationErrors.location_link
                      ? "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  }`}
                  placeholder="Location Link"
                  required
                />
                {validationErrors.location_link && (
                  <p className="text-red-500 text-sm">
                    {validationErrors.location_link}
                  </p>
                )}
              </div>
              <div className="p-2">
                <label
                  htmlFor="payment_per_hour"
                  className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Payment
                </label>
                <input
                  type="text"
                  name="payment_per_hour"
                  value={formData.payment_per_hour}
                  onChange={handleChange}
                  className={`input-field ${
                    validationErrors.payment_per_hour
                      ? "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      : "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  }`}
                  placeholder="payment_per_hour"
                  required
                />
                {validationErrors.payment_per_hour && (
                  <p className="text-red-500 text-sm">
                    {validationErrors.payment_per_hour}
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
              to="adminlogin/"
              className="text-sm font-medium text-blue-500 dark:text-gray-300 mt-4"
            >
              Already have an account? Login here
            </Link>
          </div>
        </form>
        {submitError && <p>{submitError}</p>}
      </div>
    </div>
  );
};

export default AdminSignupForm;
