import React, {useState, useContext, useEffect} from 'react';
import {View, StyleSheet, Image, Text, Switch, Pressable} from 'react-native';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import TextToFit from './TextToFit';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DrawerElement from './DrawerElement';
import {ThemeContext} from '../Context/ThemeContext';
import {DarkTheme, LightTheme} from '../Context/ThemeObj';

const CustomDrawer = (props: DrawerContentComponentProps): JSX.Element => {
  const {Theme, setTheme} = useContext(ThemeContext);
  const [isDark, setIsDark] = useState(false);

  const toggleSwitch = () => {
    setIsDark(previousState => !previousState);
  };

  useEffect(() => {
    isDark ? setTheme(DarkTheme) : setTheme(LightTheme);
  }, [isDark]);

  return (
    <View style={{flex: 1, backgroundColor: Theme.background}}>
      <Pressable
        style={[styles.profileContainer, {borderColor: Theme.border}]}
        onPress={() => props.navigation.navigate('Profile')}>
        <View style={styles.profAndTitleContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.profImage}
              source={require('../assets/images/prof.jpg')}></Image>
          </View>
          <View style={styles.titleContainer}>
            <Text style={[styles.titleText, {color: '#3d84f5'}]}>FPVspots</Text>
          </View>
        </View>
        <View style={styles.nameContainer}>
          <TextToFit
            text="Bartek Zientek"
            style={[styles.nameText, {color: Theme.text, fontWeight: '600'}]}
          />
          <TextToFit
            text="bati1205@o2.pl"
            style={[styles.nameText, {color: Theme.text}]}
          />
        </View>
      </Pressable>
      <View style={styles.elementsContainer}>
        <DrawerElement
          text="Explore"
          onClick={() => {
            props.navigation.navigate('Explore');
          }}
          icon={<Ionicons name="earth-outline" size={27} color={Theme.text} />}
          textStyle={{color: Theme.text}}
          rippleColor={Theme.ripple}
        />
        <DrawerElement
          text="Map"
          onClick={() => {
            props.navigation.navigate('Map');
          }}
          icon={<Ionicons name="map-outline" size={27} color={Theme.text} />}
          textStyle={{color: Theme.text}}
          rippleColor={Theme.ripple}
        />
        <DrawerElement
          text="Favorites"
          onClick={() => {
            props.navigation.navigate('Map');
          }}
          icon={
            <Ionicons name="md-star-outline" size={27} color={Theme.text} />
          }
          textStyle={{color: Theme.text}}
          rippleColor={Theme.ripple}
        />
        <DrawerElement
          text="Profile"
          onClick={() => {
            props.navigation.navigate('Profile');
          }}
          icon={<Ionicons name="person-outline" size={27} color={Theme.text} />}
          textStyle={{color: Theme.text}}
          rippleColor={Theme.ripple}
        />
      </View>
      <DrawerElement
        text="Settings"
        onClick={() => {
          props.navigation.navigate('Settings');
        }}
        icon={<Ionicons name="settings-outline" size={27} color={Theme.text} />}
        textStyle={{color: Theme.text}}
        rippleColor={Theme.ripple}
      />
      <View style={styles.themeContainer}>
        <MaterialCommunityIcons
          name="theme-light-dark"
          size={27}
          color={Theme.text}
        />
        <Text style={[styles.elementText, {color: Theme.text}]}>Dark mode</Text>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isDark ? '#f4f3f4' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isDark}
          />
        </View>
      </View>
      <View style={[styles.logoutContainer, {borderColor: Theme.border}]}>
        <DrawerElement
          text="Log Out"
          onClick={() => {
            console.log('logout');
          }}
          icon={<Ionicons name="exit-outline" size={28} color={Theme.text} />}
          textStyle={[styles.logoutText, {color: Theme.text}]}
          rippleColor={Theme.ripple}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    width: '100%',
    justifyContent: 'center',
    borderBottomWidth: 1,
  },
  profAndTitleContainer: {
    flexDirection: 'row',
  },
  imageContainer: {
    padding: 10,
    paddingBottom: 0,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  nameContainer: {
    padding: 10,
  },
  profImage: {
    width: 60,
    height: 60,
    borderRadius: 40,
  },
  nameText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  titleText: {
    fontSize: 30,
    fontWeight: '800',
  },
  logoutContainer: {
    borderTopWidth: 1,
  },
  logoutText: {
    fontWeight: '800',
    fontSize: 15,
    color: '#333',
    paddingHorizontal: 10,
  },
  elementsContainer: {
    flex: 1,
    paddingTop: 20,
  },
  themeContainer: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 15,
  },
  elementText: {
    fontSize: 16,
    fontWeight: '500',
    paddingLeft: 20,
  },
});

export default CustomDrawer;
