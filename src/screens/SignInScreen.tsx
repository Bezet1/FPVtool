import React, {useState} from 'react';
import {
    Text,
    StyleSheet,
    Image,
    View,
    Pressable,
    SafeAreaView,
    ScrollView,
    useWindowDimensions
} from 'react-native';

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import HyperlinkText from '../components/HyperlinkText';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/MyStack';

type Props = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

const SignInScreen: React.FC<Props> = ({ route, navigation }: Props) => {
    
    const {height} = useWindowDimensions();

    interface User{
        name: string,
        password: string,
    }

    const [user, setUser] = useState<User>({name: '', password: ''});
    const [securePassword, setSecurePassword] = useState<boolean>(true);

    const handleNameChange = (name: string): void => {
        setUser(prevUser => ({ ...prevUser, name }));
    }
    
    const handlePasswordChange = (password: string): void => {
        setUser(prevUser => ({ ...prevUser, password }));
    }

    const handlePasswordSecure = (): void =>{
        securePassword ? setSecurePassword(false): setSecurePassword(true);
    }

    const onForgotPasswordPressed = (): void => {
        navigation.navigate('ForgotPassword');
    }
    
    const onJoinNowPressed = () => {
        navigation.navigate('SignUp');
    }

    const onLogInPressed = () => {

    }

    return (
        <SafeAreaView style={styles.backGround}>
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Image source={require("../assets/images/logo.png")} style={[styles.logo, {height: height * 0.25}]} resizeMode='contain'/>
                <View style={styles.inputsContainer}>
                    <Text style={styles.loginText}>Log In</Text>
                    <CustomInput value={user.name} onChangeText={handleNameChange} placeholder="Username"
                        secureText={false} isPassword={false}/> 
                    <CustomInput value={user.password} onChangeText={handlePasswordChange} placeholder="Password"
                        secureText={securePassword} isPassword={true} changeVisible={handlePasswordSecure}
                        />
                    <View style={styles.forgotPasswordWrapper}>
                        <HyperlinkText text='Forgot password?' onClick={onForgotPasswordPressed}/>
                    </View>
                    <View style={{marginTop:20}}>
                        <CustomButton text='Log In' onClick={onLogInPressed}/>
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
                <View style={styles.newContainer}>
                    <Text style={styles.newToText}>New to FPVtool?</Text>
                    <HyperlinkText text='Join now' onClick={onJoinNowPressed}/>
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
        backgroundColor: "#FAF9F6",
    },
    container:{
        flex: 1,
        alignItems:"center",
        padding: 20,
    },
    logo:{
        width: '100%',
        maxWidth: 500,
        maxHeight: 500,
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
    newContainer:{
        marginTop: 20,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
    },
    newToText:{
        fontSize: 15,
        color: 'black',
        marginRight: 10,
    },
    forgotPasswordWrapper: {
        width: '100%',
        alignItems: 'flex-end',
      },
})

export default SignInScreen;