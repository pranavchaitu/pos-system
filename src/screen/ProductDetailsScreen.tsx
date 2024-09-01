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

  // const condition = count > 1 && count < 20

  return (
    <View className='bg-green-500 flex h-screen relative'>
      <View className='p-5'>
        <Header isHome={false}>
          <Text className='text-xl font-semibold text-white'>Food Details</Text>
        </Header>
      </View>
      <Image 
        source={{ uri: item.image }}
        className='w-60 h-60 absolute z-10 top-44 left-20 rounded-full'
      />
      <View className='bg-white h-screen mt-44 rounded-t-3xl pt-32 px-5'>
        <View className='flex-row justify-between'>
          <View className='space-y-2'>
            <Text className='text-2xl font-bold text-black'>{item.name}</Text>
            <Text className='text-green-500 text-3xl font-bold'>${item.price/100}.00</Text>
          </View>
          <View className='bg-green-500 my-4 px-5 rounded-3xl flex justify-center items-center'>
            <View className='flex-row gap-4 items-center'>
              <TouchableOpacity onPress={() => count > 1 && setCount(count-1)}>
                <Text className='text-2xl font-bold text-white'>-</Text>
              </TouchableOpacity>
              <Text className='text-2xl border-l border-r px-2 border-green-600 font-bold text-white'>
                {count}
              </Text>  
              <TouchableOpacity onPress={() => count < 20 && setCount(count+1)}>
                <Text className='text-2xl font-bold text-white'>+</Text>
              </TouchableOpacity>  
            </View>
          </View>
        </View>
        <View className='mt-5 flex-row items-center justify-between'>
          <View className='flex-row items-center'>
            <Entypo name="star" size={22} color={"gold"}/>
            <Text className='ml-2 text-lg text-gray-500'>{item.rating}</Text>  
          </View>
          <View className='flex-row items-center'>
            <Fontisto name="blood-drop" size={22} color={"red"}/>
            <Text className='ml-2 text-lg'>100 Kcal</Text>  
          </View>
          <View className='flex-row items-center'>
            <AntDesign name="clockcircle" size={22} color={"gold"}/>
            <Text className='ml-2 text-lg'>{item.time} min</Text>  
          </View>
          </View>  
        <View className='mt-8'>
          <Text className='text-xl mb-1 font-bold text-black'>
            About food
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi odit veritatis odio obcaecati, enim laudantium facilis voluptates eos iure ratione, unde eius, incidunt ipsum ullam distinctio quod maiores nesciunt non?
          </Text>
        </View>    
        <Button name='Add to cart' redirect='CART' handleAddtoCart={handleAddToCart} item={item}/>
      </View>
    </View>
  );
}

export default ProductDetailsScreen;
