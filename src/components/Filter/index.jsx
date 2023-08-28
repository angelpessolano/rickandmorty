import {
  Radio,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { useContext } from "react";
import { StarredCharacterContext } from "../../context";
import "./style.css";

const Filter_A = () => {
  const context = useContext(StarredCharacterContext);
  const [character, setCharacter] = useState("");
  const [specie, setSpecie] = useState("");

  const handlebutton = (e) => {
    {
      e.target.name === "specie"
        ? setSpecie(e.target.id)
        : setCharacter(e.target.id);
    }
  };
  function setFilter() {
    {
      specie !== "" && specie !== "Alls"
        ? context.setFilterspecie(specie)
        : context.setFilterspecie("");
    }
    {
      character !== "" && character !== "Allc"
        ? context.setFiltercharacter(character)
        : context.setFiltercharacter("");
    }

    context.closeAvancefilter();
  }

  return (
    <div className="relative shadow bg-white w-auto h-278  top-158 left-1 p-4 rounded-6 ">
      <div
        className="bg-white h-10 w-10 border-current cursor-pointer sm:hidden"
        onClick={() => context.closeAvancefilter()}
      >
        🔙
      </div>

      <>
        <h3 class="mb-5 text-lg font-medium text-gray-900 dark:text-white">
          Character
        </h3>
        <ul class="flex w-full gap-6 md:grid-cols-2">
          <li>
            <input
              type="radio"
              onChange={handlebutton}
              id="Allc"
              name="character"
              value="Allc"
              class="hidden peer"
              required
            />
            <label
              for="Allc"
              class="inline-flex items-center justify-between  p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
              <div class="block">
                <div class="w-full text-lg font-semibold">All</div>
              </div>
            </label>
            </li>
            <li>
            <input
              type="radio"
              onChange={handlebutton}
              id="Starred"
              name="character"
              value="Starred"
              class="hidden peer"
            />
            <label
              htmlFor="Starred"
              class="inline-flex items-center justify-between  p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div class="block">
                <div class="w-full text-lg font-semibold">Starred</div>
              </div>
            </label>
            </li>
            <li>
              <input
                type="radio"
                onChange={handlebutton}
                id="Others"
                name="character"
                value="Others"
                class="hidden peer"
              />
              <label
                htmlFor="Others"
                class="inline-flex items-center justify-between  p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div class="block">
                  <div class="w-full text-lg font-semibold">Others</div>
                </div>
              </label>
            
          </li>
        </ul>


        <h3 class="mb-5 text-lg font-medium text-gray-900 dark:text-white">
          Species
        </h3>
        <ul class="flex w-full gap-6 md:grid-cols-2">
          <li>
            <input
              type="radio"
              onChange={handlebutton}
              id="Alls"
              name="specie"
              value="Alls"
              class="hidden peer"
              required
            />
            <label
              for="Alls"
              class="inline-flex items-center justify-between  p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div class="block">
                <div class="w-full text-lg font-semibold">All</div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              onChange={handlebutton}
              id="human"
              name="specie"
              value="human"
              class="hidden peer"
            />
            <label
              htmlFor="human"
              class="inline-flex items-center justify-between  p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div class="block">
                <div class="w-full text-lg font-semibold">Human</div>
              </div>
            </label>
            </li>
          <li>
              <input
                type="radio"
                onChange={handlebutton}
                id="alien"
                name="specie"
                value="alien"
                class="hidden peer"
              />
              <label
                htmlFor="alien"
                class="inline-flex items-center justify-between  p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div class="block">
                  <div class="w-full text-lg font-semibold">Alien</div>
                </div>
              </label>
            </li>
          
        </ul>
      </>

      <div className="md:flex md:items-center">
        <button
          className={`p-2 m-4 w-full shadow bg-purple-400 hover:bg-purple-500 focus:shadow-outline
       focus:outline-none text-white font-bold py-2 px-4 rounded sm:h-full ${
         character === "" && specie === ""
           ? "rounded opacity-50 cursor-not-allowed"
           : ""
       }`}
          type="button"
          onClick={() => {
            setFilter();
          }}
        >
          Filter
        </button>
      </div>
    </div>
  );
};
export default Filter_A;
