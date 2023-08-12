import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Filter = ({categories}) => {
    const filter = [
        {
          "id": 1,
          "name": "Roses",
          "image": "https://example.com/rose_image.jpg"
        },
        {
          "id": 2,
          "name": "Tulips",
          "image": "https://example.com/tulip_image.jpg"
        },
        {
          "id": 3,
          "name": "Lilies",
          "image": "https://example.com/lily_image.jpg"
        },
        {
          "id": 4,
          "name": "Daisies",
          "image": "https://example.com/daisy_image.jpg"
        },
        {
          "id": 5,
          "name": "Sunflowers",
          "image": "https://example.com/sunflower_image.jpg"
        },
        {
          "id": 6,
          "name": "Orchids",
          "image": "https://example.com/orchid_image.jpg"
        }
      ]
      
  return (
   <ScrollView horizontal style={{marginVertical: 10}}>
    {
        categories.map((item, i) => (
            <View key={i} style={{ marginRight: 10, backgroundColor: item === "all" ? "#516153": "none", paddingVertical: 10,
                    paddingHorizontal: 25, borderRadius:5
            }}>
                <Text style={{ color: item === "all" ? "#d8d8d8": "#333333", textTransform: "capitalize"}}>
                {item}                
                </Text>
            </View>
        ))
    }
   </ScrollView>
  )
}

export default Filter

const styles = StyleSheet.create({})