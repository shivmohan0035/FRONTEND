import style from "./ItemsRow.module.css";

function ItemsRow(props) {

  const hanndleBuyButtonClick=(items)=>{
        console.log(`${items} being bought`)
  };

  return (
    <li className={` ${style['row']} list-group-item`}>
      <span className={style['item-name']}>{props.item}</span>

      <button className={`${style.btn} btn btn-outline-primary`}

      // onClick in handling event  is use to acknowledgement of click on buttom
      
      onClick={()=>
        
         hanndleBuyButtonClick(props.item)
      }>Add to cart</button>

    </li>
  );
}

export default ItemsRow;





 