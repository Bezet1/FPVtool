import React, { useState, useRef } from 'react';
import { View, FlatList, RefreshControl } from 'react-native';
import PostElement from './PostElement';

interface PostData {
  height: number;
  width: number;
  key: number;
}

const Feed = () => {
  const [data, setData] = useState<PostData[]>([
    {
      height: 500,
      width: 300,
      key: 0,
    },
  ]);
  const [refreshing, setRefreshing] = useState(false);
  const counter = useRef(0);

  const renderNewPost = () => {
    counter.current = counter.current + 1;
    const newHeight = Math.floor(Math.random() * 500) + 400;
    const newWidth = Math.floor(Math.random() * 500) + 400;
    setData(prevData => [
      ...prevData,
      { height: newHeight, width: newWidth, key: counter.current },
    ]);
  };

  const onRefresh = () => {
    setRefreshing(true);
    renderNewPost();
    setRefreshing(false);
  };

  const keyExtractor = (item: PostData) => item.key.toString();

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <PostElement imageURL={`http://placekitten.com/${item.width}/${item.height}`} />
        )}
        keyExtractor={keyExtractor}
        initialNumToRender={5}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={1}
        onEndReached={renderNewPost}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </View>
  );
};

export default Feed;