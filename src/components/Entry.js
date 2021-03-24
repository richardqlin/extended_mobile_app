import React,{Component} from 'react';
import { StyleSheet, Button, View } from 'react-native';
import styles from '../styles/style'
class Entry extends Component {
render() {
return (
    <View  style={styles.border}>
    <Button title = {this.props.item.title } onPress= { () =>this.props.toDetails(this.props.item) } />
    </View>
);
}
}

export default Entry;



