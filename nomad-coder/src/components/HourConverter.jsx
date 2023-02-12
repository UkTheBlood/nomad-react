import React from 'react'
import { useState } from 'react';

function HourConverter() {
    const [amount, setAmount] = useState(0);
    const onChange = (event) => {
        setAmount(event.target.value);
    };
    const [flipped, setFlipped] = useState(false);

    const reset = () => setAmount(0);
    const onFlip = () => setFlipped((current) => !current)
    return (
        <div>
            <div>
                <h1 className="hello">Super Converter</h1>

                {/* input 옆에 써주는 글씨로, 
            누군가 누르면 옆의 input이 클릭됨
            for은 id를 지정
        */}
                <label htmlFor="minutes"> Minutes </label>
                <input
                    value={flipped ? amount * 60 : amount}
                    id="minutes"
                    placeholder="Minutes"
                    type="number"
                    onChange={onChange}
                    disabled={flipped} />   <br />

                <label htmlFor="Hours"> Hours </label>
                <input
                    value={flipped ? amount : Math.round(amount / 60)}
                    id="Hours"
                    placeholder="Hours"
                    type="number"
                    onChange={onChange}
                    disabled={!flipped} />
            </div>
            <button onClick={reset}>Reset</button>
            <button onClick={onFlip}>Flip</button>
        </div>
    )
}

export default HourConverter