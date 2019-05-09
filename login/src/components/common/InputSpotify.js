import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const InputSpotify = ({ label,
    value,
    onChangeText,
    autoCorrect = false,
    autoCapitalize,
    secureEntry = false,
    placeholder, }) => {
    const { inputStyle, labelStyle, containerStyle } = styles;
    return (
        <View style={containerStyle}>
            <Text> HOLAAAAA</Text>
            <TextInput
                secureTextEntry={secureEntry}
                autoCapitalize={autoCapitalize}
                autoCorrect={autoCorrect}
                value={value}
                onChangeText={onChangeText}
                style={inputStyle}
                placeholder={placeholder}
            />
        </View>
    );
};
const styles = StyleSheet.create( {

});
export { InputSpotify };
