import React from 'react';
import '../../styles/auth-shared.css';
import axios from 'axios';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
const API = import.meta.env.VITE_API_URL;
const FoodPartnerLogin = () => {

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const response = await axios.post(
      // "http://localhost:3000/api/auth/food-partner/login", 
      `${API}/api/auth/food-partner/login`,
      {
      email,
      password
    }, { withCredentials: true });

    console.log(response.data);

    navigate("/create-food"); // Redirect to create food page after login

  };

  return (
    <>
     <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
      <Button />
    </div>
    <div className="auth-page-wrapper">
        {/* <Button /> */}
          {/* <div style={{ textAlign: 'center', marginBottom: '12px' }}>
      <Button />
    </div> */}
      <div className="auth-card" role="region" aria-labelledby="partner-login-title">
         {/* <Button /> */}
        <header>
          <h1 id="partner-login-title" className="auth-title">Partner login</h1>
          <p className="auth-subtitle">Access your dashboard and manage orders.</p>
        </header>
        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className="field-group">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="business@example.com" autoComplete="email" />
          </div>
          <div className="field-group">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" placeholder="Password" autoComplete="current-password" />
          </div>
          <button className="auth-submit" type="submit">Sign In</button>
        </form>
        <div className="auth-alt-action">
          New partner? <a href="/food-partner/register">Create an account</a>
        </div>
      </div>
    </div>
    </>
  );
};

export default FoodPartnerLogin;
