import { useState } from "react";

const Converter = () => {
    let [degreC, setDegreC] = useState('')
    let [degreF, setDegreF] = useState('')

    const celsiusChange = () => {
        setDegreF(degreF)
        degreF = (degreC * 9 / 5 + 32).toFixed(2);
    };


    return (
        <div className="Converter">
            <input type="number" value={degreC} onChange={(event) => setDegreC(event.target.value)} />
            <input type="number" value={degreF} onChange={(event) => setDegreF(event.target.value)} />
            <button onClick={celsiusChange}>Рассчитать</button>
        </div>
    )
}
export default Converter