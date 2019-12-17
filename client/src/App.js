import React, { useState, useEffect } from 'react';
import {Switch, Route} from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import axios from 'axios';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };
  //get movies from API and set to State
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);

  return (
    <div>
      <SavedList list={savedList} />
      <div>Replace this Div with your Routes</div>
      {/* Delcare Routes */}
      <Switch>
        <Route path="/movies/:movieNum">
          <Movie movies={movies}/>
        </Route>
        <Route exact path="/">
          <MovieList movies={movies}/>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
