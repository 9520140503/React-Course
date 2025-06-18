import React, { useState } from 'react'

export default function App() {
  const [value,setValue] = useState(0);

  const increase = function() {
    setValue(c => c+1)
  }

  const decrease = function() {
    {(value > 0) ? setValue(c => c-1): setValue(0)}
  }

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={(increase)}>Increase </button>
      <br />
      <button onClick={(decrease)}>Decrease </button>
    </div>
  )
}
