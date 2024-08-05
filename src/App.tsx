import "./App.css";
import MovieCard from "./components/MovieCard";
import NavBar from "./components/NavBar";
import react, { useState, useEffect } from "react";

function App() {
  const api_key = import.meta.env.VITE_TMDBKEY;
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState<any>("");
  useEffect(() => {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&sort_by=popularity.desc`;
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const searchParam = urlParams.get("search");
    setSearch(searchParam);
    if (searchParam) {
      url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${searchParam}`;
    }
    fetch(url).then((res) => {
      res.json().then((data) => {
        console.log(data.results);
        setMovies(data.results);
      });
    });
  }, []);
  return (
    <>
      <NavBar input_value={search} />
      <div className="movies-container">
        {movies.map((movie: any) => {
          return (
            <MovieCard
              href={`/view/?tmdb_id=${
                movie.id
              }&title=${movie.original_title.replaceAll("&", "and")}`}
              movie={movie}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
