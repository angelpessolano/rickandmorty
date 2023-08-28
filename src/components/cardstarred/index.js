import { useContext } from 'react'
import { StarredCharacterContext} from '../../context'

const CardStarred = ({name_c, data,id_c,filter_c}) => {
  
  const context = useContext(StarredCharacterContext);
  console.log("Lista filter", filter_c);
  
  const handlecharacter = (character_id) => {
      context.openCharacterDetail();
      id_c(character_id);
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
//

  return (
<>
{ (data.character.name.toLowerCase().includes(name_c.toLowerCase())|| name_c==='') &&(data.character.species.toLowerCase()===filter_c.toLowerCase()||context.filterspecie==='')?
        <li key={data.character.id} onClick={() => handlecharacter(data.character.id)}>
          <div className="py-2 px-2 border-y border-slate-100  bg-white  hover:bg-primary-100  hover:rounded-xl space-y-2
            flex sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img
              className="block mx-auto h-8 rounded-full sm:mx-0 sm:shrink-0"
              src={data.character.image}
              alt={data.character.name}
            />
            
            <div className="text-center flex space-y-2 space-x-2 sm:text-left">
              <div className="space-y-0.5 mr-4">
                <p className="text-lg text-black font-semibold">{data.character.name}</p>
                <p className="text-slate-500 font-small">Species {data.character.species}</p>
              </div>
              <button
                className="block  px-1 py-1 text-sm  rounded-full  bg-white focus:outline-none 
                focus:ring-2 focus:ring-secondary-600 focus:ring-offset-2"
                onClick={() => elementlist(data.character.id)}
              >
                
                  <svg
                    className="w-[1.15rem] h-[1.15rem] text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0
                     0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 
                     7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
                  </svg>
                
              </button>
            </div>
          </div>
        </li>:<></>
        }
        </>

  )
}

export default CardStarred