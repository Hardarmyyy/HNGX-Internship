import React from 'react'
import { useContext } from 'react'
import { myMovieContext } from '../../Context/MovieContext'
import Container from 'react-bootstrap/Container';
import MovieCard from '../../Components/MovieCard/MovieCard'
import Heading from '../../Components/Header/Heading';
import { Link } from 'react-router-dom';
import './Homepage.css'
import { BiChevronRight } from "react-icons/bi";


const Homepage = () => {

const {initialState} = useContext(myMovieContext) 

const {movie, error} = initialState
const orderedMovie = movie.slice(0,10)
console.log(orderedMovie)
console.log(error)

return (

<>  
    <Container fluid>

        <Heading></Heading>

        <Container fluid>

            <div className='title'>

                <h2> Featured Movie </h2>
                
                <Link> See more <BiChevronRight style={{fontSize: '24px'}}></BiChevronRight> </Link>

            </div>

            <div className='movieContainer'>
                <MovieCard movies={orderedMovie}></MovieCard>
            </div>

        </Container>

    </Container>
</>

)
}

export default Homepage