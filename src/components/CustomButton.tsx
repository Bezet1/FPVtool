import React from 'react';
import { StyleSheet, Pressable, Text} from 'react-native';

type Props = {
    text: string,
    onClick: ()=> void,
}

const CustomButton = ({text, onClick}: Props): JSX.Element => {
    return (
        <Pressable style={({pressed})=> [styles.button, pressed && {backgroundColor: '#2d60b3'}]} onPress={onClick}>
            <Text style={styles.textButton}>{text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button:{
        width: '100%',
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4287f5'
    },
    textButton:{
        fontSize: 20,
        color: 'white'
    }
})

export default CustomButton;