import React, {useContext} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

import {DrawerNavigationProp} from '@react-navigation/drawer';
import CustomHeader from '../../components/CustomHeader';
import {RootStackParamList} from '../../navigation/MyStack';
import {ThemeContext} from '../../Context/ThemeContext';

type Props = {
  navigation: DrawerNavigationProp<RootStackParamList>;
};

const ProfileScreen = ({navigation}: Props): JSX.Element => {
  const {Theme} = useContext(ThemeContext);

  return (
    <SafeAreaView>
      <CustomHeader screenName="Profile" navigation={navigation} />
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

export default ProfileScreen;
