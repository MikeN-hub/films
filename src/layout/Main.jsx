import React, { useState, useEffect } from 'react'
import CardList from '../components/CardList'

const Main = () => {
  const URL = 'http://www.omdbapi.com/?apikey=e80bbd64'

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(`${URL}&s=matrix&`)
      .then((res) => res.json())
      .then((data) => setMovies(data.Search))
  }, [])
  console.log(movies)

  return (
    <main className='container content'>
      {movies.length ? <CardList movies={movies} /> : <h2>Loading...</h2>}
    </main>
  )
}

export default Main
