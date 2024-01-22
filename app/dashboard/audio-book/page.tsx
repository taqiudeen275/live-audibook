import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {FileAudio, FileBox, Mic, Play, SmileIcon} from "lucide-react";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";

export default function AudioBookPage(){
    return (
        <div className="overflow-y-auto p-1">
            <div className="flex justify-between px-3">
                <h1 className="text-2xl">Audio Book</h1>
                <Card className="bg-transparent rounded-full p-1 space-x-2.5 flex items-center">
                    <Button variant={"ghost"} className="p-0 p-2 rounded-full">
                        <Play />
                    </Button>

                    | <Button variant={"ghost"} className="p-0 p-2 rounded-full">
                    <input type="file" id="book-file-upload"  accept=".pdf,.docx" hidden />
                    <Label htmlFor="book-file-upload">
                        <FileBox />
                    </Label>
                </Button>
                    <Button variant={"ghost"} className="p-0 p-2 rounded-full">
                        Advance
                    </Button>
                </Card>
            </div>
            <div className="my-5">
                <div className="space-y-3">
                    <Textarea className="h-[60vh]" placeholder="Paste your book here or upload a file"/>
                </div>
            </div>
        </div>
    )
}