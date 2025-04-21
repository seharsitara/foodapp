"use client";
import ImageSlideShow from "@/component/image-slideshow";
import Cards from "@/component/cards";
import {AuthProvider} from "@/context/authContext";
import Login from "@/lib/auth/login";
import { useAuth } from "@/context/authContext";

export default function Home() {
  const {user}=useAuth();
  return (
    <AuthProvider>
    <div>
      {user ? (
       <div className="flex flex-col min-h-screen">
                 <main className="flex-grow">
                 <ImageSlideShow></ImageSlideShow>
                 <Cards></Cards>
                 </main>
               </div>
      ) : (
        <Login />
      )
      }
 
</div>
</AuthProvider>


  );
}

