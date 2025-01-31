import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import FoodDelivery from "@/assets/cardfororder.png"
export default function OurFoodDelivery() {
  return (
    <>
      <div className="flex flex-col items-center my-10 w-full">
        <h1 className="text-red-700 font-sans md:text-4xl text-2xl text-center font-bold mb-6">
          Food Quality
        </h1>
        <div className="w-full md:px-20 px-10 py-10">
          <Image
            src={FoodDelivery}
            alt="Food delivery pic"
            layout="responsive"
            width={19} // Ensure the width and height match the image's aspect ratio
            height={12}
            className="w-full h-screen object-cover rounded-lg"
          />
        </div>
        <div className='py-10 md:px-20 px-10 font-sans'>
          <p >Our FoodApp Delivery service brings your favorite meals straight to your doorstep with speed and convenience. Whether you're craving a quick snack, a hearty meal, or a gourmet feast, we partner with top restaurants to ensure you get fresh and delicious food anytime, anywhere. With an easy-to-use interface, secure payment options, and real-time order tracking, we make food delivery hassle-free. Enjoy exclusive discounts, special offers, and a wide range of cuisines at your fingertips. Order now and experience the joy of effortless dining with FoodApp Delivery!</p>
        </div>
        <div className='w-full flex justify-center items-center mb-6'>
        <button className='bg-red-700 hover:bg-red-800 px-4 py-4 rounded-lg text-white'><Link href="/menu">Start To Order</Link></button>
      </div>
    </div>
    
    </>
  )
}
