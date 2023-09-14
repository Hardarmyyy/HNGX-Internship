import React from 'react'
import { useNavigate } from 'react-router-dom'
import './MovieCard.css'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useContext } from 'react';
import { myMovieContext } from '../../Context/MovieContext';


const MovieCard = ({movies}) => {

const navigate = useNavigate()

const {toggleLike} = useContext(myMovieContext)

const handleMovieDetails = (id) => {
    navigate(`/movies/${id}`)
}

const handleLike = (id) => {
    toggleLike(id)
}

const handleUnLike = (id) => {
    toggleLike(id)
}

return (

<>
    {movies.map((movie) => 

        <div key={movie.id} data-testid='movie-card' className='cardContainer'>

            {movie.like ? 
                <AiFillHeart className='likeIcon' onClick={() => {handleLike(movie.id)}}></AiFillHeart>
            : 
                <AiOutlineHeart className='unlikeIcon' onClick={() => {handleUnLike(movie.id)}}></AiOutlineHeart>
            }

            <img src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} alt={movie?.title} data-testid='movie-poster'/>

            <p data-testid='movie-title'> {movie?.original_title} </p>

            <p data-testid='movie-release-date'> {movie?.release_date} </p>

            <button onClick={() => {handleMovieDetails(movie.id)}}> Details </button>

        </div>

    )}
</>

)
}

export default MovieCard