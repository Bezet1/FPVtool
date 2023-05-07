import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, {useContext} from 'react'
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootStackParamList } from '../navigation/MyStack';
import { ThemeContext } from './ThemeContext'
import Ionicons from "react-native-vector-icons/Ionicons";
import Ripple from 'react-native-material-ripple';

interface props{
  navigation: DrawerNavigationProp<RootStackParamList>;
  explore?: boolean;
  search?: boolean;
  map?: boolean;
}


const BottomBarNavigator: React.FC<props> = ({explore, search, map, navigation}) => {

  const {Theme} = useContext(ThemeContext);

  return (
    <View style={[styles.container, {backgroundColor: Theme.post, borderColor: Theme.border}]}>
        <Ripple rippleSize={70} rippleCentered={false} rippleDuration={200}>
          <Pressable onPress={()=> navigation.navigate("Explore")} style={styles.pressableIcon}>
            <Ionicons name='earth-outline' size={27} color={explore ? '#3d84f5': Theme.text}/>
          </Pressable>
        </Ripple>
        <Pressable onPress={()=> navigation.navigate("Explore")} style={styles.pressableIcon}>
          <Ionicons name='search-outline' size={27} color={search ? '#3d84f5': Theme.text}/>
        </Pressable>
        <Pressable onPress={()=> navigation.navigate("Map")} style={styles.pressableIcon}>
          <Ionicons name='map-outline' size={27} color={map ? '#3d84f5': Theme.text}/>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width: '100%', 
        height: 50,
        borderTopWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    pressableIcon:{
      height: '100%',
      width: 80,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
    }
})

export default BottomBarNavigator