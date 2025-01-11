
import PropTypes from 'prop-types'
import React from 'react'

const TextField = ({ classes = "", helperText, label, name, placeholder = "", fieldClasses = "", ...rest }) => {
  return (
    <div className={`text-field-wrapper ${classes}`}>
        <label htmlFor={name} className="label-text">{label}</label>
        <input className={`text-field block w-full outline-none bg-transparent ${fieldClasses}`} type="text" name={name} id={name} placeholder={placeholder} {...rest} />

        {helperText && <p className="helper-text">{helperText}</p>}
    </div>
  )
}

TextField.propTypes = {
    classes: PropTypes.string,
    helperText: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    fieldClasses: PropTypes.string
}

export default TextField