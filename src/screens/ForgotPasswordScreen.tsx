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
import TextToFit from '../components/TextToFit';

import { useNavigation } from '@react-navigation/native';

function ForgotPasswordScreen(): JSX.Element {

    const navigation = useNavigation();

    const [email, setEmail] = useState<string>("")

    function handleEmailChange(email: string): void{
        setEmail(()=> email);
    }

    const onSendPressed = () => {
        navigation.navigate('ResetPassword');
    }
    
    const onBackToLoginPressed = () => {
        navigation.navigate('SignIn');
    }

    return (
        <SafeAreaView style={styles.backGround}>
            <View style={styles.container}>
                <View style={styles.inputsContainer}>
                    <TextToFit text='Reset your password' style={styles.bigText}/>
                    <CustomInput value={email} onChangeText={handleEmailChange} placeholder="Enter your email"
                        secureText={false} isPassword={false}/> 
                    <View style={{marginTop:10}}>
                        <CustomButton text='Send' onClick={onSendPressed}/>
                    </View>
                </View>
                <View style={styles.textsContainer}>
                    <HyperlinkText text='Back to Login' onClick={onBackToLoginPressed}/>
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
        justifyContent: 'center',
    },
})

export default ForgotPasswordScreen;