import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import Container from 'react-bootstrap/Container';

const MovieDetails = () => {

const {id} = useParams()

const [movieDetails, setMovieDetails] = useState(null)
const [error, setError] = useState(null)


useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=178f7aafed9b85876e9786c5d64e8b7e&append_to_response=videos`)
    .then((response) => 
        setMovieDetails(response?.data)
    )
    .catch((error) => 
        setError(error.message)
    )
}, [id])

const videos = movieDetails?.videos.results[1]
const title = movieDetails?.original_title
const releaseDate = movieDetails?.release_date
const runTime= movieDetails?.runtime
const overView = movieDetails?.overview

return (

<>   
    <Container>
        {movieDetails && 
            <>
                <iframe title="Movie Trailer" src={`https://www.youtube.com/embed/${videos?.key}`}  allowFullScreen width='100%'></iframe> 

                <p data-testid='movie-title' className='title'> Title: {title} </p>

                <p data-testid='movie-release-date' className='release date'> Release date: {releaseDate} </p>

                <p data-testid='movie-runtime' className='runtime'> Runtime: {runTime} </p>

                <p data-testid='movie-overview' className='overView'> Overview: {overView} </p>
            </>  
        }
    </Container>
</>
)
}

export default MovieDetails