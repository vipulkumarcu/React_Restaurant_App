import CartIcon from "../Cart/CartIcon"
import classes from "./HeaderCartButton.module.css"

function HeaderCartButton ( props )
{
  return (
    <>
      <h1> React Meals </h1>
      <div  className = { classes[ "bump" ] }>
        <section className = { classes[ "button" ] }>
          <span className = { classes[ "icon" ] }> <CartIcon /> </span>
          <span> Your Cart </span>
          <span className = { classes[ "badge" ] }> 0 </span>
        </section>
      </div>
    </>
  )
}

export default HeaderCartButton;