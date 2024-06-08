import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../Store/cart-context";
import CartItemList from "./CartItemList";

function Cart ( props )
{
  const context = useContext ( CartContext );

  const totalPrice = context.totalPrice.toFixed(2);

  return (
    <Modal onShowCart = { props.onShowCart }>

      <CartItemList />

      <div className = { classes["total"] } >
        <span> Total Price: </span>
        <span> $ { totalPrice } </span>
      </div>

      <div className = { classes["actions"] }>
        <button className = { classes["button--alt"] } onClick = { props.onShowCart }> Close </button>
        <button className = { classes["button"] }> Order </button>
      </div>

    </Modal>
  )
}

export default Cart;