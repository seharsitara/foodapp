import React from 'react'
import Image from "next/image"
import image from "@/assets/contact/contactimg.jpg"
import Link from 'next/link'


export default function Contact() {
  const contactCards=[
    {header:"Suggestion",para:"Have an idea to make things better? We'd love to hear your suggestions! Your insights help us improve and create an even better experience for everyone.",button:"Click Here",link:"/suggestion"},
    {header:"Complaint", para:"Facing an issue? Let us know! We're here to listen and resolve your concerns promptly to ensure your satisfaction.",button:"Click Here",link:"/complaint"},
    
    ]
  return (
    <>
    <div className="flex flex-col items-center my-10 w-full">
  <h1 className="text-red-700 font-sans md:text-4xl text-2xl text-center font-bold mb-6">
   Contact Us
  </h1>
  <div className="w-full md:px-20 px-10 py-10">
    <Image
      src={image}
      alt="A girl with food"
      layout="responsive"
      width={19} // Ensure the width and height match the image's aspect ratio
      height={12}
      className="w-full h-screen object-cover rounded-lg"
    />
  </div>
  <div className="cards grid md:grid-cols-2 grid-cols-1 gap-14 py-14 md:px-20 px-10">
       {contactCards.map((card,index)=>(
      <div key={index} className="py-4 px-4 items-center justify-center border border-gray-300 rounded-xl">
      <h1 className="py-4 text-center font-bold text-2xl font-sans text-red-700">{card.header}</h1>
      <p className="py-4 text-center ">{card.para}</p>
      <div className='flex justify-center items-center'>
        <button className='bg-yellow-600 text-white p-4 m-5 rounded-lg'><Link href={card.link}>{card.button}</Link></button>
        </div>
       </div>
       ))}
      </div>
</div>

    
    
    
    </>
   
  )
}
    
