"use client";
import { createContext,useContext ,useState,useEffect } from "react";
import React from 'react'
import { supabase } from "@/lib/supabase/supabase";
import SignUp from "@/lib/auth/signup";

const AuthContext=createContext();

export function AuthProvider({children}) {
  const [user,setUser]=useState(null);
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
   /* const session=supabase.auth.session();
    setUser(session?.user ?? null);
    setLoading(false);*/
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    /*const { data:listener }=supabase.auth.onAuthStateChange(
    async (event,session)=>{
      setUser(session?.user ?? null);
      setLoading(false);

    }
    );
    return ()=>{
      listener?.subscription();
 }
  }, []);*/
  const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
    setUser(session?.user ?? null);
    setLoading(false);
  });

  return () => subscription.unsubscribe();
}, []);

  const value={
    signUp: async({email,password})=>{
      const {data,error}=await supabase.auth.signUp({
        email,
        password
      })
      return { user: data?.user, error };
      }
,
     signIn: async({email,password})=>{
        const {data,error}=await supabase.auth.signInWithPassword({
          email,
          password
        })
        return { user: data?.user, error };
        }
        ,
     signInWithProvider: async(provider)=>{
          const {data,error}=await supabase.auth.signInWithOAuth({provider})
          return { user: data?.user, error };
          }
          ,
     signOut: async()=>{
          await supabase.auth.signUp();
            }
            ,
            user,
            loading,
    };

    return <AuthContext.Provider
      value={value}>
       {children}
    </AuthContext.Provider>
  }
   export function useAuth(){
    return useContext(AuthContext)
   }
