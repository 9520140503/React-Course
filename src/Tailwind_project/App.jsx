import React from 'react'
import Card from './Components/Card'

export default function App() {
  return <div className='flex justify-center items-center p-10 flex-col'>
      <div className='bg-green-400 p-4 rounded-lg w-fit mx-auto my-20'>TailWindCss App</div>
      <Card name="Vishesh" channel=",ychnalle"/>
      <Card name="Hani" channel="vbdjnflk" />
  </div>
  }
