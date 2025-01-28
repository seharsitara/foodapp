"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import beefburger from "@/assets/beefburger.png.jpg";
import chickenburger from "@/assets/chickenburger.png.jpg";
import fishburger from "@/assets/fishburger.png.jpg";
import spicychickenburger from "@/assets/spicychickenburger.png.jpg";
import veggieburger from "@/assets/veggieburger.png.jpg";
import zingerburger from "@/assets/zingerburger.png.jpg";
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
import searchimg from "@/assets/search.png";

export default function Search(){
  const menuItems = [
    // Burgers
    {
      id: 1,
      name: "Beef Burger",
      category: "Burger",
      description: "Juicy beef patty with toppings",
      image: beefburger,
      buttonText: "Learn More",
      link: "/burger",
    },
    {
      id: 2,
      name: "Chicken Burger",
      category: "Burger",
      description: "Grilled chicken patty with toppings",
      image: chickenburger,
      buttonText: "Learn More",
      link: "/burger",
    },
    {
      id: 3,
      name: "Fish Burger",
      category: "Burger",
      description: "Crispy fish patty with tartar sauce",
      image: fishburger,
      buttonText: "Learn More",
      link: "/burger",
    },
    {
      id: 4,
      name: "Spicy Chicken Burger",
      category: "Burger",
      description: "Spicy grilled chicken patty",
      image: spicychickenburger,
      buttonText: "Learn More",
      link: "/burger",
    },
    {
      id: 5,
      name: "Veggie Burger",
      category: "Burger",
      description: "Plant-based patty with fresh veggies",
      image: veggieburger,
      buttonText: "Learn More",
      link: "/burger",
    },
    {
      id: 6,
      name: "Zinger Burger",
      category: "Burger",
      description: "Crispy chicken patty with zinger sauce",
      image: zingerburger,
      buttonText: "Learn More",
      link: "/burger",
    },
  
    // Pizzas
    {
      id: 7,
      name: "Chicken Fajita Pizza",
      category: "Pizza",
      description: "Loaded with chicken fajita and veggies",
      image: chikenfajitapizza,
      buttonText: "Learn More",
      link: "/pizza",
    },
    {
      id: 8,
      name: "Chicken Tikka Pizza",
      category: "Pizza",
      description: "Spicy chicken tikka toppings",
      image: chickentikkapizza,
      buttonText: "Learn More",
      link: "/pizza",
    },
    {
      id: 9,
      name: "Four Cheese Pizza",
      category: "Pizza",
      description: "Mozzarella, cheddar, parmesan, and gouda cheese",
      image: fourcheesepizza,
      buttonText: "Learn More",
      link: "/pizza",
    },
    {
      id: 10,
      name: "Margherita Pizza",
      category: "Pizza",
      description: "Classic cheese and tomato base",
      image: margheritapizza,
      buttonText: "Learn More",
      link: "/pizza",
    },
    {
      id: 11,
      name: "Veggie Supreme Pizza",
      category: "Pizza",
      description: "Topped with fresh vegetables",
      image: veggiesupremepizza,
      buttonText: "Learn More",
      link: "/pizza",
    },
    {
      id: 12,
      name: "Spicy Beef Pizza",
      category: "Pizza",
      description: "Loaded with spicy beef toppings",
      image: spicybeefpizza,
      buttonText: "Learn More",
      link: "/pizza",
    },
    {
      id: 13,
      name: "Pepperoni Pizza",
      category: "Pizza",
      description: "Topped with pepperoni slices",
      image: pepperonipizza,
      buttonText: "Learn More",
      link: "/pizza",
    },
  
    // Pasta
    {
      id: 14,
      name: "Linguine Pasta",
      category: "Pasta",
      description: "Linguine with creamy Alfredo sauce",
      image: linguinepasta,
      buttonText: "Learn More",
      link: "/pasta",
    },
    {
      id: 15,
      name: "Penne Pasta",
      category: "Pasta",
      description: "Penne pasta with tomato basil sauce",
      image: pennepasta,
      buttonText: "Learn More",
      link: "/pasta",
    },
    {
      id: 16,
      name: "Spaghetti Pasta",
      category: "Pasta",
      description: "Classic spaghetti with meatballs",
      image: spaghettipasta,
      buttonText: "Learn More",
      link: "/pasta",
    },
  
    // Fries
    {
      id: 17,
      name: "Loaded Fries",
      category: "Fries",
      description: "Fries topped with cheese and toppings",
      image: loadedfries,
      buttonText: "Learn More",
      link: "/fries",
    },
    {
      id: 18,
      name: "Steak Fries",
      category: "Fries",
      description: "Thick-cut fries with seasoning",
      image: steakfries,
      buttonText: "Learn More",
      link: "/fries",
    },
    {
      id: 19,
      name: "Sweet Potato Fries",
      category: "Fries",
      description: "Sweet and crispy sweet potato fries",
      image: sweetpotatofries,
      buttonText: "Learn More",
      link: "/fries",
    },
  
    // Drinks
    {
      id: 20,
      name: "Sprite Can",
      category: "Drinks",
      description: "Refreshing lemon-lime soda",
      image: spritecan,
      buttonText: "Learn More",
      link: "/drinks",
    },
    {
      id: 21,
      name: "Coca Cola Can",
      category: "Drinks",
      description: "Classic Coca Cola soda",
      image: cocacolacan,
      buttonText: "Learn More",
      link: "/drinks",
    },
    {
      id: 22,
      name: "Fanta Can",
      category: "Drinks",
      description: "Sweet and fruity orange soda",
      image: fantacan,
      buttonText: "Learn More",
      link: "/drinks",
    },
    {
      id: 23,
      name: "Pepsi Can",
      category: "Drinks",
      description: "Crisp and refreshing cola drink",
      image: pepsican,
      buttonText: "Learn More",
      link: "/drinks",
    },
    {
      id: 24,
      name: "Water Bottle",
      category: "Drinks",
      description: "Pure and refreshing water",
      image: waterbottle,
      buttonText: "Learn More",
      link: "/drinks",
    },
  
    // Wings
    {
      id: 25,
      name: "Baked Chicken Wings",
      category: "Wings",
      description: "Crispy and flavorful baked wings",
      image: bakedchickenwings,
      buttonText: "Learn More",
      link: "/wings",
    },
    {
      id: 26,
      name: "BBQ Wings",
      category: "Wings",
      description: "Smoky and tangy BBQ sauce wings",
      image: BBQwings,
      buttonText: "Learn More",
      link: "/wings",
    },
    {
      id: 27,
      name: "Heart Chicken Wings",
      category: "Wings",
      description: "Special heart-shaped wings",
      image: heartchickenwings,
      buttonText: "Learn More",
      link: "/wings",
    },
    {
      id: 28,
      name: "Korean Hot Wings",
      category: "Wings",
      description: "Spicy and sweet Korean-style wings",
      image: koreanhotwings,
      buttonText: "Learn More",
      link: "/wings",
    },
  ];
  
  
 const [searchItem,setSearchItem]=useState("");
 const [filterItems,setFilterItems]=useState(menuItems);
 const [showResults, setShowResults] = useState(false);
  const handleChange=(e)=>{
    const items=e.target.value.toLowerCase();
    console.log(items);
    setSearchItem(items)
   
   
}

    const handleClick=()=>{
      const filter=menuItems.filter((item)=>
        item.name.toLowerCase().includes(searchItem.toLowerCase()) || item.category.toLowerCase().includes(searchItem.toLowerCase()));
       setFilterItems(filter);
       console.log(filter);
        setShowResults(true);
}
  return (
      <>
      <div>
        <div className="mt-20 md:mx-20 mx-10 flex flex-row items-center">
          <input type="search"
          value={searchItem}
          onChange={handleChange}
           placeholder="Do you want to search something?"
          className="w-full border border-gray-300 p-3 md:p-6 rounded-l-lg focus:outline-none focus:ring-0 md:text-2xl text-xl"></input>
          <button onClick={handleClick}
          className="md:h-20 md:w-20 h-14 w-14 flex justify-center items-center bg-yellow-700
          rounded-r-lg md:p-4 p-1 focus:outline-none focus:ring-0">
            <Image
            src={searchimg}
            alt="search icon"
            layout="responsive"
            width={6}
            height={2}
            ></Image>
          </button>
        </div>
        {showResults && (<div className="menu-list">
        <h1 className="font-sans font-bold md:text-4xl text-2xl md:px-20 px-10 mt-10">Results</h1>
           {filterItems.length > 0 ? (
             filterItems.map((item)=>(
             <div key={item.id} className="py-10 md:px-20 px-10">
              <h1 className="font-sans font-bold md:text-3xl text-xl py-1">{item.name}</h1>
             <p className="font-sans font-semibold md:text-2xl text-lg py-2">{item.description}</p>
             <button className="font-sans font-medium md:text-xl text-sm"><Link href={item.link}>{item.buttonText}</Link></button>
             </div>
             )
             )
           ):(
            <p>No Related Items Found</p>
           )}
        </div>)}
        </div>
      </>
  )
}