import React from 'react';
import {Link} from 'react-router-dom';

const MovieCard = ({movie, saveMovie}) => {
  // console.log('This is the Props Object from: MovieCard.Js', {movie})
  const { title, director, metascore, stars, id } = movie;
  return (
    <Link onClick={console.log('This is the Link Object from: MovieCard.Js')} to={`/movies/${id}`}>
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
       <div className="save-button" onClick ={saveMovie}>Save</div>
    </div>
    </Link>

  );
};

export default MovieCard;
