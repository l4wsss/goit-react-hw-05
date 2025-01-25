import { NavLink, Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./pages/Home/Home";
import Movie from "./pages/Movie/Movie";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MovieCast from "./components/MovieCast/MovieCast";
import MovieReviews from "./components/MovieReviews/MovieReviews";

function App() {
  return (
    <>
      <Header />
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movie</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movie />} />
        <Route path=":movieId" element={<MoviesPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
