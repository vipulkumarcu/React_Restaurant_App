import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

function MealItem ( { id, name, description, price } )
{
  return (
    <li  className = { classes[ "meal" ] } key = { id }>

      <div>
        <h3> { name } </h3>
        <div className = { classes[ "description" ] }>  { description } </div>
        <div className = { classes[ "price" ] }> $ { price.toFixed(2) } </div>
      </div>

      <div>
        <MealItemForm id = { id } name = { name } price = { price } />
      </div>

    </li>
  )
}

export default MealItem;