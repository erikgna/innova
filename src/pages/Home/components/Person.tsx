import { Link } from "react-router-dom";
import { IPeople } from "../../../interfaces/People";
import { CharacterImage } from "../../../utils/CharacterImage";
import { TranslateFromApi } from "../../../utils/TranslateFromApi";

interface IPersonProps {
  character: IPeople;
}

export const Person = ({ character }: IPersonProps) => {
  const charImage = new CharacterImage();

  const saveLastUrl = (url: string) => {
    localStorage.setItem("last-url", url);
  };

  const url = `/character/${character.url.slice(-2)}`;
  return (
    <Link key={character.name} to={url} onClick={() => saveLastUrl(url)}>
      <div className="py-4 flex items-center hover:bg-gray-700 pl-4 rounded transition-all duration-300">
        <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-600">
          <img
            className="w-full h-full object-contain"
            src={charImage.selectImage(character.name)}
            alt={character.name}
          />
        </div>
        <div className="ml-4">
          <p className="text-white font-semibold mb-2">{character.name}</p>
          <p className="text-gray-300 text-sm">
            <strong>Gênero: </strong>
            {TranslateFromApi.translate(character.gender)}
          </p>
          <p className="text-gray-300 text-sm">
            <strong>Peso: </strong>
            {character.mass} kg
          </p>
        </div>
      </div>

    </Link>
  );
};
