"use client"
import {NavBar} from "@/app/components/NavBar";
import {AnimatePresence, motion} from "framer-motion";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import DemoAvatar from "@/app/components/test-avatar";
import {Textarea} from "@/components/ui/textarea";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function VoiceOverLandingPage(){
    return (
        <AnimatePresence>
            <motion.div initial={{opacity:0, y: 15}} animate={{opacity:1, y: 0}} exit={{opacity:0, y: 15}} transition={{delay: 0.3}}>
                <NavBar   />
                <main className="flex h-screen space-y-10 min-h-screen flex-col items-center justify-between py-32 p-24 before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent
                    before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br
                     before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                    <motion.section initial={{ opacity: 0, x: 15 }}  whileInView={{ opacity: 1, x: 0 }} transition={{delay:0.3}} className="z-10 w-full grid grid-cols-2  xl:px-0 space-y-6 h-full place-content-center">
                        <div className="text-left">
                            <motion.h1 className="font-display text-4xl font-bold tracking-[-0.02em]   drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]" initial={{opacity: 0}} animate={{opacity:1}} transition={{delay: 0.5}}>
                                Voice Over
                            </motion.h1>
                            <motion.p className="my-7 animate-fade-up text-gray-500 [text-wrap:balance] md:text-xl">
                                Elevate your projects with professional-grade voiceovers using our Voice Over service. Whether it's a corporate presentation, marketing video, or e-learning module, our AI ensures clear, expressive, and engaging voiceovers that leave a lasting impact.
                                Say goodbye to the hassle of hiring voice actors – our technology delivers exceptional results on-demand.
                            </motion.p>
                            <Link href="" className="b" >
                                <Button >Try For Free</Button>
                            </Link>
                        </div>
                        <div className="space-y-4">
                            <h1 className="text-2xl mb-7">Demo Voices</h1>
                            <DemoAvatar  audioUrl={""} avatarUrl={""} name={"Voice Over 1"}/>
                            <DemoAvatar  audioUrl={""} avatarUrl={""} name={"Voice Over 2"}/>
                            <DemoAvatar  audioUrl={""} avatarUrl={""} name={"Voice Over 3"}/>
                        </div>
                    </motion.section>
                </main>
            </motion.div>
        </AnimatePresence>
    )
}