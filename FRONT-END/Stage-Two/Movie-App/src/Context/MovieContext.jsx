import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const myMovieContext = createContext()


const MovieContext = ({children}) => {

const [initialState, setInitialState] = useState({
    movie: [],
    error: null
})

const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Mzk4ODc0YjQxMzJmYmI3NTlhNjlhZmVjNWI5Y2Q0YyIsInN1YiI6IjY1MDIxM2Y4ZTBjYTdmMDBhZTNmZWI0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3L8oPIq8nu5EzTCorf8-Vb53S0nwjYI584QpCxiYl0s'
    }
}

useEffect(() => {
    axios
    .request(options)
    .then((response) => {
        const data = response.data.results
        const updateMovies = data.map((movie) => {return {...movie, like: false}})
        setInitialState((initialState) => {return {...initialState, movie: updateMovies}});
    })
    .catch((error) => {
        setInitialState((initialState) => {return {...initialState, error: error.message}});
    })
}, [])

const toggleLike = (id) => {
    const updateMovie = initialState.movie.map((movie) => movie.id === id ? {...movie, like: !movie.like} : movie)
    setInitialState((initialState) => {return {...initialState, movie: updateMovie}})
}

const value = {
    initialState, 
    toggleLike
}

return (

    <myMovieContext.Provider value={value}>
        {children}
    </myMovieContext.Provider>
)
}

export default MovieContext