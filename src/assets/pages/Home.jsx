import React, { useEffect, useState } from 'react'
import MovieCard from '../../components/MovieCard'
import '../../css/Home.css';
import { searchPopularMovies,getPopularMovies } from '../../services/api';
const Home = () => {
    const [movies,setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [error, setError] = useState(null)
    const [loading,setLoading] = useState(true)
    useEffect(() => {
       const loadPopularMovies = async () => {
          try{
            const popularMovies = await getPopularMovies()
            setMovies(popularMovies)
       }catch(error){
              
       }finally{}
    },[])

    const handleSearch = (e) => {
           e.preventDefault()
           alert(searchQuery)
           setSearchQuery('-------')

    }
  return (
    <div className='home'>
        <form action="" onSubmit={handleSearch} className='search-form'>
            <input 
            type="text"
             placeholder='Search for movies'
              className='search-input'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} />
            <button className="search-button" type='submit'> Search </button>
        </form>

      <div className="movies-grid">
        {movies.map(movie =>  movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id}/>)}
      </div>
    </div>
  )
}

export default Home
