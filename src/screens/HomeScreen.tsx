import React, {useContext} from 'react'
import { View, 
    StyleSheet,
    SafeAreaView,
    StatusBar,
    Text, 
    Image
 } from 'react-native'

import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootStackParamList } from '../navigation/MyStack';
import CustomHeader from '../components/CustomHeader';
import { ThemeContext } from '../components/ThemeContext';
import Feed from '../components/Feed';

type Props = {
    navigation: DrawerNavigationProp<RootStackParamList>;
  };

const HomeScreen: React.FC<Props> = ({navigation}: Props) => {

    const { Theme } = useContext(ThemeContext);

    return (
    <>
    <StatusBar backgroundColor={"#7fa5e3"}/>
    <SafeAreaView style={{flex: 1}}>
        <View style={[styles.mainContainer, {backgroundColor: Theme.background}]}>
            <CustomHeader screenName='Home' navigation={navigation}
            headerColor={Theme.header} textColor={Theme.text} secondColor={Theme.border}/>
            <View style={styles.feedContainer}>
                <Feed/>
            </View>
        </View>
    </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
    },
    feedContainer:{
        flex:1,
    }
})

export default HomeScreen