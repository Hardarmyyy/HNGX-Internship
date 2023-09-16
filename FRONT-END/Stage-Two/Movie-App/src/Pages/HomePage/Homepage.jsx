import React from 'react'
import { useContext } from 'react'
import { myMovieContext } from '../../Context/MovieContext'
import Container from 'react-bootstrap/Container';
import MovieCard from '../../Components/MovieCard/MovieCard'
import Heading from '../../Components/Header/Heading';
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';
import { BiChevronRight } from "react-icons/bi";
import './Homepage.css'



const Homepage = () => {

const {initialState} = useContext(myMovieContext) 

const {movie, error} = initialState
const orderedMovie = movie.slice(0,10)

return (

<>  
    <Container fluid>

        <Heading></Heading>

        <Container fluid className='container'>

            <div className='featured'>

                <h3> Featured Movie </h3>
                
                <Link> See more <BiChevronRight style={{fontSize: '24px'}}></BiChevronRight> </Link>

            </div>

            <div className='movieContainer'>
                <MovieCard movies={orderedMovie}></MovieCard>
            </div>

        </Container>

        <Footer></Footer>

    </Container>
</>

)
}

export default Homepage