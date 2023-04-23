import React, {useContext} from 'react'
import { View, 
    Text, 
    StyleSheet,
    SafeAreaView
 } from 'react-native'

import { DrawerNavigationProp } from '@react-navigation/drawer';
import CustomHeader from '../components/CustomHeader';
import { RootStackParamList } from '../navigation/MyStack';
import { ThemeContext } from '../components/ThemeContext';

type Props = {
    navigation: DrawerNavigationProp<RootStackParamList>;
  };

const HomeScreen: React.FC<Props> = ({navigation}: Props) => {

    const { Theme } = useContext(ThemeContext);

    const toggleDrawerHandler = () => {
        navigation.toggleDrawer();
    }

    return (
    <SafeAreaView>
        <CustomHeader screenName='Home' toggleDrawer={toggleDrawerHandler}
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
    }
})

export default HomeScreen