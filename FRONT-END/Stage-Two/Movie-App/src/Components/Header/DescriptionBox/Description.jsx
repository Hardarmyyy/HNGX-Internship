import React from 'react'
import './Description.css'
import Container from 'react-bootstrap/Container';


const Description = () => {


return (

<>
    <Container className='description'>

        <h2> John Wick 3 : Parabellum </h2>

        <div>
            <img src='https://shorturl.at/xAJTV' alt='' />
            <span> 86.0 / 100</span>
        </div>

        <p> John wick is on the run after killing a member of the international assassin's guild, and with a $14 million price tag on his head, he is the target of hitmen and women everywhere.</p>

        <button> WATCH TRAILER </button>

    </Container>
</>

)
}

export default Description