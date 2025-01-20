"use client";  
import { useState } from "react";  
import Slider from "react-slick";  
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";  import slideshowimage1 from "@/assets/slideshow/slideshowimage1.png.jpg"
import slideshowimg2 from "@/assets/slideshow/slideshowimg2.png.jpg"
import slideshowimg3 from "@/assets/slideshow/slideshowimg3.png.jpg"
import slideshowimg4 from "@/assets/slideshow/slideshowimg4.png.jpg"
import slideshowimg5 from "@/assets/slideshow/slideshowimg5.png.jpg"
import slideshowimg6 from "@/assets/slideshow/slideshowimg6.png.jpg"
export default function ImageSlideShow(){
  const imgSlideShowItems = [
      {image: slideshowimg3.src, header:"Explore Our Delicious Burger Range ",para:"Discover our mouthwatering burger range, featuring fresh ingredients and bold flavors, crafted to satisfy every craving." },
      {image: slideshowimg4.src, header:"Delicious Stick Donuts",para:"Savor the sweet perfection of our freshly made stick donuts, a treat you’ll love in every bite." },
      {image: slideshowimg5.src, header:"Creamy Strawberry Ice Cream",para:"Enjoy the rich, fruity flavor of our creamy strawberry ice cream, a delightful treat for every occasion." },
      {image: slideshowimg6.src, header:"Rich & Aromatic Coffee",para:"Savor the perfect cup of rich, aromatic coffee to energize your day." },
      {image: slideshowimg2.src, header:"Delicious Chow Burger",para:"Indulge in the mouthwatering taste of our juicy and flavorful Chow Burger." },
      
      
    ];

    const settings = {  
      dots: true,  
      infinite: true,  
      speed: 500,  
      slidesToShow: 1,  
      slidesToScroll: 1,  
      autoplay: true,  
      autoplaySpeed: 3000,  
      fade: true,  
      arrows: false,  
    };  
  
    return(
      <div className="w-full my-10">
      <Slider {...settings}>
        {imgSlideShowItems.map((slide, index) => (
          <div key={index} className="flex flex-col items-center space-y-4">
            {/* Image Section */}
            <Image
              src={slide.image}
              alt={slide.header}
              layout="responsive"
              width={16}
              height={3} // Maintains 16:9 aspect ratio
              className="rounded-lg object-cover"
            />
    
            {/* Text Section */}
            <div className="text-start px-4 sm:px-6 md:px-8 lg:px-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                {slide.header}
              </h2>
              <p className="text-sm sm:text-base md:text-lg">{slide.para}</p>
              <button className="mt-4 bg-yellow-600 text-black p-3 rounded-md">Order Now</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    
    )
}