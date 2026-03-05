import { createContext, useState } from "react";

export const FavouritesContext = createContext({
    ids: [],
    addFavourite: (id) => { },
    removedFavourite: (id) => { }
});

function FavouritesContextProvider({ children }) {

    const [favMealIds, setFavMealIds] = useState([]);

    function addFavourite(id) {
        console.log('from context', id),
        console.log(favMealIds)
        setFavMealIds((currentFavIds) => [...currentFavIds, id])
    }

    function removedFavourite(id) {
        setFavMealIds((currentFavIds) => currentFavIds.filter(mealid => mealid != id));
    }

    const value = {
        ids: favMealIds,
        addFavourite: addFavourite,
        removedFavourite: removedFavourite
    }
    return <FavouritesContext.Provider value={value}>
        {children}
    </FavouritesContext.Provider>
}

export default FavouritesContextProvider;