import styles from './App.module.css';
import { useState } from 'react'

export const User = (props) => {
    const [age, setAge] = useState(props.age)
    const incAge = () => {
        setAge(age + 1);
    };

    return (<div style={{ border: '1px solid red' }}>

        <h1>
            {props.name}
        </h1>
        {age}
        {age >= 18 ? <h1 className={styles.overAge}> Over Age</h1> : <h1 className={styles.underAge}> Under Age</h1>}

        <h1 style={{
            color: props.sex === "M" ? "blue" : "pink",
            backgroundColor: props.sex === "M" ? "pink" : "blue"
        }}>
            {props.sex}
        </h1>

        {props.langauge.map((value, key) => {
            return <h3 key={key}> {value} </h3>
        })}

        {props.showButton && <button onClick={incAge}> This is a button</button>}

    </div>);
}


