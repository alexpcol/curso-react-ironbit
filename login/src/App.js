import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { colors } from './config';
import { AppContainer, InputSpotify, Spinner } from './components/common';
import Home from './screens/Home';

class App extends Component {
    state = {
        user: '',
        password: '',
        emailError: '',
        passwordError: '',
        httpError: '',
        isAuthenticated: false,
        isLoading: false,
    }

    componentWillMount() {
        AsyncStorage.getItem('accessToken').
            then(data => {
                this.setState({
                    isAuthenticated: data != null
                });
            })
    }

    renderButton = () => {
        if (this.state.isLoading) {
            return (
                <Spinner size='small' />
            );
        }
        return (
            <TouchableOpacity style={styles.submitButtonStyle} onPress={this.onSubmit}>
                <Text style={{ color: colors.alabasterWhite, textAlign: 'center', fontWeight: 'bold' }}>Login</Text>
            </TouchableOpacity>
        );
    }

    onSubmit = () => {
        if (!this.state.user) {
            this.setState({
                emailError: 'No hay usuario'
            });
            return
        }
        if (!this.state.password) {
            this.setState({
                passwordError: 'No hay contraseña'
            });
            return
        }
        const url = "http://localhost:3000/token"
        const { user, password } = this.state;
        this.setState({
            emailError: '',
            passwordError: '',
            httpError: '',
            isLoading: true,
        });
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                username: user,
                password: password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).
            then(res => res.json()).
            then(data => {
                if (data.error) {
                    this.setState({
                        httpError: data.error
                    })
                    this.setState({
                        isLoading: false
                    })
                } else {
                    AsyncStorage.setItem('acessToken', data.accessToken)
                        .then(() => {
                            console.log('Se guardo el token');
                            this.setState({
                                isLoading: false
                            })
                            this.props.navigation.navigate('Home');
                        }).
                        catch(error => {
                            console.error('Error:');
                            this.setState({
                                isLoading: false
                            })
                        });
                }

            }).
            catch(error => {
                console.error('Error: ');
                this.setState({
                    isLoading: false
                })
            });
    }

    render() {
        return (
            <AppContainer
                containerBackgroundColor={colors.purple}
            >
                <View style={styles.containerStyle}>
                    <View>
                        <Text style={styles.titleStyle}>
                            Log in
                        </Text>

                        <View style={styles.containerFormStyle}>
                            <InputSpotify
                                autoCapitalize='none'
                                label='Email'
                                placeholder='user@mail.com'
                                onChangeText={(user) => this.setState({ user })}
                                value={this.state.user}
                                errorMessage={this.state.emailError}
                            />
                            <InputSpotify
                                autoCapitalize='none'
                                label='Password'
                                placeholder='******'
                                value={this.state.password}
                                onChangeText={(password) => this.setState({ password })}
                                errorMessage={this.state.passwordError}
                            />
                        </View>
                    </View>

                    <Text>{this.state.httpError}</Text>
                    <View>
                        {this.renderButton()}
                    </View>

                </View>
            </AppContainer>
        );
    }
};

const styles = StyleSheet.create({

    containerStyle: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1
    },
    containerFormStyle: {
        marginTop: 50,
    },
    submitButtonStyle: {
        backgroundColor: colors.eerieBlack,
        padding: 20,
        borderRadius: 10,
    },
    titleStyle: {
        fontSize: 24,
        color: colors.alabasterWhite,
        textAlign: 'center',
        fontWeight: 'bold',
    }
});

const AppNavigator = createStackNavigator({
    App: {
        screen: App
    },
    Home: {
        screen: Home,
    }
}, {
        // initialRouteName: 'PantallaPrincipal',
    });

export default createAppContainer(AppNavigator);