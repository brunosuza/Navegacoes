import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';

export default class Home extends Component {
 
    static navigationOptions = {
        drawerLabel: 'Home'
    }

    /*render() {
        return (
            <>
            <View style={styles.container}>
                <SafeAreaView style={{ flex:1 }}>
                    <TouchableOpacity
                        style={{alignItems: 'flex-start', margin:10}}
                        onPress={this.props.navigation.openDrawer}
                    >
                        <FontAwesome5 name='bars' size={24} color='#161924' />
                    </TouchableOpacity>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                        <Text>Tela Home</Text>
                    </View>
                </SafeAreaView>
            </View>
            </>
        );
    }*/

    render() {
        return (
            <>
            <View style={styles.container}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: 0 }}>
                    <Text>Tela Home</Text>
                </View>
            </View>
            </>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff'
    }
});