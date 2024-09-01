import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

function FoodItem({ props,handleLiked } : any) {
  const navigation : any = useNavigation()
  return (
    <TouchableOpacity onPress={() => {
      navigation.navigate("PRODUCT_DETAILS",{ props });
    }} className="flex-1 m-2"> 
      <View className="relative flex pt-2 border border-gray-200 bg-[#f7f7f7] justify-center items-center rounded-3xl">
        {/* TouchableOpacity for making the heart icon clickable */}
        <TouchableOpacity onPress={() => handleLiked(props)} className="absolute z-10 top-0 right-0 rounded-lg rounded-bl-full rounded-tr-full p-2 bg-white">
          <AntDesign 
            name={props.isLiked ? "heart" : "hearto"} 
            size={24} 
            color={"red"}
          />
        </TouchableOpacity>
        
        {/* Image component with rounded corners */}
        <Image
          source={{uri : props.image}}
          className="h-36 w-36 rounded-full"
        />
        <Text className='text-xl font-bold text-black'>
          {props.name}
        </Text>
        <View className='py-2 flex-row justify-between w-full px-3'>
          <Text className='text-lg text-gray-500'>{props.time} min</Text>
          <View className='flex-row items-center gap-1'>
            <Entypo name="star" size={22} color={"gold"}/>
            <Text className='text-lg text-gray-500'>{props.rating}</Text>  
          </View>
        </View>
        <View className='flex-row w-full justify-between pl-4'>
          <Text className='text-xl font-bold text-gray-700'>${props.price/100}.00</Text>
          <View className='px-3 rounded-tl-3xl rounded-br-3xl bg-green-500'>
            <Text className='text-4xl text-white'>+</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default FoodItem;
