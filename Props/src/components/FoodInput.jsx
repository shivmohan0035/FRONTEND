import style from "./FoodInput.module.css";

function FoodInput(){

  const handleOnChange=(event)=>{
          console.log(event.target.value)
  };

  return(
  <input type="text" placeholder="Enter food Items here...." className={style.input}
  
  // onChange in event handling is use to get the every key input from user
  //onChange is used for controlled from inputs.

  onChange={handleOnChange}
 

  />
  )
}

export default FoodInput;