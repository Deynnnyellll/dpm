import { useEffect, useState } from 'react'

let recognition = null;
let final_transcript = "";
let transcripted_text = "";

if ("webkitSpeechRecognition" in window) {
    recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.lang = "fil-PH";
}

const useSpeechRecognition = () => {
    const [text, setText] = useState("");
    const [isListening, setIsListening] = useState(false);

    useEffect(() => {
        if (!recognition) return;

        recognition.onresult = (event) => { 

            for(let i = event.resultIndex; i < event.results.length; ++i){
                //for displaying the interim results while the user is still speaking
                transcripted_text += event.results[i][0].transcript + " ";
                setText(" " + transcripted_text);
                //final transcipted text
                final_transcript += event.results[i][0].transcript + " ";
            }

        };
    }, []);

    const startListening = () => {
        setText("")
        final_transcript = "";
        setIsListening(true);
        recognition.start();
        //for debugging
        console.log(isListening)
    };

    //this function will stop the speech to text process and display the final transcription
    const stopListening = () => {
        setIsListening(false);
        recognition.stop();
        setText(final_transcript);
    }

    return {
        text,
        isListening,
        startListening,
        stopListening,
        hasRecognitionSupport: !!recognition,
    };
};

export default useSpeechRecognition;
