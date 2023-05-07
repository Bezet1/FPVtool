import { View, Text, StyleSheet, Pressable} from 'react-native'
import React, {useContext} from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootStackParamList } from '../navigation/MyStack';
import { ThemeContext } from './ThemeContext';

interface props{
    screenName: string;
    navigation: DrawerNavigationProp<RootStackParamList>;
}

const CustomHeader: React.FC<props> = ({screenName, navigation}) => {
  
    const {Theme} = useContext(ThemeContext);

    return (
    <View style={[styles.header, {backgroundColor: Theme.header, borderColor: Theme.border,}]}>
        <View style={styles.leftSideContainer}>
            <Pressable style={styles.menuContainer} onPress={()=>navigation.toggleDrawer()}>
                <Ionicons name='menu-outline' size={35} color={Theme.text}/>
            </Pressable>
            <Text style={[styles.screenName, {color: Theme.text}]}>{screenName}</Text>
        </View>
        <Pressable style={styles.addContainer}>
            <Ionicons name='add-outline' size={35} color={Theme.text}/>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        width: '100%', 
        height: 50,
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    leftSideContainer:{
        height: '100%',
        alignItems: 'center',
        flexDirection: 'row',
    },
    menuContainer:{
        height: '100%',
        marginRight: 10,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    screenName:{
        fontSize: 20,
        fontWeight: '400'
    },
    addContainer:{
        height: '100%',
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 10,
    }
})

export default CustomHeader