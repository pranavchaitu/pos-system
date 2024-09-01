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
      <View className='w-56 pl-2 space-y-2'>
        <Text className='font-bold text-lg'>{item.name}</Text>
        <View className='flex-row justify-between'>
          <View className='flex-row gap-1 items-center'>
            <Text>$</Text>
            <Text className='text-black font-bold text-2xl'>{item.price}</Text>
          </View>
          <View className='bg-green-500 px-5 rounded-3xl flex justify-center items-center'>
            <View className='flex-row gap-4 items-center'>
              <TouchableOpacity onPress={() => count > 1 && setCount(count-1)}>
                <Text className='text-xl font-bold text-white'>-</Text>
              </TouchableOpacity>
              <Text className='text-lg border-l border-r px-2 border-green-600 font-bold text-white'>
                {count}
              </Text>  
              <TouchableOpacity onPress={() => count < 20 && setCount(count+1)}>
                <Text className='text-xl font-bold text-white'>+</Text>
              </TouchableOpacity>  
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default CartItem