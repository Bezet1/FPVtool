import React, {useContext} from 'react'
import { View, 
    Text, 
    StyleSheet,
    SafeAreaView
 } from 'react-native'

import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootStackParamList } from '../navigation/MyStack';
import CustomHeader from '../components/CustomHeader';
import { ThemeContext } from '../components/ThemeContext';
import BottomBarNavigator from '../components/BottomBarNavigator';

type Props = {
    navigation: DrawerNavigationProp<RootStackParamList>;
  };

const MapScreen: React.FC<Props> = ({navigation}: Props) => {

    const { Theme } = useContext(ThemeContext);

    return (
    <SafeAreaView style={{flex: 1}}>
        <CustomHeader screenName='Map' navigation={navigation}/>
        <View style={[styles.container, {backgroundColor: Theme.background}]}>
        </View>
        <BottomBarNavigator navigation={navigation} map={true}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})

export default MapScreen