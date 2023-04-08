import React from 'react';
import { 
     StyleSheet,
     Pressable,
     Text,
} from 'react-native';

function CustomButton({text}:{text: string}): JSX.Element {
    return (
        <Pressable style={({pressed})=> [styles.button, pressed && {backgroundColor: '#2d60b3'}]} onPress={()=>console.log('hejka')}>
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