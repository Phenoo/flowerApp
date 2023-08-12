import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ItemCard from './ItemCard'

const Container = ({data}) => {
    if(!data){
        return null
    }
  return (
    <View>

        <FlatList
            data={data}
            keyExtractor={(item) => item._id}
            numColumns={2} // Set the number of columns you want
            renderItem={({ item }) => (
                <ItemCard item={item} />
            )}
    />

           
    </View>
  )
}

export default Container

const styles = StyleSheet.create({})