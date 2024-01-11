import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {DeleteIcon, MoreVertical, TextIcon} from "lucide-react";
import Link from "next/link";
import {EyeOpenIcon} from "@radix-ui/react-icons";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {useState} from "react";

export interface VoiceSelectProps {
    id: number
    name: string
    photo: string
    gender: string
    language: string
    active: boolean
}


export default function VoiceSelect({voices}:{voices: VoiceSelectProps[]}) {
    const [activeVoice, setActiveVoice] = useState(voices.find(value => value.active))
    function handleClick(id: number){
        const activeVoice = voices.find(value => value.id === id)
        setActiveVoice(activeVoice)
      }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                    <AvatarImage src={activeVoice?.photo} height={60} width={60} />
                    <AvatarFallback>ACI</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel className="p-3">Select your preferred voice</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    {voices.map( voice => (<DropdownMenuItem onClick={()=> handleClick(voice.id)} className={voice.id == activeVoice?.id ? "bg-primary space-x-4": "space-x-4"}  key={voice.name}>
                            <Avatar>
                                <AvatarImage src={voice.photo} />
                                <AvatarFallback>VCI</AvatarFallback>
                            </Avatar>
                            <span>{voice.name}</span>
                    </DropdownMenuItem>))}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}