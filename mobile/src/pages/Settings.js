import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const orange = '#FF8148';
const white = '#fff'

function FeedScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Sound!</Text>
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

function AlarmScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Alarm!</Text>
      </View>
    );
}

function clockScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Clock!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName="FeedScreen"
        tabBarOptions={{
            activeTintColor: 'rgb(239, 191, 143)',
            indicatorStyle: { backgroundColor: orange },
            labelStyle: { fontSize: 12 },
            style: { backgroundColor: white },
        }}
      >
        <Tab.Screen
          name="FeedScreen"
          component={FeedScreen}
          options={{
            tabBarLabel: 'Sound',
            tabBarIcon: ({ color, size}) => <FontAwesome5 name='microphone' size={24} color={color}  />
          }}
        />
        <Tab.Screen
          name="AlarmScreen"
          component={AlarmScreen}
          options={{
            tabBarLabel: 'Alarm',
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="bell" color={color} size={size} />
              ),
          }}
        />
        <Tab.Screen
          name="clockScreen"
          component={clockScreen}
          options={{
            tabBarLabel: 'Clock',
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="clock" color={color} size={size} />
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

/*const TabButtonNavigator = createBottomTabNavigator(
  {
    FeedScreen: {
      screen: FeedScreen,
      navigationOptions: {
        tabBarIcon: () => <FontAwesome5 name='book-medical' size={24} color='#CDCCE' />
      } 
    }
  },{  
    tabBarOptions: {
      showLabel: false
    }
  }
);

export default createAppContainer(TabButtonNavigator); */