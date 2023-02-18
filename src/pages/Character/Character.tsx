import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useLocation } from "react-router";
import { Movies } from "../../components/Movies/Movies";
import { IPeople } from "../../interfaces/People";
import { getCharacter } from "../../services/api";
import { CharacterImage } from "../../utils/CharacterImage";
import { TranslateFromApi } from "../../utils/TranslateFromApi";

export const Character = () => {
  const location = useLocation();
  const t = new CharacterImage();

  const { isLoading, isError, data } = useQuery({
    queryKey: ["character"],
    queryFn: () => getCharacter(location.pathname.slice(-2)),
  });

  if (isLoading) {
    return <h1>...Loading</h1>;
  }

  if (isError) {
    return <h2>Ops... Ocorreu um erro</h2>;
  }

  const character = data.data as IPeople;
  return (
    <section className="max-w-7xl w-full flex flex-col min-h-screen pt-16 pb-4">
      <div className="flex items-center">
        <img
          className="w-32 h-32 rounded-full"
          src={t.selectImage(character.name)}
          alt={character.name}
        />
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
        <h3 className="text-white text-xl font-semibold text-center mb-6 mt-3">
          FILMES
        </h3>
        <Movies movies={character.films} />
      </div>
    </section>
  );
};
