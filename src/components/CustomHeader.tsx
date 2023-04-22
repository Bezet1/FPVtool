import { View, Text, StyleSheet, Pressable} from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"

interface props{
    screenName: string,
    toggleDrawer: () => void;
}

const CustomHeader: React.FC<props> = ({screenName, toggleDrawer}) => {
  
    return (
    <View style={styles.header}>
        <Pressable style={styles.menuContainer} onPress={toggleDrawer}>
            <Ionicons name='menu' size={35} color={"#333"}/>
        </Pressable>
        <View>
            <Text style={styles.screenName}>{screenName}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: 50,
        borderColor: "#e8e8e8",
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
        color: '#333',
        fontWeight: '400'
    }
})

export default CustomHeader