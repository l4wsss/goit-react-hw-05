import { Link } from "react-router-dom";

const MovieAddInfo = () => {
  return (
    <div>
      <h4>Additional information</h4>
      <nav>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MovieAddInfo;
