import React from 'react'
import { uselanguage } from '../Context/Language'


function Switcher() {
    const {language,en,hindi} = uselanguage();

    const setToEnglish = () =>{
        en();
    }
    const setToHindi = () => {
        hindi();
    }

  return (
    <div>
        <h1 className='text-4xl text-center'>{language}</h1>
         <div className='flex justify-center items-center gap-10 my-10'> 
        <button onClick={setToEnglish} className='border-2 p-1 bg-blue-600 text-white rounded-lg'>English</button>
         <button onClick={setToHindi} className='border-2 p-1 bg-blue-600 text-white rounded-lg'>Hindi</button>
         </div>
    </div>
  )
}

export default Switcher