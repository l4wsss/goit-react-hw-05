import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

function MovieList({ movies }) {
  const location = useLocation();
  return (
    <div>
      <ul>
        {movies &&
          movies.map((movie) => (
            <li key={movie.id}>
              <Link
                to={`/movies/${movie.id}`}
                state={{ ...movie, ...location }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;
