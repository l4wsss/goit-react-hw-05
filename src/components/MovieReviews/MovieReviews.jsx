import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../API";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const movieReviews = await fetchMovieReviews(movieId);
      setReviews(movieReviews);
    };
    getData();
  }, [movieId]);
  return (
    <div>
      <ul>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <li key={review.id}>
              <h3>Author:{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <div>No reviews</div>
        )}
      </ul>
    </div>
  );
};

export default MovieReviews;
