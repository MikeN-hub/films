import React, { useState } from 'react'

const Search = ({ searchMovie }) => {
  const [inputText, setInputText] = useState('')
  const submitHandler = (e) => {
    e.preventDefault()
    searchMovie(inputText)
  }
  return (
    <form className='search' onSubmit={submitHandler}>
      <input
        type='search'
        placeholder='type here'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className='btn right' type='submit'>search</button>
    </form>
  )
}

export default Search
