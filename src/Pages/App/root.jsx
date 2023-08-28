import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import CardCharacterDetail from "../../components/CharacterDetail";
import Card from "../../components/card";
import CardStarred from "../../components/cardstarred";
import Search_c from "../../components/search";
import Filter_A from "../../components/Filter";
import { StarredCharacterContext } from "../../context";

import { useContext } from "react";
const GET_CHARACTERS = gql`
  query Characters(
    $name_c: String!
    $species: String
    $status: String
    $gender: String
  ) {
    characters(
      filter: {
        name: $name_c
        species: $species
        status: $status
        gender: $gender
      }
    ) {
      results {
        id
        name
        status
        gender
        image
        species
      }
    }
  }
`;
function DisplayCharacters({ name_c, id_c }) {
  const context = useContext(StarredCharacterContext);
  const species = context.filterspecie;

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { name_c, species },
  });
  //console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  //console.log(data.characters.results, name_c);

  return (
    <>
      <Card data={data} id_c={id_c} />
    </>
  );
}

// const GET_CHARACTERS = gql`
//   query Characters($name_c: String!) {
//     characters(filter: { name: $name_c }) {
//       results {
//         id
//         name
//         image
//         species
//       }
//     }
//   }
// `;

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
  const context = useContext(StarredCharacterContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <div
        className="bg-white h-10 w-10 border-current cursor-pointer sm:hidden"
        onClick={() => context.closeCharacterDetail()}
      >
        🔙
      </div>
      <CardCharacterDetail data={data} />
    </>
  );
}

function StarredCharacters({ name_c, id, id_c, filter_c }) {
  // console.log("QUE HAY",id);
  const { loading, error, data } = useQuery(GET_DATA, { variables: { id } });
  const context = useContext(StarredCharacterContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <CardStarred
        name_c={name_c}
        data={data}
        id_c={id_c}
        filter_c={filter_c}
      />
    </>
  );
}

export default function Root() {
  const [name_c, setName_c] = useState("rick");
  const [idm, setIdm] = useState(null);

  const context = useContext(StarredCharacterContext);
  const id_c = (id_c) => {
    //console.log("outside",id_c);
    setIdm(id_c);
  };
  // useEffect(() => {
  //   console.log("cambio", context.characterlike);
  // }, [context.characterlike]);

  const Search_ch = (val) => {
    setName_c(val);
  };

  return (
    <>
      <div className="flex">
        <div
          className={` flex-col w-[375px] h-screen pl-4 pr-2 py-8 overflow-y-auto border-r border-gray-100 bg-gray-50/50 
          ${context.characterDetail === true ? "hidden sm:block " : ""}`}
          id="sidebar"
        >
          <div className="h-[82] p-[42]">
            <p className="text-slate-500 font-medium ">Ricky and Morty</p>
          </div>

          <Search_c Search_ch={Search_ch} />
          {context.avancefilter === true ? <Filter_A /> : ""}

          {context.count > 0 && context.filtercharacter !== "Others" ? (
            <>
              <span className="text-xs text-slate-500 font-medium pl-3">
                STARRED CHARACTERS ({context.count})
              </span>
              <ul className="w-[375px] pl-2">
                {context.characterlike.map((item) => (
                  <StarredCharacters
                    name_c={name_c}
                    id={item}
                    id_c={id_c}
                    filter_c={context.filterspecie}
                  />
                ))}
              </ul>
            </>
          ) : (
            ""
          )}
          {context.filtercharacter !== "Starred" ? (
            <>
              <span className="text-xs text-slate-500 font-medium pl-3">
                CHARACTERS
              </span>

              <DisplayCharacters name_c={name_c} id_c={id_c} />
            </>
          ) : (
            <></>
          )}
        </div>
        {context.characterDetail === false ? (
          <></>
        ) : (
          <>
            <div
              className={` flex-auto py-10 px [100] pt-4 pr[100] m-8 ${
                context.characterDetail === false ? "hidden sm:block " : ""
              }`}
            >
              <DataCharacter id={idm ? idm : ""} />
            </div>
          </>
        )}
      </div>
    </>
  );
}
