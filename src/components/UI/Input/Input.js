import React from 'react';
import classes from './Input.css';

const input = (props) => {
    let inputElement = null;
    switch (props.inputType) {
        case ('input'):
            inputElement = <input {...props} />
            break;
        case ('textarea'):
            inputElement = <textarea {...props} />
            break;
        default:
            inputElement = <input {...props} />
            break;
    }
    return (
        <div >
            <label>{props.label}</label>
            {inputElement}
        </div>
    );
};

export default input;