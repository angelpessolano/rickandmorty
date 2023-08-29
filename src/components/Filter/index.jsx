import { useState } from "react";
import { useContext } from "react";
import { StarredCharacterContext } from "../../context";
import "./style.css";

const Filter_A = () => {
  const context = useContext(StarredCharacterContext);
  const [character, setCharacter] = useState("");
  const [specie, setSpecie] = useState("");
  const characterOptions = [
    { value: "Allc", label: "All" },
    { value: "Starred", label: "Starred" },
    { value: "Others", label: "Others" },
  ];
  const speciesOptions = [
    { value: "Alls", label: "All" },
    { value: "Human", label: "Human" },
    { value: "Alien", label: "Alien" },
  ];

  const handleChanges = (e) => {
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

  return (<div className="relative shadow bg-white w-auto h-278 top-[-120px] sm:top-0 p-4 rounded-6  ">
  <div
    className="bg-white h-10 w-10 border-current cursor-pointer sm:hidden"
    onClick={() => context.closeAvancefilter()}
  >
   <svg class="w-6 h-6 text-primary-700 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
  </svg>
  </div>

  <div className="flex flex-col flex-grow">
    <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
      Character
    </h3>
    <ul className="flex w-full gap-6 md:grid-cols-2">
    
    {characterOptions.map((option) => (
      <li key={option.value}>
        <input
          type="radio"
          onChange={handleChanges}
          id={option.value}
          name="character"
          value={option.value}
          className="hidden peer"
          required
        />
        <label
          htmlFor={option.value}
          className="inline-flex items-center justify-between p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className="block">
            <div className="w-full text-lg font-semibold">{option.label}</div>
          </div>
        </label>
      </li>
    ))}
  </ul>
   

    <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
      Species
    </h3>
    <ul className="flex w-full gap-6 md:grid-cols-2">
    {speciesOptions.map((option) => (
      <li key={option.value}>
        <input
          type="radio"
          onChange={handleChanges}
          id={option.value}
          name="specie"
          value={option.value}
          className="hidden peer"
        />
        <label
          htmlFor={option.value}
          className="inline-flex items-center justify-between p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className="block">
            <div className="w-full text-lg font-semibold">{option.label}</div>
          </div>
        </label>
      </li>
    ))}
  </ul>
  </div>
  <div
    className="bg-white h-[45vh] w-10 border-current  sm:hidden"
    onClick={() => context.closeAvancefilter()}
  >
  
  </div>

  <div className="md:flex md:items-center mt-auto">
    <button
      className={`p-2 m-4 w-full mx-auto shadow bg-purple-400 hover:bg-purple-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded sm:h-full ${
        character === "" && specie === ""
          ? "rounded opacity-50 cursor-not-allowed"
          : ""
      }`}
      type="button"
      onClick={setFilter}
    >
      Filter
    </button>
  </div>
</div>
  );
};
export default Filter_A;
