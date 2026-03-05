import { useContext } from "react"
import { FavouritesContext } from "../store/context/favourite-context"
import MealList from "../components/MealList/MealList";
import { MEALS } from "../data/dummy-data";
import { StyleSheet, Text, View } from "react-native";

function FavouriteScreen() {

    const favMealContext = useContext(FavouritesContext);

    const favMeals = MEALS.filter(meal => favMealContext.ids.includes(meal.id) )
    if(favMeals.length  == 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.title}>You have no favourite Meals Yet!</Text>
            </View>
        )
    }
    return (
        <MealList displayedMeals={favMeals} />
    )
}

export default FavouriteScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex:1 ,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})