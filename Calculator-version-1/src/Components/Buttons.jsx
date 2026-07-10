import styles from "./Buttons.module.css";

let Buttons = ({buttons}) => {
    return (
        <div className={styles.buttons}>
             {buttons.map((button) => (
                 <button key={button} className={styles.btn}>
                     {button}
                 </button>
             ))}
         </div>   
        )
  }

export default Buttons;