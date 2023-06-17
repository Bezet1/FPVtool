import {Text, StyleSheet } from 'react-native'
import React from 'react'
import Ripple from 'react-native-material-ripple';

type Props = {
    rippleColor: string;
    text: string;
    onClick: ()=> void;
    icon: React.ReactNode;
    textStyle?: {};
  }

const DrawerElement = ({rippleColor, text, onClick, icon, textStyle}: Props) => {
  return (
    <Ripple style={styles.rippleContainer} onPress={onClick}
    rippleDuration={150} rippleColor={rippleColor}>
        {icon}
        <Text style={[styles.text, textStyle]}>{text}</Text>
    </Ripple>
  )
}

const styles = StyleSheet.create({
    rippleContainer:{
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
    },
    text:{
        fontSize: 16,
        color: '#333',
        fontWeight: '500',
        paddingLeft: 20,        
    },
})

export default DrawerElement