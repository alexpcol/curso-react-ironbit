import React, { Component } from 'react';
import {  StyleSheet, View, TextInput } from 'react-native';


function LoginTextInput(props) {
    return (
        <TextInput style = {styles.input}
            placeholder = {userNamePlaceholder}
            onChangeText= {(text) => console.log(text)}>
        </TextInput>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 50,
        marginTop: 10,
        padding: 4,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48BBEC'
      }
});

export default LoginTextInput;