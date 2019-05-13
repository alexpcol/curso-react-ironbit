import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Hello extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Text style={[this.props.name % 2 ? styles.pair : styles.even, this.props.styles]}>
                    Hello {this.props.name}!!!!
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    pair: {
        color: 'red'
    },
    even: {
        color: 'blue'
    }
  });
export default Hello;