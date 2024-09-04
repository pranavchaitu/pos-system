import { Text, View } from "react-native"

interface OrderItemType {
    name : string,
    orderId : string,
    quantity : number,
    amount : number
}  

export default function OrderItem({ order } : {
    order : OrderItemType
  }) {
    return <>
      <View className='border border-gray-500 p-2 mb-2'>
        <Text className='font-bold text-left'>NAME : {order.name}</Text>
        <Text className='font-bold text-left'>ORDER ID : {order.orderId}</Text>
        <Text className='font-bold text-left'>QUANTITY : {order.quantity}</Text>
        <Text className='font-bold text-left'>AMOUNT PAID: {order.amount}</Text>
      </View>
    </>
  }