import React,{Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button , TouchableOpacity, ImageBackground } from 'react-native';
import styles from '../styles/style'

import FontAwesome from "react-native-vector-icons/FontAwesome";

class Form extends Component {

constructor(){
super();

this.state = {
    title:'',
    username: "",
    email:'',
    phonenumber:'',
    post:'',

};
}

handleSubmit() {
    this.props.submit(this.state.title,this.state.username,this.state.email,this.state.phonenumber,this.state.post);
    this.setState({title:'title', username:'name',email: '', phonenumber:'',post:'post'});
}

render() {
return (
<ImageBackground source = {require ('../images/water1.jpg')} style = {styles.container} >
<Text>Title: </Text>
<TextInput style = {[styles.border, {height: 30}]}
value = {this.state.title}
onChangeText = {(title) => this.setState({title:title})}
/>
<Text>User Name: </Text>
<TextInput style = {[styles.border, {height: 30}]}
value = {this.state.username}
onChangeText = {(username) => this.setState({username:username})}
/>
<Text>Email: </Text>
<TextInput style = {[styles.border, {height: 30}]}
value = {this.state.email}
onChangeText = {(email) => this.setState({email:email})}
/>
<Text>Phone Number: </Text>
 <TextInput style = {[styles.border, {height: 30}]}
 value = {this.state.phonenumber}
 onChangeText = {(phonenumber) => this.setState({phonenumber:phonenumber})}
 />
<Text>Post: </Text>
<TextInput style = {[styles.border, {height: 40}]}
value = {this.state.post}
onChangeText = {(post) => this.setState({post:post})}
/>

<Button style ={styles.container } title='Submit'
color='green'
onPress = {() => this.handleSubmit()} />

<FontAwesome name='send'

onPress = {() => this.handleDelete()}  color ='green' size ={25}/>

</ImageBackground>

)
}
}

export default Form