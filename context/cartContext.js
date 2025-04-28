"use client";
import { createContext,useContext,useEffect,useState } from "react";
import { useCartAction } from "@/hooks/useCartAction";
import { useAuth } from "./authContext";
import { supabase } from "@/lib/supabase/supabase";

const CartContext=createContext();

 export function CartProvider({ children}){
  const {user} = useAuth(); // Get user from Supabase auth
  const userId = user?.id;
    const [cartItems,setCartItems] = useState([]);
    const [loading,setLoading]= useState(false);
    const [error,setError]=useState(null);
    const { fetchCartItems, addToCart,updateCartItems,removeFromCart,} = useCartAction();

    const handlefetchCart = async () =>{
      if (!userId) return;
      setLoading(true)
      try{
        const items= await fetchCartItems(userId);
        setCartItems(items);
        setError(null);
      }catch (error) {
        console.error("Failed to add item to cart:", error);
        // You can add user feedback here (toast, alert, etc.)
        setError(error.message);
      } 
      finally{
        setLoading(false)
      }
    }

  const handleAddToCart = async (item) =>{
    if (!userId) {
      console.error("User not logged in!");
      return;
    }
    setLoading(true)
    try{
      await addToCart(item);
      await handlefetchCart();
      
    }catch (error) {
      console.error("Failed to add item to cart:", error);
      // You can add user feedback here (toast, alert, etc.)
      setError(error.message);
  
    }finally{
      setLoading(false)
    }
  
  }

   /* const handleAddToCart = async (item) => {
      setLoading(true);
      
      try {
        // Simple item data
        const cartItem = {
          user_id: userId,
          item_id: item.id,
          item_name: item.name,
          item_price: item.price,
          quantity: 1
        };
    
        await addToCart(cartItem);
        await handlefetchCart();
      } catch (error) {
        console.log("We caught the error:", error);
        alert("Error: " + (error.message || "Couldn't add to cart"));
      } finally {
        setLoading(false);
      }
    };*/

  const handleCartUpdates = async (itemId, qty) =>{
    setLoading(true)
    try{
      console.log("Updating cart item:", itemId, qty);
      await updateCartItems(itemId, { quantity: qty });
      await handlefetchCart();
      
    }catch (error) {
      console.error("Failed to add item to cart:", error);
      // You can add user feedback here (toast, alert, etc.)
      setError(error.message);
    } finally{
      setLoading(false)
    }
  
  }


  const handleRemoveFromCart = async (itemId) =>{
    setLoading(true)
    try{
      await removeFromCart(itemId);
      await handlefetchCart();
    } 
      catch (error) {
        console.error("Failed to add item to cart:", error);
        // You can add user feedback here (toast, alert, etc.)
        setError(error.message);
      } finally{
      setLoading(false)
    }
  
  }

  useEffect(()=>{
    if(userId){
      handlefetchCart();
    }
  },[userId])

 
  return(
    <CartContext.Provider value={{
        cartItems,
        loading,
        error,
        addToCart : handleAddToCart,
        removeFromCart : handleRemoveFromCart,
        updateCartItems : handleCartUpdates,
        fetchCartItems : handlefetchCart,
    
    }}
    >
     {children}
    </CartContext.Provider>
  );
}

export function useCart(){
  const context=useContext(CartContext);
  if(!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

 