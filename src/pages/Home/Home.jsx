import { useEffect, useState } from "react";
import { fetchTrendingMovie } from "../../API";
import { Link } from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchTrendingMovie();
      setMovies(data);
      console.log(data);
    };
    getData();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {movies &&
          movies.map((movie) => (
            <li key={movie.id}>
              <Link to={movie.id.toString()} state={movie}>
                {movie.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
