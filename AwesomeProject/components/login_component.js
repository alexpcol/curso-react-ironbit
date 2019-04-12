import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';


function Login(props) {
    return(
        <View style={styles.completeView}>
            <Text style={styles.title}>
                Hola {props.message} !!
            </Text>
            {/*requiere = sirve para hacer un import*/}
            <Image style={styles.image}
                source={require('../assets/logo.png')}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    completeView:{
        justifyContent: 'center',
        alignItems: 'center'
    },
   title:{
       color:'darkgrey',
       fontSize: 25,
       justifyContent: 'center'
   },
    image:{
        width:300
    }
});

export default Login;