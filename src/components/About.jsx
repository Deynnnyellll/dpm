import React from 'react'
import LanguageIcons from './LanguageIcons'
import Fade from 'react-reveal/Fade'

const About = () => {
  return (
    <Fade duration={1500}>
        <div name="about" className='text-white h-auto mt-[200px]'>
            <h1 className='md:text-8xl md:text-left text-center text-5xl font-bold p-3 text-gray-400'> About </h1>
            <div className='flex items-center flex-col'>
                <p className='md:text-3xl text-lg text-justify md:w-[1200px] w-[300px] p-3'> 
                I am Danniel P. Martinez, currently a Computer Science student of Polytechnic University of the Philippines.
                I am knowledgeable in several programming languages including C, Java, Python, HTML, CSS and JavaScript. I specialize
                in developing user interfaces and its fuctionalities and I am striving to be a Front-end Web Developer
                </p>

                <div>
                    <h1 className='md:text-4xl text-2xl font-bold mt-10 text-center text-gray-400 mx-auto'> Learned Languages and Technology Stacks </h1>
                    <LanguageIcons />
                </div>
            </div>
        </div>
    </Fade>

  )
}


export default About