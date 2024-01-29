import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';

function MovieList() {

  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  const clickMovie = (movieName) => {
    console.log(`you clicked a movie ${movieName}`);
  }
  return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
        {movies.map(movie => {
          return (
            <div data-testid='movieItem' key={movie.id}>
              <h3>{movie.title}</h3>
             <button onClick={() => {clickMovie(movie.title)}}><img src={movie.poster} alt={movie.title}/> </button> 
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
