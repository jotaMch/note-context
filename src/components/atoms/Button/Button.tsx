import React from "react";

interface ButtonProps {
    name?: string;
    w?: string;
    h?: string;
    b?: string;
    bg?: string;
    color?: string;
    fz?: string;
    type?: "button" | "submit" | "reset"; 
}

const Button: React.FC<ButtonProps> = ({
    name,
    w,
    h,
    b,
    fz,
    bg,
    color,
    type = "button", 
}) => {
    const styledButton: React.CSSProperties = {
        width: w,
        height: h,
        border: b,
        backgroundColor: bg,
        color: color,
        fontSize: fz,
        padding: 8,
    };

    return (
        <button
        style={styledButton}
        type={type} 
        >
        {name || "Button"}
        </button>
    );
};

export default Button;
