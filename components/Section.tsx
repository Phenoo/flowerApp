import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'

const PopularContainer = ({filterItems}) => {
    if(!filterItems){
        return null
    }
  return (
    <ScrollView horizontal style={{marginTop: 20}}>
        {
            filterItems.map((item) => <Card key={item._id} item={item} />)
        }
    </ScrollView>
  )
}

export default PopularContainer

const styles = StyleSheet.create({})