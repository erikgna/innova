import { useEffect, useState } from "react";
import { IMovie } from "../../interfaces/Movie";
import { getMovie } from "../../services/api";
import { DateTransformer } from "../../utils/DateTransformer";
import { MovieImage } from "../../utils/MovieImage";

interface IMovieProps {
  movies: string[];
}

export const Movies = ({ movies }: IMovieProps) => {
  const movieImage = new MovieImage();
  const [loading, setLoading] = useState<boolean>(false);
  const [teste, setTeste] = useState<IMovie[]>([]);

  const getMovies = async () => {
    setLoading(true);
    for (const movie of movies) {
      const final = await getMovie(movie.slice(-2));
      setTeste((val) => [...val, final.data]);
    }
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  if (loading) {
    return <h1>...Loading</h1>;
  }

  // if (isError) {
  //   return <h2>Ops... Ocorreu um erro</h2>;
  // }

  return (
    <div className="flex items-center flex-wrap">
      {teste.map((movie) => (
        <div key={movie.title} className="mr-4 last:mr-0">
          <div className="group relative">
            <img
              className="w-56 h-96  rounded"
              src={movieImage.selectImage(movie.title)}
              alt={movie.title}
            />
            <div className="absolute rounded top-0 left-0 w-56 h-0 flex flex-col justify-center items-center bg-[#000000a4] opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
              <h1 className="text-2xl text-white text-center">{movie.title}</h1>
              <p className="text-white">
                {DateTransformer.toBrazil(movie.release_date)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
