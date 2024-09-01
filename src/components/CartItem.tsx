import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

function CartItem({ item } : any) {
  return (
    <View className='flex-row items-center gap-2 rounded-3xl border mx-1 px-2 my-2 h-28 bg-[#f7f7f7]'>
      <Image
        source={{uri : item.image}}
        className="h-20 w-20 rounded-full"
      />
      <View className='w-56 pl-2 space-y-2'>
        <Text className='font-bold text-lg'>{item.name}</Text>
        <View className='flex-row justify-between'>
          <View className='flex-row gap-1 items-center'>
            <Text>$</Text>
            <Text className='text-black font-bold text-2xl'>{item.price/100}.00</Text>
          </View>
          <Text className='border border-gray-200 rounded-lg px-3 bg-green-500 text-center pt-1 font-bold text-base text-white'>
            Quantity : {item.count}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default CartItem