import React, { Component } from'react';
import styles from '../styles/style';
import { StyleSheet, Text, View ,ImageBackground,Image } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";


class DetailsScreen extends Component {

constructor () {
super();
this.handleDeleteOne = this.handleDeleteOne.bind(this);
}
handleDeleteOne() {
fetch('https://salty-spire-54482.herokuapp.com/remove/${this.props.navigation.state.params._id}',
{method: 'DELETE'})
.then( response => { this.props.navigation.navigate('Feed')});

}
render()
{
return (

<ImageBackground source = {require ('../images/water.png')} style={styles.container} >
<Image style={styles.stretch} source = {require('../images/title.jpg')} />

<Text>User Name: </Text>
<Text style = {styles.border1 }> {this.props.navigation.state.params.username} </Text>

<Text>Email:</Text>
<Text style = {styles.border1 }> {this.props.navigation.state.params.email} </Text>
<Text>Phone Number: </Text>
<Text style = {styles.border1 }> {this.props.navigation.state.params.phonenumber} </Text>
<Text>Post: </Text>
<Text style = {styles.border1 }> {this.props.navigation.state.params.post} </Text>







<Text style = {styles.border1 }>  Time: {this.props.navigation.state.params.time} </Text>
<Text style = {styles.border1 }>  Date: {this.props.navigation.state.params.date} </Text>

<FontAwesome name='trash-o' onPress = {() => this.handleDeleteOne()}  color ='red' size ={25}/>

</ImageBackground>
)
}
}

export default DetailsScreen;
