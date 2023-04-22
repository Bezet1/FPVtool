import React from 'react';
import { View,
     TextInput,
     StyleSheet,
     Pressable,
     Image
} from 'react-native';

import Ionicons from "react-native-vector-icons/Ionicons";


interface Props{
    placeholder: string,
    value: string,
    onChangeText: (text: string) => void,
    secureText: boolean,
    isPassword: boolean,
    changeVisible?: () => void
}


function CustomInput({placeholder, value, onChangeText, secureText, isPassword, changeVisible}: Props): JSX.Element {
    
    function showIsVisible(){
        if(isPassword){
            return(
                <Pressable style={({pressed})=> [styles.visibleContainer, pressed && {opacity: 0.7}]} onPress={changeVisible}>
                    {secureText ? <Ionicons name='eye-off-outline' size={24} color={'#333'}/>: <Ionicons name='eye' size={24} color={'#333'}/>}
                </Pressable>
            )
        }
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput value={value} onChangeText={onChangeText} placeholder={placeholder} style={styles.textInput}
            secureTextEntry={secureText} placeholderTextColor={"gray"}
            />
            {showIsVisible()}
        </View>
    );
}

const styles = StyleSheet.create({
    textInput:{
        flex: 1,
        padding: 10,
        paddingLeft: 15,
        color: 'black'
    },
    inputContainer:{
        width: "100%",
        height: 50,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#e8e8e8",
        backgroundColor: 'white',
        marginVertical: 10,
        flexDirection: 'row',

    },
    visibleContainer:{
        width: 40,
        justifyContent: 'center',
        alignContent:'center',
        padding: 8,
        marginRight: 5,
    },
    icon:{
        width: '100%',
        height: '100%',
        flex: 1,
    }
})

export default CustomInput;