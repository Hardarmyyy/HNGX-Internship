import React from 'react'
import './Heading.css'
import Navigation from './Navigation/Navigation'
import Description from './DescriptionBox/Description'

const Heading = () => {


return (

<>
    <section className='headingContainer'>

        <img src='https://www.themoviedb.org/t/p/w533_and_h300_bestv2/vVpEOvdxVBP2aV166j5Xlvb5Cdc.jpg' />

        <Navigation></Navigation>

        <Description></Description>

    </section>
</>
)
}

export default Heading