import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useState, useEffect} from 'react'

import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import SearchInput from '../components/SearchInput';
import client from '../sanity';
import ItemCard from '../components/ItemCard';
import Container from '../components/Container';
import PopularContainer from '../components/PopularContainer';
import Filter from '../components/Filter';

const PopularPage = () => {
    const navigation = useNavigation()
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

  return (
    <SafeAreaView style={{backgroundColor: "#f6f1e7", height: "100%",}}>
        <TouchableOpacity style={{padding: 15, flexDirection: "row", alignItems: "center", gap: 10}} onPress={() => navigation.goBack()}>
        <Entypo name="chevron-thin-left" size={26} color="#333" />
            <Text style={{ fontSize: 24, fontWeight:"bold", color:"#333" }}>Popular</Text>
        </TouchableOpacity>
        <ScrollView style={{marginHorizontal: 5}}>
            <SearchInput />
            <Filter categories={categories} />
          <Container data={data} />
        </ScrollView>
    </SafeAreaView>
  )
}

export default PopularPage

const styles = StyleSheet.create({})