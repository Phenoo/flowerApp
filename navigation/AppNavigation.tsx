import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { getItem } from '../utils/asyncStorage';
import OnboardPage from '../screens/OnboardPage';
import HomePage from '../screens/HomePage';
import Single from '../screens/Single';

const Stack = createNativeStackNavigator();


const AppNavigation = () => {
    const [showOnboarding, setShowOnboarding] = useState(null)

    const checkIfAlreadyOnboarded = async () => {
        let onboarded = await getItem('onboarded');
        if(onboarded==='1'){
            setShowOnboarding(false)
        } else {
            setShowOnboarding(true)
        }
    }

    useEffect(() => {
        checkIfAlreadyOnboarded();
    }, [])

    if(showOnboarding==null){
        return null;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={showOnboarding ? 'Onboarding' : 'Home'}>
                <Stack.Screen name='Onboarding' options={{headerShown: false}}  component={OnboardPage} />
                <Stack.Screen name='Home' options={{headerShown: false}} component={HomePage} />
                <Stack.Screen name='Flower' options={{headerShown: false}} component={Single} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation

