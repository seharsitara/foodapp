'use client';
import { use } from "react";
import React from 'react';
import NotFoundPage from "@/app/not-found/page";
import Link from 'next/link';
import Image from 'next/image';
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
 burgers : {
  beefburger: {
    name: 'Beef Burger',
    price: 8,
    description: 'Juicy beef patty with fresh toppings and a soft bun',
    image: beefburger,
    
  },
  chickenburger: {
    name: 'Chicken Burger',
    price: 7,
    description: 'Grilled chicken patty with lettuce, mayo, and pickles',
    image: chickenburger,
    
  },
  fishburger: {
    name: 'Fish Burger',
    price: 9,
    description: 'Crispy fish fillet with tartar sauce and fresh veggies',
    image: fishburger,
    
  },
  spicyburger: {
    name: 'Spicy Chicken Burger',
    price: 8,
    description: 'Spicy grilled chicken patty with jalapeños and hot sauce',
    image: spicychickenburger,
  },
  veggieburger: {
    name: 'Veggie Burger',
    price: 6,
    description: 'Plant-based patty with fresh greens, tomatoes, and vegan sauce',
    image: veggieburger,
  },
  zingerburger: {
    name: 'Zinger Burger',
    price: 8,
    description: 'Crispy chicken fillet with a zesty sauce and pickles',
    image: zingerburger,
  },
},

// Pizzas
pizzas : {
  pepperoni: {
    name: 'Pepperoni Pizza',
    price: 12,
    description: 'Classic pepperoni with mozzarella cheese and tomato sauce',
    image: pepperonipizza,
  },
  chickenfajita: {
    name: 'Chicken Fajita Pizza',
    price: 14,
    description: 'Spicy chicken with fajita vegetables and Mexican cheese',
    image: chikenfajitapizza,
  },
  chickentikka: {
    name: 'Chicken Tikka Pizza',
    price: 13,
    description: 'Tandoori-style chicken with tangy tikka sauce and mozzarella',
    image: chickentikkapizza,
  },
  fourcheese: {
    name: 'Four Cheese Pizza',
    price: 15,
    description: 'A mix of mozzarella, cheddar, parmesan, and gouda cheeses',
    image: fourcheesepizza,
  },
  spicybeef: {
    name: 'Spicy Beef Pizza',
    price: 14,
    description: 'Spicy beef with onions, jalapeños, and melted cheese',
    image: spicybeefpizza,
  },
  veggiesupreme: {
    name: 'Veggie Supreme Pizza',
    price: 12,
    description: 'Mushrooms, peppers, onions, and olives on a veggie base',
    image: veggiesupremepizza,
  },
  margherita: {
    name: 'Margherita Pizza',
    price: 10,
    description: 'Classic pizza with fresh tomatoes, basil, and mozzarella',
    image: margheritapizza,
  },
},

// Wings
wings : {
  bakedchickenwings: {
    name: 'Baked Chicken Wings',
    price: 2,
    description: 'Tender, juicy baked wings with your choice of seasoning',
    image: bakedchickenwings,
  },
  BBQwings: {
    name: 'BBQ Wings',
    price: 2.1,
    description: 'Sweet and tangy BBQ sauce coated on crispy wings',
    image: BBQwings,
  },
  heartchickenwings: {
    name: 'Heart Chicken Wings',
    price: 1.2,
    description: 'Wings with a bold, smoky flavor and spicy kick',
    image: heartchickenwings,
  },
  koreanhotwings: {
    name: 'Korean Hot Wings',
    price: 1.5,
    description: 'Sweet and spicy Korean-style wings with gochujang sauce',
    image: koreanhotwings,
  },
},

// Fries
 fries : {
  loadedfries: {
    name: 'Loaded Fries',
    image: loadedfries.src,
    link: "/loadedfries",
    price: 1.5,
    description: 'Crispy fries topped with cheese, bacon, and sour cream',
  },
  sweetpotatofries: {
    name: 'Sweet Potato Fries',
    image: sweetpotatofries.src,
    link: "/sweetpotatofries",
    price: 1.6,
    description: 'Crispy sweet potato fries with a hint of cinnamon',
  },
  steakfries: {
    name: 'Steak Fries',
    image: steakfries.src,
    link: "/steakfries",
    price: 2.5,
    description: 'Thick-cut fries with a savory flavor and crispy texture',
  },
},

// Pasta
pasta : {
  spaghetti: {
    name: 'Spaghetti',
    image: spaghettipasta.src,
    link: "/spaghetti",
    price: 8,
    description: 'Classic spaghetti with rich tomato marinara sauce',
  },
  penne: {
    name: 'Penne',
    image: pennepasta.src,
    link: "/penne",
    price: 7,
    description: 'Penne pasta with creamy Alfredo sauce and grilled chicken',
  },
  linguine: {
    name: 'Linguine',
    image: linguinepasta.src,
    link: "/linguine",
    price: 8,
    description: 'Linguine pasta with garlic, olive oil, and fresh herbs',
  },
},

// Drinks
drinks : {
  coke: {
    name: 'Coke',
    image: cocacolacan.src,
    link: "/coke",
    price: 2,
    description: 'Refreshing carbonated cola drink',
  },
  sprite: {
    name: 'Sprite',
    image: spritecan.src,
    link: "/sprite",
    price: 2,
    description: 'Lemon-lime soda with a crisp, refreshing taste',
  },
  fanta: {
    name: 'Fanta',
    image: fantacan.src,
    link: "/fanta",
    price: 2,
    description: 'Sweet orange-flavored soda',
  },
  pepsi: {
    name: 'Pepsi',
    image: pepsican.src,
    link: "/pepsi",
    price: 2,
    description: 'Classic cola drink with a balanced taste',
  },
  water: {
    name: 'Water',
    image: waterbottle.src,
    link: "/waterbottle",
    price: 1.5,
    description: 'Pure, refreshing water to stay hydrated',
  },
},

// Desserts
desserts : {
  cheesecake: {
    name: 'Cheesecake',
    price: 12,
    description: 'Creamy cheesecake with a buttery crust and rich topping',
    image: CheeseCake,
  },
  chocolatebrownies: {
    name: 'Classic Chocolate Brownies',
    price: 2,
    description: 'Fudgy chocolate brownies with a rich cocoa flavor',
    image: ClassicChocolateBrownies,
  },
  donuts: {
    name: 'Donuts',
    price: 0.8,
    description: 'Soft, fluffy donuts with a sweet glaze and toppings',
    image: Donuts,
  },
  redvelvetbrownies: {
    name: 'Red Velvet Brownies',
    price: 1.6,
    description: 'Delicious red velvet brownies with a cream cheese swirl',
    image: RedVelvetBrownies,
  },
  vanillaCupcakes: {
    name: 'Vanilla Cupcakes',
    price: 1.5,
    description: 'Soft vanilla cupcakes topped with fluffy buttercream frosting',
    image: VanillaCupcakes,
  },
},

// Coffee
coffee : {
  cappuccino: {
    name: 'Cappuccino',
    price: 7,
    description: 'Rich espresso with steamed milk and a layer of foam',
    image: Cappuccino,
  },
  caramelicedlatte: {
    name: 'Caramel Iced Latte',
    price: 8,
    description: 'Smooth espresso with caramel syrup and chilled milk over ice',
    image: CaramelIcedLatte,
  },
  chocolatefrappe: {
    name: 'Chocolate Frappe',
    price: 7,
    description: 'Blended iced coffee with rich chocolate and whipped cream',
    image: ChocolateFrappe,
  },
  coldcoffee: {
    name: 'Cold Coffee',
    price: 8,
    description: 'Refreshing iced coffee with milk and a hint of sweetness',
    image: ColdCoffee,
  },
},

// Deals
deals : {
  deal1: {
    name: 'Family Feast Combo',
    price: 15,
    description: 'A family deal with two burgers, large fries, pasta and two drinks',
    image: deal1,
  },
  deal3: {
    name: 'Classic Burger Combo',
    price: 20,
    description: 'A delicious combo of a burger, fries',
    image: deal3,
  },
},
}

const FlavorPage=({ params: paramsPromise }) =>{
  const { category, flavor } = use(paramsPromise);

   //Validate category
 if (!menuData[category]) {
   return NotFoundPage(); // Return 404 if category is invalid
  }

  // Validate flavor
  const selectedFlavor = menuData[category][flavor];
  if (!selectedFlavor) {
   return NotFoundPage(); // Return 404 if flavor is invalid
}

  return (
    <div className="flex md:flex-row flex-col gap-10 items-center justify-center p-6 mt-20 mb-32 md:px-14">
      <div>
       <Image
        src={selectedFlavor.image}
        alt={selectedFlavor.name}
        width={300}
        height={300}
        className="w-64 h-64 object-cover rounded-lg mt-4 shadow-lg"
      />
      </div>
      <div>
      <h1 className="lg:text-6xl text-3xl font-bold text-gray-900">{selectedFlavor.name}</h1>
      <p className="lg:text-2xl  text-xl text-gray-700 my-6">{selectedFlavor.description}</p>
      <Link href="/menu" className="pt-8 text-blue-500 underline">
        Back to Menu
      </Link>
    </div>
    </div>
  );
};

export default FlavorPage;