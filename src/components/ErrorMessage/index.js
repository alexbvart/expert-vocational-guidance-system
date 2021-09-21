import React, {useState} from 'react';
const ErrorMessage = ({ children }) => (
    <span className="error_message">
        {children}
    </span>
)
export default ErrorMessage;