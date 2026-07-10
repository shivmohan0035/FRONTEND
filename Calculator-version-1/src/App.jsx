import styles from "./App.module.css";
import Display from "./Components/Display.jsx";
import Buttons from "./Components/Buttons.jsx";

function App() {
   
  let buttons=["C","0","1","2","3","4","5","6","7","8","9",".","=","+","-","*","/"];
  return(
    <div className={styles.calculator}>
         <Display></Display>
          <Buttons buttons={buttons}></Buttons>

    </div>
  )





};

export default App;