import React from 'react'
import { useState } from 'react'
import './Counter.css'

export default function Counter() {
    const [count, setcount] = useState(0);
    const [count1, setcount1] = useState(0);
    const [count2, setcount2] = useState(1);
    const [count3, setcount3] = useState(0);
    return (
        <div>
            <center>
                <h1>{count}</h1>
                <h1>{count1}</h1>
                <h1>{count2}</h1>
                <h1>{count3}</h1>
            </center>
            <button onClick={() => setcount(count + 25)}>Click to add +25</button>
            <button onClick={() => setcount1(count1 - 25)}>Click to subtract -25</button>
            <button onClick={() => setcount2(count2 * 25)}>Click to Multiply *25</button>
            <button onClick={() => setcount3(count + count1)}>Click to subtract 1st value from 2nd value</button>
        </div>
    )
}
