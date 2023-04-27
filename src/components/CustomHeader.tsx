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
        <Pressable style={styles.menuContainer} onPress={()=>navigation.toggleDrawer()}>
            <Ionicons name='menu' size={35} color={textColor}/>
        </Pressable>
        <View>
            <Text style={[styles.screenName, {color: textColor}]}>{screenName}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: 50,
        borderBottomWidth: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuContainer:{
        marginRight: 10,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    screenName:{
        fontSize: 20,
        fontWeight: '400'
    }
})

export default CustomHeader