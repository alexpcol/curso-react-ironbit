import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';


function Login2(props) {
    return (
        <View style={styles.completeView}>
            <Text style={styles.title}>
                {props.message}
            </Text>
            {/*requiere = sirve para hacer un import*/}
            <Image style={styles.image}
                source={require('../assets/somebody_else.jpg')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    completeView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 25,
        justifyContent: 'center',
        fontWeight: 'bold'
    },
    image: {
        width: 300,
        height: 300,
        marginTop: 20,
        borderRadius: 10
    }
});

export default Login2;