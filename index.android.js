/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Text, AppRegistry, View, TouchableOpacity } from 'react-native';


const Styles = {
  principal: {
    flex: 1,
    backgroundColor:'skyblue',
    height: 300,
    ///justifyContent: 'space-between',
    //alignItems: 'center',
    //flexDirection: 'row'
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
    backgroundColor:'#2A48FA',
    padding:10,
  },
  rodape:{
    flex: 2,
    backgroundColor:'#08509B',
    padding:10,
  },
  botao:{
    backgroundColor: '#48bbec'
  }
};

const App = () => {
  const {principal, topo, conteudo, rodape, text, botao} = Styles;
  return (
    <View style={ principal}>
      <View style={ topo }>
        <Text style={text}>Topo</Text>
      </View>
      <View style={ conteudo }>
        <TouchableOpacity style={botao}>
          <Text style={text}>Clique aqui</Text>
        </TouchableOpacity>
      </View>
      <View style={ rodape }>
        <Text style={text}>Rodapé</Text>
      </View>
    </View>
  );
};

AppRegistry.registerComponent('app2', () => App);
