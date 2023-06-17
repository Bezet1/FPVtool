import React, {useContext} from 'react';
import {View, StyleSheet, SafeAreaView, StatusBar} from 'react-native';

import {DrawerNavigationProp} from '@react-navigation/drawer';
import {RootStackParamList} from '../../navigation/MyStack';
import CustomHeader from '../../components/CustomHeader';
import {ThemeContext} from '../../Context/ThemeContext';
import Feed from '../../components/Feed';
import BottomBarNavigator from '../../components/BottomBarNavigator';

type Props = {
  navigation: DrawerNavigationProp<RootStackParamList>;
};

const HomeScreen = ({navigation}: Props) => {
  const {Theme} = useContext(ThemeContext);

  return (
    <>
      <StatusBar backgroundColor={'#7fa5e3'} />
      <SafeAreaView style={{flex: 1}}>
        <View
          style={[styles.mainContainer, {backgroundColor: Theme.background}]}>
          <CustomHeader screenName="Explore" navigation={navigation} />
          <View style={styles.feedContainer}>
            <Feed />
          </View>
          <BottomBarNavigator navigation={navigation} explore={true} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    maxWidth: 700,
  },
  feedContainer: {
    flex: 1,
  },
});

export default HomeScreen;
