import React, { useState, useEffect } from 'react'
import CardList from '../components/CardList'
import Preloader from '../components/Preloader'
import Search from '../components/Search'
import SearchError from '../components/SearchError'

const Main = () => {
  const URL = 'http://www.omdbapi.com/?apikey=e80bbd64'

  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('matrix')
  const [isLoading, setIsLoading] = useState(true)
  const [isSearchError, setIsSearchError] = useState(false)

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${URL}&s=${searchValue}`)
      const data = await res.json()
      if (data.Search) {
        setIsSearchError(false)
        setIsLoading(false)
        setMovies(data.Search)
      }
      else setIsSearchError(true)
    }
    getData()
  }, [searchValue])

  const searchMovie = (text) => {
    setSearchValue(text)
  }

  return (
    <main className='container content'>
      <Search searchMovie={searchMovie} />
      {isSearchError ? <SearchError /> : <CardList movies={movies} isLoading={isLoading}/>}
    </main>
  )
}

export default Main
