import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React, {useContext} from 'react'
import { ThemeContext } from './ThemeContext';
import Ionicons from "react-native-vector-icons/Ionicons"

const PostElement = () => {
  
  const {Theme} = useContext(ThemeContext);
  
    return (
    <View style={[styles.container, {backgroundColor: Theme.post}]}>
        <View style={[styles.topBar, {backgroundColor: Theme.post}]}>
            <Pressable style={styles.profileContainer}>
                <Image source={require('../assets/images/prof.jpg')} style={styles.profImage}/>
                <Text style={[styles.userNameText, {color: Theme.text}]}>Bartek Zientek</Text>
            </Pressable>
        </View>
        <Image source={{uri: "http://placekitten.com/400/500"}} resizeMode='contain' style={styles.image} />
        <View style={[styles.bottomBar, {backgroundColor: Theme.post}]}>
            <Pressable style={styles.iconContainer}>
                <Ionicons name='heart-outline' size={35} color={Theme.text}/>
            </Pressable>
            <Pressable style={styles.iconContainer}>
                <Ionicons name='chatbubble-outline' size={30} color={Theme.text}/>
            </Pressable>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        marginTop: 10,
        overflow: 'hidden',
    },
    topBar:{
        width: '100%',
        height: 50,
        alignItems: 'flex-start',
        backgroundColor: '#4d7994',
    },
    bottomBar:{
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    profileContainer:{
        padding: 5,
        paddingLeft: 10,
        alignItems: 'center',
        flexDirection: 'row',
    },
    profImage:{
        aspectRatio: 1/1,
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    image:{
        aspectRatio: 4/5
    },
    userNameText:{
        marginLeft: 10,
        fontSize: 15,
        fontWeight: '500',
    },
    iconContainer:{
        width: 45,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    }

})

export default PostElement