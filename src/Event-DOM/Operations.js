import React from 'react'
import { useState } from 'react'
import './Operations.css'
export default function Operations() {
    const [count, setcount] = useState(0);
    const increment = () => {
        setcount(count + 1);
    };
    const decrement = () => {
        setcount(count - 1);
    };
    const reset = () => {
        setcount(0);
    };

    return (
        <div className='btn-container'>
            <h1>Counter: {count}</h1>
            <div className='btn'>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}
