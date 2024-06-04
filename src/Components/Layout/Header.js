import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";
import meals from "../../Assets/meals.jpg"

function Header ( props )
{
  return (
    <section>

      <header className = { classes[ "header" ] }>
        <HeaderCartButton />
      </header>

      <div className = { classes["main-image" ] }>
        <img src = { meals } alt = "Delicious Meals !!" />
      </div>
  
    </section>
    
  )
}

export default Header;