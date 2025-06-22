import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/9520140503')
        .then((res) => res.json())
        .then((data) => setData(data))
    },[])
  return (
    <div className='text-center m-4 bg-gray-400 text-white p-4 text-2xl'>
        {data ? <>
            <h1>{data.login}</h1>
             <h1>Github Followers:{data.followers}</h1>
            <img src="data.avatar_url" alt={data.login}  style={{width:"200px"}}/>
        </>:
        <>
            <p>Loading .... </p>
        </>}
    </div>
  )
}

export default Github