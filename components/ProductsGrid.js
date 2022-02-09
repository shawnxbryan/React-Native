import React, { useState } from "react";
import { View, Text, TouchableOpacity, ImageBackground, Modal } from "react-native";
import styles from '../assets/styles'
import { CART } from "../data/dummy-data"

const ItemsGrid = (props, { navigation }) => {

  const [submitted, SetSubmitted] = useState(false);
  const [showWarning, SetshowWarning] = useState(false);
  const onPressHandler = () => {
    SetSubmitted(!submitted);
    SetshowWarning(true);
    setTimeout(() => {
      SetshowWarning(false);
    }, 700);
  };

  return (
    <TouchableOpacity style={styles.gridItemProduct} onPress={props.onSelectProduct}>
      <View style={[styles.mainContainer, { backgroundColor: '#004369' }]}>
        <Modal
          visible={showWarning}
          transparent
          animationType='fade'
          hardwareAccelerated
        >
          <View style={styles.centered_view}>
            <View style={styles.warning_modal}>
              <Text style={styles.text}>Added!</Text>
            </View>
          </View>
        </Modal>
        <View style={styles.productRow}>
          
          <ImageBackground source={{ uri: props.bgImage }} style={styles.bgImage}>
            <View style={styles.titleContainer}>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.productDetail}>
        <Modal
            visible={showWarning}
            transparent
            animationType='fade'
            hardwareAccelerated
          >
            <View style={styles.centered_view}>
              <View style={styles.warning_modal}>
                <Text style={styles.text}>Added!</Text>
              </View>
            </View>
          </Modal>
          <Text style={{ color: '#fff2cc', fontWeight: 'bold' }}>{props.title}</Text>
          <Text style={{ color: '#fff2cc' }}>{props.price} $</Text>
          <TouchableOpacity
            onPress={() => {
              CART.push(props.fullItem)
              onPressHandler()
            }
            }
            style={styles.checkButton}>
            <Text style={styles.checkButtonText}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};



export default ItemsGrid;