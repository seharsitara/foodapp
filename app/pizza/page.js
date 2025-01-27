"use client";
import { useState} from "react";
import Link from "next/link";
import chikenfajitapizza from "@/assets/chickenfajitapizza.png.jpg";
import chickentikkapizza from "@/assets/chickentikkapizza.png.jpg";
import fourcheesepizza from "@/assets/fourcheesepizza.png.jpg";
import margheritapizza from "@/assets/margheritapizza.png.jpg";
import veggiesupremepizza from "@/assets/veggiesupremepizza.png.jpg";
import spicybeefpizza from "@/assets/spicybeefpizza.png.jpg";
import pepperonipizza from "@/assets/pepperonipizza.png.jpg";
import Burgers from "@/assets/burger.png"
import Coffee from "@/assets/coffee.png.jpg"
import Drinks  from "@/assets/drinks.png.jpg"
import Fries   from "@/assets/fries.png.jpg"
import Pastas from "@/assets/pasta.png"
import Pizzas from "@/assets/pizza.png"
import Wings from "@/assets/wings.png"
import Desserts from "@/assets/desserts.png.jpg"
import Deals from "@/assets/deals.png.jpg"

export default function Pizza() {
  const [showFullMenu, setShowFullMenu] = useState(false);
    const handleMenuBtn=()=>{
      setShowFullMenu(!showFullMenu)
    }
    const fullMenu = [
     { name: "Burgers", image: Burgers.src, link: "/burger" },
     { name: "Pizzas", image: Pizzas.src, link: "/pizza" },
     { name: "Pasta", image: Pastas.src, link: "/pasta" },
     { name: "Wings", image: Wings.src, link: "/wings" },
     { name: "Fries", image: Fries.src, link: "/fries" },
     { name: "Drinks", image: Drinks.src, link: "/drinks" },
     { name: "Coffee", image: Coffee.src, link: "/coffee" },
     { name: "Desserts", image: Desserts.src, link: "/dessert" },
     { name: "Deals", image: Deals.src, link: "/deals" },
     ]

  const menuItems = [
    { name: "Chicken Fajita", image: chikenfajitapizza.src, link: "/chickenfajitapizza" },
    { name: "Chicken Tikka", image: chickentikkapizza.src, link: "/chickentikkapizza" },
    { name: "Four Cheese", image: fourcheesepizza.src, link: "/fourcheesepizza" },
    { name: "Spicy Beef", image: spicybeefpizza.src, link: "/spicybeefpizza" },
    { name: "Veggie Supreme", image: veggiesupremepizza.src, link: "/veggiesupremepizza" },
    { name: "Pepperoni", image: pepperonipizza.src, link: "/pepperonipizza" },
    { name: "Margherita", image: margheritapizza.src, link: "/margheritapizza" },
  ];

  return (
    <>
      <div className="w-full mb-32 flex flex-col lg:flex-row">
        {/* Sidebar Menu for Larger Screens */}
        <div className="hidden lg:block w-full lg:w-1/4 bg-white p-6 border-2 border-black mt-10 ml-14">
          <h2 className="mx-auto mb-8 text-center text-2xl font-semibold text-red-700">Full Menu</h2>
          <ul className="space-y-2 text-center">
            {fullMenu.map((item, index) => (
              <li
                key={index}
                className="flex flex-row items-center space-x-6 rounded-md"
              >
                <img
                  className="w-24 h-20 rounded-full bg-transparent"
                  src={item.image}
                  alt={item.name}
                />
                <Link
                  className="text-sm md:text-base font-medium text-black"
                  href={item.link}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Button for Small Screens */}
        <div className="block lg:hidden mt-10 text-center ">
          <button
            onClick={handleMenuBtn}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            {showFullMenu ? "Hide Full Menu" : "Click Here to Show Full Menu"}
          </button>
        </div>

        {/* Full Menu for Small Screens */}
        {showFullMenu && (
          <div className="w-3/4 sm:w-1/2 block lg:hidden bg-white mx-auto border-2 py-5 border-black mt-6">
            <h2 className="text-center text-2xl font-semibold mb-6 text-red-700">Full Menu</h2>
            <ul className="space-y-2 text-center">
              {fullMenu.map((item, index) => (
                <li
                  key={index}
                  className="flex flex-row items-center space-x-6 justify-center rounded-md mb-4"
                >
                  <img
                    className="w-24 h-20 rounded-full bg-transparent"
                    src={item.image}
                    alt={item.name}
                  />
                  <Link
                    className="text-sm md:text-base font-medium text-black"
                    href={item.link}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Main Menu Grid */}
        <div className="w-full lg:w-3/4">
          <h1 className="mx-auto mt-12 text-center text-2xl font-semibold text-red-700">Our Menu</h1>
          <ul className="w-full container mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 mt-14 px-6">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="flex flex-col items-center space-y-4 rounded-md"
              >
                <img
                  className="w-24 h-20 rounded-full bg-transparent"
                  src={item.image}
                  alt={item.name}
                />
                <Link
                  className="text-sm md:text-lg font-medium text-black hover:underline"
                  href={item.link}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
