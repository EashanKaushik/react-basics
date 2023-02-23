import styles from "./App.module.css"
import { useState } from "react"

export const Calculator = (props) => {

    const [calcValue, setCalcValue] = useState(props.calcValue)

    const incValue = (event) => {
        setCalcValue(calcValue + 1)
    }

    const decValue = (event) => {
        setCalcValue(calcValue - 1)
    }


    const resetValue = (event) => {
        setCalcValue(props.calcValue)
    }

    return (
        <div className={styles.App}>
            <button onClick={incValue} className={styles.button}> Increase Value</button>
            <button onClick={decValue} className={styles.button}> Decrease Value</button>
            <button onClick={resetValue} className={styles.button}> Reset Value </button>
            {calcValue}
        </div>
    );
}