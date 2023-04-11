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
        drawerActiveBackgroundColor: 'blue',
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle:{marginLeft: -20, fontSize: 15}
        
      }}>
        <Drawer.Screen name="Home" component={MainScreen} options={{
          drawerIcon: ({color})=>(
            <Ionicons name='home-outline' size={22} color={color}/>
          )
        }}/>
        <Drawer.Screen name="Settings" component={SettingsScreen} options={{
          drawerIcon: ({color})=>(
            <Ionicons name='settings-outline' size={22} color={color}/>
          )
        }}/>
      </Drawer.Navigator> 
  )
}

export default DrawerRoot;