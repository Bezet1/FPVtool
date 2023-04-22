import React, {useState} from 'react';
import {View, StyleSheet, Image, Text, Switch} from 'react-native'
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

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={{flex:1}}>
        <View style={styles.profileContainer}>
            <View style={styles.profAndTitleContainer}>
                <View style={styles.imageContainer}>
                    <Image style={styles.profImage} source={require('../assets/images/prof.jpg')}></Image>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>FPVtool</Text>
                </View>
            </View>
            <View style={styles.nameContainer}>
                <TextToFit text='Bartek Zientek' style={styles.nameText}/>
                <TextToFit text='bati1205@o2.pl' style={styles.nameText}/>
            </View>
        </View>
        <View style={styles.elementsContainer}>
            <DrawerElement text='Home' onClick={()=> {props.navigation.navigate("Home")}}
                icon={<Ionicons name='home-outline' size={22} color={'#333'}/>}/>
            <DrawerElement text='Map' onClick={()=> {props.navigation.navigate("Home")}}
                icon={<Ionicons name='map-outline' size={22} color={'#333'}/>}/>
            <DrawerElement text='Profile' onClick={()=> {props.navigation.navigate("Home")}}
                icon={<Ionicons name='person-outline' size={22} color={'#333'}/>}/>
        </View>
            <DrawerElement text='Settings' onClick={()=> {props.navigation.navigate("Settings")}}
                icon={<Ionicons name='settings-outline' size={22} color={'#333'}/>}/>
        <View style={styles.themeContainer}>
            <MaterialCommunityIcons name='theme-light-dark' size={22} color={'#333'}/>
            <Text style={styles.elementText}>Dark mode</Text>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Switch
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={isEnabled ? 'green' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={{marginHorizontal: 10}}
                    />
                </View>
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
        justifyContent:'center',
        borderBottomWidth: 1,
        borderColor: '#333',
    },
    profAndTitleContainer:{
        flexDirection: 'row',
    },
    imageContainer:{
        padding: 10,
        paddingBottom: 0,
    },
    titleContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    nameContainer:{
        padding: 10,
    },
    profImage:{
        width: 60,
        height: 60,
        borderRadius: 40,
    },
    nameText:{
        fontSize: 14,
        color: '#333',
        fontWeight: '500',
    },
    titleText:{
        color: '#333',
        fontSize: 30,
        fontWeight: '800',
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
        paddingTop: 20,
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