import styles from "./Display.module.css";

const Display = ({displayValue}) =>
   {
    return (
      <input type="text" className={styles.display} placeholder="Enter number"
      value={displayValue} readOnly/>
    );
}

export default Display;