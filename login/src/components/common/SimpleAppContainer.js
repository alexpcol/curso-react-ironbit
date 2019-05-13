import React from 'react';
import { SafeAreaView, View } from 'react-native';
import StatusBar from '../../styles/statusBar/GeneralStatusBarColor';

const SimpleAppContainer = ({ children,
    containerBackgroundColor, }) => {
    return (
        <View style={{ backgroundColor: containerBackgroundColor, flex: 1 }}>
            <StatusBar
                backgroundColor={containerBackgroundColor}
                barStyle="light-content"
            />
            <SafeAreaView style={{ marginHorizontal: 8, marginTop: 8, backgroundColor: containerBackgroundColor, flex: 1 }}>
                {children}
            </SafeAreaView>
        </View>
    );

}

export { SimpleAppContainer };