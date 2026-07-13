import style from "./ItemsRow.module.css";


function ItemsRow({item,handleBuyButtonClick}) {

  

  return (
    <li className={` ${style['row']} list-group-item`}>
      <span className={style['item-name']}>{item}</span>

      <button className={`${style.btn} btn btn-outline-primary`}

      // onClick in handling event  is use to acknowledgement of click on buttom
      
      onClick={handleBuyButtonClick}
      
      >Buy</button>

    </li>
  );
}

export default ItemsRow;





 