import style from "./ItemsRow.module.css";

function ItemsRow(props) {
  return (
    <li className={` ${style['row']}`}>
      {props.item}
    </li>
  );
}

export default ItemsRow;