"use client";
import React from 'react'
import Navbar from './main-header'
import Footer from './main-footer'
import { usePathname } from 'next/navigation';
import { useAuth } from '@/context/authContext';

export default function ClientLayout({children}) {
  const { user } = useAuth();
  const pathname = usePathname();
    const noHeaderFooterRoutes = ['/signup'];
    const hideOnHome = pathname === '/' && !user;
    const showHeaderFooter = !noHeaderFooterRoutes.includes(pathname.toLowerCase()) && !hideOnHome;
  return (
    <div>
      {showHeaderFooter && <Navbar  />} 
             <main className="flex-grow">{children}</main>
             {showHeaderFooter && <Footer />}
    </div>
  )
}
