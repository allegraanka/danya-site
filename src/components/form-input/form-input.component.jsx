import React from 'react';
import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps} />
        {
            label ? 
            (<label className={`${otherProps.value.length ? 'shrink' : null} form-input-label`}>
                { label }
            </label>) 
            : null 
            // this is some fancy shit right here ^
        }
    </div>
)

export default FormInput;