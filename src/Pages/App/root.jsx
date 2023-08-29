import { useQuery, gql } from "@apollo/client";
import { useState , useEffect} from "react";
import Card from "../../components/card";
import CardStarred from "../../components/cardstarred";
import Search_c from "../../components/search";
import Filter_A from "../../components/Filter";
import { StarredCharacterContext } from "../../context";
import { Outlet } from "react-router-dom";


import { useContext } from "react";


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
const GET_CHARACTERS = gql`
  query Characters(
    $name_c: String!
    $species: String
    $status: String
    $gender: String
    $pag: Int
  ) {
    characters(
      page: $pag,
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
      info {
              count
              pages
              next
            }
    }
  }
`;










function DisplayCharacters() {


  const context = useContext(StarredCharacterContext);
  const name_c = context.searchG;
  const species = context.filterspecie;
  const pag = 1;
  const desnomb=[]

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { name_c, species,pag },
  });



  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;


  // console.log("que es",typeof(data.characters.results));
  {data.characters.results.map(({ id, name },index) => (

desnomb[index]={id,name}
    
      ))}
      desnomb.sort((a, b) => a.name.localeCompare(b.name));
      console.log("Modo 1",desnomb);
      // desnomb.sort((a, b) => b.name.localeCompare(a.name));
      // console.log("Modo 2",desnomb);
  

  return (
    <>
      <Card data={data}/>
    </>
  );
}




function StarredCharacters({id, filter_c }) {

  
  
  const { loading, error, data } = useQuery(GET_DATA, { variables: { id } });
  const context = useContext(StarredCharacterContext);
  console.log("como esta",context.likeorder);
 
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <CardStarred
       name={context.searchG}
        data={data}
        filter_c={filter_c}
      />
    </>
  );
 }

// function

export default function Root() {

  useEffect(() => {   },[]);
  // const [name_c, setName_c] = useState("");
  const [idm, setIdm] = useState(null);


  const context = useContext(StarredCharacterContext);
  const id_c = (id_c) => {
    //console.log("outside",id_c);
    setIdm(id_c);
  };



  return (
    <>
      <div className="flex sm:w-screen">
        <div
          className={` flex-col w-[375px] h-screen pl-4 pr-2 py-8 overflow-y-auto border-r border-gray-100  bg-gray-50/50
          ${context.characterDetail === true ? "hidden sm:block" : ""}`}
          id="sidebar"
        >
          <div className="h-[82] p-[42]">
            <p className="text-slate-500 font-Large ">Ricky and Morty</p>
          </div>

          <Search_c Search_ch={(e)=>{context.setSearchG(e)}} />
          {context.avancefilter === true ? <Filter_A /> : ""}

          {context.count > 0 && context.filtercharacter !== "Others" ? (
            <>
              <span className="text-xs text-slate-500 font-medium pl-3">
                STARRED CHARACTERS ({context.count})
              </span>
              <ul className="pl-2">
                {
                context.characterlike.map((item) => (
                  <StarredCharacters

                    id={item}
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

              <DisplayCharacters  />
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
              className={`flex-auto py-10 px-10 pt-4 m-8 ${
                context.characterDetail === false ? "" : ""
              }`}
            >
              <Outlet/>
            </div>
          </>
        )}
      </div>
    </>
  );
}
