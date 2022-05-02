import React from 'react'

const Card = ({ movie }) => {
  return (
    <div className='card large'>
      <div className='card-image'>
        <img className='activator' src={movie.Poster} />
      </div>
      <div className='card-content'>
        <span className='card-title'>{movie.Title}</span>
        <div className='movie-info'>
          <p>{movie.Type}</p>
          <p>{movie.Year}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
