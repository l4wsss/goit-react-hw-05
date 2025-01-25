import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { fetchMovieDetails } from "../../API";

const MoviesPage = () => {
  const location = useLocation();
  const { poster_path, title, overview, vote_average, id } = location.state;
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const getGenres = async () => {
      const movieDetails = await fetchMovieDetails(id);
      setGenres(movieDetails.genres);
    };
    getGenres();
  }, [id]);

  // console.log(location.state.id);
  return (
    <>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w200${poster_path}`}
          alt={title}
        />
        <div>
          <h2>{title}</h2>
          <p>User score: {vote_average}</p>
          <h3>Overview</h3>
          <p>{overview} </p>
          <h3>Genres</h3>
          <ul>
            {genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h4>Additional information</h4>
        <nav>
          <ul>
            <li>
              <Link to="cast" state={location.state}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={location.state}>
                Reviews
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default MoviesPage;
