import React, { Component } from 'react';
import {createAppContainer } from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {  Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation-stack';
import { View, Image, TouchableOpacity } from 'react-native';

import Home from './Home';
import Profile from './Profile';
import Settings from './Settings';
import Message from './Message';

import SideBar from '../components/SideBar';
import { FontAwesome5 } from '@expo/vector-icons';

class NavigationDrawerStructure extends Component {
    //Structure for the navigatin Drawer
    toggleDrawer = () => {
      //Props to open/close the drawer
      this.props.navigationProps.toggleDrawer();
    };
    render() {
      return (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity 
            onPress={this.toggleDrawer.bind(this)}
            style={{margin: 10}}
            >
            {/*Donute Button Image*/ }
            <FontAwesome5 name='bars' size={22} color='black'  />
          </TouchableOpacity>
        </View>
      );
    }
}

class NavigationDrawerStructureMessage extends Component {
    //Structure for the navigatin Drawer
    toggleDrawer = () => {
      //Props to open/close the drawer
      this.props.navigationProps.toggleDrawer();
    };
    render() {
      return (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity 
            onPress={this.toggleDrawer.bind(this)}
            style={{margin: 10}}
            >
            {/*Donute Button Image*/ }
            <FontAwesome5 name='bars' size={22} color='white'  />
          </TouchableOpacity>
        </View>
      );
    }
}

const Home_StackNavigator = createStackNavigator({

    Home: {
        screen: Home,
        navigationOptions:  ({ navigation }) => ({
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />
        }),
    },
});

const Profile_StackNavigator = createStackNavigator({

    Profile: {
        screen: Profile,
        navigationOptions:  ({ navigation }) => ({
            headerLeft: <NavigationDrawerStructure navigationProps={navigation} />
        }),
    },
});

const Message_StackNavigator = createStackNavigator({

    Message: {
        screen: Message,
        navigationOptions:  ({ navigation }) => ({
            headerLeft: <NavigationDrawerStructureMessage navigationProps={navigation} />,
            headerTintColor: '#FFF',
            headerStyle: {
                backgroundColor: 'rgb(81, 5, 62)',
            }
        }),
    },
});


const DrawerNavigator = createAppContainer(createDrawerNavigator(
    {   
        Home: {
            screen: Home_StackNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => <Feather name='home' size={16} color={tintColor} />,
            },
        },
       
        Profile: {
            screen: Profile,
            navigationOptions: {
                drawerIcon: ({tintColor}) => <Feather name='user' size={16} color={tintColor} />,
            }
        },

        Message: {
            screen: Message_StackNavigator,
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
));

export default createAppContainer(DrawerNavigator);