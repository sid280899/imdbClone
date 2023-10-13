import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex items-center p-3">
      <img
        className="h-[50px] mx-6"
        src="data:image/png;base64,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"
        alt=""
      />
      <Link
        to={"/"}
        className="text-3xl font-bold text-sky-600 mx-6 hover:cursor-pointer"
      >
        Movies
      </Link>
      <Link
        to={"/watchlist"}
        className="mx-6 text-3xl font-bold text-sky-600 hover:cursor-pointer"
      >
        WatchList
      </Link>
    </div>
  );
}

export default Navbar;
