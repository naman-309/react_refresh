import React, { useRef } from 'react';

const CounterRef = () => {
    // useRef holds a mutable value that persists across renders without causing new renders
    const value = useRef(0);

    const handleIncrease = () => {
        value.current = value.current + 1;
        console.log("Current value:", value.current);
    };

    const handlePrevious = () => {
        value.current = value.current - 1;
        console.log("This is previous value:", value.current);
    };

    return (
        <div>
            <hr />
            {/* Note: The UI will not update on click since we are not using state */}
            <p>Check your browser console to see the values changing!</p>
            <button onClick={handleIncrease}>Click to increase</button>
            <br /><br />
            <button onClick={handlePrevious}>Click to handle previous</button>
        </div>
    );
};

export default CounterRef;
