import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

function FoodItem({ props,handleLiked } : any) {
  const navigation : any = useNavigation()
  return (
    <TouchableOpacity onPress={() => {
      navigation.navigate("PRODUCT_DETAILS",{ props });
    }} className="flex-1 m-2"> 
      <View className="relative flex justify-center items-center shadow-2xl rounded-3xl">
        {/* TouchableOpacity for making the heart icon clickable */}
        <TouchableOpacity onPress={() => handleLiked(props)} className="absolute z-10 top-0 right-2">
          <AntDesign 
            name={props.isLiked ? "heart" : "hearto"} 
            size={24} 
            color={"red"}
          />
        </TouchableOpacity>
        
        {/* Image component with rounded corners */}
        <Image
          source={{uri : props.image}}
          className="h-32 w-32 rounded-full"
        />
        <Text className='text-lg font-bold'>
          {props.name}
        </Text>
        <View className='text-lg py-2 flex-row justify-between w-full px-4'>
          <Text>{props.time} min</Text>
          <View className='flex-row items-center gap-3'>
            <Entypo name="star" size={22} color={"gold"}/>
            <Text>{props.rating}</Text>  
          </View>
        </View>
        <View className='flex-row w-full justify-between pl-4'>
          <Text className='font-bold text-lg'>$15.00</Text>
          <View className='px-3 rounded-tl-3xl rounded-br-3xl bg-green-500'>
            <Text className='text-4xl text-white'>+</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default FoodItem;
