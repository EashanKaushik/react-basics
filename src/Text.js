import { useState } from "react"

export const Text = (props) => {

    const [inputValue, setInputValue] = useState("")

    const inputChange = (event) => {
        setInputValue(event.target.value)
    }

    return (
        <div style={{ border: '1px solid red' }}>
            <input type="text" onChange={inputChange} />
            <br />
            {inputValue}
        </div >
    )

}