'use client'

import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Pause, Play} from "lucide-react";

interface  Props{
    name: string;
    avatarUrl: string;
    audioUrl: string;
}

export default  function DemoAvatar({name, avatarUrl, audioUrl}: Props){
    return (
            <Card  className="max-w-max p-4 rounded-full flex items-center space-x-4 bg-transparent backdrop-blur-md bg-gradient-to-r hover:bg-gradient-to-l transition-colors from-purple-500/15 to-pink-500/15" >
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h1 className="text-xl font-bold">{name}</h1>

                <Button  className="aspect-square p-2 rounded-full"><Play  /></Button>
            </Card>

    )
}