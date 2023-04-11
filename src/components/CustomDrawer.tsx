import React from 'react';
import {View, StyleSheet, Image} from 'react-native'
import {DrawerContentScrollView, DrawerItemList, DrawerContentComponentProps } from '@react-navigation/drawer';
import TextToFit from './TextToFit';

type CustomDrawerProps = DrawerContentComponentProps & {
  // additional props, if any
}

const CustomDrawer: React.FC<CustomDrawerProps> = (props: CustomDrawerProps) => {
  return (
    <View style={{flex:1}}>
        <View style={styles.profileContainer}>
            <View style={styles.profImageContainer}>
                <Image style={styles.profImage} source={require('../assets/images/prof.jpg')}></Image>
            </View>
            <TextToFit text='Bartek Zientek' style={styles.nameText}/>
        </View>
        <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        {/* additional custom content */}
        </DrawerContentScrollView>
        <View >

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
        width: 100,
        height: 100,
        borderRadius: 50,
        overflow: 'hidden'
    },
    profImage:{
        width: '100%',
        height: '100%',
    },
    nameText:{
        fontSize: 20,
        color: 'black',
        margin: 10,
    }
})

export default CustomDrawer;