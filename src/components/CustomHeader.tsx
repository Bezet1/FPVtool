import { View, Text, StyleSheet, Pressable} from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootStackParamList } from '../navigation/MyStack';

interface props{
    headerColor: string;
    screenName: string;
    textColor: string;
    secondColor: string;
    navigation: DrawerNavigationProp<RootStackParamList>;
}

const CustomHeader: React.FC<props> = ({headerColor, screenName, navigation,  textColor, secondColor}) => {
  
    return (
    <View style={[styles.header, {backgroundColor: headerColor, borderColor: secondColor,}]}>
        <View style={styles.leftSideContainer}>
            <Pressable style={styles.menuContainer} onPress={()=>navigation.toggleDrawer()}>
                <Ionicons name='menu' size={35} color={textColor}/>
            </Pressable>
            <Text style={[styles.screenName, {color: textColor}]}>{screenName}</Text>
        </View>
        <Pressable style={styles.addContainer}>
            <Ionicons name='add' size={35} color={textColor}/>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
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