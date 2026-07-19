import { createContext, useContext, useReducer, useEffect } from "react";

const CollectionContext = createContext(null);

function collectionReducer(state, action) {
    switch(action.type) {
        case "ADD":
        if (state.some((movie) => movie.id === action.id)) return state;
        return [...state, { id: action.id}];

        case "REMOVE": 
        return state.filter((movie) => movie.id !== action.id);

        default: 
         throw new Error("There is no such type of action");
    }
}

export function useCollection() {
    const context = useContext(CollectionContext);
    if(context === null) throw new Error("children have to be inside of it")
    return context;
}

export function CollectionProvider({children}) {
    const [moviesCollection, dispatch] = useReducer(collectionReducer, JSON.parse(localStorage.getItem("collection")) || []);

    function isInCollection(id) {
    return moviesCollection.some((movie) => movie.id === id)
}

    useEffect(() => {
        localStorage.setItem("collection", JSON.stringify(moviesCollection));
    
      }, [moviesCollection]);

  return (
    <CollectionContext.Provider value={{moviesCollection, dispatch, isInCollection}}>
    {children}
    </CollectionContext.Provider>
  )
}