import Link from "next/link"
import Image from "next/image"
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
  { name: "Burgers", image: Burgers.src, link: "/menu/burgers" },
  { name: "Pizzas", image: Pizzas.src, link: "/menu/pizzas" },
  { name: "Pasta", image: Pastas.src, link: "/menu/pasta" },
  { name: "Wings", image: Wings.src, link: "/menu/wings" },
  { name: "Fries", image: Fries.src, link: "/menu/fries" },
  { name: "Drinks", image: Drinks.src, link: "/menu/drinks" },
  { name: "Coffee", image: Coffee.src, link: "/menu/coffee" },
  { name: "Desserts", image: Desserts.src, link: "/menu/desserts" },
  { name: "Deals", image: Deals.src, link: "/menu/deals" },
  ]
  return (
    <>
    <div className="w-full min-h-screen flex flex-col items-center p-6 mt-10 mb-20">
      <h1 className="text-3xl font-bold text-red-700 mb-6">Our Menu</h1>
      <ul className="w-full mt-12 max-w-4xl grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 lg:px-0 md:px-10
      px-16">
        {menuItems.map((item, index) => (
          <li key={index} className="flex flex-col items-center p-4 shadow-md rounded-lg bg-white transition hover:scale-105">
            <Image
              className="rounded-full bg-transparent"
              src={item.image}
              alt={item.name}
              width={100}
              height={80}
            />
            <Link className="text-lg font-semibold text-black mt-3 hover:text-red-600 transition" href={item.link}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    </>
  
  )
}