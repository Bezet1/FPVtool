import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from "react-native-vector-icons/Ionicons"

import MainScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

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
      </Drawer.Navigator> 
  )
}

export default DrawerRoot;