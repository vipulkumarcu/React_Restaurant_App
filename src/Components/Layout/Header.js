import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";
import meals from "../../Assets/meals.jpg"

function Header ( props )
{
  return (
    <>

      <header className = { classes[ "header" ] }>
        <h1> React Meals </h1>
        <HeaderCartButton onClick= { props.onShowCart } />
      </header>

      <div className = { classes["main-image" ] }>
        <img src = { meals } alt = "Delicious Meals !!" />
      </div>
  
    </>
    
  )
}

export default Header;