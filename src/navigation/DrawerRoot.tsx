import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from "react-native-vector-icons/Ionicons"

import MainScreen from '../screens/HomeScreen';
import { RootStackParamList } from './MyStack';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator<RootStackParamList>();

const DrawerRoot: React.FC = () => {
  return (
      <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>} screenOptions={{headerShown: false}}>
        <Drawer.Screen name="Home" component={MainScreen} options={{
          drawerIcon: ()=>(
            <Ionicons name='home-outline' size={22} />
          )
        }}/>
      </Drawer.Navigator> 
  )
}

export default DrawerRoot;