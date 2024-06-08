import { useState } from "react";
import CartContext from "./cart-context";


function CartProvider ( props )
{
  const [ cartItems, setCartItems ] = useState ( [] );
  const [ totalPrice, setTotalPrice ] = useState ( 0 );

  function addItemToCart ( item )
  {
    setCartItems (
      ( prevItems ) => {
        const existingItemIndex = prevItems.findIndex( ( prevItem ) => ( prevItem.id === item.id ) );

        if ( existingItemIndex !== -1 )
        {
          const updatedItems = [ ...prevItems ];
          updatedItems[ existingItemIndex ].quantity += item.quantity;
          return updatedItems;
        }
        
        else
        {
          return [ ...prevItems, item ];
        }

      }
    );

    setTotalPrice ( ( prevTotalPrice ) => ( prevTotalPrice + ( item.price * item.quantity ) ) );
  };

  function removeItemFromCart ( id )
  {
    setCartItems (
      ( prevItems ) => {
        const existingItemIndex = prevItems.findIndex ( ( item ) => ( item.id === id ) );
    
        if ( existingItemIndex === -1 )
        {
          return prevItems;
        }
    
        const updatedItems = [ ...prevItems ];

        const existingItem = updatedItems[ existingItemIndex ];
    
        if ( existingItem.quantity === 1 )
        {
          updatedItems.splice ( existingItemIndex, 1 );
        }
        
        else
        {
          existingItem.quantity -= 1;
          updatedItems[ existingItemIndex ] = existingItem;
        }
    
        return updatedItems;
      }
    );
  
    setTotalPrice (
      ( prevTotalPrice ) => {
        const item = cartItems.find ( ( item ) => ( item.id === id ) );
        return prevTotalPrice - item.price;
      }
    );
  }

  const cartContext = {
    items: cartItems,
    totalPrice: totalPrice,
    addItem: addItemToCart,
    removeItem: removeItemFromCart
  }

  return (
    <CartContext.Provider value = { cartContext }>
      { props.children }
    </CartContext.Provider>
  )
}

export default CartProvider;
