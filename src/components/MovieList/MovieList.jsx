import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';
import { useHistory } from 'react-router-dom'


function MovieList() {
  const history = useHistory();
  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);
  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  const clickMovie = (movieId) => {
    // console.log(`you clicked a movie ${movieName}`);
      history.push('/details');
      dispatch({ type: 'FETCH_DETAILS', payload: movieId})
  }
  return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
        {movies.map(movie => {
          return (
            <div data-testid='movieItem' key={movie.id}>
              <h3>{movie.title}</h3>
             <button data-testid="toDetails" onClick={() => {clickMovie(movie.id)}}><img src={movie.poster} alt={movie.title}/> </button> 
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
