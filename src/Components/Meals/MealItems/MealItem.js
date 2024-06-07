import classes from "./MealItem.module.css";

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

      </div>

    </li>
  )
}

export default MealItem;