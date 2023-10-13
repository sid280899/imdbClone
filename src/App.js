import "./App.css";
import Banner from "./Components/Banner";
import Movies from "./Components/Movies";
import Navbar from "./Components/Navbar";
import WatchList from "./Components/WatchList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Movies />
            </>
          }
        ></Route>
        <Route
          path="/watchlist"
          element={
            <>
              <WatchList />
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
