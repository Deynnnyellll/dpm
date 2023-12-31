import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Button from './Button';
import Fade from 'react-reveal/Fade'

const Hero = () => {
  return (
      <div name="home" className='text-white h-auto mt-5 md:mt-20'>
        <Fade duration={1500}>  
          <div className='max-w-[1200px] w-full md:h-[500px] h-auto mx-auto text-center flex items-center flex-col md:mt-[-50px] md:flex-row'>
            <div className='md:mr-[200px] sm:mr-0'>
              <h1 className='md:text-7xl sm:text-5xl text-4xl font-bold p-4'> Hi,  I am Danniel </h1> 
              <h1 className='md:text-7xl sm:text-4xl  text-4xl font-thin'>
              I am a <span className='text-gray-400 font-bold'>
                      <Typewriter words={['Student', 'Developer', 'Designer']} loop={true} cursor>
                          {({ currentWord }) => <>{currentWord}</>}
                      </Typewriter>
                  </span>
              </h1>
              <Button name={"Curriculum Vitae"} />
          </div>
          <Image />
          </div>
          </Fade>
      </div>

  )
}


const Image = () => {

  return (
    <img 
      src='https://i.pinimg.com/736x/a0/25/04/a025049f3035cf3db789cc4cba5dd29e.jpg' 
      alt='Profile'
      className='md:w-[400px] w-[200px] mt-5 rounded-r-full animate-none md:animate-float'
    />
  )
}


export default Hero