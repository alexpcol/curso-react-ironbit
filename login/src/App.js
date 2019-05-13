import React from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from './config';

import { AppContainer, InputSpotify, Card, CardSection } from './components/common';
const App = () => {
    return (
        <AppContainer
            showHeader = {false}
            headerText = "Texto"
            containerBackgroundColor={colors.purple}
        >
            <View>
                <Text style={styles.titleStyle}>
                    All i ever wanted was you
                </Text>

                <View>
                    <InputSpotify
                        autoCapitalize='none'
                        label='Email'
                        placeholder='user@mail.com'
                    />

                    <InputSpotify
                        autoCapitalize='none'
                        label='Password'
                        placeholder='******'
                    />
                </View>

                <TouchableOpacity style={styles.submitButtonStyle}>
                    <Text style={{ color: colors.alabasterWhite, textAlign: 'center' }}>Next</Text>
                </TouchableOpacity>
            </View>

        </AppContainer>
    );
};

const styles = StyleSheet.create({

    containerStyle: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        backgroundColor: colors.deepChestnutRed
    },
    submitButtonStyle: {
        backgroundColor: colors.eerieBlack,
        padding: 20,
        borderRadius: 10,
    },
    titleStyle:{
        fontSize: 24,
        color: colors.alabasterWhite,
        textAlign: 'center',
        fontWeight: 'bold',
    }
});

export default App;