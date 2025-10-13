import { Image, ScrollView, StyleSheet } from "react-native";
import { Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import { FlatList } from "react-native-web";

function MealDataScreen({ route }) {
    const mealId = route.params.mealId;
    const mealData = MEALS.find((meal) => meal.id === mealId);

    console.log(mealData)
    return <>
        <View>
            {/* <Text style={styles.title}>Meal Data Screen for id - {mealId}</Text> */}
            {/* <Image source={{uri: mealData.imageUrl}} style={styles.image}/> */}
            <Image source={require('../assets/images/success.png')} style={styles.image} />
            <Text style={styles.title}> Title: {mealData.title}</Text>
            <View>
                <MealDetails
                    duration={mealData.duration}
                    complexity={mealData.complexity}
                    affordability={mealData.affordability} />
            </View>
        </View>
        <ScrollView>
            <View>
                <Text style={styles.title}>Ingredients</Text>
                {mealData.ingredients.map((ingredients) =>
                    <Text key={ingredients} style={styles.step} >{ingredients}</Text>)}

                <Text style={styles.title}>Steps</Text>
                {mealData.steps.map((step) =>
                    <Text style={styles.step} key={step}>{step}</Text>)}
            </View>
        </ScrollView>

    </>
}

export default MealDataScreen;

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        padding: 8,
        color: 'white'
    },
    image: {
        width: '100%',
        height: 200
    },
    step: {
        padding: 8
    }
})