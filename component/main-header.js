"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Link from "next/link";
import foodlogo from "@/assets/foodlogo.png";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu=()=>{
      setIsOpen(false)
    }

    return (
        <>
    
        <header className="bg-yellow-600 text-white shadow-lg font-mono">
            <div className="container mx-auto flex items-center justify-between font-medium p-4">
                {/* Logo */}
                <div className="flex items-center">
                    <img
                        src={foodlogo.src}
                        alt="Food Logo"
                        className="w-10 h-10 mr-2 rounded-full"
                    />
                    <h1 className="text-lg font-bold">FoodApp</h1>
                </div>

                {/* Toggle Button for Medium and Smaller Screens */}
                <button
                    className="md:hidden p-1 text-sm rounded"
                    onClick={toggleMenu}
                >
                     <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="2x" />
                </button>

                {/* Navigation Links */}
                <nav
                    className={`md:flex md:items-center md:space-x-14 ${
                        isOpen ? "block" : "hidden"
                    } absolute md:static top-16 left-0 w-full h-1/2 md:w-auto bg-yellow-600 md:bg-transparent shadow-lg md:shadow-none z-50`}
                >
                    <ul className="md:flex md:space-x-6 text-center py-5 md:text-left">
                        <li className="p-4">
                            <Link  href="/" onClick={closeMenu}>Home</Link>
                        </li>
                        <li className="p-4">
                            <Link href="/menu" onClick={closeMenu}>Menu</Link>
                        </li>
                        <li className="p-4">
                            <Link href="/about" onClick={closeMenu}>About Our Food</Link>
                        </li>
                        <li className="p-4">
                            <Link href="/search" onClick={closeMenu}>Search</Link>
                        </li>
                        <li className="p-4">
                            <Link href="/contact" onClick={closeMenu}>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

       
        
        </>
    );
}