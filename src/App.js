import "./App.css";
import Banner from "./Components/Banner";
import Movies from "./Components/Movies";
import Navbar from "./Components/Navbar";
import WatchList from "./Components/WatchList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
function App() {
  let [watchList, setWatchList] = useState([]);

  let handleAddToWatchList = (movieObj) => {
    // console.log("Inside add to watchlist");
    // console.log(movieId);
    // watchList.push(movieId);
    let newWatchList = [...watchList, movieObj];
    localStorage.setItem("movieApp", JSON.stringify(newWatchList));
    setWatchList(newWatchList);
  };

  let handleRemoveFromWatchList = (movieObj) => {
    let filteredWatchList = watchList.filter((movie) => {
      return movie.id != movieObj.id;
    });
    localStorage.setItem("movieApp", JSON.stringify(filteredWatchList));
    setWatchList(filteredWatchList);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Movies
                watchList={watchList}
                setWatchList={setWatchList}
                handleAddToWatchList={handleAddToWatchList}
                handleRemoveFromWatchList={handleRemoveFromWatchList}
              />
            </>
          }
        ></Route>
        <Route
          path="/watchlist"
          element={
            <>
              <WatchList
                watchList={watchList}
                handleRemoveFromWatchList={handleRemoveFromWatchList}
              />
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
    // <>
    //   <Navbar />
    //   <Banner />
    //   <Movies />
    //   {/* <WatchList /> */}
    // </>
  );
}

export default App;
