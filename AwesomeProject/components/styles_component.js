import React, { Component } from 'react';
import {  StyleSheet} from 'react-native';


const Styles = StyleSheet.create({
    container:{
      backgroundColor: '#F5FCFF',
      alignItems: 'center',
      paddingTop: 40,
      padding: 10
    },
    logo: {
      width: 150,
      height: 150,
      resizeMode: 'contain'
    },
    heading: {
      fontSize: 30,
      marginTop: 10,
      color: 'black'
    },
    input: {
      width: '100%',
      height: 50,
      marginTop: 10,
      padding: 4,
      fontSize: 18,
      borderWidth: 1,
      borderColor: '#48BBEC'
    },
    button: {
      height: 50,
      backgroundColor: '#48BBEC',
      alignSelf: 'stretch',
      marginTop: 10,
      justifyContent: 'center'
    },
    textButton: {
      fontSize: 22,
      color: '#FFF',
      alignSelf: 'center'
    }
  });

export default Styles;

