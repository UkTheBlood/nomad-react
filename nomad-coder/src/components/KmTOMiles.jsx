import React, { useState } from 'react'

function KmTOMiles() {

    const [KmtoMl, setKmtoMl] = useState(0);
    const onChange = (event) => {
        setKmtoMl(event.target.value);
    };

    const [flipped, setFlipped] = useState(false)

    const reset = () => setKmtoMl(0);
    const onflipp = () => setFlipped((current) => !current)
 
    return (
        <div>
            <div>
                <h3>KM to Milse</h3>

                <label htmlFor='Km'>Km</label>
                <input
                    value={flipped ? KmtoMl / 1.6 : KmtoMl}
                    id='Km'
                    placeholder='Km'
                    type="number"
                    onChange={onChange}
                    disabled={flipped}
                />

                <label htmlFor='Ml'>Ml</label>
                <input
                    value={flipped ? KmtoMl * 1.6 : KmtoMl}
                    id='Ml'
                    placeholder='Ml'
                    type="number"
                    onChange={onChange}
                    disabled={!flipped}
                />
            </div>
            <button onClick={reset}>Reset</button>
            <button onClick={onflipp}>Flip</button>
        </div>
    )
}

export default KmTOMiles