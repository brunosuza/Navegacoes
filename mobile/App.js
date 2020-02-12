import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './src/pages/Home';
import Profile from './src/pages/Profile';
import ButtonTab from './src/pages/ButtonTab';
import ButtonTop from './src/pages/ButtonTop';

const orange = '#FF8148';
const white = '#fff';

const Home_Navigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      title: 'Tela Home',
      headerStyle: {
        backgroundColor: orange,
      },
      headerTintColor: white,
    }),
  },
});

const Profile_Navigator = createStackNavigator({
  Profile: {
    screen: Home,
    navigationOptions: () => ({
      title: 'Tela Profile',
      headerStyle: {
        backgroundColor: orange,
      },
      headerTintColor: white,
    }),
  },
});

const buttonTab_Navigator = createStackNavigator({
  ButtonTab: {
    screen: ButtonTab,
    navigationOptions: () => ({
      title: 'Tela Button tab',
      headerStyle: {
        backgroundColor: orange,
      },
      headerTintColor: white,
    }),
  },
});

const buttonTop_Navigator = createStackNavigator({
  ButtonTop: {
    screen: ButtonTop,
    navigationOptions: () => ({
      title: 'Tela Button top',
      headerStyle: {
        backgroundColor: orange,
      },
      headerTintColor: white,
    }),
  },
});

const myDrawer = createDrawerNavigator ({
    Home: {
      screen: Home_Navigator,
      
      navigationOptions: () => ({
        drawerIcon: <Icon name="home" size={20} color={orange} />,
      }),
    },
    Profile: {
      screen: Profile_Navigator,
      navigationOptions: () => ({
        drawerIcon: <Icon name="home" size={20} color={orange} />,
      }),
    },
    ButtonTab: {
      screen: buttonTab_Navigator,
      navigationOptions: () => ({
        drawerIcon: <Icon name="home" size={20} color={orange} />,
      }),
    },
    ButtonTop: {
      screen: buttonTop_Navigator,
      navigationOptions: () => ({
        drawerIcon: <Icon name="home" size={20} color={orange} />,
      }),
    }
});

export default createAppContainer(myDrawer);