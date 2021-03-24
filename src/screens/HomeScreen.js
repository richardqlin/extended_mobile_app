import React , {Component} from 'react';


import styles from '../styles/style';
import Entry from '../components/Entry';
import { View, Text, FlatList,StyleSheet,Button,ImageBackground, Image } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";

class HomeScreen extends Component {
constructor () {
super();
this.state = {
entries: [],
};
this.toDetails = this.toDetails.bind(this);
this.handleDelete = this.handleDelete.bind(this);
}

toDetails(item) {
this.props.navigation.navigate('Details',item);
}

componentDidMount(){
fetch ('https://salty-spire-54482.herokuapp.com/entries')
.then(response => response.json()).then(jsonResponse => this.setState( { entries: jsonResponse}))
;
}

componentWillReceiveProps() {
    this.componentDidMount();
}

handleDelete() {
fetch('https://salty-spire-54482.herokuapp.com/delete', {
method: 'DELETE'
}).then( response => { this.props.navigation.navigate('Feed');
});

}




render(){



return (
<ImageBackground source={require('../images/water.png')} style ={styles.container} >
{
 (this.state.entries.length >0)?

<View>
<FlatList
data = {this.state.entries}
renderItem = { ({item}) => <Entry item = {item} toDetails={this.toDetails} />}

keyExtractor = {item => item['_id']}

/>



<Button title='DELETE'
color='red'
onPress = {() => this.handleDelete()} />
</View>

:
<View>
<Text style = {styles.contain}>         No Data </Text>
<Image source={require('../images/no_data_found.png')} style ={styles.stretch1} />
</View>
}
</ImageBackground>

);

}
}


export default HomeScreen