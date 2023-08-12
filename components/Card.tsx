import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { urlFor } from '../sanity'

import { AntDesign } from '@expo/vector-icons';

const Card = ({item}) => {
  return (
    <View style={{width: 250, height: 260, backgroundColor: "white", marginRight: 30, borderRadius: 10 }}>
        <View style={{position: "relative"}}>
            <Image 
                source={{uri: urlFor(item.mainImage).url()}} style={{width: "100%", height:200, borderTopLeftRadius: 10, borderTopRightRadius:10}} 
                resizeMode='cover' />
                <TouchableOpacity style={{backgroundColor: "#fff", padding: 10, borderRadius: "50%", flexDirection: "row", justifyContent: "center",
                    position:"absolute", right: 15, top: 15}} >
                    <AntDesign name="hearto" size={24} color="grey" />
                </TouchableOpacity>

        </View>
       <View style={{flexDirection: "row", justifyContent: "space-between", padding:10, alignItems: "center",}}>
            <Text style={{fontSize: 16, color: "#333", width: 120}}>{item.title}</Text>
            <Text style={{fontSize: 16, color: "#333"}}>₦{item.price.toFixed(2)}</Text>
       </View>
       
    </View>
  )
}

export default Card

const styles = StyleSheet.create({})