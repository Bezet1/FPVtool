import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native'

type Props = {
    text:string,
    onClick:() => void
}

function HyperlinkText({text, onClick}: Props): JSX.Element {
    return (

        <Pressable onPress={onClick} children={({ pressed }) => (
            <Text style={[styles.hyperLink , pressed && {color: '#800080'}]}>
                {text}
            </Text>)}/>
    );
}

const styles = StyleSheet.create({
    hyperLink:{
        fontSize: 15,
        color: '#0000FF',
        fontWeight: '600',
        textAlign: "right",
        textDecorationLine: 'underline',
    },
})

export default HyperlinkText;