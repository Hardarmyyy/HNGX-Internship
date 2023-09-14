import React from 'react'
import { useParams } from 'react-router-dom'

const MovieDetails = () => {

const {id} = useParams()

return (

<>
    <p> {id} </p>
</>
)
}

export default MovieDetails