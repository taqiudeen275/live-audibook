import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {CheckCircle} from "lucide-react";
import {Button} from "@/components/ui/button";

const VoiceOverPlan :PlanProps[] = [
    {
        price: "Free",
        title: "Starter Plan",
        features: ["10,000 words per month", "5 audio export"],
        btnText: "Try For Free"
    },
    {
        price: "$10",
        title: "Pro Plan",
        features: ["Unlimited words per month", "PDF import support", "Unlimited audio export"],
        btnText: "Upgrade To Pro",
        isPro: true,
    },
]

const VoiceClonePlan :PlanProps[] = [
    {
        price: "Free",
        title: "Starter Plan",
        features: ["15,000 words per month", "3 audio export", "Audio Book",],
        btnText: "Try For Free"
    },
    {
        price: "$15",
        title: "Pro Plan",
        features: ["Unlimited words per month", "PDF import support", "Unlimited audio export","Audio Book Support", "Voice Cloning Support",],
        btnText: "Upgrade To Pro",
        isPro: true,
    },
]
const SuperPackPlan :PlanProps[] = [
    {
        price: "35",
        title: "Pro Plan",
        features: ["Unlimited words per month", "PDF import support", "Unlimited audio export", "Voice Cloning Support", "Audio Book Support",],
        btnText: "Upgrade To Pro",
        isPro: true
    },
    {
        price: "$50",
        title: "Premium Plan",
        features:  ["Unlimited words per month", "PDF import support", "Unlimited audio export", "Voice Cloning Support", "Audio Book Support", "Custom Audio Book Experience Support"],
        btnText: "Upgrade To Premium",
        isPro: true,
    },
]
export default function Pricing(){

    return (
    <div className="w-full space-y-10">
        <div className="text-center">
            <h1 className="text-3xl">Pricing</h1>
            <h3 className="text-sm">Our plans are designed to provide the best value for your investment.</h3>
        </div>
        <div className="flex items-center space-x-4 divide-x-2 gap-5">
            <div className="before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                <h1 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-red-600 to-purple-400 hover:bg-gradient-to-l transition-colors">Voice Over Plan & Text To Speech</h1>
            </div>
            {VoiceOverPlan.map(plan => <Plan key={plan.title} price={plan.price} features={plan.features} title={plan.title}  btnText={plan.btnText} isPro={plan.isPro} />)}
        </div>
        <div className="flex items-center justify-between space-x-4 gap-5">
            {VoiceClonePlan.map(plan => <Plan key={plan.title} price={plan.price} features={plan.features} title={plan.title}  btnText={plan.btnText} isPro={plan.isPro} />)}
            <div className="before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                <h1 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-red-600 to-purple-400 text-right hover:bg-gradient-to-l transition-colors">Audio Book & Voice Clone Plan</h1>
            </div>
        </div>
        <div className="flex items-center justify-between gap-7 flex-col">
            <div className="before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
                <h1 className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-red-600 to-purple-400 text-center hover:bg-gradient-to-l transition-colors">SuperPack Plan</h1>
            </div>
            <div className="flex items-center justify-between gap-5">
                {SuperPackPlan.map(plan => <Plan key={plan.title} price={plan.price} features={plan.features} title={plan.title}  btnText={plan.btnText} isPro={plan.isPro} />)}
            </div>
        </div>
    </div>
)
}

interface  PlanProps{
    title: string;
    price: string;
    features: Array<string>;
    btnText:string;
    isPro? : boolean;
}
function Plan({title, price, features, btnText,isPro}:PlanProps){
    return (
        <Card className="bg-transparent px-5 py-7 ">
            <CardHeader className="text-center">
                <CardDescription>{title}</CardDescription>
                <CardTitle className="text-4xl">{price} <sup className="text-sm">{isPro && "per Month"}</sup></CardTitle>
            </CardHeader>
            <CardContent className="py-3 space-y-5 text-center">
                {features.map(feature => <div key={title + "plan"} className="flex space-x-4 text-left"> <CheckCircle /> <h3>{feature}</h3>  </div>)}
                <Button >{btnText}</Button>
            </CardContent>
        </Card>
    )
}