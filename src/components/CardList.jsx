import React from 'react'
import Card from './Card'
import Preloader from './Preloader'

const CardList = ({ movies, isLoading }) => {
  return (
    <div className='cardList'>
      { isLoading ? <Preloader /> : movies.map((movie) => {
        return <Card key={movie.imdbID} movie={movie} />
      })}
    </div>
  )
}

export default CardList
