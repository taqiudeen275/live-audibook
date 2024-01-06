import Link from "next/link";
import Image from "next/image";
import React from "react";
import {UserButton} from "@clerk/nextjs";
import {ModeToggle} from "@/app/components/ThemeToggle";
import {Button} from "@/components/ui/button";
import {MenuIcon} from "lucide-react";

export default function NavBar(){
    return (
        <nav className={`px-5 items-center py-1  top-0 w-full flex justify-between bg-t bg-white/0 z-30 transition-all h-[60px]`}>
            <Link href="/" className="flex items-center" >
                <Image src="logo.svg" width={45} height={45} alt={'logo'} />
                <span className="text-transparent text-xl font-bold hidden sm:flex  bg-clip-text bg-gradient-to-r from-red-600 to-purple-400 hover:bg-gradient-to-l transition-all">Live AudiBook</span>
            </Link>
            <div className="space-x-2.5 hidden sm:flex">
                <Link href="#">
                    <Button>Upgrage</Button>
                </Link>
                <UserButton />
                <ModeToggle />
            </div>
            <div className="sm:hidden">
                <MenuIcon />
            </div>
        </nav>
    )
}