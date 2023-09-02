import React from 'react'
import {AiOutlineGithub, AiOutlineFacebook, AiOutlineLinkedin, AiOutlineMail} from 'react-icons/ai'
import Fade from 'react-reveal/Fade'

const Contact = () => {
  return (
    <div name="contact" className='text-white w-full h-screen mt-[250px] md:mt-[150px]'>
      <Fade duration={1500}>
      <div className='flex justify-center items-center p-4'>
          <form method='POST' action="https://getform.io/f/1cf65667-2d94-4be1-92f9-e28afb33a240" className='flex flex-col text-center items-center'>
              <h1 className='md:text-8xl text-5xl font-bold text-gray-400'> Contact </h1>
              <p className='md:text-4xl text-lg my-4 mb-10 w-[300px] md:w-auto'> Send me a message if you have any inquiries </p>
              <input type="text" placeholder='Name' name='name' required className='p-2 w-[300px] md:w-[800px] md:p-4 bg-transparent shadow-sm shadow-slate-500 duration-500 hover:shadow-md hover:shadow-slate-500 text-black' />
              <input type="text" placeholder='Email' name='email' required className='p-2 w-[300px] md:w-[800px] md:p-4 bg-transparent shadow-sm shadow-slate-500 duration-500 hover:shadow-md hover:shadow-slate-500 my-4 text-black' />
              <textarea name="message" id="" rows="10" placeholder='Message' required className='bg-transparent shadow-sm shadow-slate-500 duration-500 hover:shadow-md hover:shadow-slate-500 p-2 md:p-4 text-black md:w-[800px] w-[300px] text-xl'></textarea>
              <button type='onSubmit' className='p-2 md:p-3 mt-5 w-[200px] text-lg mb-5 ease-in-out duration-500 hover:bg-indigo-300 hover:rounded-md hover:text-slate-950 hover:font-semibold shadow-sm shadow-slate-500'> Let's talk about it </button>
          </form>
      </div>
      </Fade>

      <div className='w-[300px] flex justify-center items-center text-4xl mx-auto mb-0 md:flex-col md:absolute md:top-[30%] md:left-[-120px]'>
        <a href="https://github.com">
          <div className='bg-[#333333] p-3 rounded-tl-2xl md:rounded-tr-2xl md:rounded-tl-none ease-in-out duration-100 hover:translate-y-[-10px] md:hover:translate-y-0 md:hover:translate-x-2'>
            <AiOutlineGithub />
          </div>
        </a>

        <a href="https://www.facebook.com">
          <div className='bg-[#4267b3] p-3 ease-in-out duration-100 hover:translate-y-[-10px] md:hover:translate-y-0 md:hover:translate-x-2 sm'>
            <AiOutlineFacebook />
          </div>
        </a>

        <a href="https://www.linkedin.com">
          <div className='bg-[#333333] p-3 ease-in-out duration-100 hover:translate-y-[-10px] md:hover:translate-y-0 md:hover:translate-x-2 sm'>
            <AiOutlineLinkedin />
          </div>
        </a>

        <a href="https://mail.google.com">
          <div className='bg-[#ea4335] p-3 rounded-tr-2xl md:rounded-br-2xl md:rounded-tr-none ease-in-out duration-100 hover:translate-y-[-10px] md:hover:translate-y-0 md:hover:translate-x-2 sm'>
            <AiOutlineMail />
          </div>
        </a>
      </div>
    </div>

  )
}

export default Contact