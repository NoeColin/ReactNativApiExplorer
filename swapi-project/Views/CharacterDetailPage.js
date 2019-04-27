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
        hairColor : "",
        url : this.props.navigation.getParam('url', '1')
      }
    }
  
  
    componentDidMount(){
      fetch(this.state.url).then((response) => response.json())
        .then((responseJson) => {
          this.setState({name:responseJson.name}) 
          this.setState({hairColor:responseJson.hair_color})
          this.setState({height:responseJson.height})
          this.setState({eyeColor:responseJson.eye_color})
          this.setState({skinColor:responseJson.skin_color})
          this.setState({birthYear:responseJson.birth_year})
        })
    }
  
    render() {
      return (
        <View style={styles.container}>
         
          <Text style={styles.category}>
             {this.state.name}
          </Text>
          <Text style ={styles.data}>
            Hair color: {this.state.hairColor}
          </Text>
          <Text style ={styles.data}>
            Height : {this.state.height} cm
          </Text>
          <Text style ={styles.data}>
             Eyes color {this.state.eyeColor}
          </Text>
          <Text style ={styles.data}>
             Skin color : {this.state.skinColor}
          </Text>
          <Text style ={styles.data}>
              Born in (year) : {this.state.birthYear}
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