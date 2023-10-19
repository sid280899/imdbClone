export default function MovieCard(props) {
  let {
    id,
    handleAddToWatchList,
    handleRemoveFromWatchList,
    name,
    watchList,
    poster_path,
  } = props;
  return (
    <div
      className="h-[40vh] w-[200px] bg-cover bg-center rounded-xl  hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end overflow-hidden"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {watchList.includes(id) ? (
        <div
          onClick={() => handleRemoveFromWatchList(id)}
          className="m-4 bg-gray-900 h-7 w-7 flex justify-center items-center rounded-lg hover:h-10 hover:w-10 duration-300"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => handleAddToWatchList(id)}
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
