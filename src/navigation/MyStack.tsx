import React, {useState} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeContext } from '../components/ThemeContext';
import { LightTheme } from '../components/ThemeObj';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import DrawerRoot from './DrawerRoot';


export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  ConfirmEmail: undefined;
  ForgotPassword: undefined;
  ResetPassword: undefined;
  Home: undefined;
  Settings: undefined;
  DrawerRoot: undefined,
  Profile: undefined;
  Map: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();


const MyStack: React.FC = () => {
  const [Theme, setTheme] = useState(LightTheme);
  
  return (
    <NavigationContainer>
      <ThemeContext.Provider value={{Theme, setTheme}}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="SignIn" component={SignInScreen} options={{animation: 'none'}}/>
          <Stack.Screen name="SignUp" component={SignUpScreen} options={{animation: 'none'}}/>
          <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} options={{animation: 'none'}}/>
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{animation: 'none'}}/>
          <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} options={{animation: 'none'}}/>
          <Stack.Screen name="DrawerRoot" component={DrawerRoot} options={{animation: 'none'}}/>
        </Stack.Navigator>
      </ThemeContext.Provider>
    </NavigationContainer>
  )
}

export default MyStack