import React, {useContext, useState} from 'react'
import { View, Text, StyleSheet, Image, Pressable, ActivityIndicator } from 'react-native'
import { ThemeContext } from './ThemeContext';
import Ionicons from "react-native-vector-icons/Ionicons"

interface props{
    imageURL: string;
}

const PostElement: React.FC<props> = ({imageURL}) => {
  
  const {Theme} = useContext(ThemeContext);
  const [isLike, setIslike] = useState(false);
  const [isLoadingImage, setIsLoadingImage] = useState(true);

  const toggleLike = (): void => {
    isLike ? setIslike(false): setIslike(true);
  }
  

  const handleOnLoad = () => {
    setIsLoadingImage(false);
  };

    return (
    <View style={[styles.container, {backgroundColor: Theme.post}]}>
        <View style={[styles.topBar, {backgroundColor: Theme.post}]}>
            <View style={styles.profileAndDateContainer}>
                <Pressable style={styles.profileContainer}>
                    <Image source={require('../assets/images/prof.jpg')} style={styles.profImage}/>
                    <Text style={[styles.userNameText, {color: Theme.text}]}>Bartek Zientek</Text>
                </Pressable>
                <Text style={[styles.dateText, {color: Theme.text}]}>20.05.2023</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={[styles.descriptionText, {color: Theme.text}]}>Hejka! Chialem pokazac wam ten obrazek!</Text>
            </View>
        </View>
        {isLoadingImage && (
        <ActivityIndicator size="large" color="#999999" style={styles.loader} />
        )}
        <Image 
        onLoad={handleOnLoad}
        source={{uri: imageURL}} 
        resizeMode='contain' 
        style={styles.image} />
        <View style={[styles.bottomBar, {backgroundColor: Theme.post}]}>
            <View style={styles.iconsContainer}>
                <Pressable style={styles.pressableIconContainer} onPress={toggleLike}>
                    {isLike ? <Ionicons name='heart' size={30} color={'#3d84f5'}/>:
                    <Ionicons name='heart-outline' size={30} color={Theme.text}/>}
                </Pressable>
                <Pressable style={styles.pressableIconContainer}>
                    <Ionicons name='chatbubble-outline' size={27} color={Theme.text}/>
                </Pressable>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 10,
        overflow: 'hidden', 
    },
    topBar:{
        width: '100%',
        alignItems: 'flex-start',
        backgroundColor: '#4d7994',
    },
    profileAndDateContainer:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        paddingRight: 10,
    },
    profileContainer:{
        padding: 5,
        paddingLeft: 10,
        alignItems: 'center',
        flexDirection: 'row',
    },
    descriptionContainer:{
        width: '100%',
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
    descriptionText:{
        fontSize: 15,
        fontWeight: '400',
    },
    profImage:{
        aspectRatio: 1/1,
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    image:{
        aspectRatio: 4/5
    },
    userNameText:{
        marginLeft: 10,
        fontSize: 15,
        fontWeight: '500',
    },
    dateText:{
        fontSize: 15,
        fontWeight: '400',
    },
    bottomBar:{
        width: '100%',
        alignItems: 'flex-start',
        paddingHorizontal: 10,
        
    },
    iconsContainer:{
        flexDirection: 'row',
        width: '100%',
        alignItems: 'flex-start',
    },
    pressableIconContainer:{
        width: 35,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loader: {
        position: 'absolute',
        left: '46%',
        top: '50%'
    },

})

export default PostElement