import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import { colors } from '../../config';

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
            <Text style={labelStyle}>{label}</Text>
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
    containerStyle: {
        marginBottom: 16,
    },
    inputStyle: {
        color: colors.eerieBlack,
        backgroundColor: colors.alabasterWhite,
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        borderRadius: 10,
        height: 35,
        fontWeight: '400',
    },
    labelStyle: {
        fontSize: 18,
        color: colors.alabasterWhite,
        fontWeight: 'bold',
        marginBottom: 8,
    },
});
export { InputSpotify };
