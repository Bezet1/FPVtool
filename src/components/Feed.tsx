import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import axios from 'axios';

const ImageDisplay = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetchRandomImage();
  }, []);

  const fetchRandomImage = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos/random?client_id=YOUR_ACCESS_KEY_HERE`
      );
      setImageUrl(response.data.urls.regular);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Image source={{ uri: imageUrl }} style={{ width: 200, height: 200 }} />
    </View>
  );
};

export default ImageDisplay;