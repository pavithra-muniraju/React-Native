import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDataScreen from './screens/MealDataScreen';
import { Ionicons } from '@expo/vector-icons'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavouriteScreen from './screens/FavouriteScreen';
import FavouritesContextProvider from './store/context/favourite-context';
// https://github.com/academind/react-native-practical-guide-code ---> full guide
const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return <Drawer.Navigator screenOptions={{
    headerStyle: { backgroundColor: '#351401' },
    headerTintColor: 'white',
    sceneContainerStyle: { backgroundColor: '#bc6834ff' },
    drawerContentStyle: { backgroundColor: '#351401' },
    drawerInactiveTintColor: 'white',
    drawerActiveTintColor: '#351401',
    drawerActiveBackgroundColor: '#e6c6b2ff'
  }}>
    <Drawer.Screen name='All Categories' component={CategoriesScreen} options={{
      title: 'All Categories',
      drawerIcon: ({ color, size }) => <Ionicons name='layers' color={color} size={size} />
    }} />
    <Drawer.Screen name='Favourites' component={FavouriteScreen} options={{
      title: 'Favourites',
      drawerIcon: ({ color, size }) => <Ionicons name='star' color={color} size={size} />
    }} />
  </Drawer.Navigator>
}
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavouritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{

            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#bc6834ff' }
          }}>
            {/* <Stack.Screen name="MealsCategories" component={CategoriesScreen} options={{title: 'All Categories',}} /> */}
            <Stack.Screen name="MealsCategories" component={DrawerNavigator} options={{ title: 'All Categories', headerShown: false }} />
            <Stack.Screen name="MealsOverview" component={MealsOverviewScreen}
              options={({ route, navigation }) => {
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
      </FavouritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
