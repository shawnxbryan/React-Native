import React from 'react';
import {FlatList, View } from 'react-native';
import styles from '../assets/styles'
import { PRODUCTS } from '../data/dummy-data';
import ItemsGrid from '../components/ProductsGrid';

export default function CategoryScreen({ route, navigation }) {
  const { categoryId } = route.params;
  // array of all products - belong to that category

  const products = PRODUCTS.filter(product => product.categoryIds[0] == categoryId);
  // Call ItemsGrid
  const renderItem = ({ item }) => {
    return (
      <ItemsGrid
        bgImage={item.imageUrl}
        title={item.title}
        price={item.price}
        itemId={item.id}
        fullItem={item}
        onSelectProduct={() => { navigation.navigate("Product", { productId: item.id, productName: item.title }); }}
      />
    )
  }

  return (
    <View style={styles.backGround}>
      <FlatList
        keyExtractor={item => item.id}
        data={products}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>

  );
}

