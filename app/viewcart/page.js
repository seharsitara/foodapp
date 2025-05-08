"use client"
import { useState, useEffect } from "react";
import Router, { useRouter } from "next/navigation";
import { useCart } from "@/context/cartContext";
import Link from "next/link";

export default function ViewCart() {
  const router=useRouter();
  const [cart, setCart] = useState([]);
  //const [totalQuantity, setTotalQuantity] = useState(0);
  //const [totalPrice, setTotalPrice] = useState(0);

  const {loading,updateCartItems,removeFromCart,cartItems }=useCart();



  // Load cart from localStorage
  /*useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCart(storedCart);
    

    // Calculate totals
    const totalQty = storedCart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPriceSum = storedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    setTotalQuantity(totalQty);
    setTotalPrice(totalPriceSum);
  }, []);*/

  
  // Remove item from cart
  const handleRemoveItem = (item) => {
    // Find the item in the cart and reduce its quantity
    if(item.quantity <= 1){
      removeFromCart(item.item_id)
    }
   else{
     updateCartItems(item.item_id, item.quantity - 1 );
    }
    
   /* let updatedCart = [...cart];
    
    const itemIndex = updatedCart.findIndex((item) => item.name === itemToRemove.name);
    
    if (itemIndex !== -1) {
      const item = updatedCart[itemIndex];
      
      // Decrease quantity
      if (item.quantity > 1) {
        item.quantity -= 1; // Decrease quantity by 1
      } else {
        // If the quantity is 1, remove the item completely
        updatedCart.splice(itemIndex, 1);
      }
    }
  
    // Update cart in state and localStorage
    setCart(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  
    // Update totals
    const totalQty = updatedCart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPriceSum = updatedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
    setTotalQuantity(totalQty);
    setTotalPrice(totalPriceSum);*/
  };


  const handleAddItemBack = (item) => {
    // Check if the item already exists in the cart
    console.log("Adding item back to cart:", item);
    console.log("Item ID:", item.item_id);
    console.log("Item properties:", Object.keys(item));
    updateCartItems(item.item_id, item.quantity + 1);
 /*   let updatedCart = [...cart];
    const existingItem = updatedCart.find((item) => item.name === itemToAdd.name);
  
    if (existingItem) {
      // If the item exists, increase the quantity
      existingItem.quantity += 1;
    } else {
      // If the item doesn't exist, add it with quantity 1
      updatedCart.push({ ...itemToAdd, quantity: 1 });
    }
  
    // Update cart in state and localStorage
    setCart(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  
    // Update totals
    const totalQty = updatedCart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPriceSum = updatedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
    setTotalQuantity(totalQty);
    setTotalPrice(totalPriceSum);
  };
    */


  }

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  
  const totalPrice = cartItems.reduce((sum, item) => {
    const price = Number(item.price) || 0;
    const quantity = item.quantity || 0;
    return sum + (price * quantity);
  }, 0);


  /*const handleConfirmBtn=()=>{
    alert("Your Order has been Confirmed")
    localStorage.removeItem("cartItems");
    localStorage.removeItem("deliveryDetails")
    router.push("/menu") // Clear local storage
    /*setCart([]); // Clear state
    setTotalQuantity(0);
    setTotalPrice(0);
   
    
 }*/

  return (
    <div className="min-h-screen p-6 mt-6">
      <h1 className="text-center text-3xl font-bold text-red-700 mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-xl text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="max-w-4xl mx-auto bg-white shadow-lg p-6 rounded-lg">
          {cartItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between gap-6 border-b py-4">
              <div className="flex-col items-start md:space-x-6 w-36 md:w-64">
                <div className="md:ml-10">
                <img src={item.image_url} alt={item.name} width={80} height={80} className="rounded-lg" />
                </div>
                <div >
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-gray-600">Price: PKR {item.price}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
              </div>
              <div>
              <button
                onClick={() => handleRemoveItem(item)}
                className="bg-red-600 text-white px-4 py-2 rounded-l-lg hover:bg-red-700  border-r"
              >
                -
                </button>
             <button
                onClick={() => handleAddItemBack(item)}
                className="bg-red-600 text-white px-4 py-2 rounded-r-lg hover:bg-red-700"
              >
                +
              </button>
            </div>
            </div>
          ))}

          {/* Total Summary */}
          <div className="mt-6 text-right">
            <p className="text-lg font-bold">Total Items: {totalQuantity}</p>
            <p className="text-lg font-bold">Total Price: PKR {totalPrice}</p>
          <Link href="/userdetails">
          <button
            className="mt-4 px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700">
              Proceed to Checkout
            </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
