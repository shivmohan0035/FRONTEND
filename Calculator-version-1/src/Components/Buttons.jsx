import styles from "./Buttons.module.css";

let Buttons = ({buttons,onButtonClick}) => {
    return (
        <div className={styles.buttons}>
             {buttons.map((button) => (
                 <button key={button} className={styles.btn}  onClick={()=>onButtonClick(button)}>
                     {button}
                 </button>
             ))}
         </div>   
        )
  }

export default Buttons;