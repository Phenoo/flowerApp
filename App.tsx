import { setupURLPolyfill } from "react-native-url-polyfill"

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from "@react-navigation/native"
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import BottomNavigator from './navigation/BottomNavigator';
import OnboardPage from './screens/OnboardPage';
import Single from "./screens/Single";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen"



const Stack =createNativeStackNavigator();


setupURLPolyfill();


export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require("./assets/static/JosefinSans-Regular.ttf"),
    light: require("./assets/static/JosefinSans-Light.ttf"),
    bold: require("./assets/static/JosefinSans-Bold.ttf"),
    medium: require("./assets/static/JosefinSans-Medium.ttf"),
    extrabold: require("./assets/static/JosefinSans-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if(fontsLoaded){
      await SplashScreen.hideAsync()
    }
  },[fontsLoaded])

  if(!fontsLoaded){
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName='Onboarding'>
        <Stack.Screen 
          name='BottomNav'
          component={BottomNavigator}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name='Onboarding' component={OnboardPage} options={{
          headerShown: false
        }} />
        <Stack.Screen name='Flower' component={Single} options={{
          headerShown: false
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


