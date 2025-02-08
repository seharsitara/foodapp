import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
     <footer className="border-t border-gray-300 md:py-7 pt-4 mb-4 h-20  md:mb-0 ">
            <div className="flex md:flex-row md:justify-around items-center flex-col gap-3 ">
                <div>
                <Link href="/contact">Contact</Link>
                </div>
                <div>
                ©2025 FoodApp. All Rights Reserved. 
                </div>
                
            </div>
    
       
        </footer>
    
  )
}


