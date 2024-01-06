"use client"

import Image from 'next/image'
import React from 'react'
import {ModeToggle} from './ThemeToggle'
import {UserButton} from "@clerk/nextjs";
import useScroll from "@/lib/hooks/use-scroll";
import Link from "next/link";
import {CenterNavigationMenuLinks} from "@/app/components/nav-item";
import {Button} from "@/components/ui/button";



export const NavBar = () => {
    const scrolled = useScroll(50);
  return (
    <nav  className={`px-24 items-center py-1 fixed top-0 w-full flex justify-between ${
        scrolled
            ? "border-b border-gray-200 bg-white/50 dark:border-background dark:bg-background/50 backdrop-blur-md"
            : "bg-white/0"
    } z-30 transition-all`}>
        <Link href="/" className="flex items-center" >
            <Image src="logo.svg" width={45} height={45} alt={'logo'} />
           <span className="text-transparent text-xl font-bold  bg-clip-text bg-gradient-to-r from-red-600 to-purple-400 hover:bg-gradient-to-l transition-all">Live AudiBook</span>
        </Link>
        <div className="flex" >
            <CenterNavigationMenuLinks />
        </div>
        <div className="flex space-x-2.5 items-center">
            <Link href="/dashboard" >
                <Button variant="ghost">
                    Dashboard
                </Button>
            </Link>
            <UserButton />
            <ModeToggle />
        </div>
    </nav>
  )
}
