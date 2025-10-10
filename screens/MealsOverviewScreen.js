import { useRoute } from "@react-navigation/native";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealsOverviewScreen({route}) {
// below are 2 diff ways to acess route param
    const route1 = useRoute();
    // console.log(route1.params.categoryId);
    // console.log(route.params.categoryId);
    const catId = route.params.categoryId 

    const  displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0
    })

    console.log(displayedMeals);

    function renderMealItem(itemData) {
        console.log(itemData.item.title)
        return <MealItem  title={itemData.item.title}/>
    }

    return <View style={styles.container}>
        <Text>Meals Overview Screen - {catId}</Text>
        
        
        <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
}
export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex:1, 
        padding: 16,
        fontSize: 20
    }
})