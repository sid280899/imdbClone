import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./pagination";
function Movies(props) {
  let {
    watchList,
    setWatchList,
    handleAddToWatchList,
    handleRemoveFromWatchList,
  } = props;
  let [movie, setMovies] = useState([]);
  let [pageNo, setPageNo] = useState(1);

  console.log(watchList);
  let handlePrev = () => {
    if (pageNo > 1) setPageNo(pageNo - 1);
  };

  let handleNext = () => {
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=8a5ab969688a14732f77295bfc6199b6&page=${pageNo}`
      )
      .then(function (res) {
        // console.log(res);
        // console.log(res.data.results);
        // console.log(movie);
        setMovies(res.data.results);
      });
  }, [pageNo]);

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("movieApp");
    if (!moviesFromLocalStorage) {
      return;
    }
    setWatchList(JSON.parse(moviesFromLocalStorage));
  }, []);

  return (
    <div className="p-5">
      <div className="text-2xl m-5 font-bold text-center">Trending Movies</div>
      <div className="flex flex-wrap justify-around gap-8">
        {movie.map((movieObj) => {
          // console.log(movieObj);
          return (
            <MovieCard
              key={movieObj.id}
              movieObj={movieObj}
              name={movieObj.title}
              poster_path={movieObj.poster_path}
              watchList={watchList}
              handleAddToWatchList={handleAddToWatchList}
              handleRemoveFromWatchList={handleRemoveFromWatchList}
            />
          );
        })}
      </div>
      <Pagination
        pageNo={pageNo}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </div>
  );
}

export default Movies;
