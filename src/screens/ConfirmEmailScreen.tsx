import React, {useState} from 'react';
import {
    Text,
    StyleSheet,
    View,
    SafeAreaView,
} from 'react-native';

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import HyperlinkText from '../components/HyperlinkText';

function ConfirmEmailScreen(): JSX.Element {
    
    interface User{
        name: string,
        email: string,
        password: string,
        confirmPassword: string,
    }

    const [code, setCode] = useState<string>("")

    function handleCodeChange(code: string): void{
        setCode(()=> code);
    }

    return (
        <SafeAreaView style={styles.backGround}>
            <View style={styles.container}>
                <View style={styles.inputsContainer}>
                    <Text style={styles.bigText}>Confirm Email</Text>
                    <CustomInput value={code} onChangeText={handleCodeChange} placeholder="Enter your code"
                        secureText={false} isPassword={false}/> 
                    <View style={{marginTop:10}}>
                        <CustomButton text='Confirm'/>
                    </View>
                </View>
                <View style={styles.textsContainer}>
                    <HyperlinkText text='Resend code'/>
                    <HyperlinkText text='Back to Login'/>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    backGround:{
        flex:1, 
        backgroundColor: "#FAF9F6"
    },
    container:{
        alignItems:"center",
        padding: 20,
        marginTop: '15%'
    },
    bigText:{
        fontSize: 35,
        fontWeight: '500',
        textAlign: "left",
        alignSelf: 'flex-start',
        color: 'black',
    },
    inputsContainer:{
        width: '100%',
        maxWidth: 500,
        alignContent: "center"
    },
    textsContainer:{
        width: '70%',
        marginTop: 20,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
    },
})

export default ConfirmEmailScreen;