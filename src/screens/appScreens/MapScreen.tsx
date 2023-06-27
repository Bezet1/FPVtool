import React, {useContext} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {RootStackParamList} from '../../navigation/MyStack';
import CustomHeader from '../../components/CustomHeader';
import {ThemeContext} from '../../Context/ThemeContext';
import BottomBarNavigator from '../../components/BottomBarNavigator';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

type Props = {
  navigation: DrawerNavigationProp<RootStackParamList>;
};

const darkMapStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#242f3e',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#242f3e',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#746855',
      },
    ],
  },
  // Add more styles here for different map elements
];

const MapScreen = ({navigation}: Props): JSX.Element => {
  const {Theme} = useContext(ThemeContext);

  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader screenName="Map" navigation={navigation} />
        <View
          style={[styles.container, {backgroundColor: Theme.background}]}>
        <MapView
          style={styles.container}
          provider={PROVIDER_GOOGLE}
          userInterfaceStyle={Theme.mode === 'dark' ? 'dark': 'light'}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
        </MapView>
        </View>
      <BottomBarNavigator navigation={navigation} map={true} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MapScreen;
