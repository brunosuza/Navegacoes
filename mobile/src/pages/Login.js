import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

import color from './colors';

export default class Login extends Component {
 
    static navigationOptions = {
        drawerLabel: 'Home'
    }

    render() {
        return (
            <>  
            <View style={styles.container} source={require('../pages/Images/planoDeFundo.png')} >
                <Text style={styles.loginText}>Login</Text>
                <TouchableOpacity 
                    style={styles.productButton}
                    onPress={() => {
                       this.props.navigation.navigate('Profile')
                    }}>
                <Text style={styles.accessButtonText}>Acessar</Text>
            </TouchableOpacity>
            </View>           
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       // backgroundColor: '#FF8148',
        alignItems: 'center', 
        justifyContent: 'center',
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold'
    },
    


    productButton: {
        height: 42,
        borderRadius: 5,
        borderWidth: 8,
        borderColor: '#DA552F',
        backgroundColor: '#DA552F',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },

    accessButtonText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold'
    },

    loginText: {
        fontSize: 16,
        color: '#fff'
    }
});