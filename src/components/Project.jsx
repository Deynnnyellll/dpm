import React from 'react'
import Fade from 'react-reveal/Fade'

const Project = () => {
  return (
    <div name="project" className='text-white mt-[150px]'>
      <Fade duration={1500}>
        <h1 className='md:text-8xl text-5xl font-bold p-3 text-gray-400 mb-10 text-center md:text-left'> Project </h1>
      </Fade>
      <div className='flex flex-col items-center gap-10 md:flex-row md:flex-wrap md:justify-center md:w-[1300px] mx-auto mb-10'>
      <Fade>
        <div>
          <div className={container}>
                  <img src='https://drive.google.com/uc?export=download&id=1rjQJBDgjIkuc83mFahiNM574kGT9iTuQ' alt='AI' className={image} />
                  <h1 className='text-sm md:text-xl text-center font-semibold mt-2'> AI - Driven Personal Financial Manager </h1>
                  <div className='flex items-center gap-4'>
                    <LanguageUsed language={"Python"} />
                    <LanguageUsed language={"Tkinter"} />
                  </div>
            </div>
          </div>

          <div>
            <div className={container}>
                  <img src='https://drive.google.com/uc?export=download&id=1oIMNrr6uJyjWyr19eSQ92D3-RmPn98Z_' alt='Sho3w3ar1st' className={image} />
                  <h1 className='text-sm md:text-xl text-center font-semibold mt-2'> Sho3w34r1st - E-Commerce </h1>
                  <div className='flex items-center gap-4'>
                    <LanguageUsed language={"HTML"} />
                    <LanguageUsed language={"CSS"} />
                    <LanguageUsed language={"Javascript"} />
                  </div>
                </div>
          </div>

          <div>
            <div className={container}>
                  <img src='https://drive.google.com/uc?export=download&id=19YDTp4PMP1DELQkp0NAd6yR1hC59heFg' alt='CCIS' className={image} />
                  <h1 className='text-sm md:text-xl text-center font-semibold mt-2'> CCIS Simple Student Enrollment System </h1>
                  <div className='flex items-center gap-4'>
                    <LanguageUsed language={"Python"} />
                    <LanguageUsed language={"Tkinter"} />
                  </div>
              </div>
          </div>

          <div>
            <div className={container}>
                  <img src='https://drive.google.com/uc?export=download&id=1MyXTvUyrK1YSi7dqSe5naaTnZA_91wem' alt='Tanglaw' className={image} />
                  <h1 className='text-sm md:text-xl text-center font-semibold mt-2'>Inventory and Sales Management System for Tanglaw Clothing </h1>
                  <div className='mt-[-10px] flex items-center gap-4'>
                    <LanguageUsed language={"Java"}/>
                    <LanguageUsed language={"Java Swing"}/>
                  </div>
              </div>
          </div>

          <div>
            <div className={container}>
                  <img src='https://drive.google.com/uc?export=download&id=1ZhupkMFNsF15gq-gz93bCf5c_-2zj0Z9' alt='Snakelet' className={image} />
                  <h1 className='text-sm md:text-xl text-center font-semibold mt-2'> Snakelet - Programming Language for Novice Programmer </h1>
                  <div className='mt-[-5px] flex items-center gap-4'>
                    <LanguageUsed language={"Python"}/>
                    <LanguageUsed language={"Terminal"}/>
                  </div>
              </div>
          </div>

            </Fade>
        </div>
    </div>
  )
}

const container = 'bg-slate-950 md:w-[400px] md:h-[330px] w-[330px] h-[270px] p-3 rounded-xl flex items-center flex-col ease-in-out duration-500 hover:scale-110 shadow-md shadow-black'
const image = 'w-[400px] h-[200px] rounded-md'

const LanguageUsed = ({language}) => {
  return (
    <div className='bg-gradient-to-b from-rose-800 to-rose-600 rounded-[15px] px-3 md:px-5 py-1 text-xs md:text-xl font-medium shadow-md shadow-black mt-4'>{language} </div>
  )
}

export default Project