/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Text, AppRegistry } from 'react-native';


const Styles = {
  text:{
    fontSize:30,
    backgroundColor:'#08509B',
    padding:10,
    textAlign:'center',
    shadowColor:'#000',
    shadowOffset:{
      width:10, height:15
    }
  }
};

const App = () => {
  return (
    <Text style={Styles.text}>Frases do dia!</Text>
  );
};

AppRegistry.registerComponent('app2', () => App);
