import React from 'react'
import Roll from 'react-reveal/Roll'

const LanguageIcons = () => {
  return (
        <div className='md:w-[700px] sm:w-[500px] flex flex-wrap justify-center items-center mx-auto'>
        <Roll duration={2500}>
          <div>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png' alt='python' className={imageAttribute}/>
          </div>

          <div>
            <img src='https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png' alt='python' className={imageAttribute}/>
          </div>

          <div>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png' alt='java' className={imageAttribute}/>
          </div>

          <div>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png' alt='html' className={imageAttribute}/>
          </div>

          <div>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png' alt='css' className={imageAttribute}/>
          </div>

          <div>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png' alt='javascript' className={imageAttribute}/>
          </div>

          <div>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' alt='reactJS' className={imageAttribute}/>
          </div>

          <div>
            <img src='https://vasterra.com/blog/wp-content/uploads/2021/08/Tailwind-img.png' alt='tailwind' className={imageAttribute}/>
          </div>
        </Roll>
        </div>
  )
}

const imageAttribute = 'md:w-[150px] w-[100px] ease-in-out duration-500 p-5 hover:scale-110';

export default LanguageIcons