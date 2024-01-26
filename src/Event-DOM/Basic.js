import React from 'react'
import { useState } from 'react'

export default function Basic() {
    const [inputValue, SetinputValue] = useState("");
    const [displayMessage, setdisplayMessage] = useState('');

    const handleChange = (event) => {
        SetinputValue(event.target.value);
    };

    function handleSubmit(event) {
        event.preventDefault();
        setdisplayMessage(`You submited :${inputValue}`);
    }
    return (
        <div>
            <p>{displayMessage}</p>
            <form onSubmit={handleSubmit}>
                <label>Type</label>
                <input type='text' value={inputValue} onChange={handleChange} />
                <button>Submit</button>
            </form>
        </div>
    )
}
