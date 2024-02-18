import { useState } from "react";
import "./PaymentForm.css";

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear validation error on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform client-side validation
    const validationErrors = {};
    if (!formData.cardNumber || !/^\d{16}$/.test(formData.cardNumber)) {
      validationErrors.cardNumber = "Invalid card number";
    }
    if (
      !formData.expirationDate ||
      !/^\d{2}\/\d{4}$/.test(formData.expirationDate)
    ) {
      validationErrors.expirationDate = "Invalid expiration date (MM/YYYY)";
    }
    if (!formData.cvv || !/^\d{3}$/.test(formData.cvv)) {
      validationErrors.cvv = "Invalid CVV";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Mock payment processing logic
      console.log("Payment submitted:", formData);
      alert("Payment Successful!");
    }
  };

  return (
    <div className="payment-form-container">
      <h2>Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Card Number:
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder="Enter card number"
          />
          {errors.cardNumber && (
            <span className="error">{errors.cardNumber}</span>
          )}
        </label>
        <label>
          Expiration Date:
          <input
            type="text"
            name="expirationDate"
            value={formData.expirationDate}
            onChange={handleChange}
            placeholder="MM/YYYY"
          />
          {errors.expirationDate && (
            <span className="error">{errors.expirationDate}</span>
          )}
        </label>
        <label>
          CVV:
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            placeholder="Enter CVV"
          />
          {errors.cvv && <span className="error">{errors.cvv}</span>}
        </label>
        <label>
          Billing Address:
          <textarea
            name="billingAddress"
            value={formData.billingAddress}
            onChange={handleChange}
            placeholder="Enter billing address"
          />
        </label>
        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
};

export default PaymentForm;
