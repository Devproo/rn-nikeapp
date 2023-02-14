import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import products from '../data/products'

const ProductsScreen = () => {
  return (
    <FlatList
    data={products}
    renderItem={({ item }) => (
      <View style={{ width: "50%", padding: 1 }}>
        <Image
          source={{
            uri: item.image,
          }}
          style={{ width: "100%", aspectRatio: 1 }}
        />
      </View>
    )}
    numColumns={2}
  />
  )
}

export default ProductsScreen