import NavBar from "./components/NavBar";
import "./MovieView.css";
const MovieView = () => {
  const movie_id = new URLSearchParams(window.location.search).get("tmdb_id");
  const movie_title = new URLSearchParams(window.location.search).get("title");
  return (
    <>
      <NavBar input_value="" />
      <div className="movie-view" style={{ marginTop: 50 }}>
        <iframe
          id="player_iframe"
          src={`https://vidsrc.net/embed/movie?tmdb=${movie_id}&color=fff`}
          frameborder="0"
          allowfullscreen="yes"
          style={{ width: "1200px", aspectRatio: 16 / 7, margin: "auto" }}
          onload="remove_loading(this)"
          data-ref=""
          referrerpolicy="origin"
        ></iframe>
        <div className="title">{movie_title}</div>
      </div>
    </>
  );
};
export default MovieView;
