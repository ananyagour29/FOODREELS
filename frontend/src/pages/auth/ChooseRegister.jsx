
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/auth-shared.css';

const ChooseRegister = () => {
  return (
    <div className="auth-page-wrapper">
  <div className="auth-card"> 

    {/* Welcome text above Register */}
    <p 
      className="auth-subtitle" 
      style={{marginBottom: '16px', textAlign: 'center', fontSize: '1rem', fontWeight: 500}}
    >
      Welcome to FOOD@REELS — Explore tasty dishes 🍕 and discover food partners 👤 who can upload their creations 📤.
    </p>

    {/* Header */}
    <header>
      <h1 id="choose-register-title" className="auth-title">Register</h1>
      <p className="auth-subtitle">Pick how you want to join the platform.</p>
    </header>

    {/* Registration options */}
    <div style={{display:'flex', flexDirection:'column', gap:'16px'}}>
      <Link to="/user/register" className="auth-submit" style={{textDecoration:'none'}}>
        Register as normal user
      </Link>
      <Link to="/food-partner/register" className="auth-submit" style={{textDecoration:'none', background:'var(--color-surface-alt)', color:'var(--color-text)', border:'1px solid var(--color-border)'}}>
        Register as food partner
      </Link>
    </div>

    {/* Sign in link */}
    <div className="auth-alt-action" style={{marginTop:'4px'}}>
      Already have an account? <Link to="/user/login">Sign in</Link>
    </div>

  </div>
</div>
  );
};

export default ChooseRegister;