import Image from "next/image"
import Link from "next/link"
import cardmenu from "@/assets/cards/cardmenu.png"
import cardaboutourfood from "@/assets/cards/cardaboutourfood.png"
import cardfororderfood from "@/assets/cards/cardfororderfood.png"
import carddesserts from "@/assets/cards/carddesserts.png"
import cardcoffee from "@/assets/cards/cardcoffee.png"

export default function Cards(){
  const cardItems=[
    {Image: cardcoffee.src, header:"Coffee", para:"Experience the rich aroma and bold flavor of our freshly brewed coffee.",button:"Order Now",link:"/coffee"},
    {Image: cardmenu.src, header:"Our Menu", para:"Explore our diverse menu, crafted to satisfy every craving with a variety of delicious options.",button:"Order Now",link:"/menu"},
    {Image: carddesserts.src, header:"Desserts", para:"Treat yourself to our delightful desserts, a perfect way to end your meal on a sweet note.",button:"Order Now", link:"/dessert"},
    {Image: cardaboutourfood.src, header:"About Our Food", para:"Enjoy the perfect mix of taste and quality with our expertly crafted dishes.",button:"Learn More", link:"/about"},
    {Image: cardfororderfood.src, header:"Order Food", para:"Order your favorite meals quickly and enjoy fresh, delicious food delivered to you.",button:"Order Now" ,link:"/orderfood"},

  ]

    return(

      <div className="cards grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-14 py-14 mx-10">
       {cardItems.map((card,index)=>(
        <div key={index} className="flex flex-col h-50 border border-gray-300 rounded-xl overflow-hidden">
        <Image 
        src={card.Image}
        alt={card.header}
        layout="responsive"
        width="12"
        height="2"
        className=" items-center justify-center"
        ></Image>
      <div className="py-4 px-4 items-center justify-center">
      <h1 className="py-4 text-center font-bold text-2xl font-sans">{card.header}</h1>
      <p className="py-4 text-center ">{card.para}</p>
      <div className="flex justify-center items-center">
      <button className="my-4 p-3 rounded-md bg-yellow-600"><Link href={card.link}>{card.button}</Link></button>
      </div>
      </div>
      </div>
       ))}
      </div>

    )
}