import React, { useState, useEffect, useContext } from 'react';
import { View, Image, ScrollView } from 'react-native';
import axios from 'axios';
import PostElement from './PostElement';
import { ThemeContext } from './ThemeContext';

//https://source.unsplash.com/random/?animal

const Feed = () => {
  
  // const [images, setImages] = useState([]);

  // useEffect(()=> {
  //   handleClick();
  // }, [])
  
  // useEffect(()=> {
  //   console.warn(images);
  // }, [images])

  // const handleClick = () => {
  //   axios
  //     .get("")
  //     .then(res => {
  //       setImages(res.data.message);
  //     })
  //     .catch(err => console.log(err));
  // };
/*
  return (
    <View>
      {images2.map(img => (
        <Image source={img} style={{ width: 200, height: 200 }} />
      ))}
    </View>
  );

*/

const {Theme} = useContext(ThemeContext);

return (
  <ScrollView style={{flex: 1, backgroundColor: Theme.background}}>
    <PostElement/>
    <PostElement/>
  </ScrollView>
  )
};

export default Feed;

/*
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator, StatusBar } from "react-native";
import axios from "axios";

const Feed = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = () => {
    setIsLoading(true);
    axios.get(`https://randomuser.me/api/?page=${currentPage}&results=10`)
      .then(res => {
        //setUsers(res.data.results);
        setUsers([...users, ...res.data.results]);
        setIsLoading(false);
      });
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemWrapperStyle}>
        <Image style={styles.itemImageStyle} source={{ uri: item.picture.large }} />
        <View style={styles.contentWrapperStyle}>
          <Text style={styles.txtNameStyle}>{`${item.name.title} ${item.name.first} ${item.name.last}`}</Text>
          <Text style={styles.txtEmailStyle}>{item.email}</Text>
        </View>
      </View>
    );
  };

  const renderLoader = () => {
    return (
      isLoading ?
        <View style={styles.loaderStyle}>
          <ActivityIndicator size="large" color="#aaa" />
        </View> : null
    );
  };

  const loadMoreItem = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    getUsers();
  }, [currentPage]);

  return (
    <>
      <StatusBar backgroundColor="#000" />
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.email}
        ListFooterComponent={renderLoader}
        onEndReached={loadMoreItem}
        onEndReachedThreshold={0}
      />
    </>
  );
};

const styles = StyleSheet.create({
  itemWrapperStyle: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  itemImageStyle: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  contentWrapperStyle: {
    justifyContent: "space-around",
  },
  txtNameStyle: {
    fontSize: 16,
  },
  txtEmailStyle: {
    color: "#777",
  },
  loaderStyle: {
    marginVertical: 16,
    alignItems: "center",
  },
});

export default Feed;
*/
