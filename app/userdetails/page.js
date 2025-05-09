"use client";
import { useState } from "react";
import React from "react";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/context/userContext";
import { userDetailsAaction } from "@/hooks/userDetailsAction";
import { useAuth } from "@/context/authContext";

export default function UserDetails() {
  const router=useRouter();
  const { dataForm,setDataForm,error,setError}=useUserContext();
  const {DeliveryDetails} = userDetailsAaction();
  const {user}=useAuth()

  const handleSubmit = async (e) => {
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

    const allowedCities = ["lahore", "islamabad", "karachi"];
    if (!allowedCities.includes(dataForm.city.toLowerCase())) {
      newErrors.city = "Please enter a valid city"
      }
   
    if (!dataForm.address || dataForm.address.length < 10) {
      newErrors.address = "Please enter a valid address.";
    }
    
    // If errors exist, update the error state and stop submission
    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }


    
    try {
      // 2. Submit to Supabase
      const formWithEmail = {
        ...dataForm,
        email: user?.email, // Ensure Supabase auth email is used
      };
      const response = await DeliveryDetails(formWithEmail);
      console.log("User details submitted:", response);
    // If no errors, clear errors and show success alert
    setError({});
    alert("Your details have been saved successfully! ✅");
    console.log("Form submitted:", dataForm);
    
    // Reset form
    setDataForm({
      name: "",
      email: "",
      phone: "",
      city: "",
      address:"",
    });
  
  // localStorage.setItem("deliveryDetails",JSON.stringify(dataForm));
    router.push("/menu");
  }catch(error){
    console.log("Error submitting details:", error);
  }
}

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
        <h1 className="text-red-700 mt-14 text-center font-sans font-bold md:text-4xl text-2xl">
          Delivery Details
        </h1>
      </div>
      <div className="w-full md:px-12 my-10">
       
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
         <div className="px-16 pt-10">
          <label htmlFor="name" className="text-md font-semibold">
            City
          </label>
          <input
            type="text"
            name="city"
            value={dataForm.city}
            onChange={handleChange}
            placeholder="* Enter Your City"
            className="w-full border-b pt-4 focus:ring-0 focus:outline-none p-2"
          />
          {error.city && <p className="pt-2 text-red-500">{error.city}</p>}
        </div>
        <div className="px-16 pt-10">
          <label htmlFor="name" className="text-md font-semibold">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={dataForm.address}
            onChange={handleChange}
            placeholder="* Enter Your Address"
            className="w-full border-b pt-4 focus:ring-0 focus:outline-none p-2"
          />
          {error.address && <p className="pt-2 text-red-500">{error.address}</p>}
        </div>
      <div className="flex justify-center items-center my-16">
        <button
          type="submit"
          className="bg-yellow-600 p-4 text-xl font-medium rounded-lg"
        >
          Confirm Payment
        </button>
      </div>
      </div>
    </form>
  );
}

