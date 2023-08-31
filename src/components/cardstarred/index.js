import { useContext, useState } from "react";
import { StarredCharacterContext } from "../../context";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const CardStarred = ({ name, data, filter_c }) => {
  let { id } = useParams();
  const navigate = useNavigate();

  const context = useContext(StarredCharacterContext);

  const handlecharacter = (character_id) => {
    navigate(`/character/${character_id}`);
    context.openCharacterDetail();
  };
  const elementlist = (data) => {
    const id = data.id;
    const name = data.name;

    if (context.characterlike.indexOf(data.id) !== -1) {
      context.setCount(context.count - 1);

      context.characterlike.splice(context.characterlike.indexOf(data.id), 1);
      context.setCharacterLiked(context.characterlike);
      context.setDataprocess([...context.dataprocess, { name, id }]);

      //context.setLikedorder([...context.likeorder,{id,name}]);
    }

    //let temporal={};

    // context.likeorder.sort((a, b) => a.name.localeCompare(b.name));

    // console.log("Lista", context.characterlike);
  };
  //

  return (
    <>
      {(data.character.name.toLowerCase().includes(name.toLowerCase()) ||
        name === "") &&
      (data.character.species.toLowerCase() === filter_c.toLowerCase() ||
        context.filterspecie === "") ? (
        <li
          key={data.character.id}
          onClick={() => handlecharacter(data.character.id)}
        >
          <div
            className={`py-2 px-2 border-y border-slate-100   hover:bg-primary-100  hover:rounded-xl space-y-2
            flex sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 ${
              id === data.character.id ? "bg-primary-100" : " bg-white"
            }`}
          >
            <img
              className="block mx-auto h-8 rounded-full sm:mx-0 sm:shrink-0"
              src={data.character.image}
              alt={data.character.name}
            />

            <div className="text-center flex space-y-2 space-x-2 sm:text-left">
              <div className="space-y-0.5 w-[215px]">
                <p className="text-lg text-black font-semibold">
                  {data.character.name}
                </p>
                <p className="text-slate-500 font-small">
                  {data.character.species}
                </p>
              </div>
              <div
                className="cursor-pointer pl-[0.430rem] pt-2 w-8 h-8 rounded-full bg-white  relative"
                onClick={() => elementlist(data.character)}
              >
               <svg
    className="w-[1.15rem] h-[1.15rem]  text-green-500"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 18"
  >
    <path
      d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0
         0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7
         7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z"
    />
  </svg>
              </div>
            </div>
          </div>
        </li>
      ) : (
        <></>
      )}
    </>
  );
};

export default CardStarred;
