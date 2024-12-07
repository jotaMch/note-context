import React from "react";

interface ButtonNameProps {
    name?: string;
    w?: string;
    h?: string;
    b?: string;
    bg?: string;
    color?: string;
    fz?: string;
    type?: string; 
}

const Button: React.FC<ButtonNameProps> = ({
    name,
    w,
    h,
    b,
    fz,
    bg,
    color,
    type,
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
        <input
        style={styledButton}
        type={type}
        value={name || "Button"}
        />
    );
    };

export default Button;
