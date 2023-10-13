import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
function Movies() {
  let [movie, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=8a5ab969688a14732f77295bfc6199b6`
      )
      .then(function (res) {
        // console.log(res);
        // console.log(res.data.results);
        // console.log(movie);
        setMovies(res.data.results);
      });
  }, []);

  return (
    <div className="p-5">
      <div className="text-2xl m-5 font-bold text-center">Trending Movies</div>
      <div className="flex flex-wrap justify-around gap-8">
        {movie.map((movieObj) => {
          console.log(movieObj);
          return (
            <MovieCard
              key={movieObj.id}
              name={movieObj.title}
              poster_path={movieObj.poster_path}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Movies;
