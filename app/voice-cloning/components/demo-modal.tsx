"use client"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";


export  default function DemoModal(){
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="dark:bg-accent dark:hover:bg-accent/50">Upload / Record</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[540px] dark:bg-transparent dark:backdrop-blur-md">
                <Tabs defaultValue="account" className="p-2">
                    <TabsList className="grid w-full grid-cols-2 dark:bg-foreground/20">
                        <TabsTrigger value="upload">Upload File</TabsTrigger>
                        <TabsTrigger value="record">Record</TabsTrigger>
                    </TabsList>
                    <TabsContent value="upload">
                        <Card className="bg-transparent space-y-3">
                            <CardHeader>
                                <CardTitle>Upload Demo Audio File</CardTitle>
                                <CardDescription>
                                   Make sure it is at least 1min long.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <Input type={"file"} />
                            </CardContent>
                            <CardFooter>
                                <Button>Submit</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                    <TabsContent value="record">
                        <Card className="bg-transparent">
                            <CardHeader>
                                <CardTitle>Record your self</CardTitle>
                                <CardDescription>
                                    Record by reading the below text.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                "Hello, and welcome to Live Audilink. Today, we are thrilled to showcase the power of innovation in personalized audio experiences. Through our advanced Voice Cloning technology, I am now able to generate a virtual version of my own voice.

                                This technology not only reproduces the tone and pitch of my voice but also captures the nuances and unique characteristics that make it distinctly mine. Whether you're a content creator, a business professional, or someone looking to add a personal touch to your projects, our Voice Cloning service opens up a world of possibilities.

                                Now, let's explore how this virtual voice can adapt to different scenarios. I'll demonstrate a brief narration, a casual conversation, and a formal presentation—all in my own virtual voice.
                            </CardContent>
                            <CardFooter className="space-x-2.5">
                                <Button className="dark:bg-accent dark:hover:bg-accent/50">Record</Button>
                                <Button>Submit</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>

            </DialogContent>
        </Dialog>
    )
}