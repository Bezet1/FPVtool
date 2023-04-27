import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MapScreen from '../screens/MapScreen';

import { RootStackParamList } from './MyStack';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator<RootStackParamList>();

const DrawerRoot: React.FC = () => {
  return (
      <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>} screenOptions={{
        headerShown: false,   
      }}>
        <Drawer.Screen name="Home" component={MainScreen}/>
        <Drawer.Screen name="Settings" component={SettingsScreen}/>
        <Drawer.Screen name="Profile" component={ProfileScreen}/>
        <Drawer.Screen name="Map" component={MapScreen}/>
      </Drawer.Navigator> 
  )
}

export default DrawerRoot;