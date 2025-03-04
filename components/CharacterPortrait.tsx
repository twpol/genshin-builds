import { memo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import ElementIcon from "./ElementIcon";

import { getUrl } from "@lib/imgUrl";

interface CharacterPortraitProps {
  character: {
    id: string;
    name: string;
    element?: string;
    constellationNum?: number;
  };
  weapon?: {
    id: string;
    name: string;
    rarity: number;
  };
}

const CharacterPortrait = ({ character, weapon }: CharacterPortraitProps) => {
  return (
    <div className="text-gray-400 cursor-pointer w-32 transition-all duration-200 ease-linear transform hover:scale-105 hover:text-white">
      <div>
        <div className="text-center relative group">
          <LazyLoadImage
            className="inline-block rounded-full shadow-lg"
            src={getUrl(
              `/characters/${character.id}/${character.id}_portrait.png`,
              80,
              80
            )}
            alt={character.name}
            width={80}
            height={80}
          />
          {character.element && (
            <div className="absolute top-0 right-5 bg-vulcan-900 pt-1 px-1 rounded-full">
              <ElementIcon width={20} height={20} type={character.element} />
            </div>
          )}
          {character.constellationNum !== undefined && (
            <div className="absolute bottom-0 right-2/3 bg-vulcan-700 p-1 rounded-full text-xs font-bold text-gray-300">
              {`C${character.constellationNum}`}
            </div>
          )}
          {weapon && (
            <div
              className="absolute bg-cover rounded bottom-0 left-2/3 transition-opacity delay-100 opacity-0 group-hover:opacity-100"
              style={{
                backgroundImage: `url(${getUrl(
                  `/bg_${weapon.rarity}star.png`
                )})`,
                height: 32,
              }}
            >
              <LazyLoadImage
                src={getUrl(`/weapons/${weapon.id}.png`, 32, 32)}
                height={32}
                width={32}
                alt={weapon.name}
              />
            </div>
          )}
        </div>
      </div>
      <p className="text-center text-base">{character.name}</p>
    </div>
  );
};

export default memo(CharacterPortrait);
