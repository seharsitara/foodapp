import { supabase } from "@/lib/supabase/supabase";
import {useCallback } from "react";
import { v4 as uuidv4 } from 'uuid';

const isValidUUID = (str) => {
  const regex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
  return regex.test(str);
};


export function useCartAction(){

 

  const newItemId = uuidv4();
  console.log("Generated UUID:", newItemId);

  
const fetchCartItems = useCallback ( async(userId) =>{
   console.log("Fetching cart items for user:", userId);
   const {data , error}= await supabase.from('cart_items').select('*').eq('user_id', userId).order('created_at', { ascending: false });

   if(error) throw error;
   console.log("Fetched cart items:", data);
   return data;
   
},[]);

/*const fetchCartItems = useCallback(async (userId) => {
     const { data, error } = await supabase
      .from('cart_items')
      .select(`
         id,
         menu_item_id,
         quantity,
         added_at,
         menu_items (
           name,
           price_pkr,
           image_url
         )
       `).eq('user_id', userId).order('added_at', { ascending: false });
      if (error) throw error;
      return data;
    }, []);*/
    const addToCart = useCallback(async (item) => {
      const { data: { user }, error: userError } = await supabase.auth.getUser();
  
  if (userError || !user) {
    console.error('User not logged in. Cannot add to cart.');
    return;
  }

  const userId = user.id;  // ✅ This is your correct userId
      
      console.log('Logged in userId:', userId);

      const { data, error } = await supabase
        .from('cart_items')
        .insert([
          {
            user_id: userId,
            item_id: item.id,
            name: item.name,
            price: item.price,
            quantity: 1,
            image_url: item.image?.src || item.image,    // if it's a URL or you upload images
            created_at: new Date(),
          }
        ])
        .select();   // <<< 👈 this tells Supabase to return the inserted row
    
      if (error) {
        console.error('Error adding to cart:', error)
      } else {
        console.log('Added to cart:', data)
        console.log(userId)
      }
    }, []);
    

/*const addToCart = useCallback(async(userId , items)=>{
  const {error}=await supabase.from('cart_items').insert({
    /*user_id: userId,
    item_name: items.name,
    item_price: items.price,
    quantity: 1,
    image_url: items.image_url,*/
    /*user_id:       userId,
    menu_item_id:  items.id,   // ✅ matches table
     quantity:      1

  });
  if(error)throw error;
},[]);*/




const updateCartItems = useCallback(async(itemId,updateitems)=>{
  console.log("updateCartItems called with:", itemId, updateitems);
  const {error} = await supabase.from('cart_items').update(updateitems).eq('item_id', itemId);
  if(error) {
    console.log("Error updating cart item:", error);
    throw error;
  }
},[]);

const removeFromCart = useCallback( async (itemId)=>{
  const {error}= await supabase.from('cart_items').delete().eq('item_id' , itemId )

  if (error) throw error;

},[]);


return {
  fetchCartItems,
  addToCart,
  updateCartItems,
  removeFromCart,
};
}

