import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../API";
import MovieMainInfo from "../../components/MovieMainInfo/MovieMainInfo";
import MovieAddInfo from "../../components/MovieAddInfo/MovieAddInfo";

const MoviesPage = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const movieDetails = await fetchMovieDetails(movieId);
      setMovie(movieDetails);
    };
    fetchData();
  }, [movieId]);

  const goBackRef = useRef(location.state ?? "/");

  if (!movie) return <p>Movie not found.</p>;

  return (
    <>
      <Link to={goBackRef.current}>Go back</Link>
      <MovieMainInfo movie={movie} />
      <MovieAddInfo />
      <Outlet />
    </>
  );
};

export default MoviesPage;
