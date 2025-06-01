import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/applicationForm.css"; 

const ApplicationForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    address: "",
    parentName: "",
    parentPhone: "",
    grade: "",
    previousSchool: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    alert("Application submitted!");
    navigate("/applications");
  };

  const handleCancel = () => {
    navigate("/applications");
  };

  return (
    <form className="application-form wide" onSubmit={handleSubmit}>
      <h2>School Admission Form</h2>
      <div className="form-row">
        <div className="form-group">
          <label>First Name</label>
          <input name="firstName" value={form.firstName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input name="lastName" value={form.lastName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Date of Birth</label>
          <input type="date" name="dob" value={form.dob} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <select name="gender" value={form.gender} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Grade Applying For</label>
          <input name="grade" value={form.grade} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Previous School (if any)</label>
          <input name="previousSchool" value={form.previousSchool} onChange={handleChange} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group address-group">
          <label>Address</label>
          <textarea name="address" value={form.address} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Parent/Guardian Name</label>
          <input name="parentName" value={form.parentName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Parent/Guardian Phone</label>
          <input type="tel" name="parentPhone" value={form.parentPhone} onChange={handleChange} required />
        </div>
      </div>
      <div className="form-actions">
        <button type="button" className="cancel-btn" onClick={handleCancel}>Cancel</button>
        <button type="submit" className="submit-btn">Submit Application</button>
      </div>
    </form>
  );
};

export default ApplicationForm;