import React, { useState, useEffect } from 'react'
import CardList from '../components/CardList'
import Search from '../components/Search'
import SearchError from '../components/SearchError'

const API_KEY = process.env.REACT_APP_API_KEY

const Main = () => {
  const URL = `http://www.omdbapi.com/?apikey=${API_KEY}`

  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isSearchError, setIsSearchError] = useState(false)

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${URL}&s=matrix`)
      const data = await res.json()
      if (data.Search) {
        setIsSearchError(false)
        setIsLoading(false)
        setMovies(data.Search)
      } else setIsSearchError(true)
    }
    getData()
  }, [])

  const searchMovie = (text, type = 'all') => {
    // console.log('text:' + text, 'type:' + type )
    if (!text) return
    let url = ''
    type === 'all'
      ? (url = `${URL}&s=${text}`)
      : (url = `${URL}&s=${text}&type=${type}`)
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovies(data.Search))
  }

  return (
    <main className='main'>
      <Search searchMovie={searchMovie} />
      {isSearchError ? (
        <SearchError />
      ) : (
        <CardList movies={movies} isLoading={isLoading} />
      )}
    </main>
  )
}

export default Main
