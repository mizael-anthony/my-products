import React from 'react'

function Field(props) {
    const { type, name, value, onChange, children } = props

    return (
        <div className='form-group'>
            <label htmlFor={children}>{children}</label>
            <input className='form-control' type={type} name={name} id={name} value={value} onChange={(e) => onChange(e)} />
        </div>
    )
}

export default Field
