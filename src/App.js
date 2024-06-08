import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./Store/CartProvider";

function App ()
{
  const [ isCartVisible, setIsCartVisible ] = useState ( false );

  function cartHandler ()
  {
    setIsCartVisible ( ( prevState ) => ( !prevState ) );
  }

  return (
    <CartProvider>
      { isCartVisible && <Cart onShowCart = { cartHandler } /> }
      <Header onShowCart = { cartHandler } />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
