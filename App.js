import { StatusBar } from 'expo-status-bar';
import Entry from './src/components/Entry';
import HomeScreen from './src/screens/HomeScreen'
import DetailsScreen from './src/screens/DetailsScreen'
import DeleteScreen from './src/screens/DeleteScreen'
import TabScreen from './src/screens/TabScreen';
import styles from './src/styles/style';
import { StyleSheet, Text, View,Image } from 'react-native';

import {createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer} from 'react-navigation';
import {createStackNavigator } from 'react-navigation-stack';
import FontAwesome from "react-native-vector-icons/FontAwesome";


import React from 'react';


class App extends React.Component {
 render() {
  return (
  <MainScreenNavigator
  onNavigationStateChange = { () => this.setState({})}
  screenProps = {this.state}
  />


  )
}}

const StackScreen = createStackNavigator ({
Home: {
screen: HomeScreen
},

Details: {
screen: DetailsScreen,

navigationOptions: ( {navigation}) => ({title: navigation.state.params.title, })

}

});

const MainScreenNavigator = createAppContainer(createBottomTabNavigator ({
Home: {
screen: StackScreen,
navigationOptions: {
title:'Feed',
tabBarIcon: ({ tintColor}) => (
  <FontAwesome name='reorder' color ={tintColor} size ={25}/>
),
},
},

Post: {
screen: TabScreen,
title :'Post',

navigationOptions: {
tabBarIcon: ({tintColor}) => (
<FontAwesome name='file-text-o' color = {tintColor} size ={25} />
),
},
},

Delete: {
screen: DeleteScreen,
title :'Delete',
navigationOptions: {
tabBarIcon: ({tintColor}) => (
<FontAwesome name='trash-o' color ={tintColor}  size ={25} />
),
},
},

}));

export default App;