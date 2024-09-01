import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

/**
 * Category Component
 * 
 * This component renders a selectable category item. When clicked, it updates the selected category state.
 * 
 * @param {Object} props - The props object.
 * @param {string} props.item - The category name to be displayed.
 * @param {string} props.selectedCategory - The currently selected category.
 * @param {Function} props.setSelectedCategory - Function to update the selected category state.
 * 
 * @returns {JSX.Element} The JSX representation of a category item.
 */
function Category({
  item,
  selectedCategory,
  setSelectedCategory,
}: {
  item: string;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}) {
  return (
    <TouchableOpacity
      onPress={() => setSelectedCategory(item)}
      className='mr-3'
    >
      {selectedCategory === item ? (
        <Text className='px-5 py-3 text-center rounded-full font-semibold text-lg text-[#ffffff] bg-green-500'>
          {item}
        </Text>
      ) : (
        <Text className='px-5 py-3 text-center rounded-full font-semibold text-lg text-[#938f8f] bg-[#e7e5e5]'>
          {item}
        </Text>
      )}
    </TouchableOpacity>
  );
}

export default Category;
