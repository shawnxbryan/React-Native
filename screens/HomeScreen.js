import React from "react";
import { FlatList, View } from "react-native";
import { CATEGORIES, PRODUCTS } from "../data/dummy-data";

import CategoriesGrid from "../components/CategoriesGrid";
import styles from "../assets/styles";


const HomeScreen = ({ navigation }) => {
    const renderGridItem = ({ item }) => {
        return (
            <CategoriesGrid
                title={item.title}
                bgImage={item.imageUrl}
                onSelect={() => {
                    let arr = PRODUCTS.filter(product => product.categoryIds[0] == item.id);
                    let numOfProd = arr.length;
                    navigation.navigate("Category", {
                        categoryId: item.id,
                        categoryName: item.title,
                        categoryAmount: numOfProd,
                    });
                }}
            />

        );
    };

    return (
        <View style={styles.backGround}>
            <FlatList
                keyExtractor={(item) => item.id}
                data={CATEGORIES}
                renderItem={renderGridItem}
                numColumns={2}
            />
        </View>
    );
};

HomeScreen.navigationOptions = {
    headerTitle: "Shop App",
};


export default HomeScreen;