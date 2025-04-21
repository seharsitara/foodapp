"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { supabase } from '../supabase/supabase';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/authContext';

export default function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const {signUp}=useAuth();
  const router = useRouter();

  const onSubmit = async (data) => {
    setLoading(true);
    setMessage("");

    try {
      const { data: user, error } = await signUp({
         email:data.email,
        password:data.password,
    });
      if (error) throw error;
       setMessage("Signup successful! Please check your email to confirm your account.");
      router.push("/");
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen bg-gray-800 flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-96 flex flex-col text-white px-10 py-6 rounded-lg bg-slate-500 shadow-lg">
        <h1 className="text-2xl text-center mb-4 text-black">Sign Up</h1>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className="w-full bg-white border-0 outline-0 rounded-sm p-2 text-black mt-1"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
          <input
            id="password"
            type="password"
            {...register('password', {
              required: "Password is required",
              minLength: { value: 6, message: "Password must be at least 6 characters long." },
            })}
            className="w-full bg-white border-0 outline-0 rounded-sm p-2 text-black mt-1"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>

        

        <div className="flex justify-center items-center w-full my-4 rounded-lg bg-green-700 border-2 border-green-800">
          <button disabled={loading} className="p-3 text-white">
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </div>

        {message && (
          <p className={`mt-4 ${message.includes('success') ? "text-green-600" : "text-red-600"}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
