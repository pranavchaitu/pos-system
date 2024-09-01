import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

function Category({ item,selectedCategory,setSelectedCategory } : any) {
  return (
    <TouchableOpacity onPress={() => {
        setSelectedCategory(item)
    }} className='mr-3' >
        {selectedCategory === item ? 
            <Text className='px-5 py-3  text-center rounded-full font-semibold text-lg text-[#ffffff] bg-green-500'>
                {item}
            </Text>
        :   <Text className='px-5 py-3  text-center rounded-full font-semibold text-lg text-[#938f8f] bg-[#e7e5e5]'>
                {item}
            </Text>
        }
    </TouchableOpacity>
  )
}

export default Category
