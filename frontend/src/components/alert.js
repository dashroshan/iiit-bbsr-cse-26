import React from 'react'
import InfoIcon from './icons/InfoIcon'
import SuccessIcon from './icons/SuccessIcon'
import ErrorIcon from './icons/ErrorIcon'
import CloseIcon from './icons/CloseIcon'

const alertStyle = {
    backgroundColor: 'white',
    color: 'black',
    padding: '10px',
    textTransform: 'uppercase',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '2.5px solid #170F1E',
    borderRadius: '0.7rem',
    width: 'min(400px, calc(100vw - 60px))',
    boxSizing: 'border-box',
    fontSize: '0.85rem'
}

const buttonStyle = {
    marginLeft: '20px',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    color: '#170F1E'
}

const AlertTemplate = ({ message, options, style, close }) => {
    return (
        <div style={{ ...alertStyle, ...style }}>
            {options.type === 'info' && <InfoIcon />}
            {options.type === 'success' && <SuccessIcon />}
            {options.type === 'error' && <ErrorIcon />}
            <span style={{ flex: 2 }}>{message}</span>
            <button onClick={close} style={buttonStyle}>
                <CloseIcon />
            </button>
        </div>
    )
}

export default AlertTemplate