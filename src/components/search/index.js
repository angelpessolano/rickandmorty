import { useContext } from "react";
import { StarredCharacterContext } from "../../context";
const Search_c = ({ Search_ch, filter }) => {
  const context = useContext(StarredCharacterContext);

  function Search_name(event) {
    Search_ch(event.target.value);
  }
  function filter() {
    {
      context.avancefilter === false
        ? context.openAvancefilter()
        : context.closeAvancefilter();
    }
  }

  return (
    <div className="relative w-full mt-5 mb-3">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          className="w-3 h-3 text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="search"
        className="block w-full h-10 pl-8 pr-8 p-1 text-sm text-gray-500 border-0 border-gray-300 rounded-lg bg-gray-100 placeholder-gray-400 focus:outline-none"
        placeholder="Search or filter results"
        onChange={Search_name}
      />
      <div
        className={`absolute justify-center  items-center inset-y-0 right-0 flex  pr-3 bg-gray-100 hover:bg-primary-100 focus:outline-none cursor-pointer ${
          context.avancefilter == true ? "bg-primary-100" : "bg-gray-100"
        }`}
        onClick={() => filter()}
      >
        <svg
          className="ml-3 w-3 h-3   text-primary-700"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
          />
        </svg>
      </div>
    </div>
  );
};
export default Search_c;
