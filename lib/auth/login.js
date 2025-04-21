"use client";
import React, { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { supabase } from '../supabase/supabase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/context/authContext';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();
  const {signIn}=useAuth();
  const {signInWithProvider}=useAuth();
  const [showPassword,setShowPassword]=useState(false);
   const emailValue=watch('email');
  

  const onSubmit = async (data) => {
    setLoading(true);
    setMessage("");

    try {
      const { error } = await signIn({
      email:data.email.trim().toLowerCase(),
      password:data.password,
    });


    console.log("Email:", data.email, "Password:", data.password);


      if (error) {
        if (error.message === 'Email not confirmed') {
          setMessage('Please confirm your email address before logging in.');
        } else {
          throw error;
        }
      } else {
        router.push('/');
      }
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setMessage('');

    try {
      const { error } = await signInWithProvider('google', {
        options: {
          redirectTo: `${window.location.origin}/auth/callback`
        }
      });
      if (error) throw error;
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const resendConfirmationEmail = async () => {
    if (!emailValue) return;
    setLoading(true);
    setMessage('');

    try {
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email: emailValue,
      });

      if (error) throw error;
      setMessage('Confirmation email sent! Check your inbox.');
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-900">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-slate-700 p-8 rounded-lg shadow-md w-96"
      >
        <h1 className="text-2xl text-center mb-4 text-white">Login</h1>

        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-white">
            Email
          </label>
          <input
            id="email"
            type="email"
            autoFocus
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            className="w-full bg-white border-0 outline-0 rounded-sm p-2 text-black mt-1"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-white">
            Password
          </label>
          <input
           id="password"
            type={showPassword? "text" : "password"}
             {...register('password',{
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters long.',
              },
            })}
            className="w-full bg-white border-0 outline-0 rounded-sm p-2 text-black mt-1"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>
        <button type='button' onClick={()=> setShowPassword(!showPassword)}>
        {showPassword ? "hide" : "show"}
        </button>

        <div className="flex justify-center items-center w-full bg-green-600 my-4 rounded-lg">
          <button disabled={loading} className="p-3 text-white">
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </div>

        {message === 'Please confirm your email address before logging in.' && (
          <button
            onClick={() => resendConfirmationEmail(emailValue)}
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-4"
          >
            Resend Confirmation Email
          </button>
        )}

        {message && (
          <p
            className={`mt-4 ${
              message.includes('success') ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {message}
          </p>
        )}

        <p className="text-center text-white mt-4">
          Don't have an account?{' '}
          <Link href="/signup" className="text-blue-400 underline">
            Sign Up
          </Link>
        </p>

        {/* Divider */}
        <div className="flex items-center justify-center mt-6 text-white">
          <div className="border-t border-white flex-grow"></div>
          <span className="mx-4 text-white text-sm">or</span>
          <div className="border-t border-white flex-grow"></div>
        </div>

        {/* Google Login */}
        <div className="flex justify-center">
          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="mt-6 w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            {loading ? 'Redirecting...' : 'Sign in with Google'}
          </button>
        </div>
      </form>
    </div>
  );
}
