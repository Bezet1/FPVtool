import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignInScreen} options={{animation: 'none'}}/>
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{animation: 'none'}}/>
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} options={{animation: 'none'}}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{animation: 'none'}}/>
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} options={{animation: 'none'}}/>
      </Stack.Navigator>  
    </NavigationContainer>
  )
}

export default MyStack