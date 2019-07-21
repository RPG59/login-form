import React from 'react';

import './button.sass'

const Button = props => {
    const {children, onClick} = props;

    return (
        <button className='ui-button' onClick={onClick}>
            {children}
        </button>
    )
};

export default Button;
