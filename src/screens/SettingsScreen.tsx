import { View, 
    Text, 
    StyleSheet,
    SafeAreaView
 } from 'react-native'
import React from 'react'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/MyStack';
import CustomHeader from '../components/CustomHeader';
import { DrawerNavigationProp } from '@react-navigation/drawer';

type Props = {navigation: DrawerNavigationProp<RootStackParamList>};

const SettingsScreen: React.FC<Props> = ({navigation}: Props) => {
    
    const toggleDrawerHandler = () => {
        navigation.toggleDrawer();
    }

    return (
    <SafeAreaView>
        <CustomHeader screenName='Settings' toggleDrawer={toggleDrawerHandler}/>
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