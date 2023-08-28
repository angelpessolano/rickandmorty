import { createContext, useState } from "react";

 export const StarredCharacterContext = createContext()

export const StarredCharacterProvider = ({children})=>{
      const [count,setCount] = useState(0);
      const [characterDetail,setCharacterDetail] = useState(false);
     
      const openCharacterDetail =() => setCharacterDetail(true);
      const closeCharacterDetail =() => setCharacterDetail(false);
        //character liked
      const [characterlike,setCharacterLiked] = useState([]);
       //  mostrar o ocultar filtro
       const [avancefilter,setAvancefilter]=useState(false);
      const openAvancefilter =() => setAvancefilter(true);
      const closeAvancefilter =() => setAvancefilter(false);
      const [filtercharacter,setFiltercharacter]=useState('');
      const [filterspecie,setFilterspecie]=useState('');

  
      return(
            <StarredCharacterContext.Provider value={{
                  count,
                  setCount,
                  characterlike,
                  setCharacterLiked,
                  characterDetail,
                  openCharacterDetail,
                  closeCharacterDetail,
                  openAvancefilter,
                  closeAvancefilter,
                  avancefilter,
                  filtercharacter,
                  filterspecie,
                  setFiltercharacter,
                  setFilterspecie

                 

            
            }


            }>
                  {children}
            </StarredCharacterContext.Provider>

      )
}