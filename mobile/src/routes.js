import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from '../src/pages/Login';
import Profile from '../src/pages/Drawer';

const mainNavigation = createAppContainer(createSwitchNavigator(
    {
        Login,
        Profile
    },
    {
      initialRouteName: 'Login',
    }
  ));

export default createAppContainer(mainNavigation);