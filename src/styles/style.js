import {StyleSheet, Dimensions, Text, View,Image} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


border: {
 width: Dimensions.get('window').width * .7,
margin:5,
padding:5,
borderWidth: 1,
borderColor: '#0f0',
},

border1: {
 width: Dimensions.get('window').width * .7,
margin:10,
padding:5,
borderWidth: 1,
borderColor: '#0f0',
color:'#f0f',
fontSize: 20,
},

contain: {
     color:'#f00',
     fontSize: 25,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Times New Roman',

  },

  stretch :{ width:100,
  height:50,
  resizeMode:'stretch',
  },
  stretch1 :{ width:250,
   height:50,
   resizeMode:'stretch',
   }



});


export default styles;