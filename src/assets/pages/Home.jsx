import React, { useState } from 'react'
import MovieCard from '../../components/MovieCard'

const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const movies = [
        {id:1, title: 'John Wick',release_date: '2020'},
        {id:2, title: 'Terminator',release_date: '2025'},
        {id:3, title: 'The Matrix',release_date: '2024'},
    ]
    const handleSearch = () => {

    }
  return (
    <div className='home'>
        <form action="" onSubmit={handleSearch} className='search-form'>
            <input 
            type="text"
             placeholder='Search for movies'
              className='search-input'
              value={searchQuery} />
            <button className="search-button" type='submit'> Search </button>
        </form>

      <div className="movies-grid">
        {movies.map(movie => <MovieCard movie={movie} key={movie.id}/>)}
      </div>
    </div>
  )
}

export default Home
