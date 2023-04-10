import React, {useState} from 'react';
import {
    Text,
    StyleSheet,
    Image,
    View,
    Pressable,
    SafeAreaView,
    ScrollView
} from 'react-native';

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import HyperlinkText from '../components/HyperlinkText';

import { useNavigation } from '@react-navigation/native';

function SignUpScreen(): JSX.Element {
    
    const navigation = useNavigation();

    interface User{
        name: string,
        email: string,
        password: string,
        confirmPassword: string,
    }

    const [user, setUser] = useState<User>({name: '', email: '', password: '', confirmPassword: ""});
    const [securePassword, setSecurePassword] = useState<boolean>(true);
    const [secureConfirmPassword, setSecureConfirmPassword] = useState<boolean>(true);

    const handleNameChange = (name: string) => {
        setUser(prevUser => ({ ...prevUser, name }));
    }
    const handleEmailChange = (email: string) => {
        setUser(prevUser => ({ ...prevUser, email }));
    }
    
    const handlePasswordChange = (password: string) => {
        setUser(prevUser => ({ ...prevUser, password }));
    }
    
    const handleConfirmPasswordChange = (confirmPassword: string) => {
        setUser(prevUser => ({ ...prevUser, confirmPassword }));
    }

    const handlePasswordSecure = ()=>{
        securePassword ? setSecurePassword(false): setSecurePassword(true);
    }
    
    const handleConfirmPasswordSecure = ()=>{
        secureConfirmPassword ? setSecureConfirmPassword(false): setSecureConfirmPassword(true);
    }

    const onLogInPressed = () => {
        navigation.navigate('SignIn');
    }

    const onSignUpPressed = () => {
        navigation.navigate('ConfirmEmail');
    }

    return (
        <SafeAreaView style={styles.backGround}>
        <View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={styles.inputsContainer}>
                    <Text style={styles.loginText}>Sign Up</Text>
                    <CustomInput value={user.name} onChangeText={handleNameChange} placeholder="Username"
                        secureText={false} isPassword={false}/> 
                    <CustomInput value={user.email} onChangeText={handleEmailChange} placeholder="Email"
                        secureText={false} isPassword={false}/> 
                    <CustomInput value={user.password} onChangeText={handlePasswordChange} placeholder="Password"
                        secureText={securePassword} isPassword={true} changeVisible={handlePasswordSecure}
                        />
                    <CustomInput value={user.confirmPassword} onChangeText={handleConfirmPasswordChange} placeholder="Confirm Password"
                        secureText={secureConfirmPassword} isPassword={true} changeVisible={handleConfirmPasswordSecure}
                        />
                    <View style={{marginTop:20}}>
                        <CustomButton text='Sign Up' onClick={onSignUpPressed}/>
                    </View>
                    <View style={styles.orContainer}>
                        <View style={styles.horizontalLine}/>
                        <Text style={styles.orText}>Or</Text>
                        <View style={styles.horizontalLine}/>
                    </View>
                </View>
                <View style={styles.appsContainer}>
                    <Pressable style={({pressed})=> [styles.iconsContainer, pressed && {transform:[{scale: 0.9}]}]}>
                        <Image style={styles.iconIMG} resizeMode='contain' source={require('../assets/images/fbIcon.png')}></Image>
                    </Pressable>
                    <Pressable style={({pressed})=> [styles.iconsContainer, pressed && {transform:[{scale: 0.9}]}]}>
                        <Image style={styles.iconIMG} resizeMode='contain' source={require('../assets/images/googleIcon.png')}></Image>
                    </Pressable>
                </View>
                <View style={styles.alreadyContainer}>
                    <Text style={styles.alreadyText}>Already a user?</Text>
                    <HyperlinkText text='Log In' onClick={onLogInPressed}/>
                </View>    
            </View>
        </ScrollView>
        </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    backGround:{
        flex:1, 
        justifyContent: 'center', 
        backgroundColor: "#FAF9F6"
    },
    container:{
        flex: 1,
        alignItems:"center",
        padding: 20,
    },
    loginText:{
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
    hyperLink:{
        fontSize: 15,
        color: '#0000FF',
        fontWeight: '600',
        textAlign: "right",
        textDecorationLine: 'underline',
    },
    orContainer:{
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,
    },
    orText:{
        fontSize: 15,
        color: 'gray',
        marginHorizontal: 20
    },
    horizontalLine:{
        flex: 1,
        height: 1,
        backgroundColor: 'gray',
    },
    appsContainer:{
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconIMG:{
        width: 60,
        height: 60,
    },
    iconsContainer:{
        marginHorizontal: 5,
    },
    alreadyContainer:{
        marginTop: 20,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
    },
    alreadyText:{
        fontSize: 15,
        color: 'black',
        marginRight: 10,
    },
})

export default SignUpScreen;