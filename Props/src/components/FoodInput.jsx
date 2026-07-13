import style from "./FoodInput.module.css";

function FoodInput({handleOnKeyDown}){

  

  return(
  <input type="text" placeholder="Enter food Items here...." className={style.input}
  
  // onChange in event handling is use to get the every key input from user
  //onChange is used for controlled from inputs.

  onKeyDown={handleOnKeyDown}
 

  />
  )
}

export default FoodInput;