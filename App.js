import React from 'react';
import { } from 'react-native';
import ShopNavigator from './navigation/ShopNavigation';

import AppLoading from "expo-app-loading";
import {useFonts, Kanit_200ExtraLight, Kanit_300Light, Kanit_400Regular, Kanit_500Medium, Kanit_600SemiBold, Kanit_700Bold,} from "@expo-google-fonts/kanit";

export default function App() {
  let [fontsLoaded, err] = useFonts({
    Kanit_200ExtraLight,
    Kanit_300Light,
    Kanit_400Regular,
    Kanit_500Medium,
    Kanit_600SemiBold,
    Kanit_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;
  else return <ShopNavigator />;
}

