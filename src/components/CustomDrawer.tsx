import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native'
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import TextToFit from './TextToFit';
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import DrawerElement from './DrawerElement';

type CustomDrawerProps = DrawerContentComponentProps & {
  // additional props, if any
}

const section2 = [
    { name: 'About', screen: 'Home' },
    { name: 'Contact Us', screen: 'Contact' },
  ];

const CustomDrawer: React.FC<CustomDrawerProps> = (props: CustomDrawerProps) => {


  return (
    <View style={{flex:1}}>
        <View style={styles.profileContainer}>
            <View style={styles.profImageContainer}>
                <Image style={styles.profImage} source={require('../assets/images/prof.jpg')}></Image>
            </View>
            <TextToFit text='Bartek Zientek' style={styles.nameText}/>
        </View>
        <View style={styles.elementsContainer}>
            <DrawerElement text='Home' onClick={()=> {props.navigation.navigate("Home")}}
                icon={<Ionicons name='home-outline' size={22} color={'#333'}/>}/>
            <DrawerElement text='Map' onClick={()=> {props.navigation.navigate("Home")}}
                icon={<Ionicons name='map-outline' size={22} color={'#333'}/>}/>
        </View>
            <DrawerElement text='Settings' onClick={()=> {props.navigation.navigate("Settings")}}
                icon={<Ionicons name='settings-outline' size={22} color={'#333'}/>}/>
        <View style={styles.themeContainer}>
            <MaterialCommunityIcons name='theme-light-dark' size={22} color={'#333'}/>
            <Text style={styles.elementText}>Theme</Text>
        </View>
        <View style={styles.logoutContainer}>
            <DrawerElement text='Log Out' onClick={()=> {console.log("logout")}}
                icon={<Ionicons name='exit-outline' size={25} color={'black'}/>}
                textStyle={styles.logoutText}/>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    profileContainer:{
        width: '100%',
        height: 200,
        justifyContent:'center',
        alignItems:'center',
    },
    profImageContainer:{
        width: 80,
        height: 80,
        borderRadius: 40,
        overflow: 'hidden'
    },
    profImage:{
        width: '100%',
        height: '100%',
    },
    nameText:{
        fontSize: 20,
        color: '#333',
        margin: 10,
    },
    logoutContainer:{
        borderTopColor: '#333', 
        borderTopWidth: 1,
    },
    logoutText:{
        fontSize: 15,
        color: '#333',
        fontWeight: '800',
        paddingHorizontal: 10,
    },
    elementsContainer:{
        flex: 1,
    },
    themeContainer:{
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
    },
    elementText:{
        fontSize: 16,
        color: '#333',
        fontWeight: '500',
        paddingLeft: 20,        
    },
})

export default CustomDrawer;