import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ThemeContext} from '../Context/ThemeContext';
import {LightTheme} from '../Context/ThemeObj';

import SignInScreen from '../screens/register/SignInScreen';
import SignUpScreen from '../screens/register/SignUpScreen';
import ConfirmEmailScreen from '../screens/register/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/register/ForgotPasswordScreen';
import ResetPasswordScreen from '../screens/register/ResetPasswordScreen';
import DrawerRoot from './DrawerRoot';

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  ConfirmEmail: undefined;
  ForgotPassword: undefined;
  ResetPassword: undefined;
  Explore: undefined;
  Settings: undefined;
  DrawerRoot: undefined;
  Profile: undefined;
  Map: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const MyStack = (): JSX.Element => {
  const [Theme, setTheme] = useState(LightTheme);

  return (
    <NavigationContainer>
      <ThemeContext.Provider value={{Theme, setTheme}}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{animation: 'none'}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{animation: 'none'}}
          />
          <Stack.Screen
            name="ConfirmEmail"
            component={ConfirmEmailScreen}
            options={{animation: 'none'}}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
            options={{animation: 'none'}}
          />
          <Stack.Screen
            name="ResetPassword"
            component={ResetPasswordScreen}
            options={{animation: 'none'}}
          />
          <Stack.Screen
            name="DrawerRoot"
            component={DrawerRoot}
            options={{animation: 'none'}}
          />
        </Stack.Navigator>
      </ThemeContext.Provider>
    </NavigationContainer>
  );
};

export default MyStack;
