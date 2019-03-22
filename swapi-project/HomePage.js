import React from 'react'
import { StyleSheet, Text, View, ListView, ActivityIndicator } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { SearchBar, Button } from 'react-native-elements';

class HomePage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          search: '',
          data: null,
          isLoading: true,
          page: 1,
        };
      }
      
      updateSearch = search => {
        this.setState({ search });
      };
      decrement() {
          console.log("decrement")
          if(this.state.page == 1){
          } else {
            this.setState({page : this.state.page - 1})
          }
      }
      increment = () => {
        this.setState(state => {
          const newValue = state.page + 1;
          return { page: newValue, isLoading: true, data: null };
        });
      
          
      }
      componentDidMount(){
        
        var url = "https://swapi.co/api/people/?page="+this.state.page
        fetch(url)
        .then((response) => response.json())
          .then((responseJson) => {
            let ds = new ListView.DataSource({
              rowHasChanged: (r1, r2) => r1 !== r2
            });
            this.setState({data: ds.cloneWithRows(responseJson.results), isLoading: false})
          })
          .catch(error => {
            console.error(error);
          });
      }
      componentDidUpdate() {
        console.log("page is ",this.state.page)
        
        var url = "https://swapi.co/api/people/?page="+this.state.page
        fetch(url)
        .then((response) => response.json())
          .then((responseJson) => {
            let ds = new ListView.DataSource({
              rowHasChanged: (r1, r2) => r1 !== r2
            });
            this.setState({data: ds.cloneWithRows(responseJson.results), isLoading: false})
          })
          .catch(error => {
            console.error(error);
          });
      }
     
      render() {
        if(this.state.isLoading) {
          return(
            <View style={styles.container}>
              <ActivityIndicator size="large" />
            </View>
          )
        } else {
          return (
            <View style={styles.container}>
              <Text>SWAPI Explorer</Text>
              <Button title="Previous" onPress={this.decrement}/>
              <Button title="Next" onPress={this.increment}/>
              <SearchBar
                placeholder="Type your search here"
                onChangeText={this.updateSearch}
                value={this.state.search}
              />
              
              <ListView
                dataSource={this.state.data}
                renderRow={rowData => {
                return (
                  <Text>{rowData.name}</Text>
                )}}
              />
              
              
            </View>
          );
        }
      }
    }
  
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          justifyContent: 'space-evenly',
        },
      });

  export default HomePage

 