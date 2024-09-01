import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity } from "react-native"

const Button = ({ name,redirect,handleAddtoCart,item } : {
    name : string,
    redirect : "CART" | "HOME_STACK",
    handleAddtoCart? : any
    item? : any
}) => {
    const navigation : any = useNavigation()
    return <>
        <TouchableOpacity onPress={() => {
            {redirect == "CART" && handleAddtoCart(item)}
            navigation.navigate(redirect)
        }} className='mt-8 bg-green-500 p-4 rounded-3xl items-center'>
            <Text className='text-white text-2xl font-semibold'>
                {name}
            </Text>
        </TouchableOpacity>
    </>
}

export default Button;