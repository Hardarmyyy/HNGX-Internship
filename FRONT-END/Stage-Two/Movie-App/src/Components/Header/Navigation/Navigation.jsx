import React from 'react'
import './Navigation.css'
import { BiSearch } from "react-icons/bi";



const Navigation = () => {


return (

<>
    <nav className='navigation'>

        <div className='logo'>
            <h1> Movie <span> Box  </span></h1>
        </div>

        <form className='search'>
            <input type='text' placeholder='What do you want to watch?' maxLength={20} />
            <BiSearch className='searchIcon'></BiSearch>
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