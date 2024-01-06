import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import Activity from "@/app/dashboard/components/activity";


export  default function MyActivitiesCard(){
    return (
        <Card className="bg-transparent w-full">
            <CardHeader>
                <CardTitle className="text-2xl">My Recent Activities</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-5 items-center justify-center">
                <Activity title={"Project 1"} thumbnail={"/logo.svg"}/>
                <Activity title={"Project 2"} thumbnail={"/logo.svg"}/>
                <Activity title={"Project 3"} thumbnail={"/logo.svg"}/>
                <Activity title={"Project 4"} thumbnail={"/logo.svg"}/>
            </CardContent>
        </Card>
    )
}