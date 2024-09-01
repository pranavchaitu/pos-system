import React from 'react';
import { Image, Text, View } from 'react-native';

/**
 * CartItem Component
 * 
 * This component renders a single item in the cart, displaying its image, name, price, and quantity.
 * 
 * @param {Object} props - The props object.
 * @param {Object} props.item - The cart item object containing the item's details.
 * @param {string} props.item.image - The URL of the item's image.
 * @param {string} props.item.name - The name of the item.
 * @param {number} props.item.price - The price of the item in cents.
 * @param {number} props.item.count - The quantity of the item in the cart.
 * 
 * @returns {JSX.Element} The JSX representation of the cart item.
 */
function CartItem({ item }: { item: { image: string; name: string; price: number; count: number } }) {
  return (
    <View className='flex-row items-center gap-2 rounded-3xl border mx-1 px-2 my-2 h-28 bg-[#f7f7f7]'>
      <Image
        source={{ uri: item.image }}
        className="h-20 w-20 rounded-full"
      />
      <View className='w-56 pl-2 space-y-2'>
        <Text className='font-bold text-lg'>{item.name}</Text>
        <View className='flex-row justify-between'>
          <View className='flex-row gap-1 items-center'>
            <Text>$</Text>
            <Text className='text-black font-bold text-2xl'>{(item.price / 100).toFixed(2)}</Text>
          </View>
          <Text className='border border-gray-200 rounded-lg px-3 bg-green-500 text-center pt-1 font-bold text-base text-white'>
            Quantity: {item.count}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default CartItem;
