import React from 'react'
import { Text, TextInput, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import Fontisto from 'react-native-vector-icons/Fontisto'
function HomeScreen() {
  return (
    <LinearGradient colors={["#FDF0F3","#FFFBFC"]} style={{flex : 1}}>
      <Header />
      <Text className='font-mono font-bold text-4xl text-black px-8 mt-10'>
        Match your Style
      </Text>  
      <View className='bg-white m-5 px-4 rounded-md flex-row items-center shadow-md'>
        <Fontisto name="search" color={"gray"} size={20}/>
        <TextInput placeholder='Search' className='text-xl ml-4'/>
      </View>
    </LinearGradient>
  )
}

export default HomeScreen
