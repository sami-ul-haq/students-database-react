import React from 'react';

const Input = (props) => {
    const { type = "text", placeholder = "Enter Place Holder Text", name, value, onChange } = props;
    return (
        <>
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                className="form-control"
                onChange={onChange}
            />
        </>
    )
}

export default Input;
