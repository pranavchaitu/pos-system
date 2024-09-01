import React from 'react'
import { Image, Text, View } from 'react-native'

function CartItem() {
  return (
    <View className='flex-row rounded-lg h-28 p-3 bg-gray-50'>
      <Image 
        source={require("../assets/food1.png")}
        className='w-24 h-24'
      />
      <View className='w-56 justify-between py-5 pl-2'>
        <Text className='font-bold text-lg text-black'>Pancakes Berries</Text>
        <View className='flex-row justify-between'>
            <Text className='font-bold text-xl'>$ 250</Text>
            <Text className='font-bold text-lg'>-  1  +</Text>
        </View>
      </View>
    </View>
  )
}

export default CartItem
