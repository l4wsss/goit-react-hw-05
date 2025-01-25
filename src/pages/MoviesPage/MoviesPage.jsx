import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../../API";
import MovieList from "../../components/MovieList/MovieList";

const MoviePage = () => {
  const [results, setResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  const onSubmit = (values) => {
    console.log(values);
    handleChangeQuery(values.query);
  };

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
  console.log(results);

  return (
    <div>
      <Formik initialValues={{ query }} onSubmit={onSubmit}>
        <Form>
          <Field name="query" placeholder="Search for movies..." />
          <button type="submit">Search</button>
        </Form>
      </Formik>

      <MovieList movies={results} />
    </div>
  );
};

export default MoviePage;
