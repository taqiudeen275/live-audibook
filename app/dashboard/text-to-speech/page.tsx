import MediaControl from "@/app/dashboard/text-to-speech/component/media-control";
import WorkArea from "@/app/dashboard/text-to-speech/component/work-area";

export default function TextToSpeechPage(){
    return (
        <div className="overflow-y-auto p-1">
            <div className="flex justify-between px-3">
                <h1 className="text-2xl">Text To Speech</h1>
                <MediaControl />
            </div>
            <div className="my-5">
                <WorkArea />
            </div>
        </div>
    )
}