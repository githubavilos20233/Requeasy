import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/clearance.css";

function Clearance() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    purpose: "",
    email: "",
    phoneNumber: "",
    idFile: null,
  });

  const [errors, setErrors] = useState({});

  // Handle input change (for text inputs)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, idFile: e.target.files[0] }));
  };

  // Simple validation
  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.purpose.trim()) newErrors.purpose = "Purpose is required";
    if (!formData.idFile) newErrors.idFile = "Valid ID upload is required";
    // Email and phone are optional, but if you want validation, can add here

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Here you would send formData and the file to backend or Firebase Storage
      console.log("Form submitted", formData);
      alert("Request submitted successfully!");
      // Reset form
      setFormData({
        fullName: "",
        address: "",
        purpose: "",
        email: "",
        phoneNumber: "",
        idFile: null,
      });
      setErrors({});
      // Reset file input value manually (because file inputs are read-only controlled)
      e.target.reset();
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="container my-5">
      <button className="btn btn-secondary mb-3" onClick={() => navigate("/")}>
        Go Home
      </button>

      <h2>Barangay Clearance Request</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Full Name *
          </label>
          <input
            type="text"
            className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && (
            <div className="invalid-feedback">{errors.fullName}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address *
          </label>
          <input
            type="text"
            className={`form-control ${errors.address ? "is-invalid" : ""}`}
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && (
            <div className="invalid-feedback">{errors.address}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="purpose" className="form-label">
            Purpose *
          </label>
          <input
            type="text"
            className={`form-control ${errors.purpose ? "is-invalid" : ""}`}
            id="purpose"
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
          />
          {errors.purpose && (
            <div className="invalid-feedback">{errors.purpose}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="idFile" className="form-label">
            Upload Valid ID (Required) *
          </label>
          <input
            type="file"
            accept="image/*,application/pdf"
            className={`form-control ${errors.idFile ? "is-invalid" : ""}`}
            id="idFile"
            name="idFile"
            onChange={handleFileChange}
          />
          {errors.idFile && (
            <div className="invalid-feedback">{errors.idFile}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email (Optional)
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@example.com"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number (Optional)
          </label>
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="09XXXXXXXXX"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit Request
        </button>
      </form>
    </div>
  );
}

export default Clearance;
