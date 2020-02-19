import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const orange = '#FF8148';
const white = '#fff'

function FeedScreen() {
    return (
      <View style={styles.ViewItems}>
        <Text style={styles.TitleText}>Feed!</Text>
      </View>
    );
}

function NewsScreen() {
    return (
      <View style={styles.ViewItems}>
        <Text style={styles.TitleText}>News!</Text>
      </View>
    );
}

function ProfileScreen() {
    return (
      <View style={styles.ViewItems}>
        <Text style={styles.TitleText}>Notifications!</Text>
      </View>
    );
}

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: orange,
        indicatorStyle: {
            backgroundColor: orange
        },
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: white },
      }}
    >
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name="Notifications"
        component={NewsScreen}
        options={{ tabBarLabel: 'Updates' }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarLabel: 'Profile' }}
      />
    </Tab.Navigator>
  );
}/*
export default function Message() {
  return (
      <>
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    </>
  );
}*/
export default class Message extends Component {
 
  static navigationOptions = {
      drawerLabel: 'Message'
  }

  render() {
      return (
          <>
            <View style={styles.container}>
              <NavigationContainer>
                <Tab.Navigator
                  initialRouteName="Feed"
                  tabBarOptions={{
                    activeTintColor: 'white',
                    indicatorStyle: {
                        backgroundColor: 'rgb(81, 5, 62)'
                    },
                    labelStyle: { fontSize: 12 },
                    style: { backgroundColor: 'rgba(115, 7, 88, 0.9)' },
                  }}
                >
                <Tab.Screen
                  name="Feed"
                  component={FeedScreen}
                  options={{ tabBarLabel: 'Home' }}
                />
                 <Tab.Screen
                    name="Notifications"
                    component={NewsScreen}
                    options={{ tabBarLabel: 'Updates' }}
                  />
                  <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{ tabBarLabel: 'Profile' }}
                  />
                </Tab.Navigator>
                </NavigationContainer>
            </View>
          </>
      );
  }
}
const styles = StyleSheet.create({
  container: {
      flex:1,
      backgroundColor: '#fff'
  },

  ViewItems: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  },

  TitleText: {
    fontSize: 18,
    color: 'rgb(81, 5, 62)',
    fontWeight: 'bold'
  }
});
