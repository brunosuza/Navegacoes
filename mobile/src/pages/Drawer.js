import React from 'react';
import {createAppContainer } from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {  Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

import Home from './Home';
import Profile from './Profile';
import Settings from './Settings';
import Message from './Message';

import SideBar from '../components/SideBar';

const DrawerNavigator = createDrawerNavigator(
    {   Home: {
            screen: Home,
            navigationOptions: {
                drawerIcon: ({tintColor}) => <Feather name='home' size={16} color={tintColor} />,
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                drawerIcon: ({tintColor}) => <Feather name='user' size={16} color={tintColor} />,
            }
        },
        Message: {
            screen: Message,
            navigationOptions: {
                drawerIcon: ({tintColor}) => <Feather name='message-circle' size={16} color={tintColor} />,
            }
        },
        Settings: {
            screen: Settings,
            navigationOptions: {
                drawerIcon: ({tintColor}) => <Feather name='settings' size={16} color={tintColor} />,
            }
        },
        
    },
    {
        contentComponent: props => <SideBar {...props} />,
        drawerWidth: Dimensions.get('window').width * 0.85,
        //hideStatusBar: true,

        contentOptions: {
            activeBackgroundColor: 'rgb(239, 191, 143)',
            activeTintColor: 'rgb(168, 89, 9)',
            itemsContainerStyle: {
                marginTop: 16,
                marginHorizontal: 8
            },
            itemStyle: {
                borderRadius: 4
            }
        }
    }
);

export default createAppContainer(DrawerNavigator);