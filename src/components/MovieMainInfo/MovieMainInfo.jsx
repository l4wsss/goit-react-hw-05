import PropTypes from "prop-types";

const MovieMainInfo = ({ movie }) => {
  const { poster_path, title, overview, vote_average, genres } = movie;
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title} />
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
  );
};

MovieMainInfo.propTypes = {
  movie: PropTypes.object,
};

export default MovieMainInfo;
