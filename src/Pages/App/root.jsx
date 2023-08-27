import { useQuery, gql } from "@apollo/client";
import { useState,useEffect } from "react";
import CardCharacterDetail from "../../components/CharacterDetail";
import Card from "../../components/card";
import Search_c from "../../components/search";
import { StarredCharacterContext } from "../../context";

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
    <div className="bg-white h-10 w-10 border-current cursor-pointer sm:hidden" onClick={()=>{console.log("ATRAS")}}>🔙</div>
      <CardCharacterDetail data={data} />
    </>
  );
}

function DisplayCharacters({ name_c, id_c }) {
  const context = useContext(StarredCharacterContext);

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { name_c },
  });
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  //console.log(data.characters.results, name_c);

  return (
    <>
      <Card data={data} id_c={id_c}  />
    </>
  );
}

export default function Root() {
  
  const [name_c, setName_c] = useState("rick");
  const [idm, setIdm] = useState(null);
  const [starred, setStarred] = useState([]);

  const context = useContext(StarredCharacterContext);
  const id_c = (id_c) => {
    //console.log("outside",id_c);
    setIdm(id_c);
  };
  useEffect(() => {  console.log("cambio",context.characterlike) },[context.characterlike]);
  const filter = (press) => {
    console.log("button");
  };
  const Search_ch = (val) => {
    console.log("VAL", val);
    setName_c(val);
  };

  return (
    <>
      <div className="flex">
        <div
          className=" flex-col w-[375px] h-screen pl-4 pr-2 py-8 overflow-y-auto border-r border-gray-100 bg-gray-50/50 
          hidden sm:block"
          id="sidebar">
          <div className="h-[82] p-[42]">
            <p className="text-slate-500 font-medium ">Ricky and Morty</p>
          </div>

          <Search_c Search_ch={Search_ch} filter={filter} />
          <span className="text-xs text-slate-500 font-medium pl-3">
            STARRED CHARACTERS ({context.count})
          </span>
          
          <DisplayCharacters name_c={name_c} id_c={id_c}  />
          
        </div>
        <div className="flex-auto py-10 px [100] pt-4 pr[100] m-8 ">
    

          <DataCharacter id={idm ? idm : ""} starred={starred} />
        </div>
      </div>
    </>
  );
}
