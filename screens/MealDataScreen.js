import { Button, Image, Pressable, ScrollView, StyleSheet } from "react-native";
import { Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import { FlatList } from "react-native-web";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { FavouritesContext } from "../store/context/favourite-context";

function MealDataScreen({ route, navigation }) {

    const favMealContext = useContext(FavouritesContext);

    const mealId = route.params.mealId;
    const mealData = MEALS.find((meal) => meal.id === mealId);

    const isSelectedMealFav = favMealContext.ids.includes(mealId);

    function changeFavHandler() {
        if (isSelectedMealFav) {
            favMealContext.removedFavourite(mealId);
        } else {
            favMealContext.addFavourite(mealId)
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                //    return <Button title="Tap Me" onPress={changeFavHandler}/>
                return <IconButton
                    icon={isSelectedMealFav ? 'star' : 'star-outline'}
                    color='white'
                    onPress={changeFavHandler}
                />
            }
        })
    }, [navigation, changeFavHandler])

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
                    affordability={mealData.affordability}
                    textStyle={styles.detailText}
                    style={styles.title} />
            </View>
        </View>
        <ScrollView contentContainerStyle={styles.outerConatiner}>
            <View style={styles.listContainer} >
                <Subtitle children="Ingredients" />
                <List data={mealData.ingredients} />


                <Subtitle children="Steps" />
                <List data={mealData.steps} />
            </View>
        </ScrollView>

    </>
}

export default MealDataScreen;

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        padding: 8,
        color: 'white'
    },
    image: {
        width: '100%',
        height: 200
    },
    step: {
        padding: 8
    },
    detailText: {
        color: 'cyan'
    },
    listContainer: {
        maxWidth: '80%',
        // alignItems: 'center'
    },
    outerConatiner: {
        alignItems: 'center'
    }
})