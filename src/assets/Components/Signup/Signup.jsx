import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import './Signup.scss';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  // Parola göz ilə göstərmək üçün toggling funksiyası
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (values) => {
    try {
      console.log("Form Values: ", values);  // Form məlumatlarını konsola yazdırırıq

      // Axios ilə API-ya məlumatları göndəririk
      const newUser = {
        username: values.username,
        email: values.email,
        password: values.password,
      };

      // API-ya POST sorğusu göndəririk
      const response = await axios.post('https://673cda4596b8dcd5f3fbef5e.mockapi.io/users', newUser);
      
      // Serverdən cavabı yoxlayaq
      if (response.status === 201) {
        console.log('User successfully registered:', response.data); // Uğurlu cavab
      } else {
        console.error('Error in registration:', response.status); // Uğursuz cavab
      }
    } catch (error) {
      console.error('There was an error registering the user:', error); // Hər hansı bir səhv olarsa
    }
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>

      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
        }}
        validate={(values) => {
          const errors = {};
          if (!values.username) {
            errors.username = 'Please enter your username';
          }

          const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/;
          if (!values.email) {
            errors.email = 'Please enter your email';
          } else if (!emailPattern.test(values.email)) {
            errors.email = 'Invalid email format';
          }

          if (!values.password) {
            errors.password = 'Please enter your password';
          } else if (values.password.length < 8) {
            errors.password = 'Password must be at least 8 characters long';
          } else if (!/[A-Za-z]/.test(values.password) || !/[0-9]/.test(values.password) || !/[^A-Za-z0-9]/.test(values.password)) {
            errors.password = 'Password must contain letters, numbers, and special characters';
          }

          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="signup-form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Field
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                className="input-field"
              />
              <ErrorMessage name="username" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="input-field"
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-container">
                <Field
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input-field"
                />
                <span className="password-eye" onClick={togglePasswordVisibility}>
                  {showPassword ? '🙈' : '👁️'}
                </span>
              </div>
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <button type="submit" className="submit-btn">
              Sign Up
            </button>
          </Form>
        )}
      </Formik>

      <div className="login-link">
        <p>Already have an account? <a href="/login">Login here</a></p>
      </div>
    </div>
  );
};

export default Signup;
