import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import Lottie from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { setItem } from '../utils/asyncStorage';

const {width, height} = Dimensions.get('window');

const OnboardPage = () => {
    const navigation = useNavigation();

    const handleDone = ()=>{
        navigation.navigate('BottomNav');
        setItem('onboarded', '1');
    }

    const doneButton = ({...props})=>{
        return (
            <TouchableOpacity style={styles.doneButton} {...props}>
                <Text>Done</Text>
            </TouchableOpacity>
        )
        
    }
  return (
    <View style={styles.container}>
    <Onboarding
          onDone={handleDone}
          onSkip={handleDone}
        DoneButtonComponent={doneButton}
        containerStyles={{paddingHorizontal: 15}}
        pages={[
            {
                backgroundColor: '#a7f3d0',
                image: (
                    <View style={styles.lottie}>
                        <Lottie source={require('../assets/flower1.json')} autoPlay loop />
                    </View>
                ),
                title: 'Explore Our Blooming World',
                subtitle: ' Take a virtual stroll through our garden of exquisite blooms, from classic roses to exotic orchids.',
            },
            {
                backgroundColor: '#fef3c7',
                image: (
                    <View style={styles.lottie}>
                        <Lottie source={require('../assets/new.json')} autoPlay loop />
                    </View>
                ),
                title: ' Discover Floral Delights',
                subtitle: 'Uncover a treasure trove of floral arrangements that express every emotion and occasion.',
            },
            {
                backgroundColor: '#a78bfa',
                image: (
                    <View style={styles.lottie}>
                        <Lottie source={require('../assets//welcome.json')} autoPlay loop />
                    </View>
                ),
                title: 'Start Exploring!',
                subtitle: " Click the `Let's Get Started` button below and embark on a floral journey like no other!",
            },
        ]}
        />
        </View>
  )
}

export default OnboardPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    lottie:{
        width: width*0.9,
        height: width,
        zIndex: 100
    },
    doneButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontWeight: "700",
        backgroundColor: "white",
        borderRadius: 20,
        marginRight: 10
    }
})