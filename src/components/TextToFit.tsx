import React from 'react';
import {Text, StyleSheet, StyleProp, ViewStyle, TextStyle} from 'react-native'

type Props = {
    text:string,
    style: StyleProp<TextStyle>;
  }

function TextToFit({text, style}:Props): JSX.Element {
    return (
        <Text style={style} numberOfLines={1} adjustsFontSizeToFit={true}>{text}</Text>
    );
}

const styles = StyleSheet.create({
    
})

export default TextToFit;