import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import CartItem from '../components/CartItem'
import { FlatList } from 'react-native'
import Button from '../components/Button'

function CartScreen({ props } : any) {
  const navigation : any = useNavigation()
  return (
    <LinearGradient colors={["#FDF0F3","#FFFBFC"]} className='flex h-screen px-5 '>
      {/* <Header /> */}
      {/* cart items list */}
      <FlatList
        className='mt-10' 
        data={[0,1,2,3,4,5,6]}
        renderItem={CartItem}
        ListHeaderComponent={
          <>
            <View className='flex-row items-center'>
              <TouchableOpacity onPress={() => navigation.navigate("HOME")} className='bg-[#dfdcdc] p-2 rounded-lg'>
                <Ionicons name={"chevron-back"} size={30}/>
              </TouchableOpacity>
              <Text className='ml-24 text-2xl font-semibold'>My Cart</Text>
            </View>
            {/* payment details */}
            <View className='top-5'>
              <Text className='text-2xl text-black font-semibold'>
                Payment Details
              </Text>
              <View className='flex gap-2 mt-3'>
                <View className='flex-row justify-between'>
                  <Text className='text-lg '>Subtotal</Text>
                  <Text className='text-lg font-bold'>250 USD</Text>
                </View>
                <View className='flex-row justify-between'>
                  <Text className='text-lg '>Total (icnl. VAT)</Text>
                  <Text className='text-lg font-bold'>26 USD</Text>
                </View>
                <View className='flex-row justify-between'>
                  <Text className='text-lg '>Delivery Services</Text>
                  <Text className='text-lg font-bold'>16 USD</Text>
                </View>      
              </View>
              <View className='flex-row justify-between border-t mt-3 pt-2 border-gray-300'>
                <Text className='text-lg '>Total</Text>
                <Text className='text-xl text-blue-500 font-bold'>260 USD</Text>
              </View>    
              {/* payment methods */}
              <Text className='font-bold text-3xl text-black mt-8'>
                Payment Methods
              </Text>
              <View className='flex-row items-center justify-between mt-5'>
                <View className='bg-gray-100 p-6 rounded-3xl'>
                  <Entypo name="paypal" size={44}/>
                </View>
                <View className='bg-gray-100 p-6 rounded-3xl'>
                  <AntDesign name="google" size={44}/>
                </View>
                <View className='bg-gray-100 p-6 rounded-3xl'>
                  <FontAwesome name="bitcoin" size={44}/>
                </View>
              </View>
              <View className='pb-10'>
                <Button name="Pay Now" redirect='HOME_STACK'/>
              </View>
            </View>
          </>
        }
        showsVerticalScrollIndicator = {false}
      />
    </LinearGradient>
  )
}

export default CartScreen
