import React from 'react'
import Image from "next/image"
import ourmeat from "@/assets/about/ourIngredients/ourmeat.jpg"
import ourchicken from "@/assets/about/ourIngredients/ourchicken.jpg"
import ourbun from "@/assets/about/ourIngredients/ourbun.jpg"
import ouringredientsimg from "@/assets/about/ourIngredients/ouringredientsimg.jpg"


export default function OurIngredients() {
  const aboutcard=[
      {Image: ourmeat.src,header:"Premium Halal Meat", para:"We ensure our beef and chicken are 100% halal and of the finest quality. Our beef sandwiches are made from pure, additive-free halal beef cuts, while our chicken is crafted from deboned breast meat and muscle cuts. Every bite reflects our dedication to providing safe, high-quality meat for our customers."},
      {Image: ourbun.src,header:" Freshly Baked Buns", para:"Our buns are baked daily to perfection, using the finest ingredients to deliver softness flavour. They complement our premium fillings, creating the perfect balance of taste and texture in every sandwich. Each bun is carefully crafted to enhance the overall dining experience, ensuring every bite is as satisfying as the last."},
      {Image: ourchicken.src, header:"100% Halal Chicken",para:"We take pride in using only 100% halal-certified chicken, ensuring purity and adherence to the highest quality standards. Each piece is carefully selected to provide safe and delicious meals for our customers."},
     
      ]
  return (
    <>
    <div className="flex flex-col items-center my-10 w-full">
      <h1 className="text-red-700 font-sans md:text-4xl text-2xl text-center font-bold mb-6">
        Our Ingredients
      </h1>
      <div className="w-full md:px-20 px-10 py-10">
        <Image
          src={ouringredientsimg}
          alt="A girl with food"
          layout="responsive"
          width={19} // Ensure the width and height match the image's aspect ratio
          height={12}
          className="w-full h-screen object-cover rounded-lg"
        />
      </div>
      <div className="cards grid md:grid-cols-2 grid-cols-1 gap-14 py-14 mx-10 ">
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
        
    
