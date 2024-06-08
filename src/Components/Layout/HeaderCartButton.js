import { useContext } from "react";
import CartIcon from "../Cart/CartIcon"
import classes from "./HeaderCartButton.module.css"
import CartContext from "../../Store/cart-context";

function HeaderCartButton ( props )
{
  const context = useContext ( CartContext );

  return (
    <button className = { classes["button"] } onClick = { props.onClick } >

      <span className = { classes["icon"] }>
        <CartIcon />
      </span>
      
      <span> Your Cart </span>

      <span className = { classes["badge"] }> { context.items.length } </span>
      
    </button>
  )
}

export default HeaderCartButton;