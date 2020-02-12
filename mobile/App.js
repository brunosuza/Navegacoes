import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './src/pages/Home';
import Profile from './src/pages/Profile';
import ButtonTab from './src/pages/ButtonTab';
import ButtonTop from './src/pages/ButtonTop';

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
    screen: Home,
    navigationOptions: () => ({
      title: 'Tela Profile',
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const buttonTab_Navigator = createStackNavigator({
  ButtonTab: {
    screen: ButtonTab,
    navigationOptions: () => ({
      title: 'Tela Button tab',
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
});

const buttonTop_Navigator = createStackNavigator({
  ButtonTop: {
    screen: ButtonTop,
    navigationOptions: () => ({
      title: 'Tela Button top',
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
    },
    ButtonTab: {
      screen: buttonTab_Navigator
    },
    ButtonTop: {
      screen: buttonTop_Navigator
    }
});

export default createAppContainer(myDrawer);