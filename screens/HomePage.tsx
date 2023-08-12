import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, {useEffect, useState} from 'react'

import { Entypo } from '@expo/vector-icons';
import Filter from '../components/Filter';
import client from '../sanity';
import PopularContainer from '../components/PopularContainer';
import SearchInput from '../components/SearchInput';
import { useNavigation } from '@react-navigation/native';
 
const HomePage = () => {
  const navigation =useNavigation()
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchData = async () => {
    const query = '*[_type == "posts"]';
    const post = await client.fetch(query);
    setData(post);
    let allCategories = ['all', ...new Set(post.map((item) => item.category))];
    setCategories(allCategories)
  }
 
  useEffect(()=>{
    fetchData()
},[])





  const filterItems =  data.filter((item, i) => i < 4)
  const special =  data.filter((item, i) => i > 7)

  return (
    <SafeAreaView style={{backgroundColor: "#f6f1e7", height: "100%"}}>
      <ScrollView style={{padding: 20}}>
        <View style={{flexDirection: "row", alignItems:"center", justifyContent: "space-between"}}>
          <View>
            <Text style={{fontSize:20,fontWeight: "700"}}>Hello, Anna!</Text>
           </View>

           <View style={{flexDirection: "row", alignItems:"center",gap: 10}}>
              <Entypo name="bell" size={24} color="black" />
              <Image style={{width: 50, height: 50, borderRadius: 25}} source={{
                uri: "data:image/jpeg;base64,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"
              }} />
           </View>
        </View>

        <SearchInput />

        <Filter categories={categories} />

        <View>
          <View style={{flexDirection: "row", alignItems:"center", justifyContent: "space-between", marginTop:30 }}>
            <Text style={{color: "#333", fontSize: 18, fontWeight: "600"}}>Popular</Text>
            <Pressable onPress={() => navigation.navigate("Popular")}>
              <Text style={{color: "#333", fontSize: 18, fontWeight: "600"}}>See All</Text>
            </Pressable>
          </View>
 
          <PopularContainer filterItems={filterItems}/>
        </View>
        <View>
          <View style={{flexDirection: "row", alignItems:"center", justifyContent: "space-between", marginTop:40 }}>
            <Text style={{color: "#333", fontSize: 18, fontWeight: "600"}}>Special Occasion</Text>
            <Pressable onPress={() => navigation.navigate("Popular")}>
              <Text style={{color: "#333", fontSize: 18, fontWeight: "600"}}>
                See All
              </Text>
            </Pressable>

          </View>
 
          <PopularContainer filterItems={special}/>
        </View>


      </ScrollView>
    </SafeAreaView>
  )
}

export default HomePage

const styles = StyleSheet.create({})