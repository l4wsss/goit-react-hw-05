import { useEffect, useState } from "react";
import { fetchTrendingMovie } from "../../API";
import MovieList from "../../components/MovieList/MovieList";

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
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
