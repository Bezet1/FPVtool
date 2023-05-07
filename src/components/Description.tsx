import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';


interface props{
    text: string,
    textColor: string
}

const Description: React.FC<props> = ({ text, textColor }) => {
    
    const [expanded, setExpanded] = useState(false);
    const MAX_LENGTH = 100;

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    const displayText = expanded ? text : text.substring(0, 30);

    return (
        <View>
            <Text style={[styles.descriptionText, {color: textColor}]}>{displayText}
                {text.length > MAX_LENGTH && (
                    <>
                    {!expanded && (<Text style={[styles.descriptionText, {color: textColor}]}>...</Text>)}
                    <Text onPress={toggleExpanded} style={styles.readMoreText}>
                        {expanded ? ' Read less' : ' Read more'}</Text>
                    </>
                )}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    descriptionText:{
        fontSize: 15,
        fontWeight: '400',
    },
    readMoreText:{
        fontSize: 13,
        fontWeight: '400',
        color: 'gray',  
    },
    pressableContainer:{
        justifyContent: 'flex-end',
        backgroundColor: 'red',
    }
})

export default Description;