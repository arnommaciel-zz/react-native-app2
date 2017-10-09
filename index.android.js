/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Text, AppRegistry, View, TouchableOpacity, Image, Alert } from 'react-native';


const Styles = {
  principal: {
    flex: 1,
    backgroundColor:'#fff'
  },
  text:{
    fontSize:30,
    padding:10,
    alignSelf:'center',
    color: '#fff',
    fontWeight: '100'
  },
  topo:{
    flex: 1,
    backgroundColor:'#08509B',
    padding:10,
  },
  conteudo:{
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding:10,
  },
  rodape:{
    flex: 2,
    backgroundColor:'#08509B',
    padding:10,
  },
  botao:{
    backgroundColor: '#48bbec',
    marginBottom:10
  },
  image:{
    marginBottom:10,
    justifyContent:'flex-end',
    padding: 5   

  }
};

const getFrase = () => {
  var numero = Math.floor(Math.random()*6);
  var frases = [
    'Frase 1',
    'Frase 2',
    'Frase 3',
    'Frase 4',
    'Frase 5',
    'Frase 6',
  ];
  Alert.alert(frases[numero]);
}

const App = () => {
  const {image, principal, topo, conteudo, rodape, text, botao} = Styles;
  return (
    <View style={ principal}>
      <View style={ topo }>
        <Text style={text}>Topo</Text>
      </View>
      <View style={ conteudo }>
        <Image source={ require('./assets/imgs/logo.png') } style={image}/>
        <TouchableOpacity style={botao} onPress={getFrase}>
          <Text style={text}>Nova frase</Text>
        </TouchableOpacity>
      </View>
      <View style={ rodape }>
        <Text style={text}>Rodapé</Text>
      </View>
    </View>
  );
};

AppRegistry.registerComponent('app2', () => App);
