import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import './LoginButton.css'



const LoginButton = () => {

const {loginWithRedirect, isAuthenticated} = useAuth0()

return (

    !isAuthenticated && 

    <div className='loginContainer'>
        <h1> Auth0 Login </h1>

        <button onClick={() => loginWithRedirect()}> Login </button>
    </div>
    

)
}

export default LoginButton