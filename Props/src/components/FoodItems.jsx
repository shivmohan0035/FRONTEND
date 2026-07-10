import style from "./FoodItems.module.css";
import ItemsRow from "./ItemsRow";

function FoodItems(props) {
  let foodItems = props.items;

  return (
    <ul className={`list-group ${style['container']}`}>
      {foodItems.map((item) => (
        <ItemsRow key={item} item={item} ></ItemsRow>
      ))}
    </ul>
  );
}

export default FoodItems;