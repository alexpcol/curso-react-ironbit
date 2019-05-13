import React, {Component} from 'react'
import { Platform, StyleSheet, Text, View, ScrollView, SafeAreaView, FlatList, Image, TextInput, TouchableHighlight } from 'react-native';
import LoginContainer from '../components/login_container_component';
import LoginLogo2 from '../components/login_logo_component';
import LoginTextInput from '../components/login_textInput_component';
import Styles from '../components/styles_component';
class AuthLogin extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let userNamePlaceholder = "Username";
        let passwordPlaceholder = "Password";
        let imagePath = "https://i0.wp.com/www.narcbrain.com/wp-content/uploads/2018/03/somebody-else-the-1975.jpg?resize=400%2C484"

        return(
            // <LoginContainer>
            //     <LoginTextInput></LoginTextInput>
            // </LoginContainer>
            
            <View style= {Styles.container}>
                <Image style = {Styles.logo}
                source={{ uri: imagePath }}>
                </Image>
                <Text style = {Styles.heading}>
                    Ironbit Login
                </Text>
                <TextInput style = {Styles.input}
                placeholder = {userNamePlaceholder}
                onChangeText= {(text) => console.log(text)}>
                </TextInput>

                <TextInput style = {Styles.input}
                placeholder = {passwordPlaceholder}
                secureTextEntry = {true}>

                </TextInput>
                <TouchableHighlight style = {Styles.button}>
                    <Text style = {Styles.textButton}>
                        Login
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}


//   const styles = StyleSheet.create({
//     container:{
//       backgroundColor: '#F5FCFF',
//       alignItems: 'center',
//       paddingTop: 40,
//       padding: 10
//     },
//     logo: {
//       width: 150,
//       height: 150,
//       resizeMode: 'contain'
//     },
//     heding: {
//       fontSize: 30,
//       marginTop: 10,
//       color: 'black'
//     },
//     input: {
//       width: '100%',
//       height: 50,
//       marginTop: 10,
//       padding: 4,
//       fontSize: 18,
//       borderWidth: 1,
//       borderColor: '#48BBEC'
//     },
//     button: {
//       height: 50,
//       backgroundColor: '#48BBEC',
//       alignSelf: 'stretch',
//       marginTop: 10,
//       justifyContent: 'center'
//     },
//     buttonText: {
//       fontSize: 22,
//       color: '#FFF',
//       alignSelf: 'center'
//     }
//   });


  export default AuthLogin;