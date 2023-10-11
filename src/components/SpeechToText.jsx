import React from 'react'
import { useState } from 'react'
import { FaMicrophone } from 'react-icons/fa'
import useSpeechRecognition from '../custom/useSpeechRecognition'

const SpeechToText = () => {
    const [activeMic, setActiveMic] = useState(false)

    const {
        text,
        startListening,
        stopListening
    } = useSpeechRecognition();

    const handleSpeechToText = () => {
        setActiveMic(!activeMic);

        if(!activeMic) {
            startListening();
        }
        else {
            stopListening();
        }
    }

  return (
    <form method='POST' action="https://getform.io/f/1cf65667-2d94-4be1-92f9-e28afb33a240" className='flex flex-col text-center items-center'>
            <h1 className='md:text-8xl text-5xl font-bold text-gray-400'> Contact </h1>
            <p className='md:text-4xl text-lg my-4 mb-10 w-[300px] md:w-auto'> Send me a message if you have any inquiries </p>
            <input type="text" placeholder='Name' name='name' required className='p-2 w-[300px] md:w-[800px] md:p-4 bg-transparent shadow-sm shadow-slate-500 duration-500 hover:shadow-md hover:shadow-slate-500 text-slate-500' />
            <input type="text" placeholder='Email' name='email' required className='p-2 w-[300px] md:w-[800px] md:p-4 bg-transparent shadow-sm shadow-slate-500 duration-500 hover:shadow-md hover:shadow-slate-500 my-4 text-slate-500' />
            <textarea 
                name="message" 
                rows="10" 
                placeholder='Message' 
                required 
                className={!activeMic ? 'bg-transparent shadow-sm shadow-slate-500 duration-500 hover:shadow-md hover:shadow-slate-500 p-2 md:p-4 text-slate-500 md:w-[800px] w-[300px] text-xl' : 'bg-transparent shadow-sm shadow-slate-500 duration-500 hover:shadow-md hover:shadow-slate-500 p-2 md:p-4 text-slate-500 md:w-[800px] w-[300px] text-xl animate-pulse'}
                value={text}
            ></textarea>
            <div 
                className={!activeMic ? 'shadow-sm shadow-slate-500 h-[70px] w-[70px] rounded-[50px] mt-4 duration-500 hover:bg-slate-700' : 'duration-500 shadow-md shadow-slate-400 bg-slate-500 h-[70px] w-[70px] rounded-[50px] mt-4 hover:bg-opacity-50'}
                onClick={handleSpeechToText}
            >
                <FaMicrophone size={40} color={!activeMic ? '#64748b' : '#0f172a'} className='ml-[14.5px] mt-[13px]'/>
            </div>
            <button type='onSubmit' className='p-2 md:p-3 mt-5 w-[200px] text-lg mb-5 ease-in-out duration-500 hover:bg-indigo-300 hover:rounded-md hover:text-slate-950 hover:font-semibold shadow-sm shadow-slate-500'> Let's talk about it </button>
    </form>
  )
}

export default SpeechToText