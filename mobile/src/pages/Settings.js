import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

const orange = '#FF8148';
const white = '#fff'

function Feed() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Feed!</Text>
      </View>
    );
}

function Account() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Account!</Text>
      </View>
    );
}

function Notifications() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Notifications!</Text>
      </View>
    );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
            activeTintColor: orange,
            indicatorStyle: { backgroundColor: orange },
            labelStyle: { fontSize: 12 },
            style: { backgroundColor: white },
        }}
      >
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarLabel: 'Updates',
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="bell" color={color} size={size} />
              ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account" color={color} size={size} />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }

  export default class Settings extends Component {
    render () {
        return (
            <>
                <NavigationContainer>
                    <MyTabs />  
                </NavigationContainer>
            </>
        );
        }
}