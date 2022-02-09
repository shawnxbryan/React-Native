import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import styles from '../assets/styles';

const CategoriesGrid = (props) => {
  return (
    <TouchableOpacity style={styles.gridItemCat} onPress={props.onSelect}>
      <View>
      <Text style={styles.title}>{props.title}</Text>
      </View>
      <View style={[styles.categoriesContainer, {imageBackground:props.imageUrl}]}>
        <ImageBackground source={{ uri: props.bgImage }} style={styles.bgImage}>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
}

export default CategoriesGrid;