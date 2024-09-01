import React, { ReactNode } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

/**
 * Header Component
 *
 * This component renders a customizable header for the application.
 * It supports two modes: "Home" mode, which displays a menu icon, and a back button mode for navigation.
 * The header also displays a profile image on the right and allows for child components to be passed and rendered in the middle of the header.
 *
 * @param {Object} props - The props object.
 * @param {boolean} props.isHome - Determines if the header is in "Home" mode or not.
 * @param {ReactNode} props.children - Children components to be rendered in the middle of the header.
 *
 * @returns {JSX.Element} The JSX representation of the header component.
 */
function Header({ isHome, children }: { isHome: boolean; children: ReactNode }) {
  const navigation = useNavigation<any>();

  return (
    <View className="flex-row justify-between py-5 items-center">
      {isHome ? (
        <View className="rounded-lg bg-green-500 p-3">
          <FontAwesome name="reorder" size={24} color="#ffffff" />
        </View>
      ) : (
        <TouchableOpacity
          onPress={() => navigation.navigate('HOME')}
          className="bg-[#dfdcdc] p-2 rounded-lg"
        >
          <Ionicons name="chevron-back" size={30} />
        </TouchableOpacity>
      )}
      {children}
      <Image source={require('../assets/dp.png')} className="w-12 h-12 rounded-lg" />
    </View>
  );
}

export default Header;
