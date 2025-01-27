import Image from "next/image"
import Link from "next/link"
import aboutfood from "@/assets/about/aboutfood.png"
import foodQuality from "@/assets/about/foodQuality.png"
import foodIngredients from "@/assets/about/foodIngredients.png"
export default function About(){

  const aboutcard=[
    {Image: foodQuality.src, header:"Food Quality",button:"Learn More",link:"/foodquality"},
    {Image: foodIngredients.src, header:"Our Ingredients",button:"Learn More",link:"/ouringredients"},
    ]

  return (
    <>
    <div className="flex flex-col items-center my-10 w-full">
  <h1 className="text-red-700 font-sans md:text-4xl text-2xl text-center font-bold mb-6">
    About Our Food
  </h1>
  <div className="w-full md:px-20 px-10 py-10">
    <Image
      src={aboutfood}
      alt="A girl with food"
      layout="responsive"
      width={19} // Ensure the width and height match the image's aspect ratio
      height={12}
      className="w-full h-screen object-cover rounded-lg"
    />
  </div>
  <div className="w-full cards grid md:grid-cols-2 grid-cols-1 gap-14 py-14 md:px-20 px-12">
       {aboutcard.map((card,index)=>(
        <div key={index} className="flex flex-col h-50 border border-gray-300 rounded-xl overflow-hidden">
        <Image 
        src={card.Image}
        alt={card.header}
        layout="responsive"
        width={12}
        height={2}
        className=" items-center justify-center"
        ></Image>
      <div className="py-4 px-4 items-center justify-center">
      <h1 className="py-4 text-center font-bold text-2xl font-sans">{card.header}</h1>
      <div className="flex justify-center items-center">
      <button className="my-4 p-3 rounded-md bg-yellow-600"><Link href={card.link}>{card.button}</Link></button>
      </div>
      </div>
      </div>
       ))}
      </div>
</div>

    
    
    
    </>
   
  )
}