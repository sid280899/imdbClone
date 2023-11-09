import { useEffect, useState } from "react";
import genreIds from "../Utility/genre";
function WatchList(props) {
  let { watchList, handleRemoveFromWatchList, setWatchList } = props;
  let [genreList, setGenreList] = useState(["All Genres"]);
  let [currGenre, setCurrGenre] = useState("All Genres");
  let [Search, setSearch] = useState("");

  let handleFilter = (genre) => {
    setCurrGenre(genre);
  };

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let sortIncreasing = () => {
    let sorted = watchList.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchList([...sorted]);
  };

  let sortDecreasing = () => {
    let sorted = watchList.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchList([...sorted]);
  };
  useEffect(() => {
    let temp = watchList.map((movieObj) => {
      return genreIds[movieObj.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenreList(["All Genres", ...temp]);
  }, [watchList]);
  return (
    <>
      <div className="flex justify-center m-4 flex-wrap">
        {genreList.map((genre) => {
          return (
            <div
              onClick={() => handleFilter(genre)}
              key={genre}
              className={
                currGenre == genre
                  ? "m-4 h-[3rem] w-[15rem] bg-blue-400 rounded-xl text-white flex justify-center items-center font-bold "
                  : "m-4 h-[3rem] w-[15rem] bg-gray-300 rounded-xl text-white flex justify-center items-center font-bold hover:cursor-pointer"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>
      <div className=" flex justify-center my-4">
        <input
          onChange={handleSearch}
          value={Search}
          className=" h-[3rem] w-[18rem] border-none outline-none bg-gray-200 px-4 text-lg"
          type="text"
          placeholder="Search for Movies"
        />
      </div>
      <div className=" overflow-hidden rounded-lg shadow-md border border-gray-200 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="bg-gray-50 text-gray-900 border-b-2">
            <tr>
              <th>Name</th>
              <th className="flex">
                <div onClick={sortIncreasing} className="p-2">
                  <i className="fa-solid fa-circle-chevron-up"></i>
                </div>
                <div className="p-2">Ratings</div>
                <div onClick={sortDecreasing} className="p-2">
                  <i className="fa-solid fa-circle-chevron-down"></i>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {watchList
              .filter((Obj) => {
                if (currGenre == "All Genres") {
                  return true;
                } else {
                  return genreIds[Obj.genre_ids[0]] == currGenre;
                }
              })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(Search.toLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr className="border-b-2 ">
                    <td className="flex items-center px-6 py-4">
                      <img
                        className="h-[6rem] w-[10rem]"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                        alt=""
                      />
                      <div className="mx-4">{movieObj.title}</div>
                    </td>
                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genreIds[movieObj.genre_ids[0]]}</td>
                    <td
                      onClick={() => handleRemoveFromWatchList(movieObj)}
                      className="text-red-600 cursor-pointer"
                    >
                      Delete
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
