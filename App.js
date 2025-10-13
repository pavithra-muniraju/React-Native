import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDataScreen from './screens/MealDataScreen';

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
          <Stack.Screen name='MealData' component={MealDataScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
