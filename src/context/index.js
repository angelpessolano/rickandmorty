import { createContext, useState } from "react";

export const StarredCharacterContext = createContext();

export const StarredCharacterProvider = ({ children }) => {
  //varible global del buscador

  const [searchG, setSearchG] = useState("");

  const [count, setCount] = useState(0);
  const [characterDetail, setCharacterDetail] = useState(false);

  const openCharacterDetail = () => setCharacterDetail(true);
  const closeCharacterDetail = () => setCharacterDetail(false);
  //character liked contiene los id de caracteres agregados
  const [characterlike, setCharacterLiked] = useState([]);

  const [likeorder, setLikedorder] = useState([]);
  //  mostrar o ocultar filtro
  const [avancefilter, setAvancefilter] = useState(false);
  const openAvancefilter = () => setAvancefilter(true);
  const closeAvancefilter = () => setAvancefilter(false);
  const [filtercharacter, setFiltercharacter] = useState("");
  const [filterspecie, setFilterspecie] = useState("");

  const [dataprocess, setDataprocess] = useState([]);

  return (
    <StarredCharacterContext.Provider
      value={{
        searchG,
        setSearchG,
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
        setFilterspecie,
        dataprocess,
        setDataprocess,
        likeorder,
        setLikedorder,
      }}
    >
      {children}
    </StarredCharacterContext.Provider>
  );
};
