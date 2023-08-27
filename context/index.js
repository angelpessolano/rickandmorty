import { createContext, useState } from "react";

 export const StarredCharacterContext = createContext()

export const StarredCharacterProvider = ({children})=>{
      const [count,setCount] = useState(0);
    //  console.log('Count',count);
      return(
            <StarredCharacterContext.Provider value={{
                  count,
                  setCount,
            
            }


            }>
                  {children}
            </StarredCharacterContext.Provider>

      )
}