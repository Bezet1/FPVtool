import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React, {useContext} from 'react';
import {RootStackParamList} from '../../navigation/MyStack';
import CustomHeader from '../../components/CustomHeader';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {ThemeContext} from '../../Context/ThemeContext';

type Props = {navigation: DrawerNavigationProp<RootStackParamList>};

const SettingsScreen = ({navigation}: Props): JSX.Element => {
  const {Theme} = useContext(ThemeContext);

  return (
    <SafeAreaView>
      <CustomHeader screenName="HomeScreen" navigation={navigation} />
      <View
        style={[styles.container, {backgroundColor: Theme.background}]}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
  },
});

export default SettingsScreen;
