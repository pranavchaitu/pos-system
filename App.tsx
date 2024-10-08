import { useContext } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetailsScreen from './src/screen/ProductDetailsScreen';
import CartScreen from './src/screen/CartScreen';
import { CartContext, CartProvider } from './src/context/CartContext';
import HomeScreen from './src/screen/HomeScreen';
import OrderScreen from './src/screen/OrderScreen';

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
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{
          headerShown : false,
          tabBarShowLabel : false,
          tabBarActiveTintColor : "#E96E6E"
        }}
        // to be changed after - TODO
        initialRouteName='ORDERS'
        >
          <Tab.Screen name="HOME_STACK" component={MyHomeStack} options={{
              tabBarIcon : ({ size,color }) => <Entypo name="home" size={size}
              color={color}/>
          }}/>
          <Tab.Screen name="CART" component={CartScreen} options={{
              tabBarIcon : ({ size,color }) => {
                const { cart } : any = useContext(CartContext)
                return <>
                  <View className='relative'>
                    <MaterialCommunityIcons name="cart" size={size}
                    color={color}/>
                    {cart.length > 0 && <View className='absolute -top-4 -right-4 bg-green-500 py-1 px-2 rounded-full'>
                      <Text className='text-white text-xs'>{cart.length}</Text>
                    </View>}
                  </View>
                </>
              }
          }}/>
          <Tab.Screen name="ORDERS" component={OrderScreen} options={{
              tabBarIcon : ({ size,color }) => <FontAwesome6 name="user" size={size}
              color={color}/>
          }}/>
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}