import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDataScreen from './screens/MealDataScreen';
// https://github.com/academind/react-native-practical-guide-code ---> full guide
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
            
            headerStyle: {backgroundColor: '#351401'},
            headerTintColor: 'white',
            contentStyle: {backgroundColor: '#bc6834ff'}
          }}>
          <Stack.Screen name="MealsCategories" component={CategoriesScreen} options={{title: 'All Categories',}}  />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} 
          options={({route, navigation}) => {
            const catId = route.params.categoryId;
            return {
              title: catId
            }
          }} />
          <Stack.Screen name='MealData' component={MealDataScreen} 
          // options={{
          //   headerRight: () => {
          //     // return <Text style={{color:'white'}}>In the header</Text>  
          //     return <Button title='Add To Fav' />
          //   }
          // }} one way of adding header options where there is no screen interaction
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
