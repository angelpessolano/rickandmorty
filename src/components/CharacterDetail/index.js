import { useContext } from 'react'
import { StarredCharacterContext} from '../../context'
import { useQuery, gql } from "@apollo/client";
import { useParams } from 'react-router-dom';



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
function DataCharacter() {
  let { id } = useParams();
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
      <CardCharacterDetail data={data}  />
    </>
  );
}

const CardCharacterDetail = (data) => {
  const context = useContext(StarredCharacterContext)



  return (
<>
<div className="flex items-center">
        <div className="relative">
          <div className="flex items-center justify-center w-20 h-20 mr-2 overflow-hidden rounded-full">
          <figure className='relative mb-2 w-full h-4/5'>

            <img
              className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
              src={data.data.character.image}
              alt={data.data.character.name}
            />
            {context.characterlike.indexOf(data.data.character.id)!==-1?<>  <div
          className='absolute top-8 left-12 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'>
          
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
            </div></>:''}
          
            </figure>
            
          </div>

          <p className="text-slate-900/[.80] text-xl font-bold py-3">
            {data.data.character.name}
          </p>
        </div>
      </div>

      <div className="flex flex-col py-4 border-b border-slate-200">
        <strong className="text-slate-900 text-sm font-medium">Specie</strong>
        <span className="text-slate-400 text-sm">{data.data.character.species}</span>
      </div>

      <div className="flex flex-col py-4 border-b border-slate-200">
        <strong className="text-slate-900 text-sm font-medium">Status</strong>
        <span className="text-slate-400 text-sm">{data.data.character.status}</span>
      </div>
      <div className="flex flex-col py-4 border-b border-slate-200">
        <strong className="text-slate-900 text-sm font-medium">Gender</strong>
        <span className="text-slate-400 text-sm">{data.data.character.gender}</span>
      </div>
      </>
  )
}

export default DataCharacter