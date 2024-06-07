import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css"

function MealItemForm ( props )
{
  function submithandler ( event )
  {
    event.preventDefault();
  }

  return (
    <form className = { classes["form"] } onClick = { submithandler } >

      <Input
        label = "Amount"
        input = {
          {
            id: "amount_" + props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }
        }
      />

      <button type = "submit"> Add+ </button>
      
    </form>
  )
}

export default MealItemForm;