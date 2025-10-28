import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './screens/HomePage';
import { useFonts } from 'expo-font';
import Header from './components/Header';
import { AppLoading} from 'expo';
import { StatusBar } from 'expo-status-bar';
import Footer from './components/Footer';
import NewsDeatils from './screens/NewsDetails';
import AboutPage from './screens/AboutPage';
import { navigationRef } from './Navigation/Rootnavigtion';
import QuotePage from './screens/QuotePage';

const Stack = createNativeStackNavigator();
export default function App() {
  // let [fontsLoaded] = useFonts({
  //   'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
  //   'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  // })

 
  // if(!fontsLoaded) {
  //   return <AppLoading />
  // } else {
 return (
    <>
    <StatusBar style="light" />
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomePage} options={{header: () => <Header headerDisplay="Gobo-app" />}} />
        <Stack.Screen name="NewsDetails" component={NewsDeatils} />
        {/* <Stack.Screen name="About" component={AboutPage} /> */}
        <Stack.Screen name='About' component={AboutPage} options={{header: () => <Header headerDisplay="About Golobomantics" />}} />
        <Stack.Screen name='Quote' component={QuotePage} options={{header: () => <Header headerDisplay="Quotation"/>}} />
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
    </>
  )
  // }
 
}
const styles = StyleSheet.create({
  container: {},
});
