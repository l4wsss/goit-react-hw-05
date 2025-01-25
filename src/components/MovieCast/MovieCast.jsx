import { useEffect, useState } from "react";
import { fetchMovieCast } from "../../API";
import { useLocation } from "react-router-dom";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const location = useLocation();
  const { id } = location.state;
  const [actors, setActors] = useState([]);
  // console.log(location.state.id);
  useEffect(() => {
    const getData = async () => {
      const movieCast = await fetchMovieCast(id);
      setActors(movieCast.cast);
    };
    getData();
  }, [id]);
  console.log(actors);

  // console.log(fetchMovieCast(id));

  return (
    <div>
      <ul>
        {actors &&
          actors.map((actor) => (
            <li key={actor.id} className={s.container}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                    : "https://netsh.pp.ua/wp-content/uploads/2017/08/Placeholder-1.png"
                }
                alt={actor.name}
                className={s.img}
              />
              <span>{actor.name}</span>
              <span>Character: {actor.character}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default MovieCast;
