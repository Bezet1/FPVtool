/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet
} from 'react-native';

import SignInScreen from './src/screens/SignInScreen';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.background}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        >
          <SignInScreen/>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background:{
    flex: 1,
    backgroundColor: "#F9FBFC",
  }
});

export default App;
