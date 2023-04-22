import { View, 
    Text, 
    StyleSheet,
    SafeAreaView
 } from 'react-native'

import React from 'react'
import { DrawerNavigationProp } from '@react-navigation/drawer';
import CustomHeader from '../components/CustomHeader';
import { RootStackParamList } from '../navigation/MyStack';

type Props = {
    navigation: DrawerNavigationProp<RootStackParamList>;
  };

const HomeScreen: React.FC<Props> = ({navigation}: Props) => {

    const toggleDrawerHandler = () => {
        navigation.toggleDrawer();
    }

    return (
    <SafeAreaView>
        <CustomHeader screenName='HomeScreen' toggleDrawer={toggleDrawerHandler}/>
        <View style={styles.container}>
            <Text style={{color: 'black'}}>HomeScreen</Text>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        height: '100%',
        alignItems: 'center', 
        backgroundColor: "#FAF9F6",
    }
})

export default HomeScreen