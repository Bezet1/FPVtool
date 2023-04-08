import React, {useState} from 'react';
import {
    Text,
    StyleSheet,
    Image,
    View,
    Pressable,
} from 'react-native';

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

function SignInScreen(): JSX.Element {
    
    interface User{
        name: string,
        password: string,
    }

    const [user, setUser] = useState<User>({name: '', password: ''});
    const [securePassword, setSecurePassword] = useState<boolean>(true);

    const handleNameChange = (name: string) => {
        setUser(prevUser => ({ ...prevUser, name }));
    }
    
    const handlePasswordChange = (password: string) => {
        setUser(prevUser => ({ ...prevUser, password }));
    }

    const handlePasswordSecure = ()=>{
        securePassword ? setSecurePassword(false): setSecurePassword(true);
    }

    return (
        <View style={styles.container}>
            <Image source={require("../assets/images/logo.png")} style={styles.logo} resizeMode='contain'/>
            <View style={styles.inputsContainer}>
                <Text style={styles.loginText}>Login</Text>
                <CustomInput value={user.name} onChangeText={handleNameChange} placeholder="Username"
                    secureText={false} isPassword={false}/> 
                <CustomInput value={user.password} onChangeText={handlePasswordChange} placeholder="Password"
                    secureText={securePassword} isPassword={true} changeVisible={handlePasswordSecure}
                />
                <View style={{alignContent: 'flex-end'}}>
                    <Text style={styles.hyperLink}>Forgot Password?</Text>
                </View>
                <View style={{marginTop:20}}>
                    <CustomButton/>
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
                <Text onPress={()=>console.log('hejka')} style={styles.newToText}>New to FPVtool?</Text>
                <Text style={styles.hyperLink}>Join now</Text>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        padding: 20,
    },
    logo:{
        width: 200,
        height: 200
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
        color: 'blue',
        fontWeight: '600',
        textAlign: "right"
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
})

export default SignInScreen;