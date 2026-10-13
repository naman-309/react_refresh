
import { useState, useEffect } from "react";

function PasswordApp() {
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        console.log(showPassword ? "Visible" : "Hidden");
    }, [showPassword]);

    const handleToggle = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <input
                type={showPassword ? "text" : "password"}
                value="react123"
                readOnly
            />

            <button onClick={handleToggle}>
                {showPassword ? "Hide Password" : "Show Password"}
            </button>
        </div>
    );
}

export default PasswordApp;
