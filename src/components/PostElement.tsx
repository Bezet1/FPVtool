import React, {useContext, useState} from 'react'
import { View, Text, StyleSheet, Image, Pressable, ActivityIndicator } from 'react-native'
import { ThemeContext } from './ThemeContext';
import Ionicons from "react-native-vector-icons/Ionicons";
import Description from './Description';

interface props{
    imageURL: string;
}

const PostElement: React.FC<props> = ({imageURL}) => {
  
  const {Theme} = useContext(ThemeContext);
  const [isLike, setIslike] = useState(false);
  const [isLoadingImage, setIsLoadingImage] = useState(true);

  const toggleLike = (): void => {
    setIslike((prev) => !prev);
  }
  

  const handleOnLoad = () => {
    setIsLoadingImage(false);
  };

    return (
    <View style={[styles.container, {backgroundColor: Theme.post}]}>
        <View style={[styles.topBar, {backgroundColor: Theme.post}]}>
            <View style={styles.locationAndOptions}>
                <Pressable style={styles.locationContainer}>
                    <Text style={[styles.locationText, {color: Theme.text}]}>Chełm Śląski, Poland</Text>
                    <Ionicons name='md-location-outline' size={27} color={Theme.text}/>
                </Pressable>
                <Pressable style={styles.optionsContainer}>
                    <Ionicons name='ellipsis-horizontal' size={27} color={Theme.text}/>
                </Pressable>
            </View>
            <View style={styles.descriptionContainer}>
                <Description textColor={Theme.text} text={"Siemaneczko zieomeczki".repeat(15)}/>
            </View>
        </View>
        <View style={styles.imageContainer}>
        {isLoadingImage && (
        <ActivityIndicator size="large" color="#999999" style={styles.loader} />
        )}
            <Image 
            onLoad={handleOnLoad}
            source={{uri: imageURL}} 
            resizeMode='cover' 
            style={styles.image} />
        </View>
        <View style={[styles.bottomBar, {backgroundColor: Theme.post}]}>
            <View style={styles.iconsContainer}>
                <Pressable style={styles.pressableIconContainer} onPress={toggleLike}>
                    <Ionicons name={isLike ?'md-star': 'md-star-outline'} size={30} color={isLike ? '#3d84f5': Theme.text}/>
                </Pressable>
                <Pressable style={styles.pressableIconContainer}>
                    <Ionicons name='chatbubble-outline' size={27} color={Theme.text}/>
                </Pressable>
                <Text style={[styles.commentsText, {color: Theme.text}]}>25</Text>
            </View>
            <Pressable style={styles.pressableIconContainer}>
                <Ionicons name='share-social-outline' size={27} color={Theme.text}/>
            </Pressable>
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
    locationAndOptions:{
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
    },
    locationContainer:{
        padding: 5,
        paddingLeft: 10,
        alignItems: 'center',
        flexDirection: 'row',
    },
    locationText:{
        fontSize: 15,
        fontWeight: '600',
    },
    optionsContainer:{
        width: 50,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    descriptionContainer:{
        width: '100%',
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
    imageContainer:{
        width: '100%',
        height: 500,
    },
    image:{
       height: '100%'
    },
    bottomBar:{
        width: '100%',
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconsContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    commentsText:{
        fontSize: 15,
        fontWeight: '500',
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
        top: '47%'
    },

})

export default PostElement