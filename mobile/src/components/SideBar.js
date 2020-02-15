import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image } from 'react-native';
import { DrawerNavigationItems, DrawerNavigatorItems } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';

export default SideBar = props => (
    <ScrollView>
        <ImageBackground 
            source={require('../pages/Images/planoDeFundo.png')} 
            style={{width: undefined, padding: 16, paddingTop: 58}}>

                <Image source={require('../pages/Images/me.jpg')} style={styles.profile} />
                <Text style={styles.name}>Bruno Souza</Text>

                <View style={{ flexDirection:'row' }}>
                    <Text style={styles.followers}>235 followers</Text>
                    <Ionicons name='md-people' size={16} color='rgba(255, 255, 255, 0.8)'  />
                </View>
        </ImageBackground>

        <View style={styles.container}>
            <DrawerNavigatorItems {...props} />
        </View>
    </ScrollView>
);

const styles  = StyleSheet.create({
    container: {
        flex: 1
    },
    profile: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: '#fff',
    },
    name: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '800',
        marginVertical: 8
    },
    followers: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 13,
        marginRight: 4
    }
});
