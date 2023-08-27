import { useContext } from "react";
import { useState } from "react";
import { StarredCharacterContext } from "../../context";

const Card = ({ data, id_c }) => {
  const context = useContext(StarredCharacterContext);
  const handlecharacter = (character_id) => {
    id_c(character_id);
  };
  const elementlist = (id) => {
    //console.log("object", id);
    if (context.characterlike.indexOf(id) !== -1) {
      context.setCount(context.count - 1);

      context.characterlike.splice(context.characterlike.indexOf(id), 1);
      context.setCharacterLiked(context.characterlike);
    } else {
      context.setCount(context.count + 1);
      // console.log("nuevo");
      context.setCharacterLiked([...context.characterlike, id]);

      //favele([...context.characterlike, id]);
    }

    // console.log("Lista", context.characterlike);
  };

  return (
    <ul className="w-[375px] pl-2">
      {data.characters.results.map(({ id, name, species, image, gender }) => (
        <li key={id} onClick={() => handlecharacter(id)}>
          <div className="py-2 px-2 border-y border-slate-100  bg-white  hover:bg-primary-100  hover:rounded-xl space-y-2
            flex sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img
              className="block mx-auto h-8 rounded-full sm:mx-0 sm:shrink-0"
              src={image}
              alt={name}
            />
            <div className="text-center flex space-y-2 space-x-2 sm:text-left">
              <div className="space-y-0.5 mr-4">
                <p className="text-lg text-black font-semibold">{name}</p>
                <p className="text-slate-500 font-small">Species {species}</p>
              </div>
              <button
                className="block mx-auto px-1 py-1 text-sm  rounded-full  bg-white focus:outline-none 
                focus:ring-2 focus:ring-secondary-600 focus:ring-offset-2"
                onClick={() => elementlist(id)}
              >
                {context.characterlike.indexOf(id) !== -1 ? (
                  <svg
                    class="w-[1.15rem] h-[1.15rem] text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0
                     0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 
                     7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 21 19"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default Card;
