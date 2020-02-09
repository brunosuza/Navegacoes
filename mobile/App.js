import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './src/pages/Home';
import Profile from './src/pages/Profile';

const Home_Navigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      title: 'Tela Home',
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Profile_Navigator = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: () => ({
      title: 'Tela Profile',
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const myDrawer = createDrawerNavigator ({
    Home: {
      screen: Home_Navigator
    },
    Profile: {
      screen: Profile_Navigator
    }
});

export default createAppContainer(myDrawer);