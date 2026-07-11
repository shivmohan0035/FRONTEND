import style from "./ItemsRow.module.css";

function ItemsRow(props) {
  return (
    <li className={` ${style['row']} list-group-item`}>
      <span className={style['item-name']}>{props.item}</span>
    </li>
  );
}

export default ItemsRow;