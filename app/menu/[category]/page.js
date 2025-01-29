'use client';
import { use } from "react";
import { useState } from 'react';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import beefburger from "@/assets/beefburger.png.jpg";
import chickenburger from "@/assets/chickenburger.png.jpg";
import fishburger from "@/assets/fishburger.png.jpg";
import spicychickenburger from "@/assets/spicychickenburger.png.jpg";
import veggieburger from "@/assets/veggieburger.png.jpg";
import zingerburger from "@/assets/zingerburger.png.jpg";
import Burgers from "@/assets/burger.png";
import Coffee from "@/assets/coffee.png.jpg";
import Drinks from "@/assets/drinks.png.jpg";
import Fries from "@/assets/fries.png.jpg";
import Pastas from "@/assets/pasta.png";
import Pizzas from "@/assets/pizza.png";
import Wings from "@/assets/wings.png";
import Desserts from "@/assets/desserts.png.jpg";
import Deals from "@/assets/deals.png.jpg";
import chikenfajitapizza from "@/assets/chickenfajitapizza.png.jpg";
import chickentikkapizza from "@/assets/chickentikkapizza.png.jpg";
import fourcheesepizza from "@/assets/fourcheesepizza.png.jpg";
import margheritapizza from "@/assets/margheritapizza.png.jpg";
import veggiesupremepizza from "@/assets/veggiesupremepizza.png.jpg";
import spicybeefpizza from "@/assets/spicybeefpizza.png.jpg";
import pepperonipizza from "@/assets/pepperonipizza.png.jpg";
import linguinepasta from "@/assets/pasta/linguine.png.jpg"
import pennepasta  from "@/assets/pasta/penne.png.jpg"
import spaghettipasta  from "@/assets/pasta/spaghetti.png.jpg"
import loadedfries from "@/assets/fries/loadedfries.png.jpg"
import steakfries from "@/assets/fries/steakfries.png.jpg"
import sweetpotatofries from "@/assets/fries/sweetpotatofries.png.jpg"
import spritecan from "@/assets/drinks/spritecan.png.jpg";
import cocacolacan from "@/assets/drinks/cocacolacan.png.jpg";
import fantacan from "@/assets/drinks/fantacan.png.jpg";
import pepsican from "@/assets/drinks/pepsican.png.jpg";
import waterbottle from "@/assets/drinks/waterbottle.png.jpg";
import bakedchickenwings from "@/assets/wings/bakedchickenwings.png.jpg";
import BBQwings from "@/assets/wings/BBQwings.png.jpg";
import heartchickenwings from "@/assets/wings/heartchickenwings.png.jpg";
import koreanhotwings from "@/assets/wings/koreanhotwings.png.jpg";
import CheeseCake from "@/assets/desserts/Cheesecake.png.jpg";
import ClassicChocolateBrownies from "@/assets/desserts/ClassicChocolateBrownies.png.jpg";
import Donuts from "@/assets/desserts/Donuts.png.jpg";
import RedVelvetBrownies from "@/assets/desserts/RedVelvetBrownies.png.jpg";
import VanillaCupcakes from "@/assets/desserts/VanillaCupcakes.png.jpg";
import Cappuccino from "@/assets/coffee/Cappuccino.png.jpg";
import CaramelIcedLatte from "@/assets/coffee/CaramelIcedLatte.png.jpg";
import ChocolateFrappe from "@/assets/coffee/ChocolateFrappe.png.jpg";
import ColdCoffee from "@/assets/coffee/ColdCoffee.png.jpg";
import deal1 from "@/assets/deal/deal1.png.jpg"
import deal3 from "@/assets/deal/deal3.png.jpg"


const menuData = {
  burgers: [
    {
      id: "beefburger",
      name: "Beef Burger",
      price: 400,
      description: "Juicy beef patty with fresh toppings and a soft bun",
      image: beefburger,
      
    },
    {
      id: "chickenburger",
      name: "Chicken Burger",
      price: 350,
      description: "Grilled chicken patty with lettuce, mayo, and pickles",
      image: chickenburger,
     
    },
    {
      id: "fishburger",
      name: "Fish Burger",
      price: 450,
      description: "Crispy fish fillet with tartar sauce and fresh veggies",
      image: fishburger,
    },
    {
      id: "spicyburger",
      name: "Spicy Chicken Burger",
      price: 400,
      description: "Spicy grilled chicken patty with jalapeños and hot sauce",
      image: spicychickenburger,
    },
    {
      id: "veggieburger",
      name: "Veggie Burger",
      price: 380,
      description: "Plant-based patty with fresh greens, tomatoes, and vegan sauce",
      image: veggieburger,
    },
    {
      id: "zingerburger",
      name: "Zinger Burger",
      price: 400,
      description: "Crispy chicken fillet with a zesty sauce and pickles",
      image: zingerburger,
    },
  ],
  pizzas : [
    {
      id: "pepperoni",
      name: "Pepperoni Pizza",
      price: 1200,
      description: "Classic pepperoni with mozzarella cheese and tomato sauce",
      image: pepperonipizza, 
    },
    {
      id: "chickenfajita",
      name: "Chicken Fajita Pizza",
      price: 1400,
      description: "Spicy chicken with fajita vegetables and Mexican cheese",
      image: chikenfajitapizza,
    },
    {
      id: "chickentikka",
      name: "Chicken Tikka Pizza",
      price: 1300,
      description: "Tandoori-style chicken with tangy tikka sauce and mozzarella",
      image: chickentikkapizza,
    },
    {
      id: "fourcheese",
      name: "Four Cheese Pizza",
      price: 1500,
      description: "A mix of mozzarella, cheddar, parmesan, and gouda cheeses",
      image: fourcheesepizza,
    },
    {
      id: "spicybeef",
      name: "Spicy Beef Pizza",
      price: 1400,
      description: "Spicy beef with onions, jalapeños, and melted cheese",
      image: spicybeefpizza,
    },
    {
      id: "veggiesupreme",
      name: "Veggie Supreme Pizza",
      price: 1200,
      description: "Mushrooms, peppers, onions, and olives on a veggie base",
      image: veggiesupremepizza,
    },
    {
      id: "margherita",
      name: "Margherita Pizza",
      price: 1000,
      description: "Classic pizza with fresh tomatoes, basil, and mozzarella",
      image: margheritapizza,
    },
  ],
  wings : [
    {
      id: "bakedchickenwings",
      name: "Baked Chicken Wings",
      price: 200,
      description: "Tender, juicy baked wings with your choice of seasoning",
      image: bakedchickenwings,
    },
    {
      id: "BBQwings",
      name: "BBQ Wings",
      price: 210,
      description: "Sweet and tangy BBQ sauce coated on crispy wings",
      image: BBQwings,
    },
    {
      id: "heartchickenwings",
      name: "Heart Chicken Wings",
      price: 120,
      description: "Wings with a bold, smoky flavor and spicy kick",
      image: heartchickenwings,
    },
    {
      id: "koreanhotwings",
      name: "Korean Hot Wings",
      price: 150,
      description: "Sweet and spicy Korean-style wings with gochujang sauce",
      image: koreanhotwings,
    },
  ],
  fries : [
    {
      name: "Loaded Fries",
      image: loadedfries.src,
      id: "loadedfries",
      price: 150,
      description: "Crispy fries topped with cheese, bacon, and sour cream",
    },
    {
      name: "Sweet Potato Fries",
      image: sweetpotatofries.src,
      id: "sweetpotatofries",
      price: 160,
      description: "Crispy sweet potato fries with a hint of cinnamon",
    },
    {
      name: "Steak Fries",
      image: steakfries.src,
      id: "steakfries",
      price: 250,
      description: "Thick-cut fries with a savory flavor and crispy texture",
    },
  ],
  pasta : [
    {
      name: "Spaghetti",
      image: spaghettipasta.src,
      id: "spaghetti",
      price: 800,
      description: "Classic spaghetti with rich tomato marinara sauce",
    },
    {
      name: "Penne",
      image: pennepasta.src,
      id: "penne",
      price: 700,
      description: "Penne pasta with creamy Alfredo sauce and grilled chicken",
    },
    {
      name: "Linguine",
      image: linguinepasta.src,
      id: "linguine",
      price: 800,
      description: "Linguine pasta with garlic, olive oil, and fresh herbs",
    },
  ],
  drinks: [
    {
      name: "Coke",
      image: cocacolacan.src,
      id: "coke",
      price: 200,
      description: "Refreshing carbonated cola drink",
    },
    {
      name: "Sprite",
      image: spritecan.src,
      id: "sprite",
      price: 200,
      description: "Lemon-lime soda with a crisp, refreshing taste",
    },
    {
      name: "Fanta",
      image: fantacan.src,
      id: "fanta",
      price: 200,
      description: "Sweet orange-flavored soda",
    },
    {
      name: "Pepsi",
      image: pepsican.src,
      id: "pepsi",
      price: 200,
      description: "Classic cola drink with a balanced taste",
    },
    {
      name: "Water",
      image: waterbottle.src,
      id: "water",
      price: 150,
      description: "Pure, refreshing water to stay hydrated",
    },
  ],
  desserts : [
    {
      id: "cheesecake",
      name: "Cheesecake",
      price: 1200,
      description: "Creamy cheesecake with a buttery crust and rich topping",
      image: CheeseCake,
    },
    {
      id: "chocolatebrownies",
      name: "Classic Chocolate Brownies",
      price: 200,
      description: "Fudgy chocolate brownies with a rich cocoa flavor",
      image: ClassicChocolateBrownies,
    },
    {
      id: "donuts",
      name: "Donuts",
      price: 80,
      description: "Soft, fluffy donuts with a sweet glaze and toppings",
      image: Donuts,
    },
    {
      id: "redvelvetbrownies",
      name: "Red Velvet Brownies",
      price: 160,
      description: "Delicious red velvet brownies with a cream cheese swirl",
      image: RedVelvetBrownies,
    },
    {
      id: "vanillaCupcakes",
      name: "Vanilla Cupcakes",
      price: 150,
      description: "Soft vanilla cupcakes topped with fluffy buttercream frosting",
      image: VanillaCupcakes,
    },
    ],
    coffee : [
      {
        id: "cappuccino",
        name: "Cappuccino",
        price: 700,
        description: "Rich espresso with steamed milk and a layer of foam",
        image: Cappuccino,
      },
      {
        id: "caramelicedlatte",
        name: "Caramel Iced Latte",
        price: 800,
        description: "Smooth espresso with caramel syrup and chilled milk over ice",
        image: CaramelIcedLatte,
      },
      {
        id: "chocolatefrappe",
        name: "Chocolate Frappe",
        price: 700,
        description: "Blended iced coffee with rich chocolate and whipped cream",
        image: ChocolateFrappe,
      },
      {
        id: "coldcoffee",
        name: "Cold Coffee",
        price: 800,
        description: "Refreshing iced coffee with milk and a hint of sweetness",
        image: ColdCoffee,
      },
    ],
    deals : [
      {
        id: "deal1",
        name: "Family Feast Combo",
        price: 15,
        description: "A family deal with two burgers, large fries, pasta and two drinks",
        image: deal1,
      },
      
      {
        id: "deal3",
        name: "Classic Burger Combo",
        price: 20,
        description: "A delicious combo of a burger, fries",
        image: deal3,
      },
    ],
}  
const fullMenu = [
    { name: "Burgers", image: Burgers.src, link: "/menu/burgers" },
    { name: "Pizzas", image: Pizzas.src, link: "/menu/pizzas" },
    { name: "Pasta", image: Pastas.src, link: "/menu/pasta" },
    { name: "Wings", image: Wings.src, link: "/menu/wings" },
    { name: "Fries", image: Fries.src, link: "/menu/fries" },
    { name: "Drinks", image: Drinks.src, link: "/menu/drinks" },
    { name: "Coffee", image: Coffee.src, link: "/menu/coffee" },
    { name: "Desserts", image: Desserts.src, link: "/menu/desserts" },
    { name: "Deals", image: Deals.src, link: "/menu/deals" },
  ];
  

  export default function MenuPage({ params: paramsPromise }) {
    const params = use(paramsPromise); // Unwrap the params promise
    const category = params.category?.toLowerCase();

  const [showFullMenu, setShowFullMenu] = useState(false);
  const items = menuData[category];

  if (!items) {
    return <p className="p-6 text-center text-red-500 font-bold">Category not found.</p>;
  }
  
  return (
    <div className="w-full mb-16 flex flex-col md:flex-row">
      {/* Sidebar for Large Screens */}
      <div className="hidden md:block w-1/3 lg:w-1/5  items-center bg-white py-6  border-2 border-gray-300 mt-10 ml-14 ">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-center md:text-xl text-3xl font-semibold text-red-700">Full Menu</h2>
        <ul className="space-y-4 mt-6">
          {fullMenu.map((item, index) => (
            <li key={index} className="flex items-center space-x-4">
              <Image src={item.image} alt={item.name} width={50} height={50} className="rounded-full" />
              <Link href={item.link} className="text-lg font-medium text-black hover:text-red-500">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      </div>
      {/* Toggle Button for Small Screens */}
      <div className="block md:hidden mt-10 text-center">
        <button 
          onClick={() => setShowFullMenu(!showFullMenu)}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
          {showFullMenu ? "Hide Full Menu" : "Show Full Menu"}
        </button>
      </div>

      {/* Full Menu for Small Screens */}
      {showFullMenu && (
        <div className="w-3/4 sm:w-1/4 block md:hidden bg-white mx-auto border-2 py-5 border-gray-300 mt-6">
          <h2 className="text-center text-2xl font-semibold mb-6 text-red-700">Full Menu</h2>
          <ul className="space-y-4 text-center">
            {fullMenu.map((item, index) => (
              <li key={index} className="flex items-center space-x-4 justify-center">
                <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-full" />
                <Link href={item.link} className="text-lg font-medium text-blue-600 hover:text-blue-500">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Menu Grid */}
      <div className="w-full lg:w-3/4 px-6">
        <h1 className="text-center text-3xl font-semibold text-red-700 mt-12 capitalize">
          {category} Menu
        </h1>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-14 md:px-2 px-6">
          {items.map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
              <Image src={item.image} alt={item.name} width={150} height={120} className="rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-center"><Link href={`/menu/${category}/${item.id}`}>{item.name}</Link></h3>
              <div className="flex justify-between md:gap-6 lg:gap-0 w-full mt-10">
              <p className="lg:text-lg text-sm font-semibold text-gray-700 mt-2">PKR {item.price}</p>
              <button className="bg-yellow-600 px-4 py-2 rounded-lg"><Link href="/order-form">Order</Link></button>
              </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}
  
     

  
    