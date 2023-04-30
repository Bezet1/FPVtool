import React, { useState, useEffect, useContext } from 'react';
import { View, Image, ScrollView, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';
import PostElement from './PostElement';
import { ThemeContext } from './ThemeContext';

//https://source.unsplash.com/random/?animal

const Feed: React.FC= () => {

  const {Theme} = useContext(ThemeContext);
  const [data, setData] = useState([
    {height: 500, width: 400},
    {height: 550, width: 420}]
    );

  const renderNewPost = () => {
    const newHeight = Math.floor(Math.random() * 500) + 400; // generate a random height between 400 and 900
    const newWidth = Math.floor(Math.random() * 500) + 400; // generate a random width between 400 and 600
    setData([...data, { height: newHeight, width: newWidth }]);
  };

  useEffect(()=> {
    renderNewPost();
  }, [])

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <PostElement imageURL={`http://placekitten.com/${item.width}/${item.height}`} />
        )}
        onEndReached={renderNewPost}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flatList:{
    flex: 1,
  }
})

export default Feed;