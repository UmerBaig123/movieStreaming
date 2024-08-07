import "./MovieCard.css";
const MovieCard = ({ movie, href }: { movie: any; href: string }) => {
  return (
    <a href={href}>
      <div className="movie-card" key={movie.id}>
        <div
          className="movie-poster"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="movie-info">
          <div className="movie-title">{movie.title}</div>
          <div className="movie-rating">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-star-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
            {movie.vote_average}/10
          </div>
          <div className="movie-overview">{movie.overview}</div>
        </div>
      </div>
    </a>
  );
};
export default MovieCard;
