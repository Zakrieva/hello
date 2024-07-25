import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)
    const increaseNum = () => {
        setCount(count + 1)
    }
    const decreaseNum = () => {
        setCount(count - 1)
    }
    return (
        <div className="Counter">
            <h1 className="title">{count}</h1>
            <div><button onClick={increaseNum}>+1</button> <button onClick={decreaseNum}>-1</button></div>
        </div>
    )
}
export default Counter