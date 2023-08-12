import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { urlFor } from '../sanity';

const Single = () => {
  const route = useRoute();
  const naviagation = useNavigation();
  console.log(route.params?.details)
  return (
    <SafeAreaView>
      <ScrollView style={{backgroundColor: "#f6f1e7", height:"100%"}}>
      <View style={{position:"relative"}}>
        <Image source={{uri: urlFor(route.params?.image).url()}} style={{width: "100%", height:300}} />
        <TouchableOpacity style={{position: "absolute", backgroundColor:"white", top: 20, left: 20, padding:10, borderRadius: 25}}
          onPress={() => naviagation.goBack()}
        >
            <Entypo name="chevron-thin-left" size={24} color="#333" />
        </TouchableOpacity>
      </View>
      <View style={{height: "100%", padding: 20}}>
        <View>
          <Text style={{fontSize: 20, fontWeight: "700", color: "#333"}}>{route.params?.title}</Text>
          <Text style={{fontSize: 14, fontWeight: "500", color: "#333", textTransform: "capitalize", marginTop: 5}}>{route.params?.category}</Text>
        </View>

        <View style={{ marginTop: 30}}>
          <Text  style={{fontSize: 18, fontWeight: "600", color: "#333"}}>Overview</Text>
          <View>
            <Text style={{ fontSize: 13, marginTop: 10 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt autem, doloribus ea aliquam expedita voluptatem, ut, ipsam magnam laborum ex eveniet consequuntur possimus voluptate est. Sunt temporibus repudiandae quod eligendi!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt autem, doloribus ea aliquam expedita voluptatem, ut, ipsam magnam laborum ex eveniet consequuntur possimus voluptate est. Sunt temporibus repudiandae quod eligendi!
            </Text>
          </View>
          </View>
          
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 30}}>
            
            <View  style={{ flexDirection: "row", alignItems: "center",  gap: 15, }}>
              <TouchableOpacity style={{backgroundColor:"#516153", borderRadius: 25, padding: 5}}>
                <Feather name="minus" size={24} color="#d8d8d8" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={{fontSize: 16, fontWeight: "700"}}>7</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:"#fff",  borderRadius: 25, padding: 5}}>
                <Entypo name="plus" size={24} color="#d8d8d8" />
              </TouchableOpacity>
            </View>

          <View>
            <Text style={{fontSize: 16, fontWeight: "600"}}>
              ${route.params?.price}
            </Text>
          </View>
          </View>

          <View style={{flexDirection: "row", marginTop: 30, alignItems: "center", justifyContent: "center", gap:20}}>
            <Pressable style={{borderWidth: 2, padding: 10, borderRadius: 10}}>
              <AntDesign name="hearto" size={20} color="grey" />
            </Pressable>
            <TouchableOpacity style={{backgroundColor: "#516153", borderRadius: 5, padding:15, width: 250}}>
              <Text style={{textAlign: "center", color: "#d3d3d3"}}>Add to cart</Text>
            </TouchableOpacity>
          </View>
          <Pressable style={{borderWidth:1, padding: 10, marginTop:10, borderRadius: 10}}>
            <Text style={{textAlign: "center"}}>
              Cusstomized Product
            </Text>
          </Pressable>
        </View>




    </ScrollView>
    </SafeAreaView>
  )
}

export default Single

const styles = StyleSheet.create({})