import React, { useState } from 'react';
import './Counter.css';

function Counter() {

    const [count , setCount] = useState(0);

    function add(){
        setCount((prev)=> prev + 1)
    }

    function sub(){
        setCount((prev)=> prev - 1)
    }

    return (
        <div className="container">
            <div className="counter" >
                <p style={{ color: count > 0 ? '#0074B7' : count < 0 ? 'red' : 'black' }}>
                    {count}
                </p>
                <div className="btnCounter">
                    <button className="sub" onClick={sub}>-</button>
                    <button className="add" onClick={add}>+</button>
                </div>
            </div>
        </div>
    );
}

export default Counter;
