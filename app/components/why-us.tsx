import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {BookAudio} from "lucide-react";

export default function WhyUs(){
    return (
        <section id="about">
            <h1 className="text-3xl my-10">About Us</h1>
            <div className="grid grid-cols-3 auto-rows-auto gap-5">
                <Card className="p-7 bg-transparent">
                    <CardHeader>
                        <CardTitle className="text-2xl">What We Do</CardTitle>
                    </CardHeader>
                    <CardContent>
                    At Live AudiBook, our mission is to transform the way you experience audio. We are more than just a service provider; we are the architects of immersive, high-quality soundscapes that captivate and inspire. Here's a glimpse into what we do
                    </CardContent>
                </Card>
                <Card className="p-7 col-span-2">

                </Card>
            </div>
        </section>
    )
}