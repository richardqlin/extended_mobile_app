import React, {Component} from 'react';

import styles from '../styles/style';

import Form from '../components/Form';

import {StyleSheet, Text,View, ImageBackground} from 'react-native';

class TabScreen extends Component {
constructor(){
super();

this.submit = this.submit.bind(this);
}

submit(title,username,email, phonenumber,post) {


if (title && username && email && phonenumber && post) {
    fetch('https://salty-spire-54482.herokuapp.com/add',{
    method: 'POST',
    headers: {
      'Content-Type':'application/x-www-form-urlencoded'},

        body: 'title=' + title +'&username=' +username + '&email=' + email + '&phonenumber=' + phonenumber + '&post='+post
        }).then(response => {
        this.props.navigation.navigate('Feed');
        });
    }
}

render(){
return(

<ImageBackground source ={ require('../images/water.png')} style = {styles.container} >

<Form submit= {this.submit} />

</ImageBackground>
);

}
}


export default TabScreen;