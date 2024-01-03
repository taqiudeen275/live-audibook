import Image from 'next/image'
import {NavBar} from "@/app/components/NavBar";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import BentoGrid from "@/app/components/grid-items";
import DemoAvatar from "@/app/components/test-avatar";
import Pricing from "@/app/components/pricing";
import WhyUs from "@/app/components/why-us";
import Footer from "@/app/components/footer";

export default function Home() {
  return (
    <>
        <NavBar   />
      <main className="flex space-y-10 min-h-screen flex-col items-center justify-between py-32 p-24 before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <section className="z-10 w-screen max-w-xl px-5 xl:px-0 space-y-6">
              <p className="mt-6 animate-fade-up text-center text-gray-500 [text-wrap:balance] md:text-xl">
                  Welcome to Live Audibook
              </p>
              <h1 className="text-center font-display text-4xl font-bold tracking-[-0.02em]   drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]">
                  Your Gateway to Exceptional Audio Experiences!.

              </h1>
              <p className="mt-6 animate-fade-up text-center text-gray-500 [text-wrap:balance] md:text-xl">
                  <Link href="" className="b" >
                      <Button >Try Now For Free</Button>
                  </Link>
              </p>

          </section>
          <section className="w-screen px-32 flex justify-between py-5" >
              <DemoAvatar  audioUrl={""} avatarUrl={""} name={"Male Voice 1"}/>
              <DemoAvatar  audioUrl={""} avatarUrl={""} name={"Male Voice 2"}/>
              <DemoAvatar  audioUrl={""} avatarUrl={""} name={"Female Voice 1"}/>
              <DemoAvatar  audioUrl={""} avatarUrl={""} name={"Female Voice 2"}/>

          </section>
          <section className=" w-screen px-32 py-32">
              <BentoGrid />
          </section>
          <section className="mb-10">
              <Pricing />
          </section>
          <WhyUs />
       </main>
        <Footer />
    </>
  )
}
