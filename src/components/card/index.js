import { useContext } from "react";
import { useState } from "react";
import { StarredCharacterContext } from "../../context";
import { useNavigate } from "react-router-dom";





const Card = ({ data}) => {
  const navigate = useNavigate();
  const context = useContext(StarredCharacterContext);
  const handlecharacter = (character_id) => {


    navigate(`/character/${character_id}`);
    context.openCharacterDetail();


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
    <ul className="pl-2">
      {data.characters.results.map(({ id, name, species, image, gender }) => (
        <>
          {context.characterlike.indexOf(id) !== -1 ? (
            <></>
          ) : (
            <li key={id} onClick={() => handlecharacter(id)}>
          <div className=" relative py-2 px-2 border-y border-slate-100  bg-white  hover:bg-primary-100  hover:rounded-xl space-y-2
            flex sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img
              className="block mx-auto h-8 rounded-full sm:mx-0 sm:shrink-0"
              src={image}
              alt={name}
            />

            <div className="text-center flex space-y-2 space-x-2 sm:text-left pr-1.5">
              <div className="space-y-0.5 w-[215px]">
                <p className="text-lg text-black font-semibold">{name}</p>
                <p className="text-slate-500 font-small">Species {species}</p>
              </div>
              <div className="bg-transparent pl-1.5 pt-2 text-gray-400/50">
                <svg
                    className="w-[1.25rem] h-[1.25rem] cursor-pointer"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 21 19"
                    onClick={() => elementlist(id)}
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z"
                    />
                  </svg>
              </div>
            </div>
          </div>
        </li>
          )}



        </>

      ))}
    </ul>

  );
};
export default Card;
