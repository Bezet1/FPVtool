import React, {useState} from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import HyperlinkText from '../../components/HyperlinkText';
import TextToFit from '../../components/TextToFit';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/MyStack';

type Props = NativeStackScreenProps<RootStackParamList, 'ResetPassword'>;

const ResetPasswordScreen = ({route, navigation}: Props): JSX.Element => {
  const [code, setCode] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');

  const handleCodeChange = (code: string) => {
    setCode(code);
  };

  const handleNewPasswordChange = (password: string) => {
    setNewPassword(password);
  };

  const onBackToLoginPressed = () => {
    navigation.navigate('SignIn');
  };

  const onSubmitPressed = () => {};

  return (
    <SafeAreaView style={styles.backGround}>
      <View style={styles.container}>
        <View style={styles.inputsContainer}>
          <TextToFit text="Reset your password" style={styles.bigText} />
          <CustomInput
            value={code}
            onChangeText={handleCodeChange}
            placeholder="Enter your confirmation code"
            secureText={false}
            isPassword={false}
          />
          <CustomInput
            value={newPassword}
            onChangeText={handleNewPasswordChange}
            placeholder="Enter your new password"
            secureText={false}
            isPassword={false}
          />
          <View style={{marginTop: 10}}>
            <CustomButton text="Submit" onClick={onSubmitPressed} />
          </View>
        </View>
        <View style={styles.textsContainer}>
          <HyperlinkText text="Back to Login" onClick={onBackToLoginPressed} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backGround: {
    flex: 1,
    backgroundColor: '#FAF9F6',
  },
  container: {
    alignItems: 'center',
    padding: 20,
    marginTop: '15%',
  },
  bigText: {
    fontSize: 35,
    fontWeight: '500',
    textAlign: 'left',
    alignSelf: 'flex-start',
    color: 'black',
  },
  inputsContainer: {
    width: '100%',
    maxWidth: 500,
    alignContent: 'center',
  },
  textsContainer: {
    width: '70%',
    marginTop: 20,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export default ResetPasswordScreen;
