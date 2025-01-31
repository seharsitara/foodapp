"use client";
import { useState } from "react";
import React from "react";

export default function Complaint() {
  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    const newErrors = {};

    if (!dataForm.name || dataForm.name.length <= 3) {
      newErrors.name = "Enter your full name.";
    }

    if (!dataForm.email.includes("@")) {
      newErrors.email = "Please enter a valid email address.";
    }

    const phoneRegex = /^[0-9]{11}$/; // Accepts 11-digit numbers only
    if (!phoneRegex.test(dataForm.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (dataForm.message.trim() === "") {
      newErrors.message = "It cannot be empty.";
    }

    // If errors exist, update the error state and stop submission
    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }

    // If no errors, clear errors and show success alert
    setError({ name: "", email: "", phone: "", message: "" });
    alert("Form submitted successfully!");
    console.log("Form submitted:", dataForm);

    // Reset form
    setDataForm({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update form data state
    setDataForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear errors for the current field when the user starts typing
    setError((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1 className="text-red-700 mt-10 text-center font-sans font-bold md:text-4xl text-2xl">
          Complaint Form
        </h1>
      </div>
      <div className="w-full md:px-12">
        <h1 className="font-bold mt-10 px-16 pt-6 text-2xl">Tell us about yourself</h1>
        <div className="px-16 pt-10">
          <label htmlFor="name" className="text-md font-semibold">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={dataForm.name}
            onChange={handleChange}
            placeholder="* Enter your Full Name"
            className="w-full border-b pt-4 focus:ring-0 focus:outline-none p-2"
          />
          {error.name && <p className="pt-2 text-red-500">{error.name}</p>}
        </div>
        <div className="px-16 pt-6">
          <label htmlFor="email" className="text-md font-semibold">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={dataForm.email}
            onChange={handleChange}
            placeholder="* Enter your Email Address"
            className="w-full border-b pt-4 focus:ring-0 focus:outline-none p-2"
          />
          {error.email && <p className="pt-2 text-red-500">{error.email}</p>}
        </div>
        <div className="px-16 pt-6">
          <label htmlFor="phone" className="text-md font-semibold">
            Phone No.
          </label>
          <input
            type="tel"
            name="phone"
            value={dataForm.phone}
            onChange={handleChange}
            placeholder="* Enter your Phone Number"
            className="w-full border-b pt-4 focus:ring-0 focus:outline-none p-2"
          />
          {error.phone && <p className="pt-2 text-red-500">{error.phone}</p>}
        </div>
        <div className="m-5 p-4">
          <h1 className="font-bold px-6 pt-6 text-2xl">Write Your Complaint Here</h1>
        </div>
        <div className="px-16">
          <textarea
            name="message"
            value={dataForm.message}
            onChange={handleChange}
            placeholder="* Have a complaint or issue? Please describe it below so we can assist you..."
            spellCheck={false}
            className="w-full border-b pt-4 focus:ring-0 focus:outline-none p-2"
          />
          {error.message && <p className="pt-2 text-red-500">{error.message}</p>}
        </div>
      
      <div className="flex justify-center items-center my-16">
        <button
          type="submit"
          className="bg-yellow-600 p-4 text-xl font-medium rounded-lg"
        >
          Submit
        </button>
      </div>
      </div>
    </form>
  );
}

