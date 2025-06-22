import React,{useContext, userContext} from 'react'
import UserContext from '../Context/UserContext'


function Profile() {
  const {user} = useContext(UserContext)

  if(!user) return <>PleaseLogin</>

  return <div>Welcome {user.username}</div>
}

export default Profile