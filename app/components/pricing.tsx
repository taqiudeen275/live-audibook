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
        btnText: "Upgrade To Pro",
        isPro: true,
    },
]
export default function Pricing(){

    return (
    <div className="w-full space-y-10 h-full ">
        <div className="text-center">
            <h1 className="text-3xl">Pricing</h1>
            <h3 className="text-sm">Our plans are designed to provide the best value for your investment.</h3>
        </div>
        <div className="flex items-center space-x-4 divide-x-2">
            <h1 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-red-600 to-purple-400 ">Voice Over Plan & Text To Speech</h1>
            {VoiceOverPlan.map(plan => <Plan key={plan.title} price={plan.price} features={plan.features} title={plan.title}  btnText={plan.btnText} isPro={plan.isPro} />)}
        </div>
        <div className="flex items-center justify-between space-x-4">
            {VoiceClonePlan.map(plan => <Plan key={plan.title} price={plan.price} features={plan.features} title={plan.title}  btnText={plan.btnText} isPro={plan.isPro} />)}
            <div className="">
                <h1 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-red-600 to-purple-400 text-right">Audio Book & Voice Clone Plan</h1>
            </div>
        </div>
        <div className="flex items-center justify-between gap-7 flex-col">
            <div className="">
                <h1 className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-red-600 to-purple-400 text-center">SuperPack Plan</h1>
            </div>
            <div className="flex items-center justify-between">
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