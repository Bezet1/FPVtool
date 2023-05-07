import React, {useContext, useState, memo} from 'react'
import { View, Text, StyleSheet, Image, Pressable, ActivityIndicator } from 'react-native'
import { ThemeContext } from './ThemeContext';
import Ionicons from "react-native-vector-icons/Ionicons";
import Description from './Description';
import { TapGestureHandler } from 'react-native-gesture-handler';

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


    const handleOnLoad = (): void => {
    setIsLoadingImage(false);
    };

    const handleDoubleTap = () => {
        setIslike(()=> true);
    }

    return (
    <View style={[styles.container, {backgroundColor: Theme.post}]}>
        <View style={[styles.topBar, {backgroundColor: Theme.post}]}>
            <View style={styles.locationAndOptions}>
                <Pressable style={styles.locationContainer}>
                    <Text style={[styles.locationText, {color: Theme.text}]}>Chełm Śląski, <Text style={{color: '#3d84f5'}}>Poland</Text></Text>
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
        <TapGestureHandler
        numberOfTaps={2}
        onActivated={handleDoubleTap}>

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
        </TapGestureHandler>
        <View style={[styles.bottomBar, {backgroundColor: Theme.post}]}>
            <View style={styles.iconsContainer}>
                <Pressable style={styles.starIconContainer} onPress={toggleLike}>
                    <Ionicons name={isLike ?'md-star': 'md-star-outline'} size={27} color={isLike ? '#3d84f5': Theme.text}/>
                </Pressable>
                <Pressable style={styles.bubleIconContainer}>
                    <Ionicons name='chatbubble-outline' size={27} color={Theme.text}/>
                    <Text style={[styles.commentsText, {color: Theme.text}]}>25</Text>
                </Pressable>
            </View>
            <Pressable style={styles.starIconContainer}>
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
        fontSize: 18,
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 15,
    },
    iconsContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    commentsText:{
        fontSize: 15,
        fontWeight: '500',
        marginLeft: 5,
    },
    starIconContainer:{
        height: 45,
        paddingLeft: 15,
        paddingRight: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bubleIconContainer:{
        height: 45,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loader: {
        position: 'absolute',
        left: '46%',
        top: '47%'
    },

})

export default memo(PostElement);

// import React, {PureComponent, useContext} from 'react'
// import { View, Text, StyleSheet, Image, Pressable, ActivityIndicator } from 'react-native'
// import { ThemeContext } from './ThemeContext';
// import Ionicons from "react-native-vector-icons/Ionicons";
// import Description from './Description';
// import { TapGestureHandler } from 'react-native-gesture-handler';

// interface Props{
//     imageURL: string;
// }

// interface State {
//     isLike: boolean;
//     isLoadingImage: boolean;
// }

// class PostElement extends PureComponent<Props, State> {
//     static contextType = ThemeContext;
//     context!: React.ContextType<typeof ThemeContext>;

//     state: State = {
//         isLike: false,
//         isLoadingImage: true,
//     };

//     toggleLike = (): void => {
//         this.setState(prevState => ({isLike: !prevState.isLike}));
//     }

//     handleOnLoad = (): void => {
//         this.setState({isLoadingImage: false});
//     }

//     handleDoubleTap = () => {}

//     render() {
//         const {imageURL} = this.props;
//         const {Theme} = this.context;
//         const {isLike, isLoadingImage} = this.state;

//         return (
//             <View style={[styles.container, {backgroundColor: Theme.post}]}>
//                 <View style={[styles.topBar, {backgroundColor: Theme.post}]}>
//                     <View style={styles.locationAndOptions}>
//                         <Pressable style={styles.locationContainer}>
//                             <Text style={[styles.locationText, {color: Theme.text}]}>Chełm Śląski, Poland</Text>
//                             <Ionicons name='md-location-outline' size={27} color={Theme.text}/>
//                         </Pressable>
//                         <Pressable style={styles.optionsContainer}>
//                             <Ionicons name='ellipsis-horizontal' size={27} color={Theme.text}/>
//                         </Pressable>
//                     </View>
//                     <View style={styles.descriptionContainer}>
//                         <Description textColor={Theme.text} text={"Siemaneczko zieomeczki".repeat(15)}/>
//                     </View>
//                 </View>

//                 <View style={styles.imageContainer}>
//                     {isLoadingImage && (
//                         <ActivityIndicator size="large" color="#999999" style={styles.loader} />
//                     )}
//                     <Image 
//                         onLoad={this.handleOnLoad}
//                         source={{uri: imageURL}}
//                         resizeMode='cover' 
//                         style={styles.image} />
//                 </View>
//                 <View style={[styles.bottomBar, {backgroundColor: Theme.post}]}>
//                     <View style={styles.iconsContainer}>
//                         <Pressable style={styles.starIconContainer} onPress={this.toggleLike}>
//                             <Ionicons name={isLike ?'md-star': 'md-star-outline'} size={27} color={isLike ? '#3d84f5': Theme.text}/>
//                         </Pressable>
//                         <Pressable style={styles.bubleIconContainer}>
//                             <Ionicons name='chatbubble-outline' size={27} color={Theme.text}/>
//                             <Text style={[styles.commentsText, {color: Theme.text}]}>25</Text>
//                         </Pressable>
//                     </View>
//                     <Pressable style={styles.starIconContainer}>
//                         <Ionicons name='share-social-outline' size={27} color={Theme.text}/>
//                     </Pressable>
//                 </View>
//             </View>
//         );
//     }
// }

// export default PostElement;