import React, {Component} from 'react';
import { View, Image } from 'react-native';


const image ={ 
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpT6qAkD18NtAkyyjk0wU5xTsXOI29sqS7py0ZysriFj3s2XAA"
}

class The1975 extends Component {

 render() {
     return(
        <View>
            <Image source={image} style={{width:100, height: 100}} />
        </View>
     );
 }
}

export default The1975;