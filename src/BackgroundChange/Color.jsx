import React from 'react'

export default function Color({setColor}) {
  return (
    <div className='fixed bottom-10 border-2 bg-red-200 p-5 left-0 inset-x-0 flex justify-center gap-10'>
        <button onClick={() => setColor("red")} className='w-fit rounded-lg p-2 m-2 bg-red-400'>Red</button>
        <button onClick={() => setColor("blue")} className='w-fit rounded-lg p-2 m-2 bg-blue-400'>Blue</button>
        <button onClick={() => setColor("yellow")} className='w-fit rounded-lg p-2 m-2 bg-yellow-400'>Yellow</button>
        <button onClick={() => setColor("orange")} className='w-fit rounded-lg p-2 m-2 bg-orange-400'>Orange</button>

    </div>
  )
}

