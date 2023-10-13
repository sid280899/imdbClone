export default function MovieCard(props) {
  return (
    <div
      className="h-[40vh] w-[200px] bg-cover bg-center rounded-xl  hover:scale-110 duration-300 hover:cursor-pointer flex items-end overflow-hidden"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${props.poster_path})`,
      }}
    >
      <div className="text-xl text-white bg-gray-900/60 w-full p-4 text-center">
        {props.name}
      </div>
    </div>
  );
}
