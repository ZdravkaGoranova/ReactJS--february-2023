
import { useState, useEffect } from 'react';
import './App.css';
import MovieList from './components/MovieList.js';
//import { movies as movieData } from '../public/movies.js'


function App() {

  const [movies, setMovies] = useState([]);


  //fetch заявка за взимане на данни за списък на филми
  useEffect(() => {
    fetch(`http://localhost:3000/movies.json`)
      .then(res => res.json())
      .then(data => {
        setMovies(data.movies)
      })
  }, [])




  const onMovieDelete = (id) => {
    setMovies(state => state.filter(x => x.id !== id))
  }

  const onMoviSelect = (id) => {
    setMovies(state => state.map(x => ({ ...x, selected: x.id === id })))

  }



  return (
    <div >

      <h1> Movie Collection </h1>
      <MovieList movies={movies} onMovieDelete={onMovieDelete} onMoviSelect={onMoviSelect} />

    </div>
  );
}

export default App;
