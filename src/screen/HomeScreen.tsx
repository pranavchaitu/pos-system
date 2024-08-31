import React, { useState } from 'react'
import { FlatList, Text, TextInput, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import Fontisto from 'react-native-vector-icons/Fontisto'
import Cetegory from '../components/Cetegory';
import ProductCard from '../components/ProductCard';

const categories = ["Trending Now","All","New","Women","Men"]

function HomeScreen() {
  const [selectedCategory,setSelectedCategory] = useState("Trending Now")
  return (
    <LinearGradient colors={["#FDF0F3","#FFFBFC"]} className='flex h-screen p-5'>
      <View>
        <Header />  
        <Text className='font-mono font-bold text-4xl text-black mt-10'>
          Match your Style
        </Text>
          {/* input container */}
        <View className='bg-white my-6 px-4 rounded-full flex-row items-center shadow-md'>
          <Fontisto name="search" color={"gray"} size={20}/>
          <TextInput placeholder='Search' className='text-xl ml-4 w-72'/>
        </View>
        {/* category section */}
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <Cetegory 
              item={item} 
              selectedCategory={selectedCategory} 
              setSelectedCategory={setSelectedCategory}/>
            )}
          keyExtractor={item => item}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        {/* product list */}
        <ProductCard />
      </View>
    </LinearGradient>
  )
}

export default HomeScreen
