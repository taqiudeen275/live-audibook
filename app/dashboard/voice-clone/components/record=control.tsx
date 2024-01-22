import {useReactMediaRecorder} from "react-media-recorder";

export default function  RecordView () {
    const { status, startRecording, stopRecording, mediaBlobUrl } =
        useReactMediaRecorder({ video: false });

    return (
        <div>
            <p>{status}</p>
            <button onClick={startRecording}>Start Recording</button>
            <button onClick={stopRecording}>Stop Recording</button>
            <audio src={mediaBlobUrl} controls autoPlay loop />
        </div>
    );
};