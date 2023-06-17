import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import MainScreen from '../screens/appScreens/HomeScreen';
import SettingsScreen from '../screens/appScreens/SettingsScreen';
import ProfileScreen from '../screens/appScreens/ProfileScreen';
import MapScreen from '../screens/appScreens/MapScreen';
import {Dimensions} from 'react-native';

import {RootStackParamList} from './MyStack';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator<RootStackParamList>();

const DrawerRoot = (): JSX.Element => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        swipeEdgeWidth: Dimensions.get('screen').width,
      }}>
      <Drawer.Screen name="Explore" component={MainScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Map" component={MapScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerRoot;
