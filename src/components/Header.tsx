import React from 'react'
import { Image, Text, View } from 'react-native'
import Entypo from "react-native-vector-icons/Entypo"

function Header() {  
  return (
    <View className='flex flex-row justify-between py-5 items-center'>
        <View className='rounded-full bg-white p-2'>
            <Entypo name={"grid"} size={30} color={"#E96E6E"}/>
        </View>
        <Image source={require('../assets/dp.png')} className='w-11 h-11 rounded-full'/>
    </View>
  )
}

export default Header
