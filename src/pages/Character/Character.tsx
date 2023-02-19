import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import { Error } from "../../components/Error/Error";
import { Loading } from "../../components/Loading/Loading";
import { Movie } from "./components/Movie/Movie";
import { IMovie } from "../../interfaces/Movie";
import { IPeople } from "../../interfaces/People";
import { getCharacter, getMovie } from "../../services/api";
import { CharacterImage } from "../../utils/CharacterImage";
import { TranslateFromApi } from "../../utils/TranslateFromApi";

export const Character = () => {
  const location = useLocation();
  const characterImage = new CharacterImage();

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [movies, setMovies] = useState<IMovie[]>([]);

  const { isLoading, isError, data, isSuccess } = useQuery({
    queryKey: ["character"],
    cacheTime: 0,
    queryFn: () => getCharacter(location.pathname.slice(-2)),
  });

  const getMovies = async (movies: string[]) => {
    setLoading(true);
    try {
      for (const movie of movies) {
        const final = await getMovie(movie.slice(-2));
        setMovies((val) => [...val, final.data]);
      }
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (data) {
      getMovies(data.data.films);
    }
  }, [isSuccess]);

  if (isLoading || loading) {
    return <Loading />;
  }

  if (isError || error) {
    return (
      <Error text="Não foi possível recuperar os detalhes do personagem." />
    );
  }

  const character = data.data as IPeople;
  return (
    <section className="max-w-7xl w-full flex flex-col min-h-screen pt-16 pb-4">
      <div className="flex items-center">
        <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-600">
          <img
            className="w-full h-full object-contain"
            src={characterImage.selectImage(character.name)}
            alt={character.name}
          />
        </div>
        <div className="ml-8">
          <p className="text-white font-bold text-xl pb-4">{character.name}</p>
          <p className="text-gray-300">
            Sou do genêro {TranslateFromApi.translate(character.gender)}
          </p>
          <p className="text-gray-300">Nascido em {character.birth_year}</p>
          <p className="text-gray-300">
            Olhos da cor {TranslateFromApi.translate(character.eye_color)}
          </p>
        </div>
      </div>
      <div className="w-full h-px bg-gray-400 mt-6 mb-2" />
      <div className="flex flex-col">
        <h3 className="text-white text-xl font-semibold text-center mb-2 mt-3">
          FILMES
        </h3>

        <div className="flex items-center flex-wrap">
          {movies.map((movie) => (
            <Movie key={movie.title} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
};
