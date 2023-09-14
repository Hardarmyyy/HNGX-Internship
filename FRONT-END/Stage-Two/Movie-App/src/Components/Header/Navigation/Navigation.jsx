import React from 'react'
import './Navigation.css'


const Navigation = () => {


return (

<>
    <nav className='navigation'>

        <div className='logo'>
            <h1> MovieBox </h1>
        </div>

        <form className='search'>
            <input type='text' placeholder='What do you want to watch?' maxLength={40} />
        </form>

        <div className='userLogin'>

            <p> Sign in </p>

            <div className='hamburgerContainer'>
                <div className='hamburgerLineOne'></div>
                <div className='hamburgerLineTwo'></div>
            </div>
        </div>

    </nav>
</>

)
}

export default Navigation