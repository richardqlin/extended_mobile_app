import React , {Component} from 'react';

import styles from '../styles/style';
import Entry from '../components/Entry';
import { View, FlatList,StyleSheet,Button,ImageBackground,Image,TouchableHighlight  } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";

class DeleteScreen extends Component {
constructor () {

super();
this.handleDelete = this.handleDelete.bind(this);
}




handleDelete() {
fetch('https://salty-spire-54482.herokuapp.com/delete').then(response => {
    this.props.navigation.navigate('Feed');
});

}


render(){

return (
<ImageBackground source={require('../images/water.png')} style ={styles.container} >



<Button title='CONFIRM'
color='red'
onPress = {() => this.handleDelete()} />

<TouchableHighlight onPress = {() => this.handleDelete()} >
<Image style={styles.stretch} source = {require('../images/delete.jpg')} />

</TouchableHighlight >
  <FontAwesome name='trash-o' onPress = {() => this.handleDelete()}  color ='red' size ={25}/>


</ImageBackground>

);

}
}


export default DeleteScreen