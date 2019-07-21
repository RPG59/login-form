import React from 'react';

import './input.sass'

const Input = props => {
    const {type, placeholder} = props;

    return (
        <span className='ui-input'>
            <input type={type} placeholder={placeholder}/>
        </span>
    )
};

export default Input;
