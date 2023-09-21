import React from 'react'
import { Images } from '../../Services/Images/Image'
import { useAuth0 } from '@auth0/auth0-react'
import LogoutButton from '../../Components/LogoutButton/LogoutButton'
import './GalleryPage.css'


const GalleryPage = () => {

const {isAuthenticated} = useAuth0()

return (

    isAuthenticated &&

    <>
        <h1> Player gallery </h1>

        <section className='gridContainer'>
            
            {Images.map((image) => 
                <img src={image.img} alt={image.alt}/>
            )}
        </section>

        <LogoutButton></LogoutButton>

    </>

)
}

export default GalleryPage