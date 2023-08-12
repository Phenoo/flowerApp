import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';

import HomePage from '../screens/HomePage';
import Single from '../screens/Single';
import OrderPage from '../screens/OrderPage';
import SearchPage from '../screens/SearchPage';
import Account from '../screens/Account';
import PopularPage from '../screens/PopularPage';

const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarShowLabel: false,
    tabBarHideKeyboard: true,
    headerShown: false,

}

const BottomNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name='Home' component={HomePage} 
            options={{
                title: 'Home',
                tabBarIcon: ({ color }) =>  <Ionicons name="home" size={24}
                color={color}
                />,
              }}
        />
        <Tab.Screen name='Popular' component={PopularPage} 
         options={{
            title: 'Popular',
            tabBarIcon: ({ color }) =>  <Feather name="shopping-bag" size={24}
            color={color}
            />,
          }}
        />
        <Tab.Screen name='Orders' component={OrderPage}
         options={{
            title: 'Orders',
            tabBarIcon: ({ color }) => <Feather name="list" size={24} 
            color={color}
            />,
          }}
        />
        <Tab.Screen name='Account' component={Account}
         options={{
            title: 'Account',
            tabBarIcon: ({ color }) => <Feather name="user" size={24}
            color={color}
            />,
          }}
        />
    </Tab.Navigator>
  )
}

export default BottomNavigator

const styles = StyleSheet.create({})
// 