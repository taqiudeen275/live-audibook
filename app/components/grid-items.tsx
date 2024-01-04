import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Button} from "@/components/ui/button";
import {Play} from "lucide-react";
import { motion } from "framer-motion"

export default  function BentoGrid(){
    return (
        <motion.div className="grid grid-cols-5 h-full auto-rows-auto gap-5 w-full" initial={{ opacity: 0, y: 15 }}  whileInView={{ opacity: 1, y: 0 }} transition={{delay:0.2}}>

            <Card className="col-span-3 row-span-2 rounded-xl bg-transparent backdrop-blur-md">
                <CardHeader>
                    <CardTitle className="text-2xl flex justify-between">Text to Speech <Button className="rounded-full" ><Play></Play></Button></CardTitle>
                    <CardDescription>Unleash the Power of Words.</CardDescription>
                </CardHeader>
                <CardContent>
                    Transform written text into captivating spoken words with our Text to Speech (TTS) service. Our advanced AI algorithms ensure natural and expressive speech, allowing you to create engaging content for various applications. From automated customer support messages to immersive storytelling, our TTS service sets the standard for quality and realism.
                </CardContent>
            </Card>
            <Card className="col-span-2 row-span-2 rounded-xl bg-transparent backdrop-blur-md">
                <CardHeader>
                    <CardTitle className="text-2xl flex justify-between">Text to Speech <Button className="rounded-full" ><Play></Play></Button></CardTitle>
                    <CardDescription>Unleash the Power of Words.</CardDescription>
                </CardHeader>
                <CardContent>
                    Transform written text into captivating spoken words with our Text to Speech (TTS) service. Our advanced AI algorithms ensure natural and expressive speech, allowing you to create engaging content for various applications. From automated customer support messages to immersive storytelling, our TTS service sets the standard for quality and realism.
                </CardContent>
            </Card>
            <Card className="col-span-2 row-span-2 rounded-xl bg-transparent backdrop-blur-md">
                <CardHeader>
                    <CardTitle className="text-2xl flex justify-between">Text to Speech <Button className="rounded-full" ><Play></Play></Button></CardTitle>
                    <CardDescription>Unleash the Power of Words.</CardDescription>
                </CardHeader>
                <CardContent>
                    Transform written text into captivating spoken words with our Text to Speech (TTS) service. Our advanced AI algorithms ensure natural and expressive speech, allowing you to create engaging content for various applications. From automated customer support messages to immersive storytelling, our TTS service sets the standard for quality and realism.
                </CardContent>
            </Card>
                <Card className="col-span-3 row-span-2 rounded-xl bg-transparent backdrop-blur-md">
                <CardHeader>
                    <CardTitle className="text-2xl flex justify-between">Text to Speech <Button className="rounded-full" ><Play></Play></Button></CardTitle>
                    <CardDescription>Unleash the Power of Words.</CardDescription>
                </CardHeader>
                <CardContent>
                    Transform written text into captivating spoken words with our Text to Speech (TTS) service. Our advanced AI algorithms ensure natural and expressive speech, allowing you to create engaging content for various applications. From automated customer support messages to immersive storytelling, our TTS service sets the standard for quality and realism.
                </CardContent>
            </Card>
        </motion.div>
    );
}