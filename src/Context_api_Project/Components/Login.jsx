import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const [username,setUserName] = useState('')
    const [password,setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username,password})
    }

  return (
    <div className='mx-12 bg-blue-500 my-12 flex flex-col p-12'>
        <h2 className='text-2xl text-center mb-5'>Login</h2>

        <input 
        type="text"
        placeholder='Username'
        value={username}
        onChange={(e) => setUserName(e.target.value)} />
        &nbsp;&nbsp;&nbsp;
        <input 
        type="text" 
        placeholder='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>
        &nbsp;&nbsp;&nbsp;
        <button onClick={handleSubmit} className='bg-black text-white p-1'>Submit</button>
    </div>
  )
}

export default Login