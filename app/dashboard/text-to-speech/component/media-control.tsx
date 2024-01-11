"use client"
import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {ArrowLeftCircle, FastForward, Forward, ForwardIcon, Play, Rewind} from "lucide-react";
import VoiceSelect, {VoiceSelectProps} from "@/app/dashboard/text-to-speech/component/voice-select";


export default function MediaControl(){
    const voices: VoiceSelectProps[] = [
        {id: 1,name: "Lansa", active: true, language: "English", photo: "https://github.com/shadcn.png", gender:"Male"},
        {id: 2,name: "Juana", active: false, language: "English", photo: "https://i.pravatar.cc/60?img=69", gender:"Male"},
        {id: 3,name: "Mark", active: false, language: "English", photo: "https://i.pravatar.cc/60?img=29", gender:"Male"},
        {id: 4,name: "Alissa", active: false, language: "English", photo: "https://i.pravatar.cc/60?img=59", gender:"Male"},
    ];
    return (
        <Card className="bg-transparent rounded-full p-1 space-x-2.5 flex items-center">
            <Button variant={"ghost"} className="p-0 p-2 rounded-full">
                <Rewind />
            </Button>
            <Button variant={"ghost"} className="p-0 p-2 rounded-full">
                <Play />
            </Button>
            <Button variant={"ghost"} className="p-0 p-2 rounded-full">
                <FastForward />
            </Button>
            <VoiceSelect voices={voices}/>
        </Card>
    )
}