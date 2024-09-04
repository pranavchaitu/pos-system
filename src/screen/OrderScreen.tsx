import React from 'react'
import { FlatList, Text, View } from 'react-native'
import data from "../../data.json"
import OrderItem from '../components/OrderItem'

function OrderScreen() {
  return (
    <View className='m-2'>
      <Text className='text-2xl text-center font-bold text-black my-3'>
        Orders
      </Text>
      <View>
        <FlatList 
          numColumns={1}
          data={data.orderData}
          renderItem={({ item, index }) => (
            <OrderItem order={item} key={index}/>
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 100
          }}
        />
      </View>
    </View>
  )
}

export default OrderScreen
