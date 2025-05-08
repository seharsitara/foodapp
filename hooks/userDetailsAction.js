import { supabase } from "@/lib/supabase/supabase";
import { useCallback } from "react";

export function userDetailsAaction(){
   const DeliveryDetails= useCallback( async (dataForm)=>{
    console.log("Submitting data:", dataForm); 
    const {data,error}= await supabase.from('delivery_details').insert([dataForm]
    );
    if(error) throw error;
    return data;

   },[])

   return {
     DeliveryDetails
   };
}