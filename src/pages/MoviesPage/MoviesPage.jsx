import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../../API";
import MovieList from "../../components/MovieList/MovieList";
import SearchBar from "../../components/SearchBar/SearchBar";

const MoviePage = () => {
  const [results, setResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    const getData = async () => {
      const data = await searchMovies(query);
      setResults(data);
    };
    if (query) {
      getData();
    }
  }, [query]);

  const handleChangeQuery = (newQuery) => {
    if (!newQuery) {
      searchParams.delete("query");
    } else {
      searchParams.set("query", newQuery);
    }
    setSearchParams({ query: newQuery });
  };

  return (
    <div>
      <SearchBar handleChangeQuery={handleChangeQuery} query={query} />
      <MovieList movies={results} />
    </div>
  );
};

export default MoviePage;
