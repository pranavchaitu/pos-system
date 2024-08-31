import React, { useState } from 'react'
import { FlatList, Image, Text, TextInput, View } from 'react-native'
import Octicons from "react-native-vector-icons/Octicons"
import Entypo from "react-native-vector-icons/Entypo"
import Fontisto from "react-native-vector-icons/Fontisto"
import Cetegory from '../components/Cetegory'
import FoodItem from '../components/FoodItem'
import LinearGradient from 'react-native-linear-gradient'
import data from "../../data.json"

const categories = [
  "Trending Now",
  "Popular Choices",
  "Deals & Offers",
  "Top Rated"
];

function HomeScreen() {
  const [selectedCategory,setSelectedCategory] = useState("Trending Now")
  const [foodData,setFoodData] = useState(data.foodData)
  // State to track if the heart icon is toggled or not
  // const [liked, setLiked] = useState(false);

  function handleLiked(item : any) {
    const newItems = foodData.map((prod) => {
      if(prod.id === item.id) {
        return {
          ...prod,
          isLiked : true
        }
      }
      return prod
    })
    setFoodData(newItems)
  }

  return (
    <LinearGradient colors={["#FDF0F3","#FFFBFC"]} className='flex h-screen p-5'>

      {/* Header */}
      <View className='flex-row justify-between py-5 items-center'>
        <View className='rounded-lg bg-green-500 p-2'>
          <Entypo name={"grid"} size={30} color={"#ffffff"}/>
        </View>
        <View className='text-green-500 flex-row gap-2 items-center'>
          <Octicons name="location" size={22} color={"green"}/>
          <Text className='text-lg text-gray-400'>
            Yanam, India 
          </Text>
        </View>
        <Image source={require('../assets/dp.png')} className='w-11 h-11 rounded-lg'/>
      </View>

      {/* name and input section */}
      <Text className='text-2xl font-medium text-green-500'>
        Hi Pranav
      </Text>
      <Text className='text-4xl font-bold mt-3 text-black'>
        Find your food
      </Text>
      {/* input box */}
      <View className='bg-white  my-6 py-1 px-4 rounded-xl flex-row items-center'>
        <Fontisto name="search" size={22} color={"green"}/>
        <TextInput placeholder='Search Food' placeholderTextColor={"gray"} className=' text-2xl ml-4 w-72'/>
        {/* <View className='rounded-lg bg-green-500 p-2'>
          <FontAwesome name="filter" size={22} color={"white"}/>
        </View> */}
      </View>
      {/* the items list */}
      <FlatList 
        numColumns={2}
        ListHeaderComponent={
          <FlatList
            className='mb-5'
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
        }
        data={foodData}
        renderItem={({ item,index }) => (
          <FoodItem props={item} handleLiked={handleLiked}/>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom : 50
        }}
      />
    </LinearGradient>
  )
}

export default HomeScreen
