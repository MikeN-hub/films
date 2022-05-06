import React, { useState } from 'react'

const Search = ({ searchMovie }) => {
  const [search, setSearch] = useState({ text: '', type: 'all' })

  const submitHandler = (e) => {
    e.preventDefault()
    searchMovie(search.text, search.type)
  }

  const handleChange = (e) => {
    setSearch((prev) => {
      return { ...prev, type: e.target.value }
    })
  }

  return (
    <form className='search' onSubmit={submitHandler}>
      <div className='input-bar'>
        <input
          type='search'
          placeholder='type here...'
          value={search.text}
          onChange={(e) => setSearch({ ...search, text: e.target.value })}
          autoFocus
        />
        <button className='search-btn' type='submit'>
          search
        </button>
      </div>
      <div className='type-bar'>
        <div className='category'>
          <input
            type='radio'
            name='type'
            id='all'
            value={'all'}
            checked={search.type === 'all'}
            onChange={handleChange}
          />
          <label htmlFor='all'>All</label>
        </div>
        <div className='category'>
          <input
            type='radio'
            name='type'
            id='movie'
            value={'movie'}
            checked={search.type === 'movie'}
            onChange={handleChange}
          />
          <label htmlFor='all'>Movie only</label>
        </div>
        <div className='category'>
          <input
            type='radio'
            name='type'
            id='series'
            value={'series'}
            checked={search.type === 'series'}
            onChange={handleChange}
          />
          <label htmlFor='all'>Series only</label>
        </div>
      </div>
    </form>
  )
}

export default Search
