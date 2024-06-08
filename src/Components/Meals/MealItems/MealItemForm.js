import { useContext } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css"
import CartContext from "../../../Store/cart-context";

function MealItemForm ( props )
{
  const context = useContext ( CartContext );

  function submitHandler ( event )
  {
    event.preventDefault();
    
    const enteredQuantity = Number ( event.target[0].value );

    const item = {
      id: props.id,
      name: props.name,
      quantity: enteredQuantity,
      price: props.price
    }

    context.addItem ( item );
  }

  return (
    <form className = { classes["form"] } onSubmit = { submitHandler } >
      <Input label = "Amount" input = { { id: "amount_" + props.id, type: "number", min: "1", max: "5", step: "1", defaultValue: "1" } } />
      <button type = "submit"> + Add </button>
    </form>
  )
}

export default MealItemForm;