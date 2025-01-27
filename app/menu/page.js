import Link from "next/link"
import Burgers from "@/assets/burger.png"
import Coffee from "@/assets/coffee.png.jpg"
import Drinks  from "@/assets/drinks.png.jpg"
import Fries   from "@/assets/fries.png.jpg"
import Pastas from "@/assets/pasta.png"
import Pizzas from "@/assets/pizza.png"
import Wings from "@/assets/wings.png"
import Desserts from "@/assets/desserts.png.jpg"
import Deals from "@/assets/deals.png.jpg"
export default function Menu(){
  const menuItems = [
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
  return (
    <>
    <div className="w-full mb-32">
    <h1 className="mx-auto mt-12 text-center text-2xl font-semibold text-red-700">Our Menu</h1> 
    <ul className="w-full container mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-6 gap-5 mt-14 lg:pl-14 pl-20">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="flex flex-row items-center space-x-4  rounded-md "
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
    </>
  
  )
}