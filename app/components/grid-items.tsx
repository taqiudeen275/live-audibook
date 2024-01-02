import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
export default  function BentoGrid(){
    return (
        <div className="grid grid-cols-5 h-full auto-rows-auto gap-5 w-full">
            <Card className="col-span-3 row-span-2 rounded-xl bg-transparent backdrop-blur-md">
                <CardHeader>
                    <CardTitle className="text-xl">Text to Speech</CardTitle>
                    <CardDescription>Unleash the Power of Words.</CardDescription>
                </CardHeader>
                <CardContent>
                    Transform written text into captivating spoken words with our Text to Speech (TTS) service. Our advanced AI algorithms ensure natural and expressive speech, allowing you to create engaging content for various applications. From automated customer support messages to immersive storytelling, our TTS service sets the standard for quality and realism.
                </CardContent>
            </Card>
            <Card className="col-span-2 row-span-2 rounded-xl bg-transparent backdrop-blur-md">
                <CardHeader>
                    <CardTitle className="text-xl">Text to Speech</CardTitle>
                    <CardDescription>Unleash the Power of Words.</CardDescription>
                </CardHeader>
                <CardContent>
                    Transform written text into captivating spoken words with our Text to Speech (TTS) service. Our advanced AI algorithms ensure natural and expressive speech, allowing you to create engaging content for various applications. From automated customer support messages to immersive storytelling, our TTS service sets the standard for quality and realism.
                </CardContent>
            </Card>
            <Card className="col-span-2 row-span-2 rounded-xl bg-transparent backdrop-blur-md">
                <CardHeader>
                    <CardTitle className="text-xl">Text to Speech</CardTitle>
                    <CardDescription>Unleash the Power of Words.</CardDescription>
                </CardHeader>
                <CardContent>
                    Transform written text into captivating spoken words with our Text to Speech (TTS) service. Our advanced AI algorithms ensure natural and expressive speech, allowing you to create engaging content for various applications. From automated customer support messages to immersive storytelling, our TTS service sets the standard for quality and realism.
                </CardContent>
            </Card>
                <Card className="col-span-3 row-span-2 rounded-xl  backdrop-blur-md bg-gradient-to-r hover:bg-gradient-to-l from-purple-500/15 to-pink-500/15">
                <CardHeader>
                    <CardTitle className="text-xl">Text to Speech</CardTitle>
                    <CardDescription>Unleash the Power of Words.</CardDescription>
                </CardHeader>
                <CardContent>
                    Transform written text into captivating spoken words with our Text to Speech (TTS) service. Our advanced AI algorithms ensure natural and expressive speech, allowing you to create engaging content for various applications. From automated customer support messages to immersive storytelling, our TTS service sets the standard for quality and realism.
                </CardContent>
            </Card>
        </div>
    );
}