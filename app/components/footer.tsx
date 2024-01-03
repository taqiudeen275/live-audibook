import Image from "next/image";
import {NavigationMenu, NavigationMenuItem, NavigationMenuList} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {Dot} from "lucide-react";

export default function Footer(){
    return (
        <footer className="w-screen px-32 bg-gradient-to-b from-red-600/5 to-transparent border-t">
        <div className=" grid grid-cols-3 py-7">
            <div>
                <h1 className="flex font-bold text-2xl items-center text-transparent  bg-clip-text bg-gradient-to-r from-red-600 to-purple-400 hover:bg-gradient-to-l transition-all cursor-pointer">
                    <Image src="logo.svg" alt="logo" width={40} height={40}></Image>
                    Live AudiBook
                </h1>
            </div>

            <div className="space-y-4 flex flex-col">
                <h1 className="text-2xl">Products</h1>
                        <Link className="flex" href="#"><Dot />Text To Speech</Link>
                        <Link className="flex" href="#"><Dot />Voice Over</Link>
                        <Link className="flex" href="#"><Dot />Voice Clone</Link>
                        <Link className="flex" href="#"><Dot />Audio Book</Link>
            </div>
            <div className="space-y-4 flex flex-col">
                <h1 className="text-2xl">Useful Links</h1>
                <Link className="flex" href="#pricing"><Dot />Pricing</Link>
                <Link className="flex" href="#about"><Dot />About</Link>
            </div>

        </div>
        <div className="flex justify-between py-7 border-t">
            <h2> © Live AudiBook Ltd. All rights reserved.</h2>
           <h2> ATS Tech</h2>
        </div>
        </footer>
    )
}