import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({movies}) => {
  // Commented out Old API Call
  // const [movies, setMovies] = useState([])
  // useEffect(() => {
  //   const getMovies = () => {
  //     axios
  //       .get('http://localhost:5000/api/movies')
  //       .then(response => {
  //         setMovies(response.data);
  //       })
  //       .catch(error => {
  //         console.error('Server Error', error);
  //       });
  //   }
    
  //   getMovies();
  // }, []);
  // console.log('This is the Movies Object from: MovieList.Js', movies)
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie}/>
      ))}
    </div>
  );
}

// function MovieDetails({ movie }) {
//   const { title, director, metascore, stars, id } = movie;
//   return (
//     <Link to={`/movies/${id}`}>
//     <div className="movie-card">
//       <h2>{title}</h2>
//       <div className="movie-director">
//         Director: <em>{director}</em>
//       </div>
//       <div className="movie-metascore">
//         Metascore: <strong>{metascore}</strong>
//       </div>
//       <h3>Actors</h3>

//       {stars.map(star => (
//         <div key={star} className="movie-star">
//           {star}
//         </div>
//       ))}
//     </div>
//     </Link>
//   );
// }

export default MovieList;
