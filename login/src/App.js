import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from './config';

import { AppContainer, InputSpotify } from './components/common';
const App = () => {
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
                        />

                        <InputSpotify
                            autoCapitalize='none'
                            label='Password'
                            placeholder='******'
                        />
                    </View>
                </View>

                <TouchableOpacity style={styles.submitButtonStyle}>
                    <Text style={{ color: colors.alabasterWhite, textAlign: 'center', fontWeight: 'bold' }}>Login</Text>
                </TouchableOpacity>

            </View>
        </AppContainer>
    );
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

export default App;