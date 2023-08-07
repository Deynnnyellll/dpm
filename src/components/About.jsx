import React from 'react'

const About = () => {
  return (
    <div name="about" className='text-white h-auto mt-[150px]'>
        <h1 className='md:text-8xl md:text-left text-center text-5xl font-bold p-3 text-gray-400'> About </h1>
        <div className='flex items-center flex-col'>
            <p className='md:text-3xl text-lg text-justify md:w-[1200px] w-[300px] p-3'> 
            I am Danniel P. Martinez, currently a Computer Science student of Polytechnic University of the Philippines.
            I am knowledgeable in several programming languages including C, Java, Python, HTML, CSS and JavaScript. I specialize
            in developing user interfaces and its fuctionalities and I am striving to be a Front-end Web Developer
            </p>

            <div>
                <h1 className='md:text-4xl text-2xl font-bold mt-10 text-center text-gray-400'> Learned Languages and Technology Stacks </h1>
                <LanguageIcons />
            </div>
        </div>

    </div>
  )
}

const imageAttribute = 'md:w-[150px] w-[100px] ease-in-out duration-500 p-5 hover:scale-110';

const LanguageIcons = () => {
    return (
        <div className='md:w-[700px] sm:w-[500px] flex flex-wrap justify-center items-center mx-auto'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png' alt='python' className={imageAttribute}/>
            <img src='https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png' alt='python' className={imageAttribute}/>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png' alt='java' className={imageAttribute}/>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png' alt='html' className={imageAttribute}/>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png' alt='css' className={imageAttribute}/>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png' alt='javascript' className={imageAttribute}/>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' alt='reactJS' className={imageAttribute}/>
            <img src='https://vasterra.com/blog/wp-content/uploads/2021/08/Tailwind-img.png' alt='tailwind' className={imageAttribute}/>
        </div>

    );
}


export default About