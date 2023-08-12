import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const SearchInput = () => {
  return (
    <View style={{marginVertical: 20, marginHorizontal: 10}}>
    <TextInput
      style={{
        width: "100%",
        height: 40,
        backgroundColor: "white",
        paddingHorizontal: 10,
        borderRadius: 5
      }}
      placeholder='Text'
    />
  </View>
  )
}

export default SearchInput

const styles = StyleSheet.create({})