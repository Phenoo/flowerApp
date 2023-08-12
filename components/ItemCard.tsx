import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


import { AntDesign } from '@expo/vector-icons';
import { urlFor } from '../sanity';
import { useNavigation } from '@react-navigation/native';

const ItemCard = ({item}: any) => {
  const navigation = useNavigation()
  console.log(item)

    return (
    <View style={{flex: 1, height: 220, backgroundColor: "white", margin: 10, borderRadius: 10 }}>
        <Pressable style={{position: "relative"}} onPress={() => navigation.navigate("Flower", {
          title: item.title,
          image: item.mainImage,
          details: item.details,
          price: item.price,
          category: item.category
        })}>
            <Image 
                source={{uri: urlFor(item.mainImage).url()}} style={{width: "100%", height:150, borderTopLeftRadius: 10, borderTopRightRadius:10}} 
                resizeMode='cover' />
                <TouchableOpacity style={{backgroundColor: "#fff", padding: 5, borderRadius: 25, flexDirection: "row", justifyContent: "center",
                    position:"absolute", right: 15, top: 15}} >
                    <AntDesign name="hearto" size={20} color="grey" />
                </TouchableOpacity>

        </Pressable>
       <View style={{flexDirection: "column", gap: 10, justifyContent: "space-between", padding:10,}}>
             <Text style={{fontSize: 14, color: "#333", width: 120, textTransform: "capitalize", fontWeight: "bold"}}>{item.title.substring(0, 15)}</Text>
            
            <Text style={{fontSize: 13, color: "#333"}}>₦{item.price}</Text> 
       </View>
       
    </View>
  )
}

export default ItemCard

const styles = StyleSheet.create({})