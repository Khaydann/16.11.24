import React, { useState } from 'react';
import './Login.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  const validateForm = () => {
    let valid = true;
    
    // Email doğrulama
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailRegex)) {
      setEmailError('Zəhmət olmasa düzgün bir email ünvanı daxil edin!');
      valid = false;
    }

    // Şifrə doğrulama
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!password.match(passwordRegex)) {
      setPasswordError('Şifrə ən az 8 simvoldan ibarət olmalı, hərf, rəqəm və xüsusi işarələr daxil edilməlidir!');
      valid = false;
    }

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Login əməliyyatı
      console.log('Form göndərildi!');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Giriş Edin</h2>

        {/* Email */}
        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={handleEmailChange} 
            placeholder="Emailinizi daxil edin"
          />
          {emailError && <span className="error-message">{emailError}</span>}
        </div>

        {/* Şifrə */}
        <div className="form-group">
          <label>Şifrə:</label>
          <input 
            type="password" 
            value={password} 
            onChange={handlePasswordChange} 
            placeholder="Şifrənizi daxil edin"
          />
          {passwordError && <span className="error-message">{passwordError}</span>}
        </div>

        <button type="submit" className="login-btn">Giriş</button>
      </form>
    </div>
  );
};

export default Login;
