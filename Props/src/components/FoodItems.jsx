import style from "./FoodItems.module.css";
import ItemsRow from "./ItemsRow";

function FoodItems(props) {
  let foodItems = props.items;

  return (
    <ul className={`list-group ${style['container']}`}>
      {foodItems.map((item) => (
        <ItemsRow
         key={item}
         item={item} 

        //  Passing function via props
        //Parent defines a function , child invokes it
        handleBuyButtonClick= {
          () => {console.log(`${item} being bought`)}
        }
 
        ></ItemsRow>
      ))}
    </ul>
  );
}

export default FoodItems;