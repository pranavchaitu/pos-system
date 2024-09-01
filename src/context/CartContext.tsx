import { createContext, ReactNode, useState } from "react";

export const CartContext = createContext({})

export const CartProvider = ({ children } : {
    children : ReactNode
}) => {

    const [cart,setCart] = useState<any>([]) 

    const addToCart = (item : any) => {
        const itemExists = cart.findIndex((foodItem : any) => foodItem.id === item.id)
        if(itemExists == -1) {
            setCart([...cart,item])
        }
    }

    const value : any = {
        cart,
        addToCart
    }
    return <CartContext.Provider value={value}>
        { children }
    </CartContext.Provider>
}