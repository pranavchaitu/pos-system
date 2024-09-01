import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import HomeScreen from './src/screen/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetailsScreen from './src/screen/ProductDetailsScreen';
import CartScreen from './src/screen/CartScreen';

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text className='text-4xl'>Settings</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()

function MyHomeStack() {
  return <>
    <Stack.Navigator
      screenOptions={{
        headerShown : false
      }}
    >
      <Stack.Screen name="HOME" component={HomeScreen} />
      <Stack.Screen name="PRODUCT_DETAILS" component={ProductDetailsScreen} />
    </Stack.Navigator>
  </>
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown : false,
        tabBarShowLabel : false,
        tabBarActiveTintColor : "#E96E6E"
      }}
      // to be changed after - TODO
      initialRouteName='CART'
      >
        <Tab.Screen name="HOME_STACK" component={MyHomeStack} options={{
            tabBarIcon : ({ size,color }) => <Entypo name="home" size={size}
            color={color}/>
        }}/>
        {/* <Tab.Screen name="REORDER" component={HomeScreen} options={{
            tabBarIcon : ({ size,color }) => <MaterialIcons name="reorder" size={size}
            color={color}/>
        }}/> */}
        <Tab.Screen name="CART" component={CartScreen} options={{
            tabBarIcon : ({ size,color }) => <MaterialCommunityIcons name="cart" size={size}
            color={color}/>
        }}/>
        <Tab.Screen name="SETTINGS" component={SettingsScreen} options={{
            tabBarIcon : ({ size,color }) => <FontAwesome6 name="user" size={size}
            color={color}/>
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}