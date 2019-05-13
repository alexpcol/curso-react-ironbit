/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, SafeAreaView, FlatList, Image } from 'react-native';
import Login2 from './components/login_component';
import AuthLogin from './src/login';

type Props = {};
export default class App extends Component<Props> {

  renderItem = ({ item, index }) => {
    return (
      <View style={styles.itemList}>
        <Text style={styles.itemTitle}>
          {item.message}
        </Text>
        {/*requiere = sirve para hacer un import*/}
        <Image style={styles.itemImage}
          source={{ uri: item.imagePath }}
        />
      </View>
    )
  };
  render() {
    let message = 'Yeah Yeah';
    const data = [{ message: 'So I heard... Ls', imagePath: 'https://i0.wp.com/www.narcbrain.com/wp-content/uploads/2018/03/somebody-else-the-1975.jpg?resize=400%2C484' }, { message: 'not give you one more time...', imagePath: 'https://67.media.tumblr.com/8640952d146a628ff4b5f4a4b0b2e0e0/tumblr_oessc5xCK51tloukjo1_1280.jpg' }, { message: 'you look so cool...', imagePath: 'https://theweeklyspoon.com/wp-content/uploads/2018/05/Robbers-the-1975-video.jpg' }]
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <AuthLogin>

          </AuthLogin>

          {/* <FlatList
            showsVerticalScrollIndicator={false}
            style={styles.list}
            data={data}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => String(index)}>
          </FlatList> */}
        </SafeAreaView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.select({
      ios: 'purple',
      android: 'red'
    }),
  }
});

// For my list
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: Platform.select({
//       ios: 'purple',
//       android: 'red'
//     }),
//     fontSize: 25
//   },
//   list: {
//     flex: 1
//   },
//   itemList: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   itemTitle: {
//     color: 'white',
//     fontSize: 25,
//     justifyContent: 'center',
//     fontWeight: 'bold'
//   },
//   itemImage: {
//     width: 300,
//     height: 300,
//     marginTop: 20,
//     resizeMode: 'contain'
//   }
// });