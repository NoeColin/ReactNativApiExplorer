import  HomePage  from './Views/HomePage.js'
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import CharacterDetailPage from './Views/CharacterDetailPage.js'

const App = createStackNavigator(
  {
    Home: HomePage,
    CharacterDetail: CharacterDetailPage
  },
  {
    initialRouteName: 'Home',
  }
 )
 export default createAppContainer(App);
