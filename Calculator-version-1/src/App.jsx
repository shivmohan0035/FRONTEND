import styles from "./App.module.css";
import Display from "./Components/Display.jsx";
import Buttons from "./Components/Buttons.jsx";
import { useState } from "react";

function App() {
   
  let buttons=["C","0","1","2","3","4","5","6","7","8","9",".","=","+","-","*","/"];

  const [currentValue,setValue]=useState("");

  const onButtonClick=(button)=>{
    if (button==='C'){
       setValue("");
    }else if(button==="="){
      const result=eval(currentValue);
      setValue(result);
    }else{
      const newDisplayValue= currentValue + button;
      setValue(newDisplayValue);
    }
  };

  return(
    <div className={styles.calculator}>
         <Display displayValue={currentValue}></Display>
          <Buttons buttons={buttons} onButtonClick={onButtonClick}></Buttons>

    </div>
  )





};

export default App;