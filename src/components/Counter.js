import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div className="counter-container">
            <div className="counter-card">
                <h1 className="title">Counter App</h1>

                <div className="display-area">
                    <span className={`count-value ${count === 0 ? 'zero' : ''}`}>{count}</span>
                </div>

                {count === 0 && (
                    <p className="limit-message">Minimum limit reached</p>
                )}

                <div className="button-group">
                    <button className="btn decrement" onClick={decrement} disabled={count === 0}>
                        -
                    </button>
                    <button className="btn reset" onClick={reset}>
                        Reset
                    </button>
                    <button className="btn increment" onClick={increment}>
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
