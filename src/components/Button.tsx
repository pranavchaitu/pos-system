import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity } from "react-native";

/**
 * A reusable button component for navigation and handling cart actions.
 *
 * @param {string} name - The text to display on the button.
 * @param {string} redirect - The navigation target when the button is pressed. Should be either "CART" or "HOME_STACK".
 * @param {function} [handleAddtoCart] - Optional callback function to add an item to the cart.
 * @param {object} [item] - Optional item object to be added to the cart.
 * @returns {JSX.Element} A button component that handles navigation and cart actions.
 */
const Button = ({ 
    name, 
    redirect, 
    handleAddtoCart, 
    item 
}: { 
    name: string; 
    redirect: "CART" | "HOME_STACK"; 
    handleAddtoCart?: (item: any) => void; 
    item?: any; 
}) => {
    const navigation: any = useNavigation();

    return (
        <TouchableOpacity 
            onPress={() => {
                if (redirect === "CART" && handleAddtoCart) {
                    handleAddtoCart(item);
                }
                navigation.navigate(redirect);
            }} 
            className='mt-8 bg-green-500 p-4 rounded-3xl items-center'
        >
            <Text className='text-white text-2xl font-semibold'>
                {name}
            </Text>
        </TouchableOpacity>
    );
};

export default Button;
