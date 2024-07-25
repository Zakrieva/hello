import { useState } from "react";

const ColorChange = () => {
    const colors = ['#231234', '#111111', '#334499']
    const [color, setColor] = useState(0)

    const changeColor = () => {
        setColor((color + 1) % colors.length)
        document.body.style.backgroundColor = colors[color]
    }
    return (
        <div>
            <button onClick={changeColor}>Поменять цвет</button>
        </div>
    );

}
export default ColorChange