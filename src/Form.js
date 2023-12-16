import React, { useState } from 'react';
import './Form.css';

const Form = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailValidated, setEmailValidated] = useState(false);
    const [passwordValidated, setPasswordValidated] = useState(false);
    const [confirmPasswordValidated, setConfirmPasswordValidated] = useState(false);

    const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailValidated(false);
    };

    const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordValidated(false);
    };

    const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordValidated(false);
    };

    const handleSubmit = (e) => {
    e.preventDefault();

    if (emailValidated && passwordValidated && confirmPasswordValidated) {
    alert('Form submitted successfully');
    } else {
    alert("Can't submit the form");
    }
    };

    const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValidated(emailRegex.test(email));
    };

    const validatePassword = () => {
    setPasswordValidated(password.length >= 8);
    };

    const validateConfirmPassword = () => {
        if(password === confirmPassword){
            setConfirmPasswordValidated(true);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={handleEmailChange} onBlur={validateEmail} style={{ border: emailValidated ? '2px solid green' : '2px solid red' }}/>
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={handlePasswordChange} onBlur={validatePassword}
                style={{ border: passwordValidated ? '2px solid green' : '2px solid red' }} />
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} onBlur={validateConfirmPassword} style={{ border: confirmPasswordValidated ? '2px solid green' : '2px solid red' }}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};


export default Form;