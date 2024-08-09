import React, { useState } from 'react';
import './Forms.css';
import background from '../../assets/background.jpg';
import google from '../../assets/google.svg';
import apple from '../../assets/apple.svg';

const Forms = () => {
  // State to manage the checkbox status
  const [isChecked, setIsChecked] = useState(false);

  // State for form fields
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    email: '',
    password: ''
  });

  // State for errors
  const [errors, setErrors] = useState({});

  // Handler to toggle the checkbox
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  // Handler for form field changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  // Validate the form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First Name is required';
    }

    if (!formData.surname.trim()) {
      newErrors.surname = 'Surname is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!isChecked) {
      newErrors.terms = 'You must agree to the Terms & Conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, proceed with submission logic
      console.log('Form data:', formData);
    }
  };

  return (
    <div className='form-container'>
      <div className='info'>
        <div className='background'>
          <img src={background} alt='Background'/>
        </div>
        <div className='container'>
          <div className='header'>
            <h1>Create an account</h1>
          </div>
          <div className='text'>
            <p>Already have an account? <span><a href='/login'>Login</a></span></p>
          </div>
          <form className='inputs' onSubmit={handleSubmit}>
            <div className='username'>
              <input
                id='firstName'
                type='text'
                placeholder='First Name'
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <p className='error'>{errors.firstName}</p>}
              <input
                id='surname'
                type='text'
                placeholder='Surname'
                value={formData.surname}
                onChange={handleChange}
              />
              {errors.surname && <p className='error'>{errors.surname}</p>}
            </div>
            <div className='address'>
              <input
                id='email'
                type='email'
                placeholder='someone@gmail.com'
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className='error'>{errors.email}</p>}
            </div>
            <div className='password'>
              <input
                id='password'
                type='password'
                placeholder='Suggest a strong password'
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className='error'>{errors.password}</p>}
            </div>

            <div className='box'>
              <label>
                <input
                  type='checkbox'
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <p>I agree to the <span>Terms & Conditions</span></p>
              </label>
              {errors.terms && <p className='error'>{errors.terms}</p>}
            </div>
            <div className='buttons'>
              <button type='submit' className='btn'>Create account</button>
            </div>
            <div className='footer'>
              <p>Or register with</p>
            </div>
            <div className='footer-button'>
              <button className='google'><img src={google} alt='Google' /><p>Google</p></button>
              <button className='apple'><img src={apple} alt='Apple' /><p>Apple</p></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Forms;
