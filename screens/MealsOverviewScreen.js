import { CATEGORIES, MEALS } from '../data/dummy-data';
import { useLayoutEffect } from 'react';
import MealList from '../components/MealList/MealList';

function MealsOverviewScreen({ route, navigation }) {
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });


    // useEffect(() => {
    //     const categoryTitle = CATEGORIES.find((category) => category.id === catId).title
    //     navigation.setOptions({ title: categoryTitle });
    // }, []);
    
    // better performance than just useEffect with resp to animation 
    useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === catId).title
        navigation.setOptions({ title: categoryTitle });
    }, []);

    return <MealList displayedMeals={displayedMeals} />
}

export default MealsOverviewScreen;
