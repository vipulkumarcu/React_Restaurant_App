import { useContext } from "react";
import classes from "./CartItemList.module.css";
import CartContext from "../../Store/cart-context";

function CartItemList ()
{
  const context = useContext ( CartContext );

  function deleteHandler ( id )
  {
    context.removeItem ( id );
  }

  function addHandler ( item )
  {
    const newItem = {
      id: item.id,
      name: item.name,
      quantity: 1,
      price: item.price
    }
    context.addItem ( newItem );
  }

  return (
    <ul className = { classes[ "cart-items" ] } >
    {
      context.items.map ( 
        ( item ) => (
          <li className = { classes[ "cart-item" ] }  key = { item.id }>

            <div>
              <h2> { item.name } </h2>
              <div className = { classes[ "summary" ] }>
                <span className = { classes[ "price" ] }> $ { item.price } </span>
                <span className = { classes[ "amount" ] }> x  { item.quantity } </span>
              </div>
            </div>

            <div className = { classes[ "action" ] }>
              <button onClick = { () => deleteHandler ( item.id ) }> - </button>
              <button onClick = { () => addHandler ( item ) }> + </button>
            </div>
          </li>
        ) 
      ) 
    }
    </ul>
  )
}

export default CartItemList;