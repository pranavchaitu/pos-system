import React, { useEffect, useState } from 'react'
import { FlatList, Image, Text, TextInput, View } from 'react-native'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import FontAwesome6 from "react-native-vector-icons/FontAwesome6"
import Fontisto from "react-native-vector-icons/Fontisto"
import Category from '../components/Category'
import FoodItem from '../components/FoodItem'
import LinearGradient from 'react-native-linear-gradient'
import data from "../../data.json"
import Header from '../components/Header'

const categories = [
  "Food",
  "Vegetables",
  "Non-Veg",
  "Fruits",
];

function HomeScreen() {
  const [selectedCategory,setSelectedCategory] = useState("Food")
  const [foodData,setFoodData] = useState(data.foodData)

  useEffect(() => {
    // the sort function should be mafe according to the need and data
    if(selectedCategory == "Fruits") {
      setFoodData([data.foodData[0]])
    } else if(selectedCategory == "Vegetables") {
      setFoodData([data.foodData[2],data.foodData[3]])
    } else if(selectedCategory == "Non-Veg") {
      setFoodData([data.foodData[1],data.foodData[2]])
    } else {
      setFoodData(data.foodData)
    }
  },[selectedCategory])

  function handleLiked(item : any) {
    const newItems = foodData.map((prod) => {
      if(prod.id === item.id) {
        return {
          ...prod,
          isLiked : !item.isLiked
        }
      }
      return prod
    })
    setFoodData(newItems)
  }

  return (
    <LinearGradient colors={["#FDF0F3","#FFFBFC"]} className='flex h-screen p-5'>

      {/* Header */}
      <Header isHome={true} >
        <View className='text-green-500 flex-row gap-2 items-center'>
          <FontAwesome6 name="location-dot" size={22} color={"#22c55e"}/>
          <Text className='text-xl text-gray-400'>
            Yanam, India 
          </Text>
        </View>
      </Header>

      {/* name and input section */}
      <Text className='text-3xl font-semibold text-green-500'>
        Hi Pranav
      </Text>
      <Text className='text-4xl font-bold mt-3 text-gray-600'>
        Find your food
      </Text>
      {/* input box */}
      <View className='bg-[#eef9eb] border border-gray-200 my-6 py-1 px-4 rounded-xl flex-row items-center'>
        <Fontisto name="search" size={22} color={"green"}/>
        <TextInput placeholder='Search Food'  placeholderTextColor={"gray"} className=' text-2xl ml-4 w-72'/>
      </View>
      {/* the items list */}
      <FlatList 
        numColumns={2}
        ListHeaderComponent={
          <FlatList
            className='mb-5'
            data={categories}
            renderItem={({ item }) => (
              <Category 
                item={item} 
                selectedCategory={selectedCategory} 
                setSelectedCategory={setSelectedCategory}/>
              )
            }
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
