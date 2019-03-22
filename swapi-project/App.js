import  HomePage  from './HomePage.js'
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const App = createStackNavigator(
  {
    Home: HomePage
  },
  {
    initialRouteName: 'Home',
  }
 )
 export default createAppContainer(App);
