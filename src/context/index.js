import { createContext, useState } from "react";

 export const StarredCharacterContext = createContext()

export const StarredCharacterProvider = ({children})=>{
      const [count,setCount] = useState(0);
      const [characterDetail,setCharacterDetail] = useState(false);
      const openCharacterDetail =() => setCharacterDetail(true);
      const closeCharacterDetail =() => setCharacterDetail(true);
      //character liked
      const [characterlike,setCharacterLiked] = useState([]);
    //  console.log('Count',count);
      return(
            <StarredCharacterContext.Provider value={{
                  count,
                  setCount,
                  characterlike,
                  setCharacterLiked,

            
            }


            }>
                  {children}
            </StarredCharacterContext.Provider>

      )
}