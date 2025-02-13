import React from 'react'
import ImageSlideShow from "@/component/image-slideshow";
import Cards from "@/component/cards";


export default function homePage() {
  return (
    <>
      
      <main className="flex-grow">
      <ImageSlideShow></ImageSlideShow>
      <Cards></Cards>
      </main>

    </>
  )
}

