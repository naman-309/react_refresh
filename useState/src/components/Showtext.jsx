import { useState } from "react";

const Showtext = () => {
    // 1. Initialize state as true (visible)
    const [isVisible, setIsVisible] = useState(true);

    const toggleText = () => {
        setIsVisible(!isVisible);
    };

    // 3. The return statement must be INSIDE the component function body
    return (
        <div>
            <hr />
            Showtext page
            <p> Click button to hide the text</p>

            {/* 4. Conditionally render the text based on state */}

            {/* 5. Cleaned up the onClick handler */}
            <button onClick={toggleText}>
                {isVisible ? "Hide text" : "Show text"}
            </button>
        </div>
    );
};

export default Showtext;
