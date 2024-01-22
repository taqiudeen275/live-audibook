"use client"
import {Nav} from "@/app/dashboard/components/nav";
import {Archive, ArchiveX, BookAudio, File, FileAudio, Home, MenuIcon, Send, Trash2} from "lucide-react";
import * as React from "react";
import {TooltipProvider} from "@/components/ui/tooltip";
import {Button} from "@/components/ui/button";
import {useState} from "react";
import {NewProjectMenu} from "@/app/dashboard/components/new-project";

export default function Sidebar (){
    const [isCollapsed,setCollapsed] = useState(false);

    return (
        <TooltipProvider delayDuration={0}>
        <div className="p-5 sm:overflow-y-auto sm:h-[92vh] sm:w-[240px] border-r">
            <NewProjectMenu />
            <div className="my-5">
                <h1>My Projects</h1>
                <Nav
                    links={[
                        {
                            title: "Home",
                            label: "",
                            icon: FileAudio,
                            variant: "ghost",
                            href: "#"
                        },
                        {
                            title: "DOR",
                            label: "",
                            icon: BookAudio,
                            variant: "ghost",
                            href: "#"
                        },
                        {
                            title: "Untitled Project",
                            label: "",
                            icon: FileAudio,
                            variant: "ghost",
                            href: "#"
                        },

                    ]}
                />
            </div>
        </div>
        </TooltipProvider>
    )
}
