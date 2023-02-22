
import { useState } from "react"

export const Visible = (props) => {

    const [textHide, setTextHide] = useState(true);
    const [borderColor, setBorderColor] = useState('1px solid red')

    const hideText = () => {
        setTextHide(!textHide)
        setBorderColor(borderColor.includes("blue") ? '1px solid red' : '1px solid blue')
    };

    return (
        <div style={{ border: borderColor }}>
            <button onClick={hideText}> show/hide </button>
            {textHide && "Hi my name is Eashan"}
        </div>
    )
}