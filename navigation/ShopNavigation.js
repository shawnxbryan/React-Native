import * as React from 'react';
// NavigationContainer - gives the root navigator.
import { NavigationContainer } from '@react-navigation/native';
// createNativeStackNavigator - create stack navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {  } from 'react-native';
import { Ionicons as Icon } from "react-native-vector-icons";

// import screens:
import CartScreen from '../screens/CartScreen';
import CategoryScreen from '../screens/CategoryScreen';
import HomeScreen from '../screens/HomeScreen';
import PaymentScreen from '../screens/PaymentScreen';
import ProductScreen from '../screens/ProductScreen';
import SuccessScreen from '../screens/SuccessScreen';

import {CART} from '../data/dummy-data';

const Stack = createNativeStackNavigator();

export default function ShopNavigator(props) {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions = {({navigation}) => ({
          headerStyle: {
            backgroundColor:"#004369",
          },
          headerTintColor: '#E5DDC8',
          headerRight: () => (
            <Icon
              onPress={() => 
                navigation.navigate("Shopping Cart",{numOfProd: CART.length})
              }
              name="cart"
              style={{color: "white", fontSize: 20, marginRight:"5%"}}
            />
          ),

        })}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={() => ({ title: "Esos Factory" })} />
        <Stack.Screen
          name="Category"
          component={CategoryScreen}
          options={({ route }) => ({ title: 'Amount of ' + route.params.categoryName + ': ' + route.params.categoryAmount })}
        />
        <Stack.Screen
          name="Product"
          component={ProductScreen}
          options={({ route }) => ({ title: route.params.productName })}
        />
        <Stack.Screen 
          name="Shopping Cart" 
          component={CartScreen}
          options={({route}) => ({ title: 'Shopping Cart: ' + route.params.numOfProd  })}
          />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Success" component={SuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}