import React from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from './config';

import { AppContainer, InputSpotify, Card, CardSection } from './components/common';

const App = () => {
    return (
        <AppContainer
                showHeader={false}
                containerBackgroundColor={colors.deepChestnutRed}
            >
                <View>
                    <Text style={{ fontSize: 24, color: colors.alabasterWhite}}>
                        All i ever wanted was you
                    </Text>
                    <InputSpotify
                        autoCapitalize='none'
                        label='Email'
                        value='lol'
                        placeholder='user@mail.com'
                    />
                    <TouchableOpacity style={styles.submitButtonStyle}>
                        <Text style={{ color: colors.alabasterWhite, textAlign: 'center' }}>Next</Text>
                    </TouchableOpacity>
                </View>
            </AppContainer>
    );
};

const styles = StyleSheet.create({
    submitButtonStyle: {
        backgroundColor: colors.eerieBlack,
        padding: 20,
        borderRadius: 10,
    }
});

export default App;