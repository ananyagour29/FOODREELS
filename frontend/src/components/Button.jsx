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
            background-color: #475569; /* new color */
            color: white;
            padding: 4px 10px; /* small rectangle */
            border-radius: 4px;
            font-size: 0.875rem; /* small text */
            border: none;
            cursor: pointer;
            transition: background-color 0.2s ease;
          }
          .blue-back-btn:hover {
            background-color: #3b4a5a; /* slightly darker on hover */
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