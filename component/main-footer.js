import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
     <footer className="border-t border-gray-300 m-10 pt-12 ">
            <div className="flex md:flex-row md:justify-around items-center flex-col gap-5">
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


