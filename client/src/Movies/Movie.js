import React from 'react';
import {useParams} from 'react-router-dom';
import MovieCard from './MovieCard';

const Movie = ({movies}) => {
  const {movieNum} = useParams(); //props from MovieNum
  const number = Number(movieNum)
  // const movieID = movie.
  console.log('This is the Movie Object with  from: Movie.Js', movies[number])
  if (!movies[number]) {
    return <div>Loading movie information...</div>;
  }
  return (
    <MovieCard movie={movies[number]}/>
    // <div></div>
  )
  //Commented out old API Call

  // useEffect(() => {
  //   const MovieID = id;
  //   // change ^^^ that line and grab the id from the URL
  //   // You will NEED to add a dependency array to this effect hook
  //      axios
  //       .get(`http://localhost:5000/api/movies/${MovieID.movieNum}`) //useParams is passing this object in
  //       .then(response => {
  //         setMovie(response.data);
  //       })
  //       .catch(error => {
  //         console.error(error);
  //       });

  // },[]);
  
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }


  // const { title, director, metascore, stars } = movies;
  // return (
  //   <div className="save-wrapper">
  //     <div className="movie-card">
  //       <h2>{title}</h2>
  //       <div className="movie-director">
  //         Director: <em>{director}</em>
  //       </div>
  //       <div className="movie-metascore">
  //         Metascore: <strong>{metascore}</strong>
  //       </div>
  //       <h3>Actors</h3>

  //       {/* {stars.map(star => (
  //         <div key={star} className="movie-star">
  //           {star}
  //         </div>
  //       ))} */}
  //     </div>
  //     <div className="save-button">Save</div>
  //   </div>
  // );
}

export default Movie;
