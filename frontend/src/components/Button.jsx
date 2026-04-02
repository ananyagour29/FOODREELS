// BlueBackButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <>
    <style>
  {`
    .blue-back-btn {
      display: inline-block;   /* important: shrink to fit text */
      background-color: #475569; 
      color: white;
      padding: 4px 12px;       /* rectangle around text */
      border-radius: 4px;
      font-size: 0.875rem; 
      border: none;
      cursor: pointer;
      transition: background-color 0.2s ease;
      width: auto;             /* ensures it doesn't stretch */
    }
    .blue-back-btn:hover {
      background-color: #3b4a5a;
    }
  `}
</style>
      <button className="blue-back-btn" onClick={handleBack}>
        Back
      </button>
    </>
  );
};

export default Button;