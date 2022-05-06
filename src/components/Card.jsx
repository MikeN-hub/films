import React from 'react'

const Card = ({ movie }) => {
  return (
    <div className='card'>
      <div className='card-image'>
        <img
          src={
            movie.Poster === 'N/A'
              ? `https://via.placeholder.com/218x310?text=${movie.Title.toUpperCase()}`
              : movie.Poster
          }
          width={218}
          height={310}
          alt='poster'
        />
      </div>
      <div className='card-content'>
        <span className='card-title'>{movie.Title}</span>
        <div className='card-info'>
          <p>{movie.Type}</p>
          <p>{movie.Year}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
