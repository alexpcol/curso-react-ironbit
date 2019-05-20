import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const accessTokenDBKey = 'accessToken';

class Home extends Component {
    state = {
        comics: []
    }

    componentWillMount() {
        const PUBLIC_KEY = '45bfb7f3e01d965419e501c56d9b022b';

        AsyncStorage.getItem(accessTokenDBKey).then((data) => {
            if (data) {
                console.log('has token', data)
                const url = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${PUBLIC_KEY}&hash=${data}`;
                fetch(url, {
                    method: 'GET',
                }).then(data => data.json())
                    .catch(error => {
                        console.error('Error:');

                    })
                    .then(data => {
                        console.log(data);
                        this.setState({
                            comics: data.data.results,
                        })
                    })
            }
        })



    }
    render() {
        return (
            <ScrollView style={styles.container}>

                {this.state.comics.map(comic => (
                    <View key={comic.id}>
                        <Image
                            source={{ uri: `${comic.thumbnail.path}.${comic.thumbnail.extension}` }}
                            style={{ width: 200, height: 200 }} />
                        <Text>{comic.name}</Text>
                    </View>
                ))}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default Home;