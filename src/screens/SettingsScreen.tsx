import { View, 
    Text, 
    StyleSheet,
    SafeAreaView
 } from 'react-native'
import React, {useContext} from 'react'
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/MyStack';
import CustomHeader from '../components/CustomHeader';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { ThemeContext } from '../components/ThemeContext';

type Props = {navigation: DrawerNavigationProp<RootStackParamList>};

const SettingsScreen: React.FC<Props> = ({navigation}: Props) => {
    
    const {Theme} = useContext(ThemeContext);

    const toggleDrawerHandler = () => {
        navigation.toggleDrawer();
    }


    return (
    <SafeAreaView>
        <CustomHeader screenName='HomeScreen' toggleDrawer={toggleDrawerHandler}
        headerColor={Theme.header} textColor={Theme.text} secondColor={Theme.border}/>
        <View style={[styles.container, {backgroundColor: Theme.background}]}>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        height: '100%',
        alignItems: 'center', 
    },
})

export default SettingsScreen