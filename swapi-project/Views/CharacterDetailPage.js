import React from 'react'
import { StyleSheet, Text, View, ListView, ActivityIndicator } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { SearchBar, Button } from 'react-native-elements';

class CharacterDetailPage extends React.Component {
    constructor(props)
    {
      super(props)
      this.state = {
        name: "",
        hairColor : ""
      }
    }
  
  
    componentDidMount(){
      fetch('https://swapi.co/api/people/1').then((response) => response.json())
        .then((responseJson) => {
          this.setState({name:responseJson.name}) 
          this.setState({hairColor:responseJson.hair_color})
        })
    }
  
    render() {
      return (
        <View style={styles.container}>
         
          <Text style={styles.category}>
           name :
          </Text>
          <Text style={styles.data}>
           {this.state.name} 
          </Text>
          
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
    },
    category: {
      fontSize: 20,
      margin: 10,
      fontWeight: 'bold'
    },
    data: {
      fontSize: 20,
      margin: 10,
    }
  });

export default CharacterDetailPage