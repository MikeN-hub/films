import React from 'react'
import Card from './Card'

const CardList = ({ movies }) => {
  return (
    <div className='row'>
      {movies.map((movie) => {
        return <Card key={movie.imdbID} {...movie} />
      })}
    </div>
  )
}

export default CardList
