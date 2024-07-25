import { useState } from 'react';

const Calculator = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState(null);

    const calculateSum = () => {
        setResult(parseFloat(num1) + parseFloat(num2));
    };

    return (
        <div>
            <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
            <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
            <button onClick={calculateSum}>Посчитать</button>
            <div>Ваш ответ: {result}</div>
        </div>
    );
};

export default Calculator;
