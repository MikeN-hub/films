import React from 'react'

const Card = ({ ...movie }) => {
  return (
    <div className='card'>
      <div className='col s8 m6 l4 xl3'>
        <div className='card large'>
          <div className='card-image'>
            <img src={movie.Poster} />
          </div>
          <div className='card-content'>
            <span className='card-title'>{movie.Title}</span>
            <div className='movie-info'>
              <p>{movie.Type}</p>
              <p>{movie.Year}</p>
            </div>
          </div>
          <div className='card-action'>
            <a href='#'>Click to get full info about movie</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
