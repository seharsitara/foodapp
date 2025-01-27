"use client";
import { useState } from "react";
import Link from "next/link";
import bakedchickenwings from "@/assets/wings/bakedchickenwings.png.jpg";
import BBQwings from "@/assets/wings/BBQwings.png.jpg";
import heartchickenwings from "@/assets/wings/heartchickenwings.png.jpg";
import koreanhotwings from "@/assets/wings/koreanhotwings.png.jpg";
import Burgers from "@/assets/burger.png";
import Coffee from "@/assets/coffee.png.jpg";
import Drinks from "@/assets/drinks.png.jpg";
import Fries from "@/assets/fries.png.jpg";
import Pastas from "@/assets/pasta.png";
import Pizzas from "@/assets/pizza.png";
import Wings from "@/assets/wings.png";
import Desserts from "@/assets/desserts.png.jpg";
import Deals from "@/assets/deals.png.jpg";

export default function Wings() {
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
  ];

  const menuItems = [
    { name: "Baked Chicken Wings", image: bakedchickenwings.src, link: "/bakedchickenwings" },
    { name: "BBQ Wings", image: BBQwings.src, link: "/BBQwings" },
    { name: "Heart Chicken Wings", image: heartchickenwings.src, link: "/heartchickenwings" },
    { name: "Korean Hot Wings", image: koreanhotwings.src, link: "/koreanhotwings" },
    
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
