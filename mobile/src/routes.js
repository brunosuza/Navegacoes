import React from 'react';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';

import Home from './pages/Home';
import Profile from './pages/Profile';

const myDrawer = createDrawerNavigator ({
    Home: Home,
    Profile: Profile
});

export default createAppContainer(myDrawer);