import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import CardCharacterDetail from "../../components/CharacterDetail";
import{StarredCharacterContext}from '../../context';



import { useContext } from "react";

const GET_CHARACTERS = gql`
  query Characters($name_c: String!) {
    characters(filter: { name: $name_c }) {
      results {
        id
        name
        image
        species
      }
    }
  }
`;

const GET_DATA = gql`
  query Character($id: ID!) {
    character(id: $id) {
      id
      name
      status
      gender
      image
      species
    }
  }
`;
function DataCharacter({ id }) {
  const { loading, error, data } = useQuery(GET_DATA, { variables: { id } });
  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <CardCharacterDetail data={data}/>
    </>
  );
}

function DisplayCharacters({ name_c, id_c, favele }) {  
  
  const context = useContext(StarredCharacterContext);
  
  const [favlist, setFavlist] = useState([]);

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { name_c },
  });
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  console.log(data.characters.results, name_c);

  const handlecharacter = (character_id) => {
    id_c(character_id);
  };
  const elementlist = (id) => {
    console.log("object", id);
    if (favlist.indexOf(id) !== -1) {
      favlist.splice(favlist.indexOf(id), 1);
      setFavlist(favlist);
      favele = favlist;
    } else {
      console.log("nuevo");
      setFavlist([...favlist, id]);

      favele([...favlist, id]);
    }

    console.log("Lista", favlist);
  };

  return (
    <>
      <ul className="w-[375px] pl-2">
        {data.characters.results.map(({ id, name, species, image, gender }) => (
          
            <li key={id}  onClick={() => handlecharacter(id)}>
              <div
                className="py-2 px-2 border-y border-slate-100  bg-white  hover:bg-primary-100  hover:rounded-xl space-y-2  flex sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"
                
                
              >
                <img
                  className="block mx-auto h-8 rounded-full sm:mx-0 sm:shrink-0"
                  src={image}
                  alt={name}
                />
                <div className="text-center flex space-y-2 space-x-2 sm:text-left">
                  <div className="space-y-0.5 mr-4">
                    <p className="text-lg text-black font-semibold">{name}</p>
                    <p className="text-slate-500 font-small">
                      Species {species}
                    </p>
                  </div>
                  <button className="block mx-auto px-1 py-1 text-sm  rounded-full border border-black hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-secondary-600 focus:ring-offset-2"  onClick={() => context.setCount(context.count+1)}>
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
                  </button>
                </div>
              </div>
            </li>
        
        ))}
      </ul>
    </>
  );
}

export default function Root() {
  const [name_c, setName_c] = useState("rick");
  const [idm, setIdm] = useState(null);
  const [starred, setStarred] = useState([]);
  function Search_name(event) {
    setName_c(event.target.value);
  }
  const context = useContext(StarredCharacterContext);
  const id_c = (id_c) => {
    //console.log("outside",id_c);
    setIdm(id_c);
  };
  const favele = (favele) => {
    console.log("Lista outside", favele);
    setStarred(favele);
  };
  const filter = (press) =>{
    console.log("button");
  };

  return (
    <>
      <div className="flex">
        <div
          className="flex flex-col w-[375px] h-screen pl-4 pr-2 py-8 overflow-y-auto border-r border-gray-100 bg-gray-50/50"
          id="sidebar"
        > 
          <div className="h-[82] p-[42]">
            <p className="text-22">Ricky and Morty</p>
          </div>

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
            <div className="absolute  items-center inset-y-0 right-0 flex  pr-3 bg-primary-100 focus:outline-none cursor-pointer" onClick={()=>filter}>
              <svg
                className="w-3 h-3 text-primary-700"
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

          <span className="text-xs text-slate-500 font-medium pl-3">
            STARRED CHARACTERS ({context.count})
          </span>
          <DisplayCharacters name_c={name_c} id_c={id_c} favele={favele} />

        </div>
        <div className="w-full py-10 px [100] pt-4 pr[100] m-8 ">
          {" "}
          <DataCharacter id={idm ? idm : ""} starred={starred} />
          
        </div>
      </div>
    </>
  );
}
