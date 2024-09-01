import React, { useContext, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../components/Header';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import Button from '../components/Button';
import { CartContext } from '../context/CartContext';

// type for the route parameters
type ProductDetailsScreenRouteProp = RouteProp<{ 
  params: { 
    props: {
      id: number;
      name: string;
      price: number;
      image: string;
      rating: number;
      time: number;
    } 
  } 
}, 'params'>;

function ProductDetailsScreen() {
  const route = useRoute<ProductDetailsScreenRouteProp>();
  const navigation : any = useNavigation();
  const { addToCart } : any = useContext(CartContext);
  const [count,setCount] = useState(1)

  // Extract item from route params
  const item = route.params.props;

  const handleAddToCart = (item :any) => {
    item.count = count
    addToCart(item); 
    navigation.navigate("CART")
  };

  return (
    <View className='bg-green-500 flex h-screen relative'>
      <View className='p-5'>
        <Header />
      </View>
      <Image 
        source={{ uri: item.image }}
        className='w-60 h-60 absolute z-10 top-48 left-20 rounded-full'
      />
      <View className='bg-white h-screen mt-44 rounded-t-3xl pt-32 px-5'>
        <View className='flex-row justify-between'>
          <View>
            <Text className='text-xl font-bold text-black'>{item.name}</Text>
            <Text className='text-green-500 text-lg font-semibold'>${item.price}</Text>
          </View>
          <TouchableOpacity onPress={() => {
            setCount(count+1)
          }} className='bg-green-500 px-5 rounded-3xl flex justify-center items-center'>
            <Text className='text-lg font-bold text-white'>-  {count}  +</Text>
          </TouchableOpacity>
        </View>
        <View className='mt-5 flex-row items-center'>
          <Entypo name="star" color={"gold"} size={22}/>
          <Text className='ml-2 mr-20 text-lg'>{item.rating}</Text>
          <Fontisto name="blood-drop" size={22} color={"red"}/>
          <Text className='ml-2 mr-16 text-lg'>100 Kcal</Text>
          <AntDesign name="clockcircle" size={22} color={"gold"}/>
          <Text className='ml-2 text-lg'>{item.time} min</Text>
        </View>  
        <View className='mt-8'>
          <Text className='text-lg font-bold text-black'>
            About food
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi odit veritatis odio obcaecati, enim laudantium facilis voluptates eos iure ratione, unde eius, incidunt ipsum ullam distinctio quod maiores nesciunt non?
          </Text>
        </View>    
        <TouchableOpacity onPress={() => handleAddToCart(item)} className='mt-8 bg-green-500 p-4 rounded-3xl items-center'>
            <Text className='text-white text-2xl font-semibold'>
                Add to cart
            </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ProductDetailsScreen;
