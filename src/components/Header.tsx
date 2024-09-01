import React, { Children, ReactNode } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { useNavigation } from '@react-navigation/native'

function Header({ isHome,children } : {
  isHome : boolean,
  children : ReactNode
}) {  
  const navigation : any = useNavigation()
  return (
    <View className='flex-row justify-between py-5 items-center'>
      { isHome ? 
        <View className='rounded-lg bg-green-500 p-3'>
          <FontAwesome name={"reorder"} size={24} color={"#ffffff"}/>
        </View>
      :
        <TouchableOpacity onPress={() => navigation.navigate("HOME")} className='bg-[#dfdcdc] p-2 rounded-lg'>
          <Ionicons name={"chevron-back"} size={30}/>
        </TouchableOpacity>
      }
        {children}
      <Image source={require('../assets/dp.png')} className='w-12 h-12 rounded-lg'/>
  </View>
  )
}

export default Header
