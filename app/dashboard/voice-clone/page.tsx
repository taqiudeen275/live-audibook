"use client"

import {Button} from "@/components/ui/button";
import {FileAudio, Mic, Play, SmileIcon} from "lucide-react";
import {Card} from "@/components/ui/card";
import {Textarea} from "@/components/ui/textarea";
import {useReactMediaRecorder} from "react-media-recorder";
import {Label} from "@/components/ui/label";

export default function VoiceClonePage(){
    const { status, startRecording, stopRecording, mediaBlobUrl } =
        useReactMediaRecorder({ video: false });
    const referenceAudio = new Audio(mediaBlobUrl)
    return (
        <div className="overflow-y-auto p-1">
            <div className="flex justify-between px-3">
                <h1 className="text-2xl">Voice Clone</h1>
                <Card className="bg-transparent rounded-full p-1 space-x-2.5 flex items-center">
                    <Button variant={"ghost"} className="p-0 p-2 rounded-full">
                        <Play />
                    </Button>
                    <Button variant={"ghost"} onClick={status === "recording" ? stopRecording: startRecording} className="p-0 p-2 rounded-full">
                        <Mic className={status === "recording" ? "text-primary" : "" } />
                        </Button>
                        | <Button variant={"ghost"} className="p-0 p-2 rounded-full">
                        <input type="file" id="audio-file-upload"  accept=".mp3,.wav, audio/*" hidden />
                           <Label htmlFor="audio-file-upload">
                               <FileAudio />
                           </Label>
                        </Button>
                    <Button variant={"ghost"} className="p-0 p-2 rounded-full">
                        <SmileIcon />
                    </Button>
                </Card>
            </div>
            <div className="my-5">
                <div className="space-y-3">
                    <div>
                        {mediaBlobUrl && <Card className="bg-transparent  rounded-full p-2 px-4 space-x-4 flex items-center">
                              <span>Audio Source :</span> <audio controls src={mediaBlobUrl} className="h-[30px]"   />
                        </Card>}
                    </div>
                    <Textarea className="h-[60vh]"/>
                </div>
            </div>
        </div>
    )
}