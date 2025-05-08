"use client"
import { useContext, createContext,useState } from "react";

const UserContext=createContext();

export function UserProvider({children}){
 const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    address:"",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    city:"",
    address:"",
  });


  return(
    <UserContext.Provider value={{
      dataForm,
      setDataForm,
      error,
      setError
    }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUserContext(){
  const context=useContext(UserContext);
  return context;
}