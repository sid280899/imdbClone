export default function MovieCard(props) {
  let {
    movieObj,
    handleAddToWatchList,
    handleRemoveFromWatchList,
    name,
    watchList,
    poster_path,
  } = props;

  function isContains(movieObj) {
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }
  return (
    <div
      className="h-[40vh] w-[200px] bg-cover bg-center rounded-xl  hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end overflow-hidden"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {isContains(movieObj) ? (
        <div
          onClick={() => handleRemoveFromWatchList(movieObj)}
          className="m-4 bg-gray-900 h-7 w-7 flex justify-center items-center rounded-lg hover:h-10 hover:w-10 duration-300"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => handleAddToWatchList(movieObj)}
          className="m-4 bg-gray-900 h-7 w-7 flex justify-center items-center rounded-lg hover:h-10 hover:w-10 duration-300"
        >
          &#128525;
        </div>
      )}

      <div className="text-xl text-white bg-gray-900/60 w-full p-4 text-center">
        {name}
      </div>
    </div>
  );
}
