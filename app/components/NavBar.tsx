import Image from 'next/image'
import React from 'react'
import {ModeToggle} from './ThemeToggle'
import {UserButton} from "@clerk/nextjs";
export const NavBar = () => {
  return (
    <nav className="flex px-24 items-center justify-between py-1 backdrop-blur-md border-y fixed w-screen">
        <Image src="logo.svg" width={50} height={50} alt={'logo'} />
        <div className="flex space-x-2.5">
            <UserButton />
            <ModeToggle />
        </div>
    </nav>
  )
}
