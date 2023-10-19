function WatchList() {
  let movies = [
    {
      adult: false,
      backdrop_path: "/628Dep6AxEtDxjZoGP78TsOxYbK.jpg",
      genre_ids: [28, 53],
      id: 575264,
      original_language: "en",
      original_title: "Mission: Impossible - Dead Reckoning Part One",
      overview:
        "Ethan Hunt and his IMF team embark on their most dangerous mission yet: To track down a terrifying new weapon that threatens all of humanity before it falls into the wrong hands. With control of the future and the world's fate at stake and dark forces from Ethan's past closing in, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan must consider that nothing can matter more than his mission—not even the lives of those he cares about most.",
      popularity: 1937.188,
      poster_path: "/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
      release_date: "2023-07-08",
      title: "Mission: Impossible - Dead Reckoning Part One",
      video: false,
      vote_average: 7.7,
      vote_count: 1689,
    },
    {
      adult: false,
      backdrop_path: "/mRGmNnh6pBAGGp6fMBMwI8iTBUO.jpg",
      genre_ids: [27, 9648, 53],
      id: 968051,
      original_language: "en",
      original_title: "The Nun II",
      overview:
        "In 1956 France, a priest is violently murdered, and Sister Irene begins to investigate. She once again comes face-to-face with a powerful evil.",
      popularity: 1168.675,
      poster_path: "/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg",
      release_date: "2023-09-06",
      title: "The Nun II",
      video: false,
      vote_average: 7,
      vote_count: 1029,
    },
    {
      adult: false,
      backdrop_path: "/cHNqobjzfLj88lpIYqkZpecwQEC.jpg",
      genre_ids: [28, 53, 80],
      id: 926393,
      original_language: "en",
      original_title: "The Equalizer 3",
      overview:
        "Robert McCall finds himself at home in Southern Italy but he discovers his friends are under the control of local crime bosses. As events turn deadly, McCall knows what he has to do: become his friends' protector by taking on the mafia.",
      popularity: 1298.016,
      poster_path: "/b0Ej6fnXAP8fK75hlyi2jKqdhHz.jpg",
      release_date: "2023-08-30",
      title: "The Equalizer 3",
      video: false,
      vote_average: 7.2,
      vote_count: 923,
    },
  ];
  return (
    <>
      <div className=" overflow-hidden rounded-lg shadow-md border border-gray-200 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="bg-gray-50 text-gray-900 border-b-2">
            <tr>
              <th>Name</th>
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {movies.map((movieObj) => {
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
                  <td>Action</td>
                </tr>
              );
            })}
          </tbody>
          ;
        </table>
      </div>
    </>
  );
}

export default WatchList;
