import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Hello from './Hello';

class Times extends Component {
    constructor(props) {
        super(props);

        this.state = {
            timer: 0,
        }
    }

    componentWillMount() {
        setInterval(() => {
            this.setState({
                timer: this.state.timer + 1
            });
        }, 1000);
        
    }

    render() {
        return(
            <View>
                <Hello style={styles.textTitle} name={this.state.timer} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textTitle: {
        fontSize: 90,
    },
});
export default Times;