import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Home extends Component {
 
    static navigationOptions = {
        drawerLabel: 'Home'
    }

    render() {
        return (
            <>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Tela Home</Text>
            </View>
            </>
        );
    }
}