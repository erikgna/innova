import { IMovie } from "../../../../interfaces/Movie";
import { DateTransformer } from "../../../../utils/DateTransformer";
import { MovieImage } from "../../../../utils/MovieImage";

interface IMovieProps {
  movie: IMovie;
}

export const Movie = ({ movie }: IMovieProps) => {
  const movieImage = new MovieImage();

  return (
    <div className="flex justify-center">
      <div className="group relative">
        <img
          className="w-56 h-96  rounded"
          src={movieImage.selectImage(movie.title)}
          alt={movie.title}
        />
        <div className="absolute rounded top-0 left-0 w-56 h-0 flex flex-col justify-center items-center bg-[#000000a4] opacity-0 group-hover:h-full group-hover:opacity-100 group-active:h-full group-active:opacity-100 duration-500">
          <h1 className="text-2xl text-white text-center">{movie.title}</h1>
          <p className="text-white">
            {DateTransformer.toBrazil(movie.release_date)}
          </p>
        </div>
      </div>
    </div>
  );
};
