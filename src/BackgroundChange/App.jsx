import React, { useState } from 'react'
import Color from './Components/Color'

export default function App() {
    const [color,setColor] = useState("red");
   
  return (
    <div className='w-full h-screen duration-200' style={{background:color}}>
        <Color setColor={setColor}/>
    </div>
  )
}
