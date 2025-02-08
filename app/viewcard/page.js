"use client"
import { useState, useEffect } from "react";

export default function ViewCart() {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCart(storedCart);

    // Calculate totals
    const totalQty = storedCart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPriceSum = storedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    setTotalQuantity(totalQty);
    setTotalPrice(totalPriceSum);
  }, []);

  // Remove item from cart
  const handleRemoveItem = (itemToRemove) => {
    let updatedCart = cart.filter((item) => item.name !== itemToRemove.name);

    setCart(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));

    // Update totals
    const totalQty = updatedCart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPriceSum = updatedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    setTotalQuantity(totalQty);
    setTotalPrice(totalPriceSum);
  };

  return (
    <div className="min-h-screen p-6 mt-6">
      <h1 className="text-center text-3xl font-bold text-red-700 mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-xl text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="max-w-4xl mx-auto bg-white shadow-lg p-6 rounded-lg">
          {cart.map((item, index) => (
            <div key={index} className="flex items-center justify-between border-b py-4">
              <div className="flex items-center space-x-4">
                <img src={item.image} alt={item.name} width={80} height={80} className="rounded-lg" />
                <div>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-gray-600">Price: PKR {item.price}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
              </div>
              <button
                onClick={() => handleRemoveItem(item)}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total Summary */}
          <div className="mt-6 text-right">
            <p className="text-lg font-bold">Total Items: {totalQuantity}</p>
            <p className="text-lg font-bold">Total Price: PKR {totalPrice}</p>
            <button className="mt-4 px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
