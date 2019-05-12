import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Header } from '../common';
import StatusBar from '../../styles/statusBar/GeneralStatusBarColor';

const AppContainer = ({ children,
    containerBackgroundColor,
    headerBackgroundColor,
    headerText,
    showHeader=true, }) => {
    if (showHeader) {
        return (
            <View style={[{ backgroundColor: containerBackgroundColor, flex: 1 }]}>
                <StatusBar
                    backgroundColor={containerBackgroundColor}
                    barStyle="light-content"
                />
                <SafeAreaView >
                    <Header headerText={headerText} headerBackgroundColor={headerBackgroundColor} />
                    <View style={{ marginHorizontal: 8, marginTop: 8, backgroundColor: containerBackgroundColor }}>
                        {children}
                    </View>
                </SafeAreaView>
            </View>
        );
    }else{
        return (
            <View style={[{ backgroundColor: containerBackgroundColor, flex: 1 }]}>
                <StatusBar
                    backgroundColor={containerBackgroundColor}
                    barStyle="light-content"
                />
                <SafeAreaView >
                    <View style={{ marginHorizontal: 8, marginTop: 8, backgroundColor: containerBackgroundColor }}>
                        {children}
                    </View>
                </SafeAreaView>
            </View>
        );
    }
    
}

export { AppContainer };