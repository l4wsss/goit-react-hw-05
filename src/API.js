import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const API_KEY = "aae5c2d8e452c0464182062e8e3318ca";

export const fetchTrendingMovie = async () => {
  const { data } = await axios.get("/trending/movie/day", {
    params: { api_key: API_KEY, language: "en-US" },
  });
  return data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
      language: "en-US",
    },
  });
  return data;
};

export const fetchMovieCast = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
      language: "en-US",
    },
  });
  return data;
};
