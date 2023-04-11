import { View, 
    Text, 
    StyleSheet,
    SafeAreaView
 } from 'react-native'
import React from 'react'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/MyStack';

type Props = NativeStackScreenProps<RootStackParamList, 'Settings'>;

const SettingsScreen: React.FC<Props> = ({ route, navigation }: Props) => {
  return (
    <SafeAreaView>
        <View style={styles.header}>

        </View>
        <View style={styles.container}>
            <Text style={{color: 'black'}}>SettingsScreen</Text>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        height: '100%',
        alignItems: 'center', 
        backgroundColor: "#FAF9F6",
    },
    header:{
        width: '100%',
        height: 50,
        borderColor: "#e8e8e8",
        borderBottomWidth: 1,
        backgroundColor: 'white'
    }
})

export default SettingsScreen