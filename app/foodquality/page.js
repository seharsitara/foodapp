import React from 'react'
import Image from "next/image"
import meat from "@/assets/about/foodQuality/meatpic.jpg"
import potatos from "@/assets/about/foodQuality/potatopic.jpg"
import milk from "@/assets/about/foodQuality/milk.jpg"
import cardfororder from "@/assets/about/foodQuality/cardfororder.png"
import foodQualityimg from "@/assets/about/foodQuality/foodqualityimg.png"

export default function FoodQuality() {
  const aboutcard=[
    {Image: meat.src,header:"100% Pure Meat and Fresh Buns", para:"Our beef sandwiches are made with 100% halal beef, free from additives, while our chicken uses deboned breast meat or muscle cuts for the Spicy Crispy Chicken Deluxe. Paired with freshly baked, soft buns, every bite delivers unbeatable quality and flavor, meeting the highest halal standards."},
    {Image: milk.src,header:"100% Pure Milk for Unmatched Quality", para:"We use only 100% pure, high-quality milk sourced from trusted suppliers. Free from additives and preservatives, our milk ensures rich flavor and freshness in every sip or recipe, meeting the highest standards of quality and care."},
    {Image: potatos.src, header:"Fries with a Natural Crisp",para:"Our fries stand out with their irresistible crispiness. The secret? It begins with premium-quality potatoes sourced from trusted suppliers. These potatoes are cooked to perfection in 100% pure vegetable oil, free from any added fats or artificial flavors. A touch of salt is added post-cooking to enhance their natural taste."},
    {Image: cardfororder.src,header:"Safe and Sound Every Step of the Way", para:"We implement a rigorous system to ensure food safety from the very beginning to the moment it reaches our customers. This process guarantees quality at every stage, from our trusted regional suppliers' production lines to the kitchens in our restaurants."},
    ]
  return (
    <>
    <div className="flex flex-col items-center my-10 w-full">
  <h1 className="text-red-700 font-sans md:text-4xl text-2xl text-center font-bold mb-6">
    Food Quality
  </h1>
  <div className="w-full md:px-20 px-10 py-10">
    <Image
      src={foodQualityimg}
      alt="A girl with food"
      layout="responsive"
      width={19} // Ensure the width and height match the image's aspect ratio
      height={12}
      className="w-full h-screen object-cover rounded-lg"
    />
  </div>
  <div className='py-10 px-16'>
    <p >We prioritize quality at every step, from sourcing to serving. Our beef and chicken are 100% halal, pure, and free from additives, with chicken crafted from premium cuts. Freshly baked buns and 100% pure milk enhance the taste and freshness of every product. Prepared with care and monitored rigorously, our food meets the highest safety and quality standards for an unforgettable dining experience.</p>
  </div>
  <div className="cards grid md:grid-cols-2 grid-cols-1 gap-14 py-14 mx-10">
       {aboutcard.map((card,index)=>(
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
      </div>
      </div>
       ))}
      </div>
</div>

    
    
    
    </>
   
  )
}
    
