// import React, { Component } from 'react';
// import {  StyleSheet, View, Image, Text } from 'react-native';


// function LoginLogo(props) {
//     let imagePath = "https://i0.wp.com/www.narcbrain.com/wp-content/uploads/2018/03/somebody-else-the-1975.jpg?resize=400%2C484"
//     return (
//         <View>
//             <Text>Hola!</Text>
//             {/* <Image style = {styles.logo}
//         source={require('../assets/somebody_else.jpg')}></Image> */}
//         </View>
        
//     )
// }

// const styles = StyleSheet.create({
//     logo: {
//         width: 150,
//         height: 150,
//         resizeMode: 'contain',
//         backgroundColor: 'red'
//       }
// });

// export default LoginLogo;


import React, { Component } from 'react';
import {  StyleSheet, View, Image } from 'react-native';


function LoginContainer2(props) {
    return (
        <View style={styles.container}>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'red',
        alignItems: 'center',
        paddingTop: 40,
        padding: 10
      }
});

export default LoginContainer2;