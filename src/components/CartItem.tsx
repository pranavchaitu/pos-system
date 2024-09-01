import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

function CartItem({ item } : any) {
  const [count,setCount] = useState(item.count)
  return (
    <View className='flex-row items-center gap-2 rounded-lg h-28 p-5 bg-gray-50'>
    <Image
      source={{uri : item.image}}
      className="h-20 w-20 rounded-full"
    />
      <View className='w-56 justify-between py-5 pl-2'>
        <Text className='font-bold text-lg text-black'>{item.name}</Text>
        <View className='flex-row justify-between'>
            <Text className='font-bold text-xl'>$ {item.price}</Text>
            <TouchableOpacity onPress={() => setCount(count+1)} className='font-bold text-lg'>
              <Text>
              -  {count}  +
              </Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default CartItem